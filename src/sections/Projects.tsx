import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project1.png",
      projectName: "Car Showcase",
      projectLink: "https://cars-showcase-ogkq.vercel.app/?fbclid=IwAR0fKvR11HbrW5R17UE3wr0Tj7vrgXo06dZK4caNZJSKSU6DSlZ7tVU4Js4",
      projectDescription:
        "It is a Car Showcase application that helps to find varieties of car collections with it's features details. ",
      projectTech: [
        "React",
        "TailwindCSS",
        "Nextjs",
        "Typescript",
      ],
      projectExternalLinks: {
        github: "" ,
        externalLink: "https://cars-showcase-ogkq.vercel.app/?fbclid=IwAR0fKvR11HbrW5R17UE3wr0Tj7vrgXo06dZK4caNZJSKSU6DSlZ7tVU4Js4",
      },
    },
    {
      image: "/project2.png",
      projectName: "Shopping Cart",
      projectLink: "https://github.com/prasannaroka/shopping",
      projectDescription:
        "It is a shopping cart application which helps to select an item for purchasing with it's quantity and amount.",
      projectTech: [
        "Reactjs",
        "TailwindCSS",
        "Nextjs",
        "Typescript",
      ],
      projectExternalLinks: {
        github: "https://github.com/prasannaroka/shopping",
        externalLink: "",
      },
    },
    {
      image: "/project3.png",
      projectName: "Youtube App",
      projectLink: "https://radiant-babka-7a4929.netlify.app/",
      projectDescription:
        "It is a Youtube clone application where we can get all kinds of videos through APIs ",
      projectTech: [
        "Reactjs",
        "TailwindCSS",
        "Redux Toolkit",
        "Rapid API",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://radiant-babka-7a4929.netlify.app/",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
