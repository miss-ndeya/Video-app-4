import React from "react";
import { GoHomeFill } from "react-icons/go";
import "./style.css";
import {
  FaUserCircle,
  FaHistory,
  FaFantasyFlightGames,
  FaMotorcycle,
} from "react-icons/fa";
import { IoIosStar, IoIosMusicalNote, IoMdFitness } from "react-icons/io";
import { BsCollectionPlayFill } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { CgPlayList } from "react-icons/cg";
import { MdOutlineWatchLater } from "react-icons/md";
import { LuBaby } from "react-icons/lu";
import Button from "./Button";

const SideBare = () => {
  return (
    <div className="d mx-0 px-0 col-md-2 min-vh-100 border-end">
      <ul className="nav nav-pills flex-column mx-0">
        <li className="nav-item fs-4 my-0 mt-3">
          <a href="/" className="nav-link text-secondary fs-5">
            <GoHomeFill />
            <span className="ms-3 d-none d-sm-inline fs-6">Home page</span>
          </a>
        </li>
        <li className="nav-item fs-4 my-">
          <a href="/" className="nav-link text-secondary fs-5">
            <FaUserCircle />
            <span className="ms-3 d-none d-sm-inline fs-6">My channel</span>
          </a>
        </li>
        <li className="nav-item fs-4 my-">
          <a href="/" className="nav-link text-secondary fs-5">
            <IoIosStar />
            <span className="ms-3 d-none d-sm-inline fs-6 text-nowrap">
              Popular video
            </span>
          </a>
        </li>
        <li className="nav-item fs-6 my-">
          <a href="/" className="nav-link text-secondary fs-5">
            <BsCollectionPlayFill />
            <span className="ms-3 d-none d-sm-inline fs-6">Subscriptions</span>
          </a>
        </li>
        <li className="nav-item fs-4 my-">
          <a href="/" className="nav-link text-secondary fs-5">
            <FaHistory />
            <span className="ms-3 d-none d-sm-inline fs-6">History Views</span>
          </a>
        </li>
        <li className="nav-item fs-4 my-">
          <a href="/" className="nav-link text-secondary fs-5">
            <MdOutlineWatchLater />
            <span className="ms-3 d-none d-sm-inline fs-6">Watchs Later</span>
          </a>
        </li>
        <li className="nav-item fs-4 my-">
          <a href="/" className="nav-link text-secondary fs-5">
            <AiFillLike />
            <span className="ms-3 d-none d-sm-inline fs-6">Liked videos</span>
          </a>
        </li>
        <li className="nav-item fs-4 my- mb-">
          <a href="/" className="nav-link text-secondary fs-5">
            <CgPlayList />
            <span className="ms-3 d-none d-sm-inline fs-6">Playlists</span>
          </a>
        </li>
        <hr />
        <h6 className="px-4 mt-3">Subscriptions</h6>
        <li className="nav-item fs-4 my-">
          <a href="/" className="nav-link text-secondary fs-5">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSas6BtVOWqvxVyp41TiIOiv08WwU11RUmOjvhMoUYcnqqb6sdp"
              className="img-fluid img-users rounded-circle"
              style={{ height: 30, width: 30 }}
              alt="..."
            />
            <span className="ms-3 d-none d-sm-inline fs-6">Inez Gibson</span>
          </a>
        </li>
        <li className="nav-item fs-4 my-">
          <a href="/" className="nav-link text-secondary fs-5">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSas6BtVOWqvxVyp41TiIOiv08WwU11RUmOjvhMoUYcnqqb6sdp"
              className="img-fluid img-users rounded-circle"
              style={{ height: 30, width: 30 }}
              alt="..."
            />
            <span className="ms-3 d-none d-sm-inline fs-6">Moude Mann</span>
          </a>
        </li>
        <li className="nav-item fs-4 my-">
          <a href="/" className="nav-link text-secondary fs-5">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSas6BtVOWqvxVyp41TiIOiv08WwU11RUmOjvhMoUYcnqqb6sdp"
              className="img-fluid img-users rounded-circle"
              style={{ height: 30, width: 30 }}
              alt="..."
            />
            <span className="ms-3 d-none d-sm-inline fs-6">Francise Wolf</span>
          </a>
        </li>
        <li className="nav-item fs-4 my-">
          <a href="/" className="nav-link text-secondary fs-5">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSas6BtVOWqvxVyp41TiIOiv08WwU11RUmOjvhMoUYcnqqb6sdp"
              className="img-fluid img-users rounded-circle"
              style={{ height: 30, width: 30 }}
              alt="..."
            />
            <span className="ms-3 d-none d-sm-inline fs-6">Lelia French</span>
          </a>
        </li>
        <li className="nav-item fs-4 my-">
          <a href="/" className="nav-link text-secondary fs-5">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSas6BtVOWqvxVyp41TiIOiv08WwU11RUmOjvhMoUYcnqqb6sdp"
              className="img-fluid img-users rounded-circle"
              style={{ height: 30, width: 30 }}
              alt="..."
            />
            <span className="ms-3 d-none d-sm-inline fs-6">Bessie Casey</span>
          </a>
        </li>
        <li className="nav-item fs-4">
          <a href="/" className="nav-link text-secondary fs-5">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSas6BtVOWqvxVyp41TiIOiv08WwU11RUmOjvhMoUYcnqqb6sdp"
              className="img-fluid img-users rounded-circle"
              style={{ height: 30, width: 30 }}
              alt="..."
            />
            <span className="ms-3 d-none d-sm-inline fs-6">Anne Narton</span>
          </a>
        </li>
        <li className="nav-item fs-4">
          <a href="/" className="nav-link text-secondary fs-5">
            <Button
              type="Button"
              className="border btn py-1 rounded-pill but"
              children="Show more"
            />
          </a>
        </li>
        <hr />
        <h6 className="px-4 mt-3">Popular channels</h6>
        <li className="nav-item fs-4 my-1">
          <a href="/" className="nav-link text-secondary fs-5">
            <IoIosMusicalNote />
            <span className="ms-3 d-none d-sm-inline fs-6">Music channels</span>
          </a>
        </li>
        <li className="nav-item fs-4 my-">
          <a href="/" className="nav-link text-secondary fs-5">
            <LuBaby />
            <span className="ms-3 d-none d-sm-inline fs-6">Baby channels</span>
          </a>
        </li>
        <li className="nav-item fs-4 my- ">
          <a href="/" className="nav-link text-secondary fs-5">
            <FaFantasyFlightGames />
            <span className="ms-3 d-none d-sm-inline fs-6">Games channels</span>
          </a>
        </li>
        <li className="nav-item fs-4 my-">
          <a href="/" className="nav-link text-secondary fs-5">
            <IoMdFitness />
            <span className="ms-3 d-none d-sm-inline fs-6">
              Fitness channels
            </span>
          </a>
        </li>
        <li className="nav-item fs-4 my-">
          <a href="/" className="nav-link text-secondary fs-5">
            <FaMotorcycle />
            <span className="ms-3 d-none d-sm-inline fs-6">Foot channels</span>
          </a>
        </li>
        <li className="nav-item fs-4 my-0 mb-1">
          <a href="/" className="nav-link text-secondary fs-5">
            <LuBaby />
            <span className="ms-3 d-none d-sm-inline fs-6">
              Bussiness channels
            </span>
          </a>
        </li>
        <li className="nav-item fs-4 my-1 mb-3">
          <a href="/" className="nav-link text-secondary fs-5">
            <Button
              type="Button"
              className="border btn py-1 rounded-pill but"
              children="Show more"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBare;
