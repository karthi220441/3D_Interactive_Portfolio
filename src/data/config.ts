const config = {
  title: "R Karthikeyan | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of R Karthikeyan, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of R Karthikeyan, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "R.Karthikeyan",
    "portfolio",
    "Pre Final Year EEE student",
    "full-stack developer",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "R Karthikeyan",
  email: "karthikeyan.092005.20@gmail.com",
  

  // for github stars button
  githubUsername: "karthi220441",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    LinkedIn: "https://www.linkedin.com/in/karthi09?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/karthi220441/github",
  },
};
export { config };
