import { motion } from 'motion/react';
import { useInView } from '@/app/hooks/useInView';
import { Shield, Clock, Users, FileCheck, Heart } from 'lucide-react';
import { Counter } from '@/app/components/counter';

export function EnhancedWhyChoose() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const features = [
    {
      icon: Shield,
      title: 'Quality & Safety',
      description: 'Uncompromising standards in quality control and workplace safety protocols, ensuring excellence in every project.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Proven track record of completing projects on schedule without compromising quality or safety standards.',
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Industry veterans with decades of combined experience bringing expertise to every challenge.',
    },
    {
      icon: FileCheck,
      title: 'Compliance & Trust',
      description: 'Full regulatory compliance and transparent practices building lasting relationships with clients.',
    },
    {
      icon: Heart,
      title: 'Customer Satisfaction',
      description: 'Client-focused approach with 98% satisfaction rate and long-term partnerships across industries.',
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why <span className="text-blue-600">Choose Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Trusted by hundreds of clients for our commitment to excellence, innovation, and integrity
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="flex items-start gap-4 group"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              <Counter end={500} suffix="+" />
            </div>
            <div className="text-sm text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              <Counter end={98} suffix="%" />
            </div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              <Counter end={25} suffix="+" />
            </div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              <Counter end={50} suffix="+" />
            </div>
            <div className="text-sm text-gray-600">Industry Awards</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}