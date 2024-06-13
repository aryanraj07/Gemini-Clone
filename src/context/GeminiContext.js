import { createContext, useContext } from "react";

export const GeminiContext = createContext({
  question: "",
  answer: "",
  loading: false,
  recentChats: [],
  addRecentChat: () => {},
  generateAnswer: () => {},
});
export const GeminiProvider = GeminiContext.Provider;
export const useGemini = () => useContext(GeminiContext);
