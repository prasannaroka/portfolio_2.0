import Link from "next/link";
import React, { useEffect, useState } from "react";

function Footer() {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch("https://github.com/prasannaroka")
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <footer>
      <Link
        href="https://www.linkedin.com/in/prasanna-roka-813253259/"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">
          Designed and Built by Prasanna Roka.
        </span>
      </Link>
    </footer>
  );
}

export default Footer;
