import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, FileText, Check } from 'lucide-react';

const AppointmentForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <section id="appointment" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
             <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
               <Check className="w-10 h-10 text-green-600" />
             </div>
             <h3 className="text-3xl font-bold text-slate-900 mb-4">Request Received!</h3>
             <p className="text-lg text-slate-600 mb-8">
               Thank you for choosing VitalCare. Our team will contact you shortly to confirm your appointment time.
             </p>
             <button 
               onClick={() => setSubmitted(false)}
               className="text-teal-600 font-semibold hover:underline"
             >
               Book another appointment
             </button>
           </div>
        </div>
      </section>
    )
  }

  return (
    <section id="appointment" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          <div className="lg:w-5/12 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Book Your Consultation</h2>
            <p className="text-slate-600">
              Prioritize your health with our flexible scheduling. We offer same-day appointments for acute needs and convenient slots for routine check-ups.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-teal-50 p-3 rounded-lg text-teal-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Clinic Hours</h4>
                  <p className="text-sm text-slate-500 mt-1">Mon - Fri: 8:00 AM - 8:00 PM</p>
                  <p className="text-sm text-slate-500">Sat: 9:00 AM - 5:00 PM</p>
                  <p className="text-sm text-slate-500">Sun: Closed</p>
                </div>
              </div>
              
              <div className="w-full h-px bg-slate-100 my-4"></div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-50 p-3 rounded-lg text-teal-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Emergency Contact</h4>
                  <p className="text-sm text-slate-500 mt-1">
                    For life-threatening emergencies, please call 911 immediately.
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    Clinic Line: (555) 019-2834
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-t-4 border-teal-600">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-slate-400" size={18} />
                    <input 
                      required 
                      type="text" 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 text-slate-400" size={18} />
                    <input 
                      required 
                      type="tel" 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
                    <input 
                      required 
                      type="email" 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 text-slate-400" size={18} />
                    <input 
                      required 
                      type="date" 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Time Slot</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 text-slate-400" size={18} />
                    <select className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none appearance-none">
                      <option>Morning (8am - 12pm)</option>
                      <option>Afternoon (12pm - 4pm)</option>
                      <option>Evening (4pm - 8pm)</option>
                    </select>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Reason for Visit</label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 text-slate-400" size={18} />
                    <textarea 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none h-24 resize-none"
                      placeholder="Briefly describe your symptoms or check-up needs..."
                    ></textarea>
                  </div>
                </div>
              </div>
              <button 
                type="submit" 
                className="w-full py-3.5 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-colors shadow-lg shadow-teal-100"
              >
                Confirm Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;