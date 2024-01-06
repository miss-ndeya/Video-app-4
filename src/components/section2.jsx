import React from "react";
import { FaPlayCircle, FaPlay } from "react-icons/fa";

const section2 = () => {
  return (
    <section className="col-10 mx-auto d-flex mb-5 rounded-3 rounded-top-0 justify-content-between align-items-center p">
      <div className="d-flex align-items-center justify-content-center gap-2">
      <FaPlayCircle className="text-secondary" />
        <span className="text-secondary">She what's trending</span>
      </div>

      <div className="rounded-pill border p-2 px-3">
        <span className="border-end p-2 text-secondary">945,321</span>
        <span className="p-2 text-secondary">Follow</span>
      </div>
      <div>
        <button className="py-2 px-3 btn btn-danger rounded-pill">
        <FaPlay className="text-white fs-6" />
          <i className="fa-solid fa-house pe-2"></i> Play All
        </button>
      </div>
    </section>
  );
};

export default section2;
