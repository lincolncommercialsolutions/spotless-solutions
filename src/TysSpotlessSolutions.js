import React, { useState } from 'react';
import { Snowflake, Phone, MapPin, Clock, CheckCircle, Mail, Menu, X } from 'lucide-react';

export default function TysSpotlessSolutions() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent('Snow Removal Service Inquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nAddress: ${formData.address}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:tyloaks11@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', address: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 animate-pulse">
            <Snowflake size={40} className="md:w-15 md:h-15" />
          </div>
          <div className="absolute top-32 right-10 md:right-20 animate-pulse delay-100">
            <Snowflake size={30} className="md:w-10 md:h-10" />
          </div>
          <div className="absolute bottom-20 left-1/4 animate-pulse delay-200">
            <Snowflake size={35} className="md:w-12 md:h-12" />
          </div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            Ty's Spotless Solutions
          </h1>
          <p className="text-lg md:text-2xl mb-6 md:mb-8 text-blue-100 px-4">
            Professional Snow Removal Services in Portage, MI & Surrounding Areas
          </p>
          <button
            onClick={() => navigateTo('contact')}
            className="bg-white text-blue-700 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get a Free Quote
          </button>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <MapPin className="mx-auto mb-4 text-blue-600" size={40} />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 px-4">
            Serving Portage & Beyond
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            We proudly serve Portage, Michigan and all areas within a 20-mile radius. 
            Reliable snow removal when you need it most.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
            Our Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Residential Driveways', desc: 'Keep your driveway clear and safe all winter long' },
              { title: 'Sidewalk Clearing', desc: 'Safe walkways for your family and guests' },
              { title: 'Emergency Services', desc: '24/7 availability for urgent snow removal needs' }
            ].map((service, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all border border-blue-100">
                <CheckCircle className="text-blue-600 mb-4" size={36} />
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 md:mt-12">
            <button
              onClick={() => navigateTo('services')}
              className="bg-blue-600 text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
            Why Choose Us?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {[
              { icon: Clock, title: '24/7 Availability', desc: 'Snow doesn\'t wait, and neither do we. Available around the clock.' },
              { icon: CheckCircle, title: 'Professional Service', desc: 'Trained team with quality equipment for efficient snow removal.' },
              { icon: Snowflake, title: 'Fast Response', desc: 'Quick mobilization to clear your property after every snowfall.' },
              { icon: Phone, title: 'Easy Booking', desc: 'Simple scheduling and transparent pricing. Contact us today!' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0">
                  <item.icon className="text-blue-600" size={28} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const ServicesPage = () => (
    <div className="py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-800 px-4">
          Our Snow Removal Services
        </h1>
        
        <div className="space-y-6 md:space-y-8">
          {[
            {
              title: 'Residential Snow Removal',
              features: [
                'Driveway plowing and clearing',
                'Walkway and sidewalk shoveling',
                'Deck and patio snow removal',
                'Seasonal contracts available',
                'Per-storm service options'
              ]
            },
            {
              title: 'Emergency Services',
              features: [
                '24/7 emergency response',
                'Storm event mobilization',
                'Same-day service available',
                'Heavy snowfall specialists',
                'Ice dam prevention'
              ]
            },
            {
              title: 'Additional Services',
              features: [
                'Salt and ice management',
                'Snow hauling and removal',
                'Roof snow removal',
                'Custom service packages',
                'Free estimates and quotes'
              ]
            }
          ].map((service, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-blue-700">{service.title}</h2>
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-sm md:text-base text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center bg-blue-600 text-white p-6 md:p-8 rounded-lg">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="mb-6 text-sm md:text-base text-blue-100">
            Contact us today for a free quote on any of our services.
          </p>
          <button
            onClick={() => navigateTo('contact')}
            className="bg-white text-blue-600 px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all"
          >
            Request a Quote
          </button>
        </div>
      </div>
    </div>
  );

  const ContactPage = memo(() => (
    <div className="py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-8 md:mb-12 text-base md:text-lg px-4">
          Get in touch for a free quote or to schedule service
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">Get In Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="text-blue-600 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-sm md:text-base text-gray-600">(269) 207-7975</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-blue-600 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-sm md:text-base text-gray-600">tyloaks11@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Service Area</h3>
                    <p className="text-sm md:text-base text-gray-600">Portage, MI & 20 mile radius</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-blue-600 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Hours</h3>
                    <p className="text-sm md:text-base text-gray-600">24/7 Emergency Service Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-4 text-sm">
                Opening your email client...
              </div>
            )}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Property Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm md:text-base"
                  placeholder="Tell us about your snow removal needs..."
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg text-sm md:text-base"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigateTo('home')}>
              <Snowflake className="text-blue-600" size={28} />
              <span className="text-lg md:text-xl font-bold text-gray-800">Ty's Spotless Solutions</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6">
              <button
                onClick={() => navigateTo('home')}
                className={`font-semibold transition-colors ${
                  currentPage === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => navigateTo('services')}
                className={`font-semibold transition-colors ${
                  currentPage === 'services' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => navigateTo('contact')}
                className={`font-semibold transition-colors ${
                  currentPage === 'contact' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-600 hover:text-blue-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              <button
                onClick={() => navigateTo('home')}
                className={`block w-full text-left py-2 px-4 rounded font-semibold transition-colors ${
                  currentPage === 'home' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => navigateTo('services')}
                className={`block w-full text-left py-2 px-4 rounded font-semibold transition-colors ${
                  currentPage === 'services' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => navigateTo('contact')}
                className={`block w-full text-left py-2 px-4 rounded font-semibold transition-colors ${
                  currentPage === 'contact' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Snowflake size={24} />
            <span className="text-lg md:text-xl font-bold">Ty's Spotless Solutions</span>
          </div>
          <p className="text-sm md:text-base text-gray-400 mb-2">Professional Snow Removal Services</p>
          <p className="text-sm md:text-base text-gray-400">Serving Portage, MI & Surrounding Areas</p>
          <p className="text-gray-500 mt-4 text-xs md:text-sm">© 2025 Ty's Spotless Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}