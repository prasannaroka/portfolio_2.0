import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        If you&apos;re excited about creating exceptional digital experiences, let&apos;s
        connect! I&apos;m always open to new opportunities and collaborations.
        Whether you have a project idea in mind or simply want to chat about the
        latest trends in frontend development, feel free to reach out.
        <br /><br /> Let&apos;s work together to bring your ideas to life and build
        remarkable digital solutions. You can reach me at
        prasannaroka600@gmail.com or connect with me on linkedIn.
      </p>
      <div className="contact-cta">
        <Button link="mailto:prasannaroka600@gmail.com" text="Say Hello" />
      </div>
    </motion.div>
  );
}

export default Contact;
