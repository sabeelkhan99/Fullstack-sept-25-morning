import { openaiClient } from "./openaiClient";

const GRAMMAR_INSTRUCTIONS =
  "Fix the grammar for the input english text, return the fixed text only, without any other information.";

export async function fixGrammarWithAI(text) {
  const response = await openaiClient.responses.create({
    model: "gpt-5-nano",
    instructions: GRAMMAR_INSTRUCTIONS,
    input: text,
  });
  return response.output_text;
}
