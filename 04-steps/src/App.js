import { useState } from "react";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0);

    
  function handleReset() {
    setCount(0);
    setStep(1);
  }
  let date= new Date()
  const date1 = date.toLocaleDateString();
  
     var result = date.setDate(
       date.getDate() + count * step
     );

  const finalDate = new Date(result).toLocaleDateString();
  return (
    <>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          defaultValue='1'
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <span>{step}</span>
      </div>
      <div>
        <button
          onClick={() => {
            if (count >= 0) setCount((c) => c + 1);
          }}
        >
          +
        </button>
        <input value={count} onChange={(e) => setCount(+e.target.value)} />
        <button
          onClick={() => {
            if (count > 0) setCount((c) => c - 1);
          }}
        >
          -
        </button>
      </div>
      <div>
        {count} days after from today {date1} is {finalDate}
      </div>

     {count!==0&&step!==1? <button onClick={handleReset}>
        RESET
      </button> : ''}
    </>
  );
}


export default App;
