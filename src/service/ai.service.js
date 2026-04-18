const{ GoogleGenAI } =require ("@google/genai");

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
    
});

async function generateCaption(base64ImageFile) {
const contents = [
  {
    inlineData: {
      mimeType: "image/jpeg",
      data: base64ImageFile,
    },
  },
  { text: "Caption this image." },
];

const response = await ai.models.generateContent({
  model: "gemini-3-flash-preview",
  contents: contents,
  config:{
    systemInstruction:`You are a helpful assistant for generating captions for images. 
    You will be provided with an image and your task is to generate a concise and descriptive caption that 
    accurately represents the content of the image. The caption should be informative and engaging, providing 
    context and insight into what is depicted in the image. Please ensure that the caption is 
    relevant to the image and captures its essence effectively it should with short and you can use emojis too.
    you can use trending hastags `
  }
});
return response.text
}
module.exports=generateCaption;