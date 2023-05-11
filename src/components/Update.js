import React from "react";
import { useNavigate } from "react-router-dom";

function Update(props) {
  const navigate = useNavigate();
  const { handle, handler, updateApi } = props;
  return (
    <div className="bg-imgg">
        <div className="container">
      <h2 className="text-center display-3">Edit Your Item</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateApi();
          navigate("/excer");
        }}
      >
        <label className="mt-5">Enter Title</label>
        <input
          value={handle.name}
          onChange={handler}
          required
          name="name"
          type="text"
          className="form-control"
        />

        <label>Enter Description</label>
        <input
          value={handle.excr}
          onChange={handler}
          required
          name="excr"
          type="text"
          className="form-control"
        />

        <label>Enter Price</label>
        <input
          value={handle.day}
          onChange={handler}
          required
          name="day"
          type="text"
          className="form-control"
        />

        <button className="btn btn-primary mt-3">Update Item</button>
      </form>
    </div>
    </div>
  );
}

export default Update;
