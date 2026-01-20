import { motion } from "motion/react";
import { useState } from "react";
import {
  Users,
  Building2,
  ShieldCheck,
  ArrowRight,
  ArrowUp,
} from "lucide-react";

export function AboutTeaser() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const cards = [
    {
      icon: Users,
      title: "Who We Are",
      short:
        "Maa Parmeswari Cons Private Limited is a Private Limited Company incorporated on 09 October 2021 and registered with ROC Patna.",
      full: (
        <>
          <p>
            Maa Parmeswari Cons Private Limited is a Private Limited Company
            incorporated on 09 October 2021. It is a Non-Governmental Company
            registered with the Registrar of Companies (ROC), Patna, Bihar.
          </p>

          <p className="mt-3">
            The company was earlier registered under CIN
            <strong> U45500BR2021PTC054556</strong>, which was later updated to
            <strong> U21000BR2021PTC054556</strong>. The current status of the
            company is <strong>Active</strong>.
          </p>

          <p className="mt-3">
            The company operates with a strong focus on integrity, compliance,
            and long-term growth.
          </p>
        </>
      ),
    },
    {
      icon: Building2,
      title: "What We Do",
      short:
        "We are engaged in construction and infrastructure development across multiple sectors, including residential, commercial, and industrial buildings, road and railway infrastructure.",
      full: (
        <>
          <p>
            We are engaged in construction and infrastructure development across
            multiple sectors, including residential, commercial, and industrial
            buildings, road and railway infrastructure, and the manufacture of
            paper and paper products.
          </p>

          <p className="mt-3">
            Our work combines technical expertise, quality workmanship, and
            sustainable practices to deliver reliable and durable solutions that
            meet industry standards and client expectations.
          </p>
        </>
      ),
    },
    {
      icon: ShieldCheck,
      title: "Management Info",
      short:
        "The company is led by its directors Mr. Ravi Ranjan Tiwary and Mrs. Pushpa Tiwary, who bring strategic vision and operational expertise.",
      full: (
        <p>
          The company is led by its directors{" "}
          <strong>Mr. Ravi Ranjan Tiwary</strong> and{" "}
          <strong>Mrs. Pushpa Tiwary</strong>, who bring strategic vision,
          operational expertise, and a deep understanding of the construction
          and manufacturing sectors. Their leadership ensures that every project
          is executed with high standards of quality, safety, and compliance.
        </p>
      ),
    },
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-blue-600">Our Company</span>
          </h2>
          <p className="text-gray-600">
            Building reliable infrastructure through expertise, integrity, and
            innovation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col"
              >
                <Icon size={40} className="text-blue-600 mb-4" />

                <h3 className="text-xl font-semibold mb-3">
                  {card.title}
                </h3>

                <div className="text-gray-600 text-sm leading-relaxed flex-1">
                  {isOpen ? card.full : card.short}
                </div>

                <button
                  onClick={() => toggle(index)}
                  className="mt-6 inline-flex items-center gap-2 text-blue-600 font-medium"
                >
                  {isOpen ? "Show Less" : "Learn More"}
                  {isOpen ? <ArrowUp size={16} /> : <ArrowRight size={16} />}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
