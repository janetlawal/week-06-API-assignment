import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
app.get("/", function (request, response) {
    response.json("This is just the get endpoint. Move along, please");
  });
  app.post("/chat", async function (request, response) {
    // the rest of our code will go in here
  });
  app.post("/chat", async function (request, response) {
    const userPrompt = request.body.userPrompt;
    console.log("the user prompt is:", userPromt); // Output will be whatever you type into your form.
  
    // This next line is what the server sends back. For now, it's just the user submitted prompt, but later we will change it to be the GPT's response.
    if (!userPrompt) {
        console.log("there is no user promt");
    response.json("No promt given")
    }
    const completion = await openai.chat.completion.create({
        model: "gpt-4o-mini", messages: [
            {
                role: "system", content: userPrompt 
            },
        ],
        store: true,
    });
    console.log('completion', completion)
    console.log('the GPT response itself', completion.choices[0].message.content)
    response.json(completion.choices[0].message.content);
  });
  app.listen(8080, function () {
    console.log("Running on port 8080");
  });