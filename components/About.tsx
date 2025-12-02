import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://picsum.photos/400/500?grayscale" 
                alt="Clinic Interior" 
                className="rounded-2xl shadow-lg mt-8"
              />
              <img 
                src="https://picsum.photos/400/500?blur=2" 
                alt="Happy Patient" 
                className="rounded-2xl shadow-lg mb-8"
              />
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h4 className="text-teal-600 font-bold uppercase tracking-wide">About VitalCare</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Dedicated to Continuous & Affordable Care</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Founded on the belief that healthcare should be a right, not a privilege, VitalCare focuses on reducing the barriers to quality medical attention. We specialize in general outpatient services designed to fit your busy life.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our "Continuity of Care" model ensures you see the same team of professionals who know your history, preferences, and health goals. From minor check-ups to managing complex chronic conditions, we walk the journey with you.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h3 className="text-3xl font-bold text-teal-600">15k+</h3>
                <p className="text-slate-500">Patients Served</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-teal-600">98%</h3>
                <p className="text-slate-500">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;