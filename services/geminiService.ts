
import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available, but handle it gracefully if not.
// The app will show an error if process.env.API_KEY is not set.
let ai: GoogleGenAI | null = null;
try {
    if (process.env.API_KEY) {
        ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
} catch (error) {
    console.error("Failed to initialize GoogleGenAI:", error);
}

export async function reviewCode(code: string, language: string): Promise<string> {
  if (!ai) {
    throw new Error("Gemini API key not configured. Please set the API_KEY environment variable.");
  }
  
  if (!code.trim()) {
    return "Please provide some code to review.";
  }

  const model = 'gemini-2.5-flash';
  
  const prompt = `
    As an expert software engineer and code reviewer, please provide a comprehensive review of the following ${language} code.
    Your feedback should be constructive, clear, and actionable. Structure your review into the following sections using Markdown:

    ### Overall Assessment
    A brief summary of the code's quality, purpose, and clarity.

    ### 🐛 Bugs & Potential Errors
    Identify any bugs, logical errors, or edge cases that might not be handled correctly. Provide corrected code snippets where helpful.

    ### 🚀 Performance Optimizations
    Suggest improvements to enhance the code's performance, memory usage, or efficiency. Explain why the suggested changes are more performant.

    ### 🎨 Readability & Style
    Comment on code style, naming conventions, and overall readability. Suggest ways to make the code cleaner and more maintainable, following standard conventions for ${language}.

    ### 🔒 Security Vulnerabilities
    Point out any potential security risks (e.g., injection vulnerabilities, insecure handling of data, etc.) and suggest specific mitigations.

    ### ✅ Best Practices & Suggestions
    Mention any deviations from common best practices or language idioms for ${language}. Suggest better alternatives or modern language features that could be used.

    ---
    
    If no issues are found in a particular category, please state that clearly (e.g., "No significant performance issues found.").
    Format code suggestions within markdown code blocks.

    Here is the code to review:
    \`\`\`${language.toLowerCase()}
    ${code}
    \`\`\`
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`API Error: ${error.message}`);
    }
    throw new Error("An unknown error occurred while communicating with the API.");
  }
}
