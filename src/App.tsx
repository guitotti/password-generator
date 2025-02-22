import { useState } from "react";
import "./App.css";
import { standardPassword } from "./utils/generatePassword";

function App() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar");

  const handleGeneratePassword = () => {
    const newPassword = standardPassword();
    setPassword(newPassword);
    setCopyText("Copiar");
  };

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    setCopyText("Copiado!");
  };

  return (
    <div>
      <h1>Gerador de senhas</h1>
      <button onClick={handleGeneratePassword}>Gerar!</button>
      <button onClick={copyPassword}>{copyText}</button>
      <div>{password}</div>
    </div>
  );
}

export default App;
