import React from "react";
import { FaUserGroup, FaEye, FaRegFlag } from "react-icons/fa6";
import { BsCollectionPlayFill } from "react-icons/bs";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";

const Header = () => {
  return (
    <header
      className="d-flex rounded-3 flex-row justify-content-between px-2 p-5"
      id="header"
    >
      <div className="mx-auto col-11 d-flex flex-column gy-5 rounded-3">
        <div className="bg-image rounded-3 rounded-bottom-0">
          <div className="d-flex justify-content-end mb-4 p-4">
            <a className="btn border mx-2 rounded-circle" href="/">
              <FaTwitter className="text-white"/>
            </a>
            <a className="btn border mx-2 rounded-circle" href="/">
              <FaInstagram className="text-white"/>
            </a>
            <a className="btn border mx-2 rounded-circle" href="/">
              <FaFacebookF className="text-white"/>
            </a>
          </div>
          <div className="d-flex bg-clear justify-content-center">
            <ul className="list-group list-group-horizontal bg-transparent p-4 pb-0 rounded-0 border-0 text-center">
              <li className="list-group-item bg-transparent text-white border-0">
                <span className="fs-5 align-middle pe-1 text-light">
                  <FaUserGroup className="text-white" />
                </span>
                <span className="fs-5 align-middle text-white">1,701,435</span>
              </li>
              <li className="list-group-item bg-transparent border-0">
                <span className="fs-5 align-middle pe-1">
                <FaEye />
                </span>
                <span className="fs-5 align-middle text-light">1,701,435</span>
              </li>
              <li className="list-group-item bg-transparent text-white border-0">
                <span className="fs-5 align-middle pe-1">
                <FaRegFlag />
                </span>
                <span className="fs-5 align-middle text-white">1,701,435</span>
              </li>
              <li className="list-group-item bg-transparent text-white border-0">
                <span className="fs-6 align-middle pe-1">
                <BsCollectionPlayFill className="text-white" />
                </span>
                <span className="fs-5 align-middle text-white">1,701,435</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex rounded-3 rounded-top-0 justify-content-between align-items-center shadow p-3">
          <div className="d-flex align-items-center gap-4">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRqUg3eiodLRKVUqb29-Zc5qLljCnHM9VJqCf-2_bN8HFs7X_DM"
              className="img-fluid img-user rounded-circle"
              alt="..."
            />
            <h6>Phoebe Allison</h6>
          </div>
          <ul className="list-group list-group-horizontal pb-0 rounded-0 border-0 text-center">
            <li className="list-group-item border-0">Main</li>
            <li className="list-group-item border-0">Video</li>
            <li className="list-group-item border-0">Playlist</li>
            <li className="list-group-item border-0">About</li>
          </ul>
          <div className="rounded-pill border p-2 px-3">
            <span className="border-end p-2">945,321</span>
            <span className="p-2">Follow</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
