'use server';
/**
 * @fileOverview This file defines a Genkit flow for analyzing trading performance and providing insights.
 *
 * It includes:
 * - `analyzeTradingPerformance` -  A function that takes historical trade data and returns AI-driven insights.
 * - `TradingPerformanceInput` - The input type for the analyzeTradingPerformance function.
 * - `TradingPerformanceOutput` - The output type for the analyzeTradingPerformance function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const TradingPerformanceInputSchema = z.object({
  tradeHistory: z.string().describe('A JSON string representing the historical trade data.  Include entry price, exit price, SL, TP, and timestamps.'),
});
export type TradingPerformanceInput = z.infer<typeof TradingPerformanceInputSchema>;

const TradingPerformanceOutputSchema = z.object({
  summary: z.string().describe('A summary of the trading performance.'),
  areasForImprovement: z.string().describe('Specific areas where the trading strategy can be improved.'),
  riskAssessment: z.string().describe('An assessment of the risks associated with the trading strategy.'),
  opportunityIdentification: z.string().describe('Identification of potential opportunities for the trading strategy.'),
});
export type TradingPerformanceOutput = z.infer<typeof TradingPerformanceOutputSchema>;

export async function analyzeTradingPerformance(input: TradingPerformanceInput): Promise<TradingPerformanceOutput> {
  return tradingPerformanceInsightsFlow(input);
}

const tradingPerformanceInsightsPrompt = ai.definePrompt({
  name: 'tradingPerformanceInsightsPrompt',
  input: {
    schema: z.object({
      tradeHistory: z.string().describe('A JSON string representing the historical trade data.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.string().describe('A summary of the trading performance.'),
      areasForImprovement: z.string().describe('Specific areas where the trading strategy can be improved.'),
      riskAssessment: z.string().describe('An assessment of the risks associated with the trading strategy.'),
      opportunityIdentification: z.string().describe('Identification of potential opportunities for the trading strategy.'),
    }),
  },
  prompt: `You are an AI-powered trading performance analyst.

You will analyze the provided historical trade data and provide insights on areas for improvement, risk assessment, and opportunity identification.

Trade History:
{{{tradeHistory}}}

Provide a summary of the trading performance, identify areas for improvement, assess the risks, and identify potential opportunities.
`,
});

const tradingPerformanceInsightsFlow = ai.defineFlow<
  typeof TradingPerformanceInputSchema,
  typeof TradingPerformanceOutputSchema
>({
  name: 'tradingPerformanceInsightsFlow',
  inputSchema: TradingPerformanceInputSchema,
  outputSchema: TradingPerformanceOutputSchema,
}, async input => {
  const {output} = await tradingPerformanceInsightsPrompt(input);
  return output!;
});
