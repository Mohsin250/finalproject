import React from "react";
import './AddExcer.css'
import { useNavigate } from "react-router-dom";

function AddExcer(props) {
  const navigate = useNavigate();

  const { createApi, handler } = props;

  return (
    <div className="bg-imgg">
        <div className="container ">
      <h2 className="text-center display-3 ">Enter Your Excercise</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          createApi();
          navigate("/excer");
        }}
      >
        <label className="mt-5">Enter Name</label>
        <br />
        <input
          required
          name="name"
          onChange={handler}
          type="text"
        />
        <br />
        <label>Enter Excercise</label>
        <br />
        <input
          required
          name="excr"
          onChange={handler}
          type="text"
          className="form-control"
        />
        {/* <select required name="excr" id="" onChange={handler} >
            <option value="">SELECT EXCERCISE</option>
            <option value="">CHIST</option>
            <option value="">BACK</option>
            <option value="">BICEP</option>
            <option value="">TRICEPS</option>
            <option value="">SHOULDER</option>
            <option value="">LEGS</option>
        </select> */}
        <br />
        <label>Enter day</label>
        <br />
        <input
          required
          name="day"
          onChange={handler}
          type="text"
        />
<br />
       <button className="btn btn-primary mt-3">Save Item</button>
      </form>
    </div>
    </div>
  );
}

export default AddExcer;