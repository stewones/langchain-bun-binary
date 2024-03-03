import { LLMChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { PromptTemplate } from "langchain/prompts";

const model = new ChatOpenAI();

const template = `
    you're a helpful assistant who is very knowledgeable about the world.
    input: {input}
    output: 
`;

const prompt = PromptTemplate.fromTemplate(template, {
  validateTemplate: false,
});
const chain = new LLMChain({ llm: model, prompt, verbose: true });

chain.call({
  input: "What is the meaning of life?",
});
