import React, { useState } from "react";
import quotation from "../../assets/quotation.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "./Project.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Project = ({ projects }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div className="project">
      {projects ? (
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {projects.map((project) => {
            const { id, title, type, language, period, contributor, link } =
              project;
            return (
              <SwiperSlide key={id} className="projectItem">
                <img src={quotation} alt="Quotation mark" />
                <ul className="projectInfo">
                  <li className="projectTitle">
                    <p>Title: {title}</p>
                  </li>
                  <li className="projectType">
                    <p>Type: {type}</p>
                  </li>
                  <li className="projectLanguage">
                    <p>Language: {language}</p>
                  </li>
                  <li className="projectPeriod">
                    <p>Period: {period}</p>
                  </li>
                  <li className="projectContributor">
                    <p>Contributor: {contributor}</p>
                  </li>
                  <li className="projectLink">
                    <p>Link: {link}</p>
                  </li>
                </ul>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <div className="noProject">
          We are just about to start working on a project.
        </div>
      )}
    </div>
  );
};

export default Project;
