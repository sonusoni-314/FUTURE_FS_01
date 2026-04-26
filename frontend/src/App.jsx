import { useState } from "react";
import axios from "axios";
import "./App.css";

const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];

const backendSkills = ["APIs", "Node.js", "Express.js", "Next.js"];

const certifications = ["Python", "C", "Java", "Business Marketing", "Blockchain"];

const featuredProjects = [
  {
    title: "HireSphere",
    subtitle: "Full Stack Job Portal",
    description:
      "HireSphere is a full stack job portal that helps candidates discover roles and apply with a clean, guided flow. It enables recruiters to post openings, manage applicants, and streamline hiring decisions from a single platform.",
    tags: ["React", "Node.js", "Express.js", "APIs"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "CampusConnect",
    subtitle: "Student Collaboration Platform",
    description:
      "CampusConnect is a full stack platform where students share events, notes, and opportunities in one place. I designed the feed and community modules to keep interactions simple and fast, improving participation across batches.",
    tags: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "QuickCart",
    subtitle: "E-Commerce Web Application",
    description:
      "QuickCart is an end-to-end e-commerce application with product discovery, cart management, and secure checkout flows. The architecture supports clean API integration and a responsive UI that works reliably across devices.",
    tags: ["React", "Express.js", "REST APIs", "DBMS"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "TaskForge",
    subtitle: "Team Productivity Suite",
    description:
      "TaskForge helps teams organize tasks, deadlines, and delivery progress through a role-based dashboard. I focused on intuitive workflow states and real-time updates so project tracking remains clear for both contributors and managers.",
    tags: ["JavaScript", "Node.js", "Express.js", "APIs"],
    demoUrl: "#",
    repoUrl: "#",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/sonusoni999/",
  },
  {
    label: "GitHub",
    url: "https://github.com/sonusoni-314",
  },
];

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormStatus({ type: "", message: "" });
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${apiBaseUrl}/api/contact`, formData);
      setFormStatus({ type: "success", message: response.data.message });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Unable to send your message right now.";
      setFormStatus({ type: "error", message: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-shell">
      <header className="hero" id="home">
        <nav className="top-nav" aria-label="Main navigation">
          <p className="brand">Sonu Soni</p>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">FULL STACK WEB DEVELOPER | OPEN TO WORK</p>
          <h1>I engineer full stack web products that feel polished and perform at scale.</h1>
          <p className="hero-copy">
            I am Sonu Soni, a Full Stack Web Developer based in Bengaluru, India. I build
            responsive applications with strong frontend experiences and reliable backend systems,
            focused on real-world impact and clean execution.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View My Work
            </a>
            <a className="btn btn-ghost" href="#contact">
              Hire Me
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section projects" id="projects">
          <div className="section-head">
            <p className="eyebrow">PROJECTS</p>
            <h2>Proof of work that shows what I can build</h2>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <p className="project-subtitle">{project.subtitle}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-wrap">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    Source Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-head">
            <p className="eyebrow">ABOUT / RESUME</p>
            <h2>Background, academics, and technical strengths</h2>
          </div>

          <div className="about-layout">
            <article className="about-card">
              <h3>Who I Am</h3>
              <p>
                I am pursuing B.E. in Computer Science and Business Systems at BMS Institute of
                Technology and Management with a CGPA of 8.77.
              </p>
              <p>
                I enjoy building practical software solutions, strengthening my system design
                thinking, and shipping applications that solve meaningful user problems.
              </p>
            </article>

            <article className="about-card">
              <h3>Skills</h3>
              <div className="skill-group">
                <p className="skill-title">Frontend</p>
                <div className="stack-grid">
                  {frontendSkills.map((item) => (
                    <span key={item} className="stack-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="skill-group">
                <p className="skill-title">Backend</p>
                <div className="stack-grid">
                  {backendSkills.map((item) => (
                    <span key={item} className="stack-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            <article className="about-card">
              <h3>Certifications</h3>
              <div className="stack-grid">
                {certifications.map((item) => (
                  <span key={item} className="stack-pill">
                    {item}
                  </span>
                ))}
              </div>
              <p>
                Full Stack Web Developer from Bengaluru, India, currently looking for internships
                and full-time opportunities where I can contribute to production-grade web
                products.
              </p>
              <a href="mailto:sonusonisjp@gmail.com" className="resume-link">
                sonusonisjp@gmail.com
              </a>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="resume-link"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="section-head">
            <p className="eyebrow">CONTACT</p>
            <h2>Let&apos;s build something together</h2>
            <p className="hero-copy">
              Connect on
              {" "}
              <a href="https://www.linkedin.com/in/sonusoni999/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              {" "}
              or explore my
              {" "}
              <a href="https://github.com/sonusoni-314" target="_blank" rel="noreferrer">
                GitHub
              </a>
              .
            </p>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={onChange}
              required
              placeholder="Your full name"
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={onChange}
              required
              placeholder="you@example.com"
            />

            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={onChange}
              required
              placeholder="Project opportunity"
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={onChange}
              required
              rows="6"
              placeholder="Tell me about your requirements..."
            />

            <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {formStatus.message && (
              <p className={`form-status ${formStatus.type}`}>{formStatus.message}</p>
            )}
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
