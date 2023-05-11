import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Update from "./components/Update";
import YourExcer from "./components/YourExcer";
import Main from "./components/Main";
import Header from "./components/Header";
import AddExcer from "./components/AddExcer";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  //state for editing the data
  const [Getid, SetGetid] = useState();
  const empty = {
    title: "",
    desc: "",
    price: "",
  };
  //state for handling input
  const [handle, setHandle] = useState(empty);

  // function for handle the input fields
  const handler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
    console.log(handle);
  };

  // function for creating the Api data
  const createApi = () => {
    fetch("http://localhost:4000/item-api", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(handle),
    });
  };
  // function for editing the Api
  const editApi = async (id) => {
    var data = await fetch(`http://localhost:4000/item-api/${id}`);
    data = await data.json();
    console.log(data);
    setHandle(data);
    SetGetid(id);
  };
  // function for updating the Api
  const updateApi = () => {
    fetch(`http://localhost:4000/item-api/${Getid}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(handle),
    });
  };

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />

          <Route path="/excer" element={<YourExcer editApi={editApi} />} />
          <Route
            path="/yourexcer"
            element={
              <AddExcer
                createApi={createApi}
                // handle={handle}
                handler={handler}
              />
            }
          />
          <Route
            path="/update"
            element={
              <Update updateApi={updateApi} handle={handle} handler={handler} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;