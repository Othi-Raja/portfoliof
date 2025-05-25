import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" }); // ← removed `once: true`

  // Animation config with optional delay
  const fadeUp = (delay = 3) => ({
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay },
    },
  });

  return (
    <section className="about-profile-container " ref={sectionRef} >
      <motion.div
        className="profile-header mt-4"
        variants={fadeUp(0)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // ← dynamic visibility
      >
        <img
          src="https://avatar.iran.liara.run/public/52"
          alt="Othi Raja"
          className="profile-avatar"
        />
        <div className="profile-info">
          <h1 className="profile-name">Othi Raja</h1>
          <div className="profile-title">UI/UX Designer</div>
          <div className="profile-location">Based in Chennai, IN</div>
        </div>
      </motion.div>

      <motion.p
        className="profile-summary"
        variants={fadeUp(0.2)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        I'm a UI/UX designer with over 1 years of experience crafting intuitive and engaging digital experiences...
      </motion.p>

      <motion.div
        className="profile-section"
        variants={fadeUp(0.4)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="profile-section-title">Skills</h2>
        <div className="profile-tags">
          {["User Research", "Wireframing", "Prototyping", "Interaction Design", "Visual Design", "Usability Testing", "Design Systems", "Mobile Design", "Web Design", "Accessibility"].map((skill) => (
            <span className="profile-tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="profile-section"
        variants={fadeUp(0.6)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="profile-section-title">Tools</h2>
        <div className="profile-tags">
          {["Figma", "Sketch", "Adobe XD", "InVision", "Miro", "Zeplin", "Jira", "Confluence"].map((tool) => (
            <span className="profile-tag" key={tool}>
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
