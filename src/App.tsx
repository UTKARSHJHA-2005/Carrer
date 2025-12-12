"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import { Sparkles, Target, Zap, Brain, Twitter, Linkedin, Instagram, MessageCircle, Trophy, Award, Medal, Star, Users, Flame, Rocket, Crown } from "lucide-react";

const teamMembers = [
  {
    name: "Rupali Kumari",
    role: "CEO & Social Media Head",
    image: "/rupali.jpg",
    color: "from-pink-500 via-rose-500 to-purple-600"
  },
  {
    name: "Naman Saxena",
    role: "Co-Founder & IOT Head",
    image: "/naman.jpg",
    color: "from-blue-500 via-cyan-500 to-teal-600"
  },
];

const achievements = [
  { image: "/techclasher.jpeg", title: "TechClasher Winner 2025", venue: "GNIOT", desc: "1st place among 1000+ registrations", color: "from-yellow-400 to-orange-500" },
  { image: "/innowar.jpeg", title: "InnoWar Runner-Up 2025", venue: "GNCE", desc: "Runner-up + Certificate of Appreciation", color: "from-purple-400 to-pink-500" },
  { image: "/ideathon.jpg", title: "Ideathon Award", venue: "Innovation Challenge", desc: "Creative excellence recognition", color: "from-blue-400 to-cyan-500" },
  { image: "/bvp.jpg", title: "Special Mention", venue: "BVP Hackathon", desc: "Outstanding innovation approach", color: "from-green-400 to-emerald-500" },
  { image: "/hi-tech.jpg", title: "Hackathon Champion", venue: "Hi-Tech Institute", desc: "Technical depth excellence", color: "from-red-400 to-rose-500" },
  { image: "/sgu.jpg", title: "Theme Winner", venue: "SGU Competition", desc: "Best theme alignment", color: "from-orange-400 to-amber-500" },
  { image: "/srm1.jpg", title: "SRM Champion", venue: "SRM University", desc: "Innovation & presentation excellence", color: "from-indigo-400 to-purple-500" },
  { image: "/media1.jpg", title: "Media Recognition", venue: "Press Coverage", desc: "Featured across multiple platforms", color: "from-pink-400 to-fuchsia-500" },
];

const beliefs = [
  { icon: Target, title: "Discipline as Lifestyle", desc: "Transform your daily approach through disciplined living", color: "from-purple-500 via-pink-500 to-rose-500" },
  { icon: Zap, title: "Measurable Focus", desc: "Quantify and track your productivity journey", color: "from-blue-500 via-cyan-500 to-teal-500" },
  { icon: Brain, title: "Intentional Tech", desc: "Technology that amplifies human potential", color: "from-orange-500 via-amber-500 to-yellow-500" },
];

const socialLinks = [
  { icon: <Twitter className="w-6 h-6" />, url: "https://x.com/tranquiex", color: "#1DA1F2", name: "Twitter" },
  { icon: <Linkedin className="w-6 h-6" />, url: "https://www.linkedin.com/company/tranquiex/", color: "#0077B5", name: "LinkedIn" },
  { icon: <Instagram className="w-6 h-6" />, url: "https://www.instagram.com/tranquiex?igsh=aHR4bmZ2dmNpaTh1", color: "#E4405F", name: "Instagram" },
  { icon: <MessageCircle className="w-6 h-6" />, url: "https://chat.whatsapp.com/I4Z4VUrQaFC792njCV8uDr", color: "#25D366", name: "WhatsApp" }
];


export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-hidden">
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-16 h-16 text-purple-400 mx-auto" />
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Built for the Focused Generation
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Learn about the vision and team behind FocusX
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.h2
            className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Who We Are
          </motion.h2>
          <motion.div
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-xl p-10 rounded-3xl border border-gray-700/50 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Our mission at Tranquiex Technologies Pvt Ltd is to empower people through the use of technology to achieve a more purpose-driven life. FocusX, through technology-based solutions and behaviourally driven designs, will create the path to Purposeful Living today and tomorrow.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Our vision extends beyond simply reducing our users' time spent in front of electronic screens; we are creating healthy, productive relationships between our users and their electronic devices. FocusX has been created with specific features designed to assist users in forming habits that will encourage them to become conscious of their technology's use; form a commitment to their goals and increase productivity; reclaim their time.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We combine neuroscience-based solutions with digital tools that are user-friendly to assist users in developing long-term focus, continuity and self-leadership. FocusX is the next step toward achieving the clarity and discipline necessary to develop Purposeful Living in individuals of all ages and all walks of life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-6xl md:text-7xl font-black mb-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              What We Believe
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {beliefs.map((belief, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${belief.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500`}></div>

                <div className="relative h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-xl">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${belief.color} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <belief.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 text-white">{belief.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{belief.desc}</p>

                  <motion.div
                    className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <belief.icon className="w-32 h-32 text-white" strokeWidth={0.5} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-6xl md:text-7xl font-black mb-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Our Journey
            </span>
          </motion.h2>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-3xl blur-xl opacity-20"></div>

            <div className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 p-12 rounded-3xl border border-gray-700/50">
              <div className="space-y-8">
                <motion.p
                  className="text-xl text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  Founded by students who understood firsthand the challenges of maintaining focus in a digital age.
                </motion.p>

                <motion.p
                  className="text-xl text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  What began as a productivity experiment evolved into a comprehensive focus system that integrates:
                </motion.p>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  {[
                    { text: "Wearable for real-time focus track", color: "from-purple-500 to-pink-500" },
                    { text: "AI-powered distraction analysis", color: "from-blue-500 to-cyan-500" },
                    { text: "Parental accountability features", color: "from-orange-500 to-red-500" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="relative group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-xl blur opacity-30 group-hover:opacity-60 transition`}></div>
                      <div className="relative bg-gray-800/80 p-6 rounded-xl border border-gray-700/50">
                        <Star className={`w-6 h-6 mb-3 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`} />
                        <p className="text-gray-300">{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-6xl md:text-7xl font-black mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Meet the Visionaries
            </span>
          </motion.h2>

          <p className="text-2xl text-gray-400 text-center mb-20 max-w-3xl mx-auto">
            Pioneering the future of focus through <span className="text-purple-400">AI</span>, <span className="text-cyan-400">behavioral psychology</span>, and <span className="text-pink-400">innovative design</span>
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.3, type: "spring" }}
              >
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${member.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-gray-700/50">
                  <div className="relative h-96 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 0.9 }}
                    />
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />

                    <motion.div
                      className={`absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center shadow-xl z-20`}
                      whileHover={{ rotate: 180, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Sparkles className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  <div className="p-8 relative">
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${member.color}`}></div>

                    <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                    <p className={`text-lg font-medium bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-4`}>
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="relative py-32 px-6 pb-40">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-6xl md:text-7xl font-black mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Hall of Glory
            </span>
          </motion.h2>

          <p className="text-2xl text-gray-400 text-center mb-20">
            Recognized for <span className="text-yellow-400">innovation</span> and <span className="text-orange-400">excellence</span> across platforms
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((ach, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <motion.div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${ach.color} rounded-2xl blur-md opacity-0 group-hover:opacity-70 transition duration-500`}
                />

                <motion.div
                  className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700/50 h-full flex flex-col"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative h-60 overflow-hidden">
                    <motion.img
                      src={ach.image}
                      alt={ach.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">{ach.title}</h3>
                    <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${ach.color} bg-clip-text text-transparent`}>{ach.venue}</p>
                    <p className="text-sm text-gray-400 leading-relaxed flex-1">{ach.desc}</p>

                    <motion.div
                      className={`mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${ach.color} transition-all duration-500`}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.h2
          className="text-3xl md:text-5xl font-black mb-7 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-green-400 via-blue-400 to-red-400 bg-clip-text text-transparent">
            Connect With Us
          </span>
        </motion.h2>        <div className="flex justify-center gap-6 flex-wrap">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="group relative">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300"
                style={{ backgroundColor: social.color + '40' }}></div>
              <div className="relative bg-gray-800/50 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-2">
                <div style={{ color: social.color }} className="transform transition-transform duration-300 group-hover:rotate-12">
                  {social.icon}
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
