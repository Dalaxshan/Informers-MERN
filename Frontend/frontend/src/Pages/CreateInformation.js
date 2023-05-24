import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

export default function CreateInformation() {

let navigate = useNavigate();

  const [information, setInformation] = useState({
    first_Name: "",
    last_Name: "",
    address:"",
    contact_no: "",
    informer_Name:"",
    description: "",

  });

  const { first_Name,last_Name,address,contact_no,informer_Name,description} = information;

  //It get it values into inputs
  const onInputchange = (e) => {
    setInformation({ ...information, [e.target.name]: e.target.value });
  };

  //Call when clicked
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/informer/information", information);
    console.log(information);

    //sweet alert

    swal.fire({
      icon: "success",
      title: "Thank you!",
      text: `Information has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });

    navigate("/informer");
  };

  return (
    <div>
      <section>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3 ">
          <div className="container h-100 mt-5 mb-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-5 col-xl-6">
                <div
                  className="card"
                  style={{
                    borderRadius: "15px",
                    backgroundImage:
                      'url("https://img.freepik.com/free-vector/recycle-symbol-environmental-conservation-vector_53876-76254.jpg?w=740&t=st=1684529494~exp=1684530094~hmac=9cb7a8c1704361fbc91a08316f856be31a902f9aa0d728ce6a38e119de5d3968")',
                  }}
                >
                  <div className="card-body p-3">
                    <h2 className=" text-center mb-3 text-truncate">
                      Create New Information
                    </h2>
                    <p className="text-muted mb-5 text-center">
                      Enter Accurate Details Only!!
                    </p>

                    <form onSubmit={(e) => onSubmit(e)}>
                      <div className="form-group form-outline mb-2">
                        <label className="form-label" htmlFor="form3Example1cg">
                          First Name
                        </label>
                        <input
                          type={"text"}
                          name="first_Name"
                          value={first_Name}
                          onChange={(e) => onInputchange(e)}
                          className="form-control"
                          placeholder="Enter First name here!!"
                          required
                        />
                      </div>

                      <div className="form-group form-outline mb-2">
                        <label className="form-label" htmlFor="form3Example1cg">
                          Last Name
                        </label>
                        <input
                          type={"text"}
                          name="last_Name"
                          value={last_Name}
                          onChange={(e) => onInputchange(e)}
                          className="form-control"
                          placeholder="Enter Last name here!!"
                          required
                        />
                      </div>

                      <div className="form-group form-outline mb-2">
                        <label className="form-label" htmlFor="form3Example3cg">
                          Location
                        </label>
                        <input
                          type={"text"}
                          value={address}
                          name="address"
                          onChange={(e) => onInputchange(e)}
                          className="form-control "
                          placeholder="Enter Location here!!"
                          required
                        />
                      </div>

                      <div className="form-group form-outline mb-2">
                        <label className="form-label" htmlFor="form3Example4cg">
                          Contact Number
                        </label>
                        <input
                          type={"tel"}
                          value={contact_no}
                          name="contact_no"
                          onChange={(e) => onInputchange(e)}
                          className="form-control"
                          placeholder="123-45-678"
                          required
                        />
                      </div>

                      <div className="form-group form-outline mb-2">
                        <label
                          className="form-label"
                          htmlFor="form3Example4cdg"
                        >
                          Informer Name
                        </label>

                        <input
                          type="text"
                          value={informer_Name}
                          name="informer_Name"
                          onChange={(e) => onInputchange(e)}
                          className="form-control "
                          placeholder="Enter Informer here!!"
                          required
                        />
                      </div>

                      <div className="form-group form-outline mb-2 ">
                        <label
                          className="form-label"
                          htmlFor="form3Example4cdg"
                        >
                          Description
                        </label>
                        <input
                          type="text"
                          value={description}
                          name="description"
                          onChange={(e) => onInputchange(e)}
                          className="form-control"
                          placeholder="Enter Garbage List here!!"
                          required
                        />
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-xl gradient-custom-4 text-body text-muted mx-2"
                        >
                          Add Information
                        </button>
                        <Link className="btn btn-outline-danger btn-xl" to="/">
                          Cancel
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
