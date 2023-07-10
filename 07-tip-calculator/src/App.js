import { useState } from "react";

function App() {

  return <TipCalculator/>
}


function TipCalculator() {
  const [bill, setBill] = useState(0);
    const [ownTip, setOwnTip] = useState(0);
  const [ownFriendTip, setFriendTip] = useState(0);

  function handleOwnTipChange(value) {
    setOwnTip(value)
  }
  function handleFriendTipChange(value) {
    setFriendTip(value)
  }
  
  function reset() {
    setBill(0)
    setOwnTip(0)
    setFriendTip(0)
  }
  return (
    <>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage
        question="How did you like the service ?"
        onChange={handleOwnTipChange}
        value={ownTip}
      >
        <option value={0}>It was not good (0%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>It was great (20%)</option>
      </SelectPercentage>

      <SelectPercentage
        question="How did your friend like the service ?"
        onChange={handleFriendTipChange}
        value={ownFriendTip}
      >
        <option value={0}>It was not good (0%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>It was great (20%)</option>
      </SelectPercentage>

      <Output bill={bill} ownTip={ownTip} ownFriendTip={ownFriendTip} />
      <Reset onReset={reset} />
    </>
  );
}
function BillInput({bill, setBill}) {

  return<div>
    <span>How much was your bill ? </span>{" "}
    <input
      type="text"
      value={bill}
      onChange={(e) => setBill(+e.target.value)}
      placeholder='bill value'
    />
  </div>;

}
function SelectPercentage({ question, onChange, value, children }) {
  return (
    <div>
      <span>{question} </span>
      <select value={value} onChange={(e) => onChange(+e.target.value)}>
        {children}
      </select>
    </div>
  );
}
function Output({ bill, ownTip, ownFriendTip }) {
  return (
    <h1>
      You pay ${bill + (ownTip + ownFriendTip) / 2} (${bill} + $
      {(ownTip + ownFriendTip) / 2} tip)
    </h1>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
export default App;
