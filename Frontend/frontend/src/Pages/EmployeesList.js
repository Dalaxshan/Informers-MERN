import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";


export default function EmployeesList() {

  let navigate=useNavigate();

    const [users, setUser] = useState([]);
    const [user, SearchUser] = useState("");

    useEffect(() => {
      loadUser();
    }, []);

    //get all user detail
    const loadUser = async () => {
      const result = await axios.get("http://localhost:4000/api/profile/user/");
      setUser(result.data);
      console.log(result.data);
    };


    //delete User
  const deleteUser = async (user) => {

    //sweet alert
      const { value: password } = await Swal.fire({
        title: 'Enter your password',
        input: 'password',
        inputLabel: 'Password',
        inputPlaceholder: 'Enter your password',
        inputAttributes: {
          maxlength: 10,
          autocapitalize: 'off',
          autocorrect: 'off'
        }
      })

      if (password==user.password) {
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
              `http://localhost:4000/api/profile/user/${user.id}`
            );
            loadUser();
            navigate("/employeeList")
          }
        })

      }

      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: ' you can not edit anything!',
        })


    };


  }

    //check update validation
const getValidate=async(user)=>{
  const { value: password } = await Swal.fire({
    title: 'Enter your password',
    input: 'password',
    inputLabel: 'Password',
    inputPlaceholder: 'Enter your password',
    inputAttributes: {
      maxlength: 10,
      autocapitalize: 'off',
      autocorrect: 'off'
    }
  })

  if (password==user.password) {
    Swal.fire(
      'Well Done',
      `You can be edit ${user.profileName} `,
      'success'
      );
    navigate(`editProfile/${user._id}`);
  }

  else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: ' you can not edit anything!',
    })
  }

};

  return (
    <div>
<div>
      <div className="container">
        <div className="input-group">
          <div className="form-outline">
            <div className="col-auto">
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">🔍</div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroup"
                  onChange={(e) => {
                    SearchUser(e.target.value);
                  }}
                  placeholder="Search Profile Name.."
                />
              </div>
            </div>
          </div>
        </div>

        <table className="table align-middle mb-0 bg-white ">
          <tbody
            style={{
              backgroundImage:
                'url("https://wallpapers.com/images/high/environment-background-c2ut7fq0hpz6my6c.webp")',
            }}
          >
            {
              //filter user details
              users
                .filter((val) => {
                  if (users == "") {
                    return val;
                  } else if (
                   val.profile_name.toLowerCase().includes(user.toLowerCase())
                  ) {
                    return val;
                  }
                })

                //display entire details
                .map((user, index) => (
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                          alt=""
                          style={{ width: "45px", height: "45px" }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p className="fw-bold mb-1">#</p>
                          <p className="text-muted mb-0">
                            {Math.floor(index + 1)}
                          </p>
                        </div>

                        <div className="ms-3">
                          <p className="fw-bold mb-1">{user.profile_name}</p>
                          <p className="text-muted mb-0">{user.position}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="ms-3">
                        <p className="fw-bold mb-1">Email Address</p>
                        <p className="text-muted mb-0">{user.email_id}</p>
                      </div>
                    </td>
                    <td>
                      <div className="ms-3">
                        <p className="fw-bold mb-1">Contact Number</p>
                        <p className="text-muted mb-0">{user.contact_no}</p>
                      </div>
                    </td>
                    <td>
                    <Link class="btn btn-success mx-2" onClick={()=>getValidate(user)}>
              Edit Profile
            </Link>
            <Link class="btn btn-danger" onClick={()=>deleteUser(user)}>
              Delete Profile
            </Link>
                    </td>
                  </tr>
                ))
            }
          </tbody>
        </table>
      </div>


</div>
    </div>
  )
}
