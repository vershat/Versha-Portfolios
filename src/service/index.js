import axios from "axios";
import { GROK_API, RESUME_CONTENT, SYSTEM_PROMPT } from "./constants";

const getResponseFromLLM = async (userQuery) => {
    const systempPrompt = SYSTEM_PROMPT(RESUME_CONTENT);
    const responseReceived = await axios.post(
      GROK_API,
      {
        messages: [
          {
            role: "system",
            content: systempPrompt,
          },
          {
            role: "user",
            content: userQuery,
          },
        ],
        model: "grok-2-1212",
        temperature: 0
      },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return responseReceived.data.choices[0].message.content;
}

export default getResponseFromLLM;