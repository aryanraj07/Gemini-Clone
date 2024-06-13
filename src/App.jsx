import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import axios from "axios";
import { GeminiProvider } from "./context";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState();
  const [loading, setLoading] = useState(false);
  const [recentChats, setRecentChats] = useState([]);

  const generateAnswer = async () => {
    try {
      setLoading(true);
      console.log("loading...");
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${
          import.meta.env.REACT_APP_API_KEY
        }`,
        {
          contents: [{ parts: [{ text: question }] }],
        }
      );

      const newAnswer = response.data.candidates[0].content.parts[0].text;
      setAnswer(newAnswer);
      addRecentChat(question, newAnswer);
      setQuestion("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const addRecentChat = (question, answer) => {
    setRecentChats((prevChats) => [...prevChats, { question, answer }]);
  };

  return (
    <GeminiProvider
      value={{
        question,
        setQuestion,
        answer,
        setAnswer,
        generateAnswer,
        loading,
        recentChats,
        addRecentChat,
      }}
    >
      <Sidebar />
      <Main />
    </GeminiProvider>
  );
}

export default App;
