import React from "react";
export default function LangNav() {
  return (
    <>
      <nav className="navbar toggle-   bg-primary  text-light ps-5 d-flex justify-content-start container-fluid">
        <li className="nav-item dropdown">
          <a
            className="dropdown-toggle text-light"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
          >
            Language
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                English
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Arabic
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                spanesh
              </a>
            </li>
          </ul>
        </li>
      </nav>
    </>
  );
}
