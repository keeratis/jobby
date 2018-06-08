import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-jobby mb-4">
        <div className="container">
          <Link className="navbar-brand " to="/">
            Jobby
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item nav-space">
                <Link
                  className="nav-link btn btn-outline-warning my-2 my-sm-0"
                  to="/select"
                >
                  สมัครสมาชิก
                </Link>
              </li>
              <li className="nav-item nav-space">
                <Link
                  className="nav-link btn btn-outline-danger my-2 my-sm-0"
                  to="/login"
                >
                  เข้าสู่ระบบ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
