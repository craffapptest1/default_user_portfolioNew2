import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import { FiCode, FiGlobe } from "react-icons/fi";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  John Developer
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 font-medium">
                  Full Stack Developer
                </p>
                <p className="max-w-[600px] text-gray-500 md:text-lg leading-relaxed">
                  Crafting digital experiences through clean code and innovative design. 
                  Passionate about creating solutions that make a difference.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#portfolio"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-indigo-600 px-8 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  View My Work
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-gray-200 bg-white px-8 text-sm font-medium shadow-md transition-all duration-300 hover:bg-gray-50 hover:border-indigo-300 hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="flex-1 max-w-md lg:max-w-lg">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl transform rotate-6 opacity-20"></div>
                <Image
                  src="https://images.unsplash.com/photo-1653643256651-8782d4e8dc2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDg5NTcwNDh8&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="John Developer - Portfolio"
                  width={500}
                  height={600}
                  className="relative w-full h-auto object-cover rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                About Me
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600 md:text-lg">
                A passionate developer with a keen eye for detail and a love for creating meaningful digital experiences.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  With over 3 years of experience in web development, I specialize in creating 
                  responsive, user-friendly applications using modern technologies. I believe in 
                  writing clean, maintainable code and staying up-to-date with industry best practices.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or enjoying a good cup of coffee while reading about the 
                  latest trends in tech.
                </p>
                <Link
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 h-10 px-6 rounded-lg bg-indigo-600 text-white font-medium transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-1"
                >
                  <FaDownload className="w-4 h-4" />
                  Download Resume
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FiCode className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
                  <p className="text-sm text-gray-600">React, Next.js, TypeScript, Tailwind CSS</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FiGlobe className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Backend</h3>
                  <p className="text-sm text-gray-600">Node.js, Python, FastAPI, PostgreSQL</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Design</h3>
                  <p className="text-sm text-gray-600">Figma, UI/UX, Responsive Design</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FaGithub className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Tools</h3>
                  <p className="text-sm text-gray-600">Git, Docker, AWS, Vercel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Featured Projects
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600 md:text-lg">
                A selection of my recent work showcasing different skills and technologies.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600697395543-ef3ee6e9af7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDg5NTcwNDl8&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="E-commerce Platform"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      <Link href="#" className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors">
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </Link>
                      <Link href="#" className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors">
                        <FaGithub className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">E-commerce Platform</h3>
                  <p className="text-gray-600 mb-4">Full-stack e-commerce solution with payment integration and admin dashboard.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">React</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Node.js</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">MongoDB</span>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1461958508236-9a742665a0d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDg5NTcwNTB8&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Task Management App"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      <Link href="#" className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors">
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </Link>
                      <Link href="#" className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors">
                        <FaGithub className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Task Management App</h3>
                  <p className="text-gray-600 mb-4">Collaborative task management tool with real-time updates and team features.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Next.js</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">TypeScript</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">Firebase</span>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1634316005962-98e2462c937e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDg5NTcwNTF8&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Weather Dashboard"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      <Link href="#" className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors">
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </Link>
                      <Link href="#" className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors">
                        <FaGithub className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Weather Dashboard</h3>
                  <p className="text-gray-600 mb-4">Beautiful weather app with location-based forecasts and interactive charts.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">React</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">Chart.js</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">API</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-indigo-600 px-8 text-sm font-medium text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:shadow-lg hover:-translate-y-1"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                What People Say
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600 md:text-lg">
                Testimonials from clients and colleagues I've had the pleasure to work with.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-yellow-400 rounded-full"></div>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "John delivered an exceptional web application that exceeded our expectations. 
                  His attention to detail and technical expertise made the entire process smooth."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">Product Manager, TechCorp</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-yellow-400 rounded-full"></div>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Working with John was a fantastic experience. He's professional, reliable, 
                  and has a great understanding of modern web development practices."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Mike Chen</p>
                    <p className="text-sm text-gray-600">CEO, StartupXYZ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Let's Work Together
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600 md:text-lg">
                Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">john@example.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com"
                    className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-1"
                  >
                    <FaGithub className="w-6 h-6" />
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </Link>
                </div>
              </div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full h-12 bg-indigo-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-1 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
