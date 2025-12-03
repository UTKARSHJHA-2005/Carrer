import React, { useState } from 'react';
import { MapPin, Mail, Twitter, Linkedin, Instagram, Send, Sparkles, Globe, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    subject: '',
    message: ''
  });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', category: '', subject: '', message: '' });
  };

  const contactCards = [
    {
      icon: <MapPin className="w-7 h-7" />,
      title: "Our Office",
      content: "The ABESIT Incubation Cell, ABES Institute of Technology, NE-3, Crossing Republik, Ghaziabad, UP 201009",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Mail className="w-7 h-7" />,
      title: "Email Us",
      content: [
        { label: "Support", email: "tranquiex2024@gmail.com" },
        { label: "Privacy", email: "privacytranquiex@gmail.com" },
        { label: "Info", email: "Infotranquiex@gmail.com" }
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Join Community",
      content: "Connect with us on social media and stay updated with the latest features and mindfulness tips.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-6 h-6" />, url: "https://x.com/tranquiex", color: "#1DA1F2", name: "Twitter" },
    { icon: <Linkedin className="w-6 h-6" />, url: "https://www.linkedin.com/company/tranquiex/", color: "#0077B5", name: "LinkedIn" },
    { icon: <Instagram className="w-6 h-6" />, url: "https://www.instagram.com/tranquiex?igsh=aHR4bmZ2dmNpaTh1", color: "#E4405F", name: "Instagram" },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      url: "https://chat.whatsapp.com/I4Z4VUrQaFC792njCV8uDr",
      color: "#25D366",
      name: "WhatsApp"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="relative z-10 px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have questions, suggestions, or want to collaborate? Our team is ready to help you focus on what matters most.
          </p>
        </div>
        {/* Contact Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-20">
          {contactCards.map((card, index) => (
            <div key={index} onMouseEnter={() => setHoveredCard(index)} onMouseLeave={() => setHoveredCard(null)}
              className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
              <div className="relative bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 h-full">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${card.gradient} mb-4 transform transition-transform duration-300 ${hoveredCard === index ? 'scale-110 rotate-6' : ''}`}>
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{card.title}</h3>
                {typeof card.content === 'string' ? (
                  <p className="text-gray-400 leading-relaxed">{card.content}</p>
                ) : (
                  <div className="space-y-3">
                    {card.content.map((item, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-sm text-gray-500 font-medium">{item.label}</span>
                        <a href={`mailto:${item.email}`} className="text-gray-300 hover:text-white transition-colors">
                          {item.email}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Contact Form */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gray-800/30 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Send Us a Message
              </h2>
              <p className="text-gray-400">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input type="text" required value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white">
                  <option value="" disabled>Select a category</option>
                  <option value="Support">Support</option>
                  <option value="Info">Info</option>
                  <option value="Privacy">Privacy</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                  placeholder="How can we help you?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500 resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/25"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Connect With Us</h2>
          <p className="text-gray-400 mb-8">Follow us on social media for updates and mindfulness tips</p>

          <div className="flex justify-center gap-6 flex-wrap">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
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
    </div>
  );
}