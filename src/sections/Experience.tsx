import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "Techcare Infosys",
      role: "Frontend Developement Intern",
      url: "https://www.techcareinfosys.com",
      start: "August 2022",
      end: "December 2022",
      shortDescription: [
        "Translated design mockups into interactive web applications using HTML, CSS, and JavaScript.",
        "Collaborated with senior developers to resolve coding challenges and enhance website functionality.",
        "Implemented responsive design techniques for optimal user experiences across devices.",
        "Assisted in integrating RESTful APIs, contributing to dynamic data-driven features.",
        "Utilized Git for version control and participated in code reviews to maintain code quality.",
      ],
    },
    {
      name: "Broadway Infosys ",
      role: "Web Designing Course",
      url: "https://broadwayinfosys.com/",
      start: "March 2022",
      end: "June 2022",
      shortDescription: [
        "Gained proficiency in essential technologies including HTML and CSS, enabling the creation of structured and visually appealing web content.",
        "Acquired practical skills in designing responsive layouts to ensure optimal user experiences across various devices and screen sizes.",
        "Explored the role of JavaScript in enhancing interactivity and user engagement, further enriching the user journey.",
        "Collaborated with peers on design critiques and project evaluations, fostering a creative and collaborative learning environment.",
        "Attained a strong foundation in web design concepts, paving the way for future endeavors in the field of front-end development.",
      ],
    },
  
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
