# Firebase Studio

This is a NextJS starter in Firebase Studio.

## Project Overview
This project implements a trading bot dashboard designed to automate trading strategies. It provides a user interface for configuring and monitoring trading bots, viewing trade history, and analyzing performance.

To get started, take a look at src/app/page.tsx.

# Trading Bot

## Features

*   **Automated Trading:** Executes trades based on predefined strategies.
*   **Strategy Configuration:** Allows users to configure and customize trading strategies.
*   **Performance Monitoring:** Tracks and reports on the bot's trading performance.
*   **Integration with MT5:** Connects to MetaTrader 5 (MT5) platform for trade execution.
*   **AI-Powered Insights:** Provides AI-driven analysis of trading performance with suggestions for improvement.

## Getting Started

1.  **Prerequisites:**
    *   Node.js and npm installed
    *   MetaTrader 5 platform (optional, for full trading functionality)
    *   A Google Cloud project with the Genkit-AI API enabled and an API key.

2.  **Installation:**

    Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

    Install the dependencies:
    ```bash
    npm install
    ```

3.  **Configuration:**

    *   Create a `.env` file in the root directory and add your Google GenAI API key:
        ```
        GOOGLE_GENAI_API_KEY=<your_api_key>
        ```

4.  **Running the App:**

    Start the development server:
    ```bash
    npm run dev
    ```

    Open your browser and navigate to `http://localhost:9002` to view the dashboard.

## Project Structure

*   `src/ai/`: Contains the Genkit AI flow for trading performance analysis.
*   `src/app/`: Contains the Next.js application, including pages, layouts, and global styles.
*   `src/components/`: Contains reusable React components.
*   `src/components/ui/`: Contains ShadCN UI components.
*   `src/hooks/`: Contains custom React hooks.
*   `src/lib/`: Contains utility functions.
*   `src/services/`: Contains services for interacting with external APIs (e.g., MT5).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
