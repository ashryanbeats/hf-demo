import "dotenv/config";
import { HfInference } from "@huggingface/inference";

const hf = new HfInference(process.env.HUGGINGFACEHUB_API_KEY);

const answer = await hf.textGeneration({
  model: "gpt2",
  inputs: "The answer to the universe is",
});

console.log(answer);
