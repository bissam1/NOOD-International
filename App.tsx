import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import ParallaxVideoBackground from './components/ParallaxVideoBackground';
import AnimatedNav from './components/AnimatedNav';
import HeroSection from './components/HeroSection';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { 
  Building2, 
  Play, 
  ArrowRight, 
  Sparkles, 
  Globe, 
  TrendingUp, 
  Shield, 
  Users,
  Star,
  Award
} from 'lucide-react';
import { motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Hide cursor during loading
    document.body.style.cursor = isLoading ? 'none' : 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [isLoading]);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 500);
  };

  return (
    <Router>
      <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
        {/* Custom Cursor */}
        {!isLoading && <CustomCursor />}

        {/* Preloader */}
        <AnimatePresence>
          {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
        </AnimatePresence>

        {/* Main Content */}
        <AnimatePresence>
          {!isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Parallax Video Background */}
              <ParallaxVideoBackground />

              {/* Navigation */}
              <AnimatedNav isVisible={showContent} />

              {/* Hero Section */}
              <HeroSection isVisible={showContent} />

              {/* Demo Video Section */}
              <motion.section
                className="relative z-10 px-6 py-32"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <div className="max-w-7xl mx-auto">
                  <div className="relative">
                    {/* Glow Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl" />
                    
                    {/* Video Container */}
                    <motion.div
                      className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-600/30 rounded-3xl p-8 shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden group">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=675&fit=crop"
                          alt="NOOD Properties Platform Demo"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Play Button */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
                          whileHover={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                        >
                          <motion.button
                            className="w-24 h-24 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            data-cursor="hover"
                          >
                            <Play className="w-10 h-10 text-white ml-1" />
                          </motion.button>
                        </motion.div>
                      </div>

                      {/* Award Badge */}
                      <motion.div
                        className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-6 shadow-2xl border-4 border-gray-900"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <div className="text-center">
                          <Award className="w-8 h-8 text-gray-900 mx-auto mb-1" />
                          <div className="text-xs font-bold text-gray-900">Best Platform</div>
                          <div className="text-lg font-bold text-gray-900">2024</div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.section>

              {/* Features Section */}
              <motion.section
                className="relative z-10 px-6 py-32 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="max-w-7xl mx-auto">
                  <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-5xl font-bold mb-6">
                      Redefining Real Estate
                      <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent block mt-2">
                        with AI Technology
                      </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                      Experience the future of property investment with our cutting-edge platform
                    </p>
                  </motion.div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        icon: Globe,
                        title: "Global Markets",
                        description: "Access premium properties across 50+ international markets with real-time insights and analytics.",
                        gradient: "from-blue-500 to-cyan-500"
                      },
                      {
                        icon: TrendingUp,
                        title: "Smart Analytics",
                        description: "AI-powered market analysis and investment recommendations tailored to your portfolio goals.",
                        gradient: "from-purple-500 to-pink-500"
                      },
                      {
                        icon: Shield,
                        title: "Secure Transactions",
                        description: "Bank-level security with blockchain verification for all property transactions and documentation.",
                        gradient: "from-green-500 to-emerald-500"
                      }
                    ].map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                      >
                        <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-xl hover:bg-gray-800/50 transition-all duration-300 h-full">
                          <CardContent className="p-8 h-full flex flex-col">
                            <motion.div
                              className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6`}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <feature.icon className="w-8 h-8 text-white" />
                            </motion.div>
                            <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                            <p className="text-gray-300 leading-relaxed flex-1">{feature.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* CTA Section */}
              <motion.section
                className="relative z-10 px-6 py-32"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="max-w-6xl mx-auto text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-5xl md:text-6xl font-bold mb-8">
                      Ready to revolutionize your
                      <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent block">
                        property investments?
                      </span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                      Join thousands of investors who trust NOOD for their global real estate portfolio
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 text-lg px-10 py-6 rounded-xl"
                          data-cursor="hover"
                        >
                          Explore Properties
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </motion.div>
                      
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-gray-400 text-gray-300 hover:bg-white/10 hover:text-white text-lg px-10 py-6 rounded-xl"
                          data-cursor="hover"
                        >
                          <Users className="w-5 h-5 mr-2" />
                          Contact Agent
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.section>

              {/* Contact Section */}
              <motion.section
                className="relative z-10 px-6 py-32 bg-gradient-to-b from-transparent via-black/60 to-transparent"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gold-400">
                    Contact NOOD International Properties
                  </h2>
                  <p className="text-lg text-gray-300 mb-8">
                    Email: <a href="mailto:info@noodproperties.com" className="text-gold-400 underline">info@noodproperties.com</a> <br />
                    WhatsApp: <a href="https://wa.me/971567575075" className="text-gold-400 underline">+971 56 7575 075</a>
                  </p>
                  {!submitted ? (
                    <form
                      className="grid gap-6 text-left"
                      onSubmit={e => {
                        e.preventDefault();
                        setSubmitted(true);
                      }}
                    >
                      <input className="bg-black/60 border border-gold-400 rounded-lg px-4 py-3 text-white" placeholder="Full Name" required />
                      <input className="bg-black/60 border border-gold-400 rounded-lg px-4 py-3 text-white" placeholder="Email" type="email" required />
                      <input className="bg-black/60 border border-gold-400 rounded-lg px-4 py-3 text-white" placeholder="Nationality" required />
                      <input className="bg-black/60 border border-gold-400 rounded-lg px-4 py-3 text-white" placeholder="Budget" required />
                      <textarea className="bg-black/60 border border-gold-400 rounded-lg px-4 py-3 text-white" placeholder="Message" required />
                      <button className="bg-gold-400 text-black font-bold px-8 py-3 rounded-lg" type="submit" data-cursor="hover">
                        Send Message
                      </button>
                    </form>
                  ) : (
                    <div className="text-gold-400 text-xl font-bold mt-8">Thank you! We will contact you soon.</div>
                  )}
                </div>
                {/* Floating WhatsApp Button */}
                <a
                  href="https://wa.me/971567575075"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fixed bottom-8 right-8 z-50 bg-green-500 rounded-full p-4 shadow-lg hover:scale-110 transition"
                  aria-label="WhatsApp"
                >
                  <svg width="32" height="32" fill="white" viewBox="0 0 32 32"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.65.87 5.1 2.36 7.1L4 29l7.14-2.33A12.93 12.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.93 0-3.77-.5-5.36-1.44l-.38-.22-4.24 1.38 1.4-4.13-.25-.4A9.97 9.97 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.26-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.24 1.23.38 1.65.49.69.18 1.32.16 1.82.1.56-.07 1.65-.67 1.89-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z"/></svg>
                </a>
              </motion.section>

              {/* Footer */}
              <motion.footer
                className="relative z-10 px-6 py-16 border-t border-gray-800/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="max-w-6xl mx-auto">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-3 mb-6 md:mb-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-xl">NOOD</div>
                        <div className="text-gray-400 text-sm tracking-wider">INTERNATIONAL PROPERTIES</div>
                      </div>
                    </div>
                    
                    <div className="text-gray-400 text-center md:text-right">
                      <p>&copy; 2024 NOOD International Properties. All rights reserved.</p>
                      <p className="text-sm mt-1">Redefining luxury real estate globally</p>
                    </div>
                  </div>
                </div>
              </motion.footer>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}