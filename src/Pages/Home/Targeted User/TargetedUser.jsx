import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const TargetedUser = () => {
  return (
    <Carousel className="mt-10">
      <div>
        <img src="https://i.ibb.co/V2W8cMJ/Preview-IMage.jpg" />
      </div>

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/RYvwRXb/overworked-multitasking-tech-workers-100672507-orig-100732426-large.webp)",
        }}
      >
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-black text-5xl font-bold">
              For Job Holders
            </h1>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/jVDJW9G/how-to-get-the-teacher-you-want-960x1280.jpg)",
        }}
      >
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white font-bold">
              For Instructors
            </h1>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default TargetedUser;
