import { useState } from "react";

import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [billAmount, setBillAmount] = useState("");
  const [userAmount, setUserAmount] = useState("");
  const friendAmount = billAmount ? billAmount - userAmount : "";
  const [whoPays, setWhoPays] = useState("user");

  function handleUserAmount(e) {
    Number(e.target.value) <= billAmount
      ? setUserAmount(Number(e.target.value))
      : setUserAmount(userAmount);
  }

  function handleSplitBill(e) {
    e.preventDefault();

    const amount = whoPays === "user" ? friendAmount : -userAmount;

    onSplitBill(amount);
  }

  return (
    <form className="form-split-bill">
      <h2>Split Bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={billAmount}
        onChange={(e) => setBillAmount(Number(e.target.value))}
      />

      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={userAmount}
        onChange={(e) => handleUserAmount(e)}
      />

      <label>👫 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={friendAmount} />

      <label>🤑 Who is paying the bill</label>
      <select value={whoPays} onChange={(e) => setWhoPays(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button onClick={(e) => handleSplitBill(e)}>Split Bill</Button>
    </form>
  );
}
