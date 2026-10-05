import React, { useState } from 'react';
import { schoolDetails } from '../data/schoolData';
import { inquiryConfig } from '../config/inquiryConfig';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  Loader2,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gradeLevel: 'English Medium',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Please include a message or inquiry';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const hasWeb3Key = inquiryConfig.web3formsAccessKey && 
                         inquiryConfig.web3formsAccessKey !== "YOUR_ACCESS_KEY_HERE" &&
                         inquiryConfig.web3formsAccessKey.trim() !== "";

      let success = false;

      // 1. Try Web3Forms with FormData (official recommended format)
      if (hasWeb3Key) {
        try {
          const payload = new FormData();
          payload.append("access_key", inquiryConfig.web3formsAccessKey);
          payload.append("name", formData.name);
          payload.append("email", formData.email);
          payload.append("phone", formData.phone);
          payload.append("medium", formData.gradeLevel);
          payload.append("message", formData.message);
          payload.append("subject", `New Admission Inquiry: ${formData.name} (${formData.gradeLevel})`);
          payload.append("from_name", "Shri Dattabal School Kolhapur");

          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: payload
          });

          const result = await response.json();
          if (response.ok && result.success) {
            success = true;
          }
        } catch (web3Err) {
          console.warn("Web3Forms submission notice:", web3Err);
        }
      }

      // 2. Direct free fallback via FormSubmit.co directly to recipientEmail if needed
      if (!success) {
        const recipient = inquiryConfig.recipientEmail || schoolDetails.email || "sdmdkop@gmail.com";
        const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            "Parent Name": formData.name,
            "Email Address": formData.email,
            "Phone Number": formData.phone,
            "School Medium": formData.gradeLevel,
            "Message / Inquiry": formData.message,
            _subject: `New Admission Inquiry - ${formData.name} (${formData.gradeLevel})`,
            _template: "table",
            _captcha: "false"
          })
        });

        const result = await response.json();
        if (response.ok && (result.success === "true" || result.success === true || response.status === 200)) {
          success = true;
        } else {
          throw new Error(result.message || "Form submission failed");
        }
      }

      if (success) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Inquiry form submission error:", err);
      setSubmitError(
        "Could not send inquiry automatically. Please call or email the school office directly at " + 
        (inquiryConfig.recipientEmail || schoolDetails.email) + " or " + schoolDetails.phone
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#04439c] px-3.5 py-1 bg-blue-50 rounded-full border border-blue-100">
            GET IN TOUCH
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
            Contact Shri Dattabal School
          </h2>
          <p className="text-xs sm:text-base text-slate-600">
            We welcome parents and prospective students to connect with Principal Anuradha Rajaram Ayarekar and our administrative office in Kolhapur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-5 sm:space-y-6">
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900">School Office Details</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our school office in Kolhapur is open Monday through Saturday for admission enquiries, circulars, and parent visits.
            </p>

            <div className="space-y-4 pt-1 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-100/60 text-[#04439c] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold text-xs uppercase">School Location & Address</strong>
                  <span className="text-xs text-slate-600 leading-snug block">{schoolDetails.address}</span>
                  <span className="block text-[11px] text-amber-700 font-semibold mt-0.5">Opposite D.S.P. Office, Kasaba Bawada, Kolhapur</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-100/60 text-[#04439c] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold text-xs uppercase">Helpline & Office Phone</strong>
                  <a href="tel:+912312654890" className="text-xs text-[#04439c] hover:underline font-semibold block">{schoolDetails.phone}</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-100/60 text-[#04439c] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold text-xs uppercase">Official Email</strong>
                  <a href="mailto:sdmdkop@gmail.com" className="text-xs text-[#04439c] hover:underline font-semibold block break-all">{schoolDetails.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-100/60 text-[#04439c] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="space-y-1">
                  <strong className="block text-slate-900 font-bold text-xs uppercase">School & Office Timings</strong>
                  <div className="text-xs text-slate-700 space-y-1">
                    <p><strong className="text-amber-800">Nursery / Pre-Primary:</strong> 10:00 AM – 1:30 PM</p>
                    <p><strong className="text-blue-900">English Medium (1st–10th):</strong> 10:00 AM – 4:00 PM</p>
                    <p><strong className="text-teal-900">Semi-English Medium (1st–10th):</strong> 11:00 AM – 5:00 PM</p>
                    <p className="text-[11px] text-slate-500 pt-0.5">Administrative Office: Mon–Sat: 9:30 AM – 5:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Preview for Kolhapur */}
            <div className="pt-2 space-y-2">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
                <iframe
                  title="Shri Dattabal School Kolhapur Map"
                  src={schoolDetails.mapEmbedUrl}
                  width="100%"
                  height="190"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
              <a
                href={schoolDetails.mapQueryUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 text-xs font-semibold text-[#04439c] bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-colors"
              >
                <span>View on Google Maps & Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 sm:p-8 text-center space-y-4"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900">Thank You for Reaching Out</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                    Your inquiry has been received. Our administrative office and Principal Anuradha Rajaram Ayarekar will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', gradeLevel: 'English Medium', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#04439c] text-white text-xs font-bold uppercase tracking-wider cursor-pointer active:scale-95"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 mb-1 sm:mb-2">
                    Admission Inquiry Form
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase mb-1">Parent / Guardian Name *</label>
                      <input
                        type="text"
                        placeholder="e.g. Ramesh Patil"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500 bg-red-50/50' : 'border-slate-300 focus:border-[#04439c]'
                        }`}
                      />
                      {errors.name && <span className="text-[11px] text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase mb-1">Email Address *</label>
                      <input
                        type="email"
                        placeholder="e.g. parent@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500 bg-red-50/50' : 'border-slate-300 focus:border-[#04439c]'
                        }`}
                      />
                      {errors.email && <span className="text-[11px] text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase mb-1">Mobile Phone Number *</label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 98220 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-500 bg-red-50/50' : 'border-slate-300 focus:border-[#04439c]'
                        }`}
                      />
                      {errors.phone && <span className="text-[11px] text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase mb-1">Medium of Interest</label>
                      <select
                        value={formData.gradeLevel}
                        onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#04439c] bg-white cursor-pointer font-medium text-slate-800"
                      >
                        <option value="English Medium">English Medium</option>
                        <option value="Semi-English Medium">Semi-English Medium</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase mb-1">Message / Questions *</label>
                    <textarea
                      rows="4"
                      placeholder="Please mention any questions regarding admissions, documents, or curriculum..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                        errors.message ? 'border-red-500 bg-red-50/50' : 'border-slate-300 focus:border-[#04439c]'
                      }`}
                    />
                    {errors.message && <span className="text-[11px] text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</span>}
                  </div>

                  {submitError && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                      <div className="flex-1 leading-relaxed">{submitError}</div>
                    </div>
                  )}

                  <div className="pt-1 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3.5 sm:py-4 rounded-full bg-[#04439c] hover:bg-[#022c6b] disabled:bg-blue-300 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Admission Inquiry</span>
                        </>
                      )}
                    </button>

                  </div>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Free direct email delivery to school office • Spam protected</span>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

