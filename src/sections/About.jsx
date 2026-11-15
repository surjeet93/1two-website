import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Users,
  Search,
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Care with Love",
      desc: "Every pet deserves kindness, comfort and attention.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Connections",
      desc: "Connecting pet parents with dependable care providers.",
    },
    {
      icon: PawPrint,
      title: "One Pet Community",
      desc: "Bringing pet lovers and caregivers together.",
    },
  ];

  const values = [
    {
      number: "1",
      title: "Trust",
      description:
        "Building confidence through transparency and responsible care.",
      icon: ShieldCheck,
    },
    {
      number: "2",
      title: "Compassion",
      description: "Putting pets and their well-being first.",
      icon: Heart,
    },
    {
      number: "3",
      title: "Connection",
      description: "Bringing pet owners and care providers together.",
      icon: Users,
    },

    {
      number: "4",
      title: "Accessibility",
      description: "Making quality pet care easier to find.",
      icon: Search,
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8F5EE] py-16 md:py-32"
    >
      {/* Decorative background */}

      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#DCE8D9]/60 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT IMAGE COMPOSITION */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative max-w-xl mx-auto w-full"
          >
            {/* Main Image */}

            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
              className="relative rounded-[35px] overflow-hidden h-[420px] md:h-[570px]"
            >
              <img
                src="/images/about-main.jpg"
                alt="A pet owner sharing a loving moment with a dog"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>

            {/* Small Image */}

            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="absolute -bottom-10 -right-3 md:-right-10 w-40 h-44 md:w-56 md:h-60 rounded-[25px] overflow-hidden border-[8px] border-[#F8F5EE] shadow-xl"
            >
              <img
                src="/images/about-small.jpg"
                alt="Happy pet"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Card */}

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-10 -left-3 md:-left-8 bg-white/90 backdrop-blur-lg p-4 md:p-5 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="bg-[#DCE8D9] p-3 rounded-full">
                <Heart className="text-[#2F5D50]" size={23} />
              </div>

              <div>
                <h4 className="font-bold text-[#242B27]">Love First</h4>
                <p className="text-xs text-gray-500">Always for every pet</p>
              </div>
            </motion.div>

            {/* Decorative Circle */}

            <div className="absolute -bottom-16 -left-12 w-40 h-40 rounded-full border-[18px] border-[#DCE8D9]/70 -z-10" />
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="pt-8 lg:pt-0"
          >
            {/* Label */}

            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 bg-[#DCE8D9] text-[#2F5D50] px-5 py-2.5 rounded-full text-sm font-semibold">
                <Sparkles size={16} />
                WHO WE ARE
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h2
              variants={item}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#242B27] leading-[1.12] tracking-tight mt-7"
            >
              More than pet care. A connection that matters
            </motion.h2>

            {/* Description */}

            <motion.p
              variants={item}
              className="text-[#68716A] text-base font-serif md:text-lg leading-8 mt-7"
            >
              1TWO exists to close the distance between people who love animals
              and the people trained to care for them — wherever they are,
              whatever their pet needs.
            </motion.p>

            {/* FEATURES */}

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="mt-9 space-y-6"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    variants={item}
                    whileHover={{ y: -8 }}
                    key={index}
                    className="flex items-start gap-4 group"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#DCE8D9] flex items-center justify-center group-hover:bg-[#2F5D50] transition-colors duration-300">
                      <Icon
                        size={23}
                        className="text-[#2F5D50] group-hover:text-white transition-colors duration-300"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[#242B27]">
                        {feature.title}
                      </h3>

                      <p className="text-sm md:text-base text-[#68716A] mt-1 leading-6">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden min-h-[280px] p-7 rounded-[25px]   bg-[#E7EDE3] border border-[#DCE8D9] hover:bg-[#2F5D50] hover:-translate-y-3 hover:shadow-xl transition-all duration-500 ease-out cursor-pointer"
            >
              {/* Number and Icon */}

              <div className="flex items-center ">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  <div className="text-[#2F5D50]">
                    <value.icon />
                  </div>
                </div>
              </div>

              {/* Content */}

              <div className="mt-12 relative z-10">
                <h2 className="text-2xl font-bold text-[#242B27] group-hover:text-white transition-colors duration-300">
                  {value.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#68716A] group-hover:text-white/80 transition-colors duration-300">
                  {value.description}
                </p>
              </div>

              {/* Decorative Circle */}

              <div
                className="absolute -bottom-16 -right-16 w-36 h-36
                rounded-full border-[20px] border-[#D2DFD0]/70
                  group-hover:border-white/10 transition-all duration-500"
              ></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
