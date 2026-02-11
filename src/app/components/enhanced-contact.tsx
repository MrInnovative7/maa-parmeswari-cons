import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "@/app/hooks/useInView";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

export function EnhancedContact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent successfully!", {
      description: "We will get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "C/O Sri Ravi Ranjan Tiwary, Niranjanpur Golambar, Buxar, Bihar – 802116",
      ],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["maaparmeswaricpl@gmail.com"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 XXXXX XXXXX"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday – Friday: 8:00 AM – 6:00 PM",
        "Saturday – Sunday: 9:00 AM – 2:00 PM",
      ],
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let’s discuss how we can help bring your vision
            to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { label: "Full Name", name: "name", type: "text", placeholder: "Name" },
                { label: "Email Address", name: "email", type: "email", placeholder: "@gmail.com" },
                { label: "Phone Number", name: "phone", type: "tel", placeholder: "+91 XXXXX XXXXX" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={(formData as any)[field.name]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-xl flex items-center justify-center gap-2 font-medium"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* INFO + MAP */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-white rounded-xl shadow-md"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{info.title}</h3>
                    {info.details.map((d, i) => (
                      <p key={i} className="text-sm text-gray-600">
                        {d}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* ✅ REAL GOOGLE MAP */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-[280px]">
              <iframe
                title="Maa Construction Buxar"
                src="https://www.google.com/maps?q=Maa+Construction+Buxar&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
