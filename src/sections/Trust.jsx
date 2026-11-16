import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Fingerprint,
  FileCheck,
  UserCheck,
  ArrowUpRight,
  BadgeCheck,
  HeartHandshake,
} from "lucide-react";
import Typewriter from "../animations/Typewriter";

const trustPoints = [
  {
    number: "01",
    title: "Identity verification",
    description:
      "Every provider's identity is checked before joining our pet care community.",
    icon: Fingerprint,
  },
  {
    number: "02",
    title: "Background checks",
    description:
      "We review provider backgrounds to help create a safer experience.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Provider profiles",
    description:
      "Explore provider details, experience and relevant qualifications before choosing.",
    icon: UserCheck,
  },
  {
    number: "04",
    title: "Transparency",
    description:
      "Clear information helps pet parents make confident and informed decisions.",
    icon: FileCheck,
  },
];

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
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

const Trust = () => {
  return (
    <section
      id="trust"
      className="relative overflow-hidden bg-[#F8F5EE] px-5 py-24 md:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#DCE8D9]/70 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-7xl"
      >
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col lg:flex-row lg:justify-between items-center gap-4"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#DCE8D9] px-5 py-2 text-sm font-semibold  tracking-wider text-[#2F5D50]">
              <ShieldCheck size={17} />
              TRUST & SAFETY
            </span>

            <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-[#242B27] md:text-5xl lg:text-6xl">
              <Typewriter
                text="Verified before they"
                delay={2000}
                speed={100}
                deleteSpeed={50}
              />
              <span className="block text-[#2F5D50]">meet your pet.</span>
            </h2>
          </div>
          <div>
            <p className="mt-5 max-w-xl text-base font-serif leading-8 text-[#68716A] md:text-lg">
              We believe peace of mind starts with trust. That's why
              verification is an important part of the 1TWO experience.
            </p>
          </div>
        </motion.div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            <div className="relative h-[430px] overflow-hidden rounded-[30px] md:h-[540px]">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="group relative"
              >
                <img
                  src="/Images/trust-pet.jpg"
                  alt="A happy dog with a caring pet professional"
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#14271D]/50 to-transparent" />

              <div className="absolute bottom-7 left-7 right-7">
                <p className="font-serif text-3xl font-bold text-white md:text-4xl">
                  Because every pet deserves the best care.
                </p>
              </div>
            </div>

            {/* Floating Verification Badge */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="absolute -right-3 top-8 flex items-center gap-3 rounded-2xl border border-[#DCE8D9] bg-white p-4 shadow-xl md:-right-6 md:p-5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DCE8D9]">
                <BadgeCheck size={27} className="text-[#2F5D50]" />
              </div>

              <div>
                <h3 className="font-bold text-[#242B27]">Trust matters</h3>
                <p className="text-xs text-[#68716A]">Safety comes first</p>
              </div>
            </motion.div>

            {/* Decorative Circle */}
            <div className="absolute -bottom-7 -left-7 -z-10 h-36 w-36 rounded-full border-[18px] border-[#DCE8D9]" />
          </motion.div>

          {/* Right Trust Points */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.2,
            }}
            className="space-y-4"
          >
            {trustPoints.map((item) => (
              <motion.div
                key={item.number}
                variants={itemVariants}
                whileHover={{ x: 7, scale: 1.01 }}
                className="group flex gap-4 rounded-2xl border border-[#DCE8D9] bg-[#E7EDE3]/70 p-5 transition-all duration-500 hover:border-[#2F5D50] hover:bg-[#2F5D50] hover:shadow-lg md:gap-5 md:p-6"
              >
                {/* Number */}
                <div className="pt-1">
                  <span className="font-serif text-xl font-bold text-[#2F5D50]/50 transition-colors group-hover:text-white/60">
                    {item.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <item.icon size={23} className="text-[#2F5D50]" />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#242B27] transition-colors group-hover:text-white md:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#68716A] transition-colors group-hover:text-white/80">
                    {item.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={20}
                  className="mt-1 shrink-0 text-[#2F5D50] transition-all duration-500 group-hover:rotate-45 group-hover:text-white"
                />
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="pt-5"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#2F5D50] px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#242B27] hover:shadow-xl"
              >
                How verification works
                <ArrowUpRight size={19} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex flex-col items-center justify-center gap-3 border-t border-[#DCE8D9] pt-10 text-center"
        >
          <HeartHandshake size={30} className="text-[#2F5D50]" />

          <h3 className="font-serif text-2xl font-bold text-[#242B27]">
            Trust is at the heart of every connection.
          </h3>

          <p className="max-w-xl text-sm leading-7 text-[#68716A]">
            Helping pet parents connect with care providers with greater
            confidence and peace of mind.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Trust;
