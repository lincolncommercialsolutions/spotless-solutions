import React, { useState } from 'react';
import { Snowflake, Phone, MapPin, Clock, CheckCircle, Mail } from 'lucide-react';

type Page = 'home' | 'services' | 'contact';

export default function TysSpotlessSolutions() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent('Snow Removal Service Inquiry - Ty\'s Spotless Solutions');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nAddress: ${formData.address}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:contact@tysspotless.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', address: '', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-32 md:py-40 px-6">
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <Snowflake
              key={i}
              size={30 + i * 12}
              className="absolute animate-float text-white/40"
              style={{
                top: `${5 + i * 12}%`,
                left: `${8 + i * 11}%`,
                animationDelay: `${i * 0.7}s`,
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`
              }}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-8">
            <Snowflake className="text-blue-200 animate-spin-slow" size={48} />
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight leading-none">
            Ty's Spotless<br />
            <span className="text-blue-200">Solutions</span>
          </h1>
          <p className="text-xl md:text-3xl font-light text-blue-50 mb-12 max-w-4xl mx-auto leading-relaxed">
            Professional Snow Removal Services
            <span className="block text-lg md:text-xl mt-3 text-blue-100">
              Portage, MI & 20-Mile Radius • Fast • Reliable • Fully Insured
            </span>
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-white text-blue-700 font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-white/20 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:bg-blue-50 inline-flex items-center gap-3"
          >
            Get Your Free Quote Today
            <span className="text-2xl">→</span>
          </button>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-3xl mb-8 shadow-lg">
            <MapPin className="text-blue-600" size={44} />
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-6">Proudly Serving Portage & Beyond</h2>
          <p className="text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We provide dependable snow removal services throughout Portage, Michigan and all areas within a{' '}
            <span className="font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">20-mile radius</span>.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-20 text-gray-900">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Residential Driveways', desc: 'Clear, safe driveways after every storm – guaranteed.' },
              { title: 'Sidewalks & Walkways', desc: 'Shoveled paths for your family, visitors, and delivery drivers.' },
              { title: 'Decks & Patios', desc: 'Enjoy your outdoor spaces all winter without the hassle.' },
              { title: 'Seasonal Contracts', desc: 'Worry-free snow removal all season long at a fixed rate.' }
            ].map((service, i) => (
              <div
                key={i}
                className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-blue-100 hover:border-blue-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <CheckCircle className="text-blue-600 group-hover:text-white transition-colors" size={36} />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-20">
            <button
              onClick={() => setCurrentPage('services')}
              className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3"
            >
              See All Services
              <span className="text-2xl">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-20 text-gray-900">Why Homeowners Trust Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Clock, title: '24/7 Availability', desc: "We're on call day or night – snow never sleeps." },
              { icon: CheckCircle, title: 'Fully Insured', desc: 'Peace of mind with full liability and workers comp coverage.' },
              { icon: Snowflake, title: 'Fast Response Time', desc: 'We mobilize quickly after every snowfall.' },
              { icon: Phone, title: 'Simple & Transparent Pricing', desc: 'No hidden fees. Clear quotes upfront.' }
            ].map((item, i) => (
              <div key={i} className="group flex gap-6 bg-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-blue-100 hover:border-blue-300">
                <div className="flex-shrink-0 bg-white p-5 rounded-2xl shadow-md group-hover:bg-blue-600 transition-colors duration-300">
                  <item.icon className="text-blue-600 group-hover:text-white transition-colors" size={36} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const ServicesPage = () => (
    <div className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-3xl mb-8 shadow-lg">
            <Snowflake className="text-blue-600" size={44} />
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-8 text-gray-900">
            Residential Snow Removal
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Professional, reliable snow clearing tailored to homeowners in Portage and surrounding communities.
          </p>
        </div>

        <div className="space-y-8">
          {[
            {
              title: 'Driveway & Walkway Clearing',
              features: [
                'Full driveway plowing and shoveling',
                'Sidewalk and pathway clearing',
                'Steps and entryways hand-shoveled',
                'Ice melt application available'
              ]
            },
            {
              title: 'Seasonal Contracts',
              features: [
                'Unlimited visits all winter',
                'Automatic service after 2"+ snowfall',
                'Priority scheduling',
                'One predictable monthly payment'
              ]
            },
            {
              title: 'Per-Storm & Emergency Service',
              features: [
                'On-demand plowing when you need it',
                '24/7 emergency response',
                'Same-day service during major storms',
                'Flexible scheduling options'
              ]
            }
          ].map((service, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
                <h2 className="text-4xl font-black">{service.title}</h2>
              </div>
              <div className="p-10">
                <ul className="space-y-5">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-5 group">
                      <div className="flex-shrink-0 bg-blue-100 p-2 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                        <CheckCircle className="text-blue-600 group-hover:text-white transition-colors" size={28} />
                      </div>
                      <span className="text-xl text-gray-700 leading-relaxed pt-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white p-16 rounded-3xl shadow-2xl">
          <h3 className="text-4xl md:text-5xl font-black mb-6">Ready for a Snow-Free Winter?</h3>
          <p className="text-2xl mb-10 text-blue-50">Get your free quote in under 60 seconds.</p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-white text-blue-700 font-bold text-2xl px-14 py-6 rounded-2xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center gap-3"
          >
            Request Free Quote
            <span className="text-3xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-3xl mb-8 shadow-lg">
            <Mail className="text-blue-600" size={44} />
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-8 text-gray-900">Get In Touch</h1>
          <p className="text-2xl text-gray-600">
            Fast response • Free quotes • No obligation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-12 rounded-3xl shadow-xl border-2 border-blue-100">
              <h2 className="text-4xl font-black mb-10 text-gray-900">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="bg-blue-100 p-5 rounded-2xl shadow-md">
                    <Phone className="text-blue-600" size={32} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-500 text-sm uppercase tracking-wide mb-2">Call or Text</p>
                    <p className="text-3xl font-bold text-gray-900">(269) 555-SNOW</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-blue-100 p-5 rounded-2xl shadow-md">
                    <Mail className="text-blue-600" size={32} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-500 text-sm uppercase tracking-wide mb-2">Email Us</p>
                    <p className="text-xl text-gray-900 break-all">contact@tysspotless.com</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-blue-100 p-5 rounded-2xl shadow-md">
                    <MapPin className="text-blue-600" size={32} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-500 text-sm uppercase tracking-wide mb-2">Service Area</p>
                    <p className="text-xl text-gray-900">Portage, MI + 20 mile radius</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-12 rounded-3xl shadow-xl border-2 border-blue-100">
            <h2 className="text-4xl font-black mb-10 text-gray-900">Request a Free Quote</h2>
            {submitted && (
              <div className="mb-8 p-5 bg-blue-50 border-2 border-blue-300 text-blue-900 rounded-2xl text-center font-bold text-lg">
                ✓ Opening your email app...
              </div>
            )}
            <div className="space-y-6">
              {[
                { name: 'name', label: 'Your Name *', type: 'text' },
                { name: 'email', label: 'Email Address *', type: 'email' },
                { name: 'phone', label: 'Phone Number', type: 'tel' },
                { name: 'address', label: 'Property Address', type: 'text' }
              ].map(field => (
                <div key={field.name}>
                  <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={(formData as any)[field.name]}
                    onChange={handleInputChange}
                    required={field.label.includes('*')}
                    className="w-full px-6 py-5 border-2 border-blue-100 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-lg"
                    placeholder={field.label.replace(' *', '')}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-6 py-5 border-2 border-blue-100 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 resize-none text-lg"
                  placeholder="Tell us about your driveway, when you need service, etc..."
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-2xl py-6 rounded-2xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center justify-center gap-3"
              >
                Send Message – Get Quote
                <span className="text-3xl">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition group"
              onClick={() => setCurrentPage('home')}
            >
              <div className="bg-blue-100 p-3 rounded-2xl group-hover:bg-blue-600 transition-colors">
                <Snowflake className="text-blue-600 group-hover:text-white transition-colors" size={32} />
              </div>
              <span className="text-3xl font-black text-gray-900">Ty's Spotless Solutions</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {(['home', 'services', 'contact'] as const).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`text-lg font-bold capitalize transition-all pb-1 border-b-4 ${
                    currentPage === page
                      ? 'text-blue-600 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600 border-transparent hover:border-blue-300'
                  }`}
                >
                  {page === 'home' ? 'Home' : page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 mt-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="bg-white/10 p-4 rounded-2xl">
              <Snowflake className="text-blue-200" size={36} />
            </div>
            <span className="text-4xl font-black">Ty's Spotless Solutions</span>
          </div>
          <p className="text-2xl mb-3 text-blue-100 font-semibold">Professional Residential Snow Removal</p>
          <p className="text-xl text-blue-200">Serving Portage, Michigan & Surrounding Communities</p>
          <p className="text-sm text-blue-300 mt-12 font-medium">
            © 2025 Ty's Spotless Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}