import React, { useState, useEffect } from "react";

const App = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotate((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const boxStyle = {
    width: "45%",
    height: "200px",
    margin: "10px",
    padding: "20px",
    boxSizing: "border-box",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    transition: "all 0.3s ease",
    transform: `rotate(${rotate}deg)`,
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "white",
          padding: "20px 0",
          zIndex: 1,
        }}
      >
        2023年9月11日 - AIと共に学ぶReact開発の一日
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div style={{ ...boxStyle, backgroundColor: "#FFB3BA" }}>
          <h2>できた</h2>
          <p>GitHubCodeSpace上でReactアプリを公開</p>
        </div>
        <div style={{ ...boxStyle, backgroundColor: "#BAFFC9" }}>
          <h2>学び</h2>
          <p>GitHubCodeSpaceの課金システムと制限について理解</p>
        </div>
        <div style={{ ...boxStyle, backgroundColor: "#BAE1FF" }}>
          <h2>次にやること</h2>
          <p>Reactの探求を継続</p>
        </div>
        <div style={{ ...boxStyle, backgroundColor: "#FFFFBA" }}>
          <h2>babubabu</h2>
          <p>AIとの対話を通じた学習の楽しさを再確認</p>
        </div>
      </div>
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          animation: "spin 4s linear infinite",
        }}
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="black"
          strokeWidth="3"
          fill="#61DAFB"
        />
        <path d="M50 10 L50 90 M10 50 L90 50" stroke="black" strokeWidth="3" />
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </svg>
    </div>
  );
};

export default App;
