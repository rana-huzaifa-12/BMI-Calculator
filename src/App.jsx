import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (event) => {
    event.preventDefault();
    let w = parseFloat(weight);
    let h = parseFloat(height);

    if (!w || !h) {
      alert("Enter valid Weight and Height");
      return;
    }

    let bmiValue = (w / (h * h)) * 703;
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) {
      setMessage("You are underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setMessage("You have a normal weight");
    } else {
      setMessage("You are overweight");
    }
  };

  let reload = () => {
    setWeight("");
    setHeight("");
    setBmi("");
    setMessage("");
  };

  return (
    <div className="app">
      <div className="container">
        <h2>BMI CALCULATOR WITH REACT</h2>

        <form onSubmit={calcBmi}>
          <div>
            <label>WEIGHT (lbs)</label>
            <input
              type="text"
              value={weight}
              placeholder='ENTER YOUR WEIGHT'
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>HEIGHT (inch)</label>
            <input
              type="text"
              value={height}
              placeholder='ENTER YOUR HEIGHT'
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <button className='btn' type='submit'>SUBMIT</button>
          <button className='btn btn-outline' onClick={reload}>RELOAD</button>

        </form>


        <div className="center">
          <h3>YOUR BMI IS: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
