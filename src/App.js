import React from "react";

function App() {
  const handleClick = () => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.sendData("poliv_request:1");
      window.Telegram.WebApp.close();
    } else {
      alert("Это приложение запускается внутри Telegram!");
    }
  };

  return (
    <div
      style={{
        background: "#f8f9fa",
        minHeight: "100vh",
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          boxShadow: "0 4px 32px rgba(0,0,0,.07)",
          borderRadius: 28,
          padding: "40px 28px 36px 28px",
          maxWidth: 380,
          minWidth: 250,
          textAlign: "center",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
          alt="Apple style"
          style={{
            width: 48,
            marginBottom: 24,
            opacity: 0.13,
          }}
        />
        <h2 style={{ fontWeight: 600, fontSize: 28, marginBottom: 14 }}>
          Ваш сад Online
        </h2>
        <p style={{ fontSize: 17, color: "#555", marginBottom: 28 }}>
          Управляйте грядками c iPhone-стилем.<br />Выберите действие:
        </p>
        <button
          style={{
            fontSize: 20,
            borderRadius: 14,
            border: "none",
            background: "linear-gradient(90deg,#e5e9ee,#eaf2fb 70%)",
            color: "#111",
            fontWeight: 500,
            padding: "18px 0",
            width: "100%",
            boxShadow: "0 2px 16px rgba(0,0,0,.04)",
            marginBottom: 12,
            cursor: "pointer",
            transition: "background .2s",
          }}
          onClick={handleClick}
        >
          Заказать полив 💧
        </button>
        <button
          style={{
            fontSize: 20,
            borderRadius: 14,
            border: "none",
            background: "linear-gradient(90deg,#f2f3f7,#f6f8fa 70%)",
            color: "#222",
            fontWeight: 400,
            padding: "18px 0",
            width: "100%",
            boxShadow: "0 1px 8px rgba(0,0,0,.03)",
            cursor: "pointer",
          }}
          onClick={() => {
            if (window.Telegram && window.Telegram.WebApp) {
              window.Telegram.WebApp.sendData("photo_request:1");
              window.Telegram.WebApp.close();
            } else {
              alert("Это приложение запускается внутри Telegram!");
            }
          }}
        >
          Фотоотчет 📷
        </button>
        <div style={{ marginTop: 24, fontSize: 13, color: "#aaa" }}>
          Apple-style & Telegram Mini App Demo
        </div>
      </div>
    </div>
  );
}

export default App;
