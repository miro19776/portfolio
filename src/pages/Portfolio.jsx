import React, { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Gestion de Stock',
      category: 'Web & Mobile Application',
      description: 'A comprehensive inventory management system designed for businesses to track, manage, and optimize stock levels in real-time. Features include real-time notifications, inventory analytics, and multi-user access.',
      technologies: ['React', 'React Native' , 'Node.js', 'MySQL','XAMPP'],
      image: '📦',
      highlights: ['Real-time inventory tracking', 'Automated alerts', 'Analytics dashboard', 'Mobile synchronization']
    },
    {
      id: 2,
      title: 'Smart Pen',
      category: 'IoT & AI',
      description: 'An intelligent pen device that recognizes handwritten characters and converts them into digital text in real time. The system uses a Random Forest machine learning model for accurate character recognition and handwriting pattern classification, optimized for lightweight and efficient edge processing.',
      technologies: ['Python', 'Scikit-learn (Random Forest)', 'Arduino', 'Machine Learning'],
      image: '✍️',
      highlights: ['Handwriting recognition', 'Real-time processing', 'High accuracy ML model', 'Wireless connectivity']
    },
    {
      id: 3,
      title: 'Inertial Navigation System',
      category: '3D Position Tracking',
      description: 'An advanced inertial navigation system for precise 3D position tracking using accelerometers, gyroscopes, and magnetometers. Critical for embedded systems and IoT applications requiring accurate location data.',
      technologies: ['C/C++', 'IMU Sensors', 'Embedded Systems', 'MATLAB', 'Python'],
      image: '🧭',
      highlights: ['Precise 3D positioning', 'Sensor fusion', 'Real-time processing', 'Low-power design']
    },
    {
      id: 4,
      title: 'JobFounder',
      category: 'Web Platform',
      description: 'A modern job discovery and application platform connecting job seekers with employers. Features include intelligent job matching, and application tracking system.',
      technologies: ['React', 'TypeScript', 'Firebase' , 'Node.js', 'MySQL','XAMPP'],
      image: '💼',
      highlights: ['Job recommendations', 'Resume builder', 'Application tracking', 'Employer dashboard']
    },
    {
      id: 5,
      title: 'Wakkalni',
      category: 'IoT Application',
      description: 'An automated animal feeding system that ensures pets and livestock receive timely, properly portioned meals. Integrates smart scheduling with mobile monitoring for peace of mind.',
      technologies: ['IoT', 'Arduino', 'Node-RED', ' Real-time system integration'],
      image: '🐾',
      highlights: ['Automated scheduling', 'Portion control', 'Mobile monitoring', 'Real-time notifications']
    }
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'React Native', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'RESTful APIs', 'MySQL','XAMPP (Apache / MySQL stack)', 'Python'] },
    { category: 'Embedded Systems', items: ['Arduino', 'C/C++', 'IoT Systems', 'Sensor Integration', 'MQTT' ,'Logic Analyzer (Digital Signal Analysis)'] },
    { category: 'AI & ML', items: ['TensorFlow', 'Machine Learning', 'Data Analysis', 'MATLAB', 'Python'] },
    { category: 'Tools & Platforms', items: ['Git / GitHub', 'Docker', 'VS Code', 'Arduino IDE', 'Figma'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <nav className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              MC
            </div>
            
            <div className="hidden md:flex gap-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-purple-400 transition-colors capitalize text-sm font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-purple-500/20">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block w-full text-left py-2 text-gray-300 hover:text-purple-400 transition-colors capitalize text-sm font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <div className="pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center space-y-8 max-w-2xl">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Mariem Cherif</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                Computer Engineering Student
              </p>
              <p className="text-lg text-gray-400">
                Specialized in Embedded Systems & IoT
              </p>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Passionate about building innovative solutions that bridge hardware and software. 
              Focused on creating intelligent embedded systems and IoT applications that solve real-world problems.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-medium"
              >
                View My Projects
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400/10 transition-all font-medium"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-4 bg-purple-500/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                I'm a Computer Engineering student pursuing a <span className="text-purple-400 font-medium">Licence in Computer Engineering: Embedded Systems and IoT</span>. My academic journey has equipped me with a strong foundation in hardware-software integration, sensor technologies, and intelligent system design.
              </p>
              <p className="text-lg">
                My passion lies in creating innovative solutions at the intersection of embedded systems, IoT, and artificial intelligence. I love tackling complex engineering challenges and transforming ideas into functional, scalable applications that make a real impact.
              </p>
              <p className="text-lg">
                Beyond coding, I'm enthusiastic about continuous learning, exploring emerging technologies, and collaborating with teams to build projects that push the boundaries of what's possible in embedded systems and IoT.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/60 transition-all hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <div className="text-4xl mb-4">{project.image}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-purple-400 text-sm font-medium mb-4">{project.category}</p>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <p className="text-sm text-gray-400 mb-3 font-medium">Key highlights:</p>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 px-4 bg-purple-500/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-xl font-bold text-purple-400">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, sidx) => (
                      <span
                        key={sidx}
                        className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-gray-300 rounded-lg border border-purple-500/30 text-sm font-medium hover:border-purple-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
            <p className="text-gray-300 text-lg">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
            
            <div className="flex gap-6 justify-center flex-wrap">
              <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mariemcherif1976@gmail.com"
                className="p-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center gap-2"
              >
                <span style={{ fontSize: '20px' }}>📩</span>
                <span className="hidden sm:inline">Email</span>
              </a>
              <a
                href="https://github.com/miro19776"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center gap-2"
              >
                <span style={{ fontSize: '20px' }}>🐙</span>
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/mariem-cherif-2663a2360"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center gap-2"
              >
                <span style={{ fontSize: '20px' }}>💼</span>
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-slate-950 border-t border-purple-500/20 py-8 px-4">
          <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
            <p>© 2024 Mariem Cherif. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;