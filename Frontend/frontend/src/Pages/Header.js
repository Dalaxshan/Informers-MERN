import React from "react";

export default function Header() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light py-3 " id="mainNav">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#">
            <img
              src={require("../assets/images/logo2New.png")}
              height="90"
              alt="RECYLOW"
            />
          </a>

          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/informer">
                  Informer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/supplier">
                  Supplier
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/collector">
                  Collector
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Recyler">
                  Recyler
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/employeesList">
                  Employees
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">
                  SignIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}
