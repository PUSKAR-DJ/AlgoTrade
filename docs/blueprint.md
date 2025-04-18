# **App Name**: AlgoTrade Dashboard

## Core Features:

- Dashboard View: Display a dashboard with key metrics (profit/loss, open positions, etc.).
- Trade History Log: Display a log of executed trades, including entry and exit prices, SL/TP, and timestamps.
- Bot Control Panel: Provide controls to pause/resume the trading bot and manually close all open positions. Uses the Telegram integration to send the commands to the trading bot.
- Configuration Interface: Allow users to view and modify symbol configurations (lot size, SL/TP) through a user interface. The values need to be reflected in the next trade that the bot performs.
- Performance Analysis: Use an AI model to evaluate the trading performance and provide insights on areas for improvement. The tool will analyze historical trade data and highlight patterns, risks, and opportunities.

## Style Guidelines:

- Primary color: Dark blue (#1A237E) for a professional and trustworthy feel.
- Secondary color: Light gray (#ECEFF1) for backgrounds and neutral elements.
- Accent: Teal (#26A69A) for interactive elements and highlights.
- Clean and modern typography with good readability.
- Use consistent and professional icons to represent different functions and data points.
- Well-structured layout with clear sections for dashboard, trade history, and settings.
- Subtle animations for loading states and transitions.

## Original User Request:
# === Automated Multi-Symbol Trading Bot for MT5 with Webhook, Telegram, and Google Sheets ===

from flask import Flask, request
import MetaTrader5 as mt5
import requests
import gspread
from google.oauth2.service_account import Credentials
from datetime import datetime
import time

# === CONFIG ===
SYMBOL_CONFIG = {
    "GBPUSD": {"lot": 0.1, "sl": 10, "tp": 30, "pip_unit": 10},
    "XAUUSD": {"lot": 0.2, "sl": 200, "tp": 500, "pip_unit": 1},
}

MAGIC = 900123
bot_active = True

# === Google Sheets Setup ===
SHEET_ID = "YOUR_GOOGLE_SHEET_ID"
SHEET_NAME = "Trades"

TELEGRAM_TOKEN = "YOUR_TELEGRAM_BOT_TOKEN"
TELEGRAM_CHAT_ID = "YOUR_CHAT_ID"

app = Flask(_name_)
mt5.initialize()

def send_telegram(msg):
    url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
    requests.post(url, json={"chat_id": TELEGRAM_CHAT_ID, "text": msg})

def setup_sheet():
    scopes = ["https://www.googleapis.com/auth/spreadsheets", "https://www.googleapis.com/auth/drive"]
    creds = Credentials.from_service_account_file("your-creds.json", scopes=scopes)
    client = gspread.authorize(creds)
    return client.open_by_key(SHEET_ID).worksheet(SHEET_NAME)

def log_trade(symbol, direction, price, sl, tp, status="Opened"):
    sheet = setup_sheet()
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    sheet.append_row([now, symbol, direction, price, sl, tp, status])

def get_point(symbol):
    return mt5.symbol_info(symbol).point

def get_price(symbol, direction):
    tick = mt5.symbol_info_tick(symbol)
    return tick.ask if direction == "buy" else tick.bid

def place_trade(symbol, direction):
    cfg = SYMBOL_CONFIG[symbol]
    price = get_price(symbol, direction)
    point = get_point(symbol)
    sl = price - cfg['sl'] * point if direction == "buy" else price + cfg['sl'] * point
    tp = price + cfg['tp'] * point if direction == "buy" else price - cfg['tp'] * point

    order = {
        "action": mt5.TRADE_ACTION_DEAL,
        "symbol": symbol,
        "volume": cfg['lot'],
        "type": mt5.ORDER_TYPE_BUY if direction == "buy" else mt5.ORDER_TYPE_SELL,
        "price": price,
        "sl": sl,
        "tp": tp,
        "deviation": 10,
        "magic": MAGIC,
        "comment": f"{direction.upper()} Entry",
        "type_time": mt5.ORDER_TIME_GTC,
        "type_filling": mt5.ORDER_FILLING_IOC
    }

    result = mt5.order_send(order)
    send_telegram(f"{symbol} {direction.upper()} trade placed at {price:.2f}")
    log_trade(symbol, direction.upper(), price, sl, tp)
    print("TRADE SENT:", result)

def move_sl_to_be(symbol):
    positions = mt5.positions_get(symbol=symbol)
    for pos in positions:
        entry = pos.price_open
        ticket = pos.ticket
        request = {
            "action": mt5.TRADE_ACTION_SLTP,
            "symbol": symbol,
            "position": ticket,
            "sl": entry,
            "tp": pos.tp,
            "magic": MAGIC,
            "comment": "Moved to BE"
        }
        mt5.order_send(request)
        send_telegram(f"SL moved to BE for {symbol} position {ticket}")

def close_all():
    positions = mt5.positions_get()
    for pos in positions:
        symbol = pos.symbol
        is_buy = pos.type == mt5.ORDER_TYPE_BUY
        close_type = mt5.ORDER_TYPE_SELL if is_buy else mt5.ORDER_TYPE_BUY
        price = get_price(symbol, "sell" if is_buy else "buy")

        close_request = {
            "action": mt5.TRADE_ACTION_DEAL,
            "symbol": symbol,
            "volume": pos.volume,
            "type": close_type,
            "position": pos.ticket,
            "price": price,
            "deviation": 10,
            "magic": MAGIC,
            "comment": "Manual Close"
        }

        mt5.order_send(close_request)
        send_telegram(f"Closed {symbol} position {pos.ticket}")
        log_trade(symbol, "EXIT", price, pos.sl, pos.tp, status="Closed")
        time.sleep(0.5)

@app.route('/webhook', methods=['POST'])
def webhook():
    global bot_active
    if not bot_active:
        return "Bot is paused", 200

    data = request.get_json()
    print("Webhook received:", data)

    symbol = data.get("symbol", "").upper()
    signal = data.get("signal", "").upper()

    if symbol not in SYMBOL_CONFIG:
        return f"Unsupported symbol: {symbol}", 400

    if signal == "BUY":
        place_trade(symbol, "buy")
    elif signal == "SELL":
        place_trade(symbol, "sell")
    elif signal == "MOVE_BE":
        move_sl_to_be(symbol)
    elif signal == "CLOSE":
        close_all()

    return "ok", 200

@app.route('/telegram', methods=['POST'])
def telegram_cmd():
    global bot_active
    msg = request.get_json().get("message", {}).get("text", "").lower()

    if "/pause" in msg:
        bot_active = False
        send_telegram("⏸ Trading paused for all symbols.")
    elif "/resume" in msg:
        bot_active = True
        send_telegram("▶ Trading resumed.")
    elif "/closeall" in msg:
        close_all()
        send_telegram("❌ All trades closed.")
    return "ok"

if _name_ == "_main_":
    app.run(host="0.0.0.0", port=5000)
  