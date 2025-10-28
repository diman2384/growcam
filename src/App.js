import React, { useState } from "react";

function App() {
  const [sent, setSent] = useState("");

  // Отправка выбранного действия в Telegram-бот
  const sendAction = (action) => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.sendData(action);
      setSent(action); // показа подтверждения
      setTimeout(() => window.Telegram.WebApp.close(), 900);
    } else {
      alert("Это приложение запускается внутри Telegram!");
    }
  };

  return (
    <div style={{
      background: "#f8f9fa",
      minHeight: "100vh",
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      margin: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        background: "#fff",
        boxShadow: "0 4px 32px rgba(0,0,0,.07)",
        borderRadius: 28,
        padding: "40px 28px 36px 28px",
        maxWidth: 410,
        minWidth: 250,
        textAlign: "center"
      }}>
        <h2 style={{fontWeight: 600, fontSize: 28, marginBottom: 16}}>Умная грядка 🌱</h2>
        <p style={{fontSize: 17, color: "#555", marginBottom: 30}}>
          Выберите действие для вашего участка:
        </p>
        <button
          style={mainBtnStyle}
          onClick={() => sendAction("order_watering")}
        >Заказать полив 💧</button>
        <button style={mainBtnStyle} onClick={() => sendAction("order_photo")}>Фотоотчет 📷</button>
        <button style={mainBtnStyle} onClick={() => sendAction("order_fertilizer")}>Удобрение 🌾</button>
        <button style={mainBtnStyle} onClick={() => sendAction("order_myplants")}>Мои растения 🌱</button>
        <div style={{marginTop: 24, fontSize: 14, color: "#aaa"}}>
          <b>Telegram Mini App & Smart Garden Demo</b>
        </div>
        {sent && (
          <div style={{
            background: "#eaffea",
            color: "#0cba36",
            borderRadius: 10,
            marginTop: 26,
            fontSize: 17,
            padding: "15px 8px"
          }}>
            Заявка "{sent}" отправлена!
          </div>
        )}
      </div>
    </div>
  );
}

const mainBtnStyle = {
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
  transition: "background .2s"
};

export default App;
