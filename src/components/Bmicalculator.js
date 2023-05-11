import React, { useState, useEffect } from "react";
import './Bmicalculator.css'
function Bmicalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [bmi, setBmi] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (bmi >= 25) {
      setCategory("Overweight");
    } else if (bmi >= 18.5) {
      setCategory("Normal weight");
    } else {
      setCategory("Underweight");
    }
  }, [bmi]);

  const calculateBmi = () => {
    if (!weight || !height || !gender || !age) {
      setError("Please enter all the required information.");
      return;
    }

    const bmiValue = (weight / Math.pow(height / 100, 2)).toFixed(2);
    setBmi(bmiValue);
    setError("");
  };

  return (
    <div className="bmical">
      <div className="bmiinner">
      <h2>BMI CALCULATOR</h2>
      <label className="cal1">
        Weight (kg):
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </label>
      
      <label className="cal2">
        Height (cm):
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </label>
      <br />
      <label className="cal3">
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
     
     
      <label className="cal4">
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <br />
      <button onClick={calculateBmi}>Calculate BMI</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {bmi && (
        <div>
          <div>Your BMI is {bmi}</div>
          <div>You are in the {category} category.</div>
        </div>
      )}
      </div>
    </div>
  );
}

export default Bmicalculator;
