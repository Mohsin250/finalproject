import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './YourExcer.css'

function YourExcer(props) {
  const { editApi } = props;
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    var value = await fetch("http://localhost:4000/item-api");
    value = await value.json();
    setData(value);
  };

  //function for deleting the data
  const delApi = async (id) => {
    // var data =
    await fetch(`http://localhost:4000/item-api/${id}`, {
      method: "DELETE",
    });
    // data = await data.json();
    fetchApi();
  };

  useEffect(() => {
    fetchApi();
  }, [editApi]);

  return (
    <div className="bg-imgg">
        <div className="container">
      <h2 className="text-center display-3">Your Excercise</h2>

      <div className="row  pt-2 pb-2">
        {data.map((item) => (
          <div className="col-md-3 mt-4">
            <div className="card " style={{ width: "16rem" }}>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.excr}</p>
                <h3 className="text-success">{item.day}</h3>
                <div className="d-flex justify-content-around">
                  <Link to="/update">
                    <button
                      onClick={() => editApi(item._id)}
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => delApi(item._id)}
                    className="btn btn-danger"
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <table className="table table-bordered mt-5">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item._id}</td>
            <td>{item.title}</td>
            <td>{item.desc}</td>
            <td>{item.price}</td>
            <td>
              <Link to="/update">
                <button
                  onClick={() => editApi(item._id)}
                  className="btn btn-primary"
                >
                  Edit
                </button>
              </Link>
            </td>
            <td>
              <button
                onClick={() => delApi(item._id)}
                className="btn btn-danger"
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </table> */}
    </div>
    </div>
  );
}

export default YourExcer;
