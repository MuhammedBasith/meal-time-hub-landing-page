import React from 'react';
import { Clock, Bike, ShoppingBag, TrendingUp, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">Meal Time Hub</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="text-white hover:text-indigo-200 transition">Features</a>
            <a href="#about" className="text-white hover:text-indigo-200 transition">About</a>
            <a href="#contact" className="text-white hover:text-indigo-200 transition">Contact</a>
          </div>
          <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
          Your Campus Dining,
          <br />
          <span className="text-indigo-200">Simplified</span>
        </h1>
        <p className="text-xl text-white opacity-90 mb-12 max-w-2xl mx-auto">
          Skip the lines, track your meals, and manage your campus dining experience
          all in one place. Welcome to the future of college dining.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">
            Get Started
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20" id="features">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 text-white">
            <ShoppingBag className="h-12 w-12 mb-6 text-indigo-200" />
            <h3 className="text-xl font-semibold mb-4">Online Ordering</h3>
            <p className="opacity-90">
              Order your meals in advance and skip the queue. Choose from a variety
              of dining options across campus.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 text-white">
            <TrendingUp className="h-12 w-12 mb-6 text-indigo-200" />
            <h3 className="text-xl font-semibold mb-4">Meal Tracking</h3>
            <p className="opacity-90">
              Keep track of your meal plan balance and dietary habits with our
              intuitive dashboard.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 text-white">
            <Bike className="h-12 w-12 mb-6 text-indigo-200" />
            <h3 className="text-xl font-semibold mb-4">Campus Delivery</h3>
            <p className="opacity-90">
              Get your favorite meals delivered right to your dorm or campus location.
              Quick, convenient, and reliable delivery service.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-20" id="about">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-white text-center">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300"
              alt="aaa"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">aaa</h3>
            <p className="text-indigo-200 mb-3">position</p>
            <p className="text-sm opacity-90 mb-4">
              Former campus food service director with 10+ years of experience in
              revolutionizing college dining.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-white hover:text-indigo-200"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-white hover:text-indigo-200"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-white text-center">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300"
              alt="bbb"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">bbb</h3>
            <p className="text-indigo-200 mb-3">position</p>
            <p className="text-sm opacity-90 mb-4">
              Full-stack developer passionate about creating seamless user experiences
              in campus dining technology.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-white hover:text-indigo-200"><Github className="h-5 w-5" /></a>
              <a href="#" className="text-white hover:text-indigo-200"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-white text-center">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300"
              alt="ccc"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">ccc</h3>
            <p className="text-indigo-200 mb-3">position</p>
            <p className="text-sm opacity-90 mb-4">
              Expert in logistics and campus food service operations, ensuring
              smooth delivery and service.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-white hover:text-indigo-200"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-white hover:text-indigo-200"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-white text-center">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300"
              alt="ddd"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">ddd</h3>
            <p className="text-indigo-200 mb-3">position</p>
            <p className="text-sm opacity-90 mb-4">
              Dedicated to ensuring every student has the best possible dining
              experience on campus.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-white hover:text-indigo-200"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-white hover:text-indigo-200"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Campus Dining Experience?
          </h2>
          <p className="text-white opacity-90 mb-8">
            Join thousands of students who have already made the switch to smart dining.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-16 border-t border-white border-opacity-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Clock className="h-6 w-6 text-white" />
              <span className="text-xl font-bold text-white">Meal Time Hub</span>
            </div>
            <p className="text-white opacity-70 mb-6">
              Revolutionizing campus dining with smart ordering, tracking, and delivery
              solutions for modern college life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-indigo-200"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-white hover:text-indigo-200"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-white hover:text-indigo-200"><Github className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#features" className="text-white opacity-70 hover:opacity-100">Features</a></li>
              <li><a href="#about" className="text-white opacity-70 hover:opacity-100">About Us</a></li>
              <li><a href="#" className="text-white opacity-70 hover:opacity-100">Blog</a></li>
              <li><a href="#" className="text-white opacity-70 hover:opacity-100">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-white opacity-70 hover:opacity-100">Help Center</a></li>
              <li><a href="#" className="text-white opacity-70 hover:opacity-100">Privacy Policy</a></li>
              <li><a href="#" className="text-white opacity-70 hover:opacity-100">Terms of Service</a></li>
              <li><a href="#" className="text-white opacity-70 hover:opacity-100">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-white opacity-70">
                <MapPin className="h-5 w-5" />
                <span>address??</span>
              </li>
              <li className="flex items-center space-x-3 text-white opacity-70">
                <Mail className="h-5 w-5" />
                <span>contact@mealtimehub.com</span>
              </li>
              <li className="flex items-center space-x-3 text-white opacity-70">
                <Phone className="h-5 w-5" />
                <span>(555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-white opacity-70 pt-8 border-t border-white border-opacity-20">
          <p>© 2024 Meal Time Hub. All rights reserved.</p>
          <p>© Designed with ❤️ by Basith.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;