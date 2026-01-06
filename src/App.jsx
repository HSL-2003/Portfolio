import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles, Float } from '@react-three/drei';
import { Github, Linkedin, Mail, Code2, ExternalLink, Terminal, Cpu, Database, Facebook, Instagram, Camera, Download, Award } from 'lucide-react';
import './App.css';

// --- 3D Components ---

function Background3D() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <color attach="background" args={['#050505']} />

        {/* Subtle moving stars */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        {/* Floating subtle sparkles for depth */}
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
          <Sparkles count={50} scale={10} size={2} speed={0.4} opacity={0.5} color="#22d3ee" />
        </Float>
      </Canvas>
    </div>
  );
}

// --- Main App Component ---

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="app">
      <Background3D />

      {/* Progress Bar */}
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'var(--accent)',
          transformOrigin: '0%',
          zIndex: 1000
        }}
      />

      {/* Navigation */}
      <nav>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Code2 className="text-accent" size={28} style={{ color: 'var(--accent)' }} />
            <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>Portfolio.</span>
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#about" className="nav-link">About</a>
            <a href="#certificates" className="nav-link">Certificates</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            <h1>
              Frontend <span style={{ color: 'var(--accent)' }}>Web Developer</span>.
            </h1>
            <p style={{ maxWidth: '600px', margin: '2rem 0', fontSize: '1.25rem' }}>
              I'm <strong>Hoang Son Lam</strong>- a Frontend Web Developer focused on creating immersive, accessible, and performant web applications.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="lamhoangson.pdf" download className="btn-primary">
                <Download size={20} /> Download CV
              </a>
              <a href="https://github.com/HSL-2003" target="_blank" rel="noreferrer" className="btn-outline">
                <Github size={20} /> GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            {/* PROFILE IMAGE SLOT */}
            <div style={{
              position: 'relative',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              border: '2px solid rgba(34, 211, 238, 0.3)',
              background: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 50px rgba(34, 211, 238, 0.1)'
            }}>



              {<img
                src="59991.jpg"
                alt="Hoang Son Lam"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2>About Me</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
            <div className="glass-card">
              <p style={{ marginBottom: '1.5rem' }}>
                I started my journey in web development with a curiosity for how things work on the internet. Fast forward to today, and I've had the privilege of building software for various clients and collaborating with talented people.
              </p>
              <p>
                My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients. I enjoy the intersection of design and engineering.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Tech Stack</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <SkillItem icon={<Terminal size={20} />} title="Frontend" skills="React, Tailwind, Three.js" />
                <SkillItem icon={<Database size={20} />} title="Backend" skills="MySQL Server,ASP.NET Core" />
                <SkillItem icon={<Cpu size={20} />} title="Tools" skills="Git, Docker, Figma" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="section container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Certificates</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            <CertificateCard
              imgSrc="co1.jpg"
              title="Academic Skills For University Success"
              issuer="Coursera"
              date="2022"
              desc="Developed academic skills including critical thinking, academic writing, research methods, and effective study strategies for university-level learning.
"
            />
            <CertificateCard
              imgSrc="co2.jpg"
              title="Project Management Principles and Practices"
              issuer="Coursera"
              date="2024"
              desc="Learned core project management concepts such as project planning, scheduling, risk management, teamwork, and stakeholder communication."
            />
            <CertificateCard
              imgSrc="co3.jpg"
              title="User Experience Research and Design"
              issuer="Coursera"
              date="2024"
              desc="Gained knowledge in UX research, user-centered design, usability testing, wireframing, and improving user experience through data-driven design decisions."
            />
            <CertificateCard
              imgSrc="co4.jpg"
              title="CertNexus Certified Ethical Emerging Technologist"
              issuer="Coursera"
              date="2023"
              desc="Understood ethical issues in emerging technologies, including data privacy, cybersecurity basics, AI ethics, and responsible technology use."
            />
            <CertificateCard
              imgSrc="co5.jpg"
              title="Basic Of Web Development & Coding"
              issuer="Coursera"
              date="2023"
              desc="Learned the fundamentals of web development, including HTML, CSS, basic JavaScript, and core concepts of building simple and responsive websites."
            />
            <CertificateCard
              imgSrc="co6.jpg"
              title="Computer Communication"
              issuer="Coursera"
              date="2022"
              desc="Studied computer communication concepts such as data transmission, network models, protocols, and basic networking principles."
            />
            <CertificateCard
              imgSrc="co8.jpg"
              title="Software Development Lifecycle"
              issuer="Coursera"
              date="2023"
              desc="Learned the full software development lifecycle, including requirement analysis, design, development, testing, deployment, and maintenance."
            />

          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>My Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            <ProjectCard
              link="https://bilco-manage-tna5.vercel.app/"
              imgSrc="bilco.jpg"
              title="Bilco Management System"
              desc="A Web Application for Bilco Management System"
              tags={['React', 'Three.js', '.Net Core']}
              color="#22d3ee"
            />
            <ProjectCard
              link="https://ohm-lab-management-system.vercel.app/"
              imgSrc="ohmlab.jpg"
              title="Ohmlab Electronics Lab"
              desc="A Web Application for Ohmlab Electronics Lab to manage the lab and schedule"
              tags={['Next.js', 'Tailwind CSS']}
              color="#a78bfa"
            />
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section container" style={{ textAlign: 'center', minHeight: '60vh' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Get In Touch</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', color: 'var(--text-muted)', lineHeight: '1.8' }}>
              I am actively seeking new opportunities as a Web Developer. If you are looking for a dedicated team player to contribute to your company's success, I would love to hear from you. <br />
              You can reach me directly at <strong style={{ color: 'var(--text-main)' }}>(+84) 899 901 359</strong> or via email below.
            </p>
          </div>
          <a href="mailto:Hoangsonlam97@gmail.com" className="btn-primary" style={{ fontSize: '1.25rem', padding: '1rem 3rem', marginBottom: '3rem' }}>
            <Mail size={24} /> Gmail
          </a>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <SocialLink href="https://github.com/HSL-2003" icon={<Github size={24} />} />
            <SocialLink href="https://www.facebook.com/hoang.son.lam.446973/" icon={<Facebook size={24} />} />
            <SocialLink href="https://www.instagram.com/hslaaam/" icon={<Instagram size={24} />} />
          </div>

          <footer style={{ marginTop: '4rem', fontSize: '0.875rem', opacity: 0.5 }}>
            <p>&copy; 2026 Hoang Son Lam. </p>
          </footer>
        </motion.div>
      </section>
    </div>
  );
}

// --- Helper Components ---

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="glass-card"
      style={{
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-main)',
        transition: 'all 0.3s ease'
      }}
    >
      {icon}
    </a>
  );
}

function SkillItem({ icon, title, skills }) {
  return (
    <div className="glass-card" style={{ padding: '1.5rem' }}>
      <div style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>{icon}</div>
      <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{title}</h4>
      <p style={{ fontSize: '0.875rem', margin: 0 }}>{skills}</p>
    </div>
  );
}

function CertificateCard({ title, issuer, date, desc, imgSrc }) {
  return (
    <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', overflow: 'hidden', padding: 0 }}>
      {/* Certificate Image Preview */}
      <div style={{ height: '200px', width: '100%', overflow: 'hidden', borderBottom: '1px solid var(--glass-border)', position: 'relative' }}>
        {/* Placeholder for when image is missing */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(34, 211, 238, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 0 }}>
          <Award size={48} style={{ opacity: 0.2, color: 'var(--accent)' }} />
        </div>
        <img
          src={imgSrc}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative', zIndex: 1 }}
          onError={(e) => e.target.style.display = 'none'} // Hide broken image links to show placeholder
        />
      </div>

      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <span style={{
              fontSize: '0.75rem',
              padding: '0.25rem 0.75rem',
              background: 'rgba(34, 211, 238, 0.1)',
              borderRadius: '99px',
              color: 'var(--accent)',
              fontWeight: '600'
            }}>
              {issuer}
            </span>
          </div>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{date}</span>
        </div>

        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ flex: 1, marginBottom: '1.5rem', fontSize: '0.95rem' }}>{desc}</p>

      </div>
    </div>
  )
}

function ProjectCard({ title, desc, tags, color, link, imgSrc }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        textDecoration: 'none',
        color: 'inherit',
        cursor: 'pointer',
        overflow: 'hidden', // Ensure image stays within border radius
        padding: 0 // Remove padding for full-width image
      }}
    >
      <div style={{
        height: '200px',
        width: '100%',
        background: `linear-gradient(45deg, ${color}20, transparent)`,
        borderBottom: `1px solid ${color}40`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        {/* Fallback Icon */}
        <Code2 size={48} color={color} style={{ opacity: 0.8, position: 'absolute' }} />

        {/* Image (if provided) */}
        {imgSrc && (
          <img
            src={imgSrc}
            alt={title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative', zIndex: 1 }}
            onError={(e) => e.target.style.display = 'none'}
          />
        )}
      </div>

      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{title}</h3>
        <p style={{ flex: 1, marginBottom: '1.5rem' }}>{desc}</p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {tags.map(tag => (
            <span key={tag} style={{
              fontSize: '0.75rem',
              padding: '0.25rem 0.75rem',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '99px',
              color: 'var(--text-muted)'
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export default App;
