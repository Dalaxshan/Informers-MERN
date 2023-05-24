import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function InformerHome() {
  //Information details list
  let navigate = useNavigate();
  const [informations, setInformation] = useState([]);

  useEffect(() => {
    loadInformation();
  }, []);

  //get all information details
  const loadInformation = async () => {
    const result = await axios.get(
      "http://localhost:4000/api/informer/information"
    );
    setInformation(result.data);
    console.log(result.data);
  };

  //delete User
  const deleteUser = async (id) => {
        Swal.fire({

          title: 'Are you sure?',
          text: "You Want to Delete This Profile!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            const result = await axios.delete(
              `http://localhost:4000/api/informer/information/${id}`
            );
            loadInformation();
            navigate("/informer")
          }
        })
    };

  return (
    <div>
      <div className="container rounded-3">
        <h3
          className="text-center"
          style={{ color: "lightblue", fontFamily: "monospace" }}
        >
          Information List
        </h3>
        <hr class="divider" />
        <a
          href="/CreateInformation"
          className="btn btn-success btn-block btn-md gradient-custom-4 text-body mx-2"
        >
          + New Information
        </a>
        <a href="#" className="btn btn-info">
          + Generate Report
        </a>
        <h1></h1>
        <div className="container">
          <div className="row">
            <table className="table table-striped table-bordered">
              <thead
                style={{
                  background:
                    "radial-gradient(circle, rgba(198,225,226,1) 0%, rgba(190,190,190,1) 100%)",
                }}
              >
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First_Name</th>
                  <th scope="col">Last_Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Contact_No</th>
                  <th scope="col">Infomer</th>
                  <th scope="col">Garbage List</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody>
                {informations.map((information, index) => (
                  <tr>
                    <th shcope="row" key={index}>
                      {Math.floor(index + 1)}Inf@#!
                    </th>
                    <td scope="row">{information.first_Name}</td>
                    <td scope="row">{information.last_Name}</td>
                    <td scope="row">{information.address}</td>
                    <td scope="row">{information.contact_no}</td>
                    <td scope="row">{information.informer_Name}</td>
                    <td scope="row">{information.description}</td>
                    <td>
                      <Link
                        className="btn btn-success mx-2"
                        to={`/editInformation/${information._id}`}
                      >
                        Update
                      </Link>

                      <Link
                        className="btn btn-danger "
                        onClick={() => deleteUser(information._id)}
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
