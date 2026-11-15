
import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Route,
  ShieldCheck,
  ArrowRight,
  Navigation,
  LocateFixed,
} from "lucide-react";
import Typewriter from "../animations/Typewriter";

const features = [
  {
    icon: LocateFixed,
    title: "See the walk as it happens",
    description:
      "The live location updates while the service is in progress.",
  },
  {
    icon: Route,
    title: "Follow the route",
    description:
      "Watch the path your dog takes from the first step to the front door.",
  },
  {
    icon: ShieldCheck,
    title: "Only with verified walkers",
    description:
      "Tracking is part of every walk booked through the platform.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
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

const LiveGPS = () => {
  return (
    <section
      id="live"
      className="relative overflow-hidden bg-[#F8F5EE] py-10 md:py-20"
    >
      {/* Background decoration */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#DCE8D9]/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:px-12 lg:grid-cols-2 lg:gap-20">

        {/* LEFT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          className="max-w-xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#DCE8D9] px-5 py-3 text-sm font-semibold text-[#2F5D50]">
              <MapPin size={17} />
              LIVE GPS TRACKING
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mt-7 text-4xl font-bold leading-tight text-[#242B27] md:text-5xl lg:text-6xl"
          >
            <Typewriter
                            text="Follow every walk."
                            delay={2000}
                            speed={100}
                            deleteSpeed={50}
                          />
            <span className="block text-[#2F5D50]">
              Live.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg text-base leading-8 font-serif text-[#68716A] md:text-lg"
          >
            Stay connected while your pet is in care. Follow
            the service in progress and enjoy greater visibility
            and peace of mind.
          </motion.p>

          {/* Features */}
          <motion.div
            variants={containerVariants}
            className="mt-10 space-y-7"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group flex items-start gap-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#DCE8D9] text-[#2F5D50] transition-all duration-300 group-hover:bg-[#2F5D50] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#242B27] transition-colors duration-300 group-hover:text-[#2F5D50]">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#68716A]">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="mt-10">
            <a
              href="#services"
              className="group inline-flex items-center gap-3 rounded-full bg-[#2F5D50] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#24483D] hover:shadow-xl"
            >
              Find a dog walker

              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl"
        >
          {/* Main Image */}
          <div className="relative h-[480px] overflow-hidden rounded-[2rem] bg-[#DCE8D9] shadow-xl md:h-[600px]">

            <img
              src="/Images/dog-walking.jpg"
              alt="Dog walking-Image"
              className="h-full w-full object-cover"
            />
            {/* GPS Route Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute left-5 right-5 top-5 rounded-2xl border border-white/60 bg-white/90 p-5 shadow-xl backdrop-blur-xl md:left-7 md:right-7 md:top-7"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-[#68716A]">
                    WALK TRACKING
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-[#242B27]">
                    Live location
                  </h3>
                </div>

                <span className="flex items-center gap-2 rounded-full bg-[#DCE8D9] px-3 py-2 text-xs font-bold text-[#2F5D50]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#2F5D50]" />
                  LIVE
                </span>
              </div>

              {/* Decorative route map */}
              <div className="relative mt-5 h-36 overflow-hidden rounded-xl bg-[#EAF0E6] p-3">

                <div className="absolute inset-0 opacity-40">
                  <div className="absolute left-0 top-8 h-px w-full rotate-12 bg-[#B6CBB7]" />
                  <div className="absolute left-0 top-20 h-px w-full -rotate-12 bg-[#B6CBB7]" />
                  <div className="absolute left-1/3 top-0 h-full w-px rotate-12 bg-[#B6CBB7]" />
                  <div className="absolute right-1/4 top-0 h-full w-px -rotate-12 bg-[#B6CBB7]" />
                </div>

                <svg
                  viewBox="0 0 320 120"
                  className="relative z-10 h-full w-full"
                  fill="none"
                >
                  <motion.path
                    d="M20 90 C65 90 55 25 115 40 S190 100 220 55 S275 25 300 35"
                    stroke="#2F5D50"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="7 7"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </svg>

                <div className="absolute left-[8%] top-[63%] z-20 flex h-7 w-7 items-center justify-center rounded-full bg-[#2F5D50] text-white shadow-md">
                  <MapPin size={15} />
                </div>

                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-[7%] top-[16%] z-20 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-[#2F5D50] text-white shadow-lg"
                >
                  <Navigation size={15} />
                </motion.div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#68716A]">
                    Tracking status
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#2F5D50]">
                    Walk in progress
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DCE8D9] text-[#2F5D50]">
                  <LocateFixed size={20} />
                </div>
              </div>
            </motion.div>

            {/* Bottom Image Label */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
              <span className="text-sm font-semibold">
                Every step, connected.
              </span>

              <MapPin size={20} />
            </div>
          </div>

          {/* Floating Decorative Circle */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-7 -left-7 hidden h-24 w-24 items-center justify-center rounded-full bg-[#DCE8D9] text-[#2F5D50] shadow-lg md:flex"
          >
            <ShieldCheck size={38} strokeWidth={1.5} />
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default LiveGPS;
