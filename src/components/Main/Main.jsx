import React from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { useGemini } from "../../context";

const Main = () => {
  const { question, setQuestion, answer, generateAnswer, loading } =
    useGemini();
  const cards = [
    {
      id: 1,
      title: "Suggest beautiful places to see on an upcoming trip",
      imageSrc: "compass_icon",
    },
    {
      id: 2,
      title: "Briefly summarize this concept: urban planning",
      imageSrc: "bulb_icon",
    },
    {
      id: 3,
      title: "Brainstorm team bonding activities for our work retreat",
      imageSrc: "message_icon",
    },
    {
      id: 4,
      title: "Improve the readability of the following code",
      imageSrc: "code_icon",
    },
  ];

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user icon" />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : answer === null ? (
        <>
          <div className="greet">
            <span>Hello Dev</span>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
            {cards.map((cardItem) => (
              <div className="card" key={cardItem.id}>
                <p>{cardItem.title}</p>
                <img
                  src={assets[cardItem.imageSrc]}
                  alt={`${cardItem.title} icon`}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>{answer}</div>
      )}
      <div className="main-container">
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <div>
              <img src={assets.gallery_icon} alt="gallery icon" />
              <img src={assets.mic_icon} alt="mic icon" />
              <img
                src={assets.send_icon}
                alt="send icon"
                onClick={generateAnswer}
              />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
