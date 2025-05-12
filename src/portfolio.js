/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Alan Zhang",
  title: "Hi everyone, I'm Alan!",
  subTitle: emoji(
    "A passionate computer science student 🧑‍💻 with experience building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native / Expo Router as well as working in the backend with Java and Python. I like learning about cool libraries and frameworks!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1an9fObYk00f5slwMAL9f6jZaMAwGT7vy/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/alanZhang0813",
  linkedin: "https://www.linkedin.com/in/alanlzhang/",
  gmail: "alanzhang3434@gmail.com",
  instagram: "https://www.instagram.com/alanzhangatang/",
  chess_dot_com: "https://www.chess.com/member/alanzhang",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Computer science student with a passion for all things coding",
  skills: [
    emoji(
      "⚡ Develop interactive and efficient full-stack applications for web and mobile platforms."
    ),
    emoji(
      "⚡ Build and optimize scalable backend systems with RESTful APIs and database integrations."
    ),
    emoji(
      "⚡ Implement secure authentication, authorization, and data handling across client-server architectures."
    ),
    emoji("⚡ Playing a bunch of chess")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "C, C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northeastern University",
      logo: require("./assets/images/northeasternLogo.png"),
      subHeader: "Combined BS/MS in Computer Science",
      duration: "September 2022 - May 2026",
      desc: "Concentration in Software and Minor in Mathematics",
      descBullets: [
        "President of Mobile Development Club",
        "Member of Chess A-Team"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend (React, Tailwind, HTML/CSS)",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend (Node.js, Express, REST APIs)",
      progressPercentage: "75%"
    },
    {
      Stack: "Databases (MongoDB, PostgreSQL)",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming Languages (Java, Python, JavaScript)",
      progressPercentage: "80%"
    },
    {
      Stack: "DevOps & Tools (Git, GitHub Actions, Linux)",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "UKG",
      companylogo: require("./assets/images/ukgLogo-1.png"),
      date: "May 2025 – August 2025",
      descBullets: []
    },
    {
      role: "Software Developer Intern",
      company: "Saint-Gobain Performance Plastics",
      companylogo: require("./assets/images/saint-gobainLogo.png"),
      date: "June 2024 – December 2024",
      descBullets: [
        "Engineered a real-time tracking system in Ignition (Java + Python) to close a critical data gap.",
        "Designed an intuitive interface for machine performance monitoring, driving long-term adoption.",
        "Collaborated with cross-functional teams to redesign information displays, providing actionable operational insights.",
        "Optimized plant-wide software through rigorous code reviews, enhancing efficiency and documentation.",
        "Reduced time data discrepancies by 35%, saving over 20 hours per week and improving manufacturing efficiency."
      ]
    },
    {
      role: "Knack Peer Tutor",
      company: "Northeastern University",
      companylogo: require("./assets/images/knackLogo.png"),
      date: "June 2024 – December 2024",
      descBullets: [
        "Mentor students in computer science, algorithms, and data structures, fostering a deeper understanding of key concepts.",
        "Simplify and convey complex computing concepts, ensuring accessibility for diverse learning styles.",
        "Lead research in andragogy, conducting data collection to inform and enhance teaching strategies for adult learners."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 484-506-7558",
  email_address: "alanzhang3434@gmail.com"
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  contactInfo,
  isHireable,
  resumeSection
};
