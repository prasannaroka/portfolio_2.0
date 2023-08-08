import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
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
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hello! I&apos;m a passionate and creative frontend developer with a knack
            for crafting engaging user experiences. With a solid foundation in
            web technologies, I specialize in transforming design concepts into
            functional and visually appealing web applications.
          </p>
          <p className="about-grid-info-text">
            My journey into the world of frontend development began with a
            curiosity about how websites work and a desire to make a tangible
            impact on the digital landscape. Over the years, I&apos;ve honed my
            skills in coding responsive layouts, optimizing performance, and
            creating interactive interfaces that captivate users.
          </p>

          <p className="about-grid-info-text">
            Outside of coding, I find inspiration in travelling, riding &
            learning new topics, which infuse creativity into my work. These
            experiences have taught me that the best solutions often emerge from
            diverse influences and unconventional thinking.
          </p>

          <p className="about-grid-info-text">
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">HTML</li>
            <li className="about-grid-info-list-item">CSS</li>
            <li className="about-grid-info-list-item">JavaScript</li>
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">TailwindCSS</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/Prasanna.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
