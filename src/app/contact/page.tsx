import React from 'react';

export const metadata = {
  title: "Contact - Fuzara Technologies",
  description: "Get in touch to discuss custom software solutions, enterprise drone operations, or high-end media production.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] pt-32 pb-20 px-6 font-sans text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Partner with <span className="text-[#00C1A3]">Fuzara.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mx-auto md:mx-0">
            Get in touch to discuss custom software solutions, enterprise drone operations, or high-end media production.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Column A: Contact Information */}
          <div className="flex flex-col gap-10">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col gap-8 shadow-2xl">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-white/50 font-semibold mb-2">Headquarters</h3>
                <p className="text-xl font-medium text-white/90">Nairobi, Kenya</p>
              </div>
              
              <div>
                <h3 className="text-sm uppercase tracking-widest text-white/50 font-semibold mb-2">Email</h3>
                <a href="mailto:hello@fuzara.tech" className="text-xl font-medium text-[#00C1A3] hover:text-[#00C1A3]/80 transition-colors">
                  hello@fuzara.tech
                </a>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-widest text-white/50 font-semibold mb-2">Phone</h3>
                <p className="text-xl font-medium text-white/90">+254 (0) 700 000 000</p>
              </div>
            </div>
            
            <div className="bg-[#00C1A3]/10 border border-[#00C1A3]/20 rounded-2xl p-8 flex flex-col gap-4">
               <h3 className="text-lg font-semibold text-[#00C1A3]">Global Reach, Local Impact</h3>
               <p className="text-white/70 leading-relaxed">
                 Whether you are a startup looking for an MVP, or an enterprise scaling operations, our team is ready to deliver world-class technological excellence.
               </p>
            </div>
          </div>

          {/* Column B: Contact Form */}
          <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-white/80">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00C1A3] focus:ring-1 focus:ring-[#00C1A3] transition-all"
                  placeholder="Jane Doe"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-white/80">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00C1A3] focus:ring-1 focus:ring-[#00C1A3] transition-all"
                  placeholder="jane@example.com"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-sm font-medium text-white/80">Service of Interest</label>
                <div className="relative">
                  <select 
                    id="service" 
                    defaultValue=""
                    className="w-full bg-[#1a2333] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00C1A3] focus:ring-1 focus:ring-[#00C1A3] transition-all appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="software">Software Engineering</option>
                    <option value="drones">Enterprise Drone Services</option>
                    <option value="media">Digital Media</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/50">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00C1A3] focus:ring-1 focus:ring-[#00C1A3] transition-all resize-none"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="mt-4 bg-[#00C1A3] text-[#0F172A] font-semibold text-lg py-4 rounded-xl hover:brightness-110 active:brightness-95 transition-all duration-300 shadow-[0_0_15px_rgba(0,193,163,0.3)] hover:shadow-[0_0_25px_rgba(0,193,163,0.5)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
