
import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  PawPrint,
  ArrowUpRight,
  Search,
  Handshake,
  HelpingHand,
  Sparkles,
} from "lucide-react";

const adoptionFeatures = [
  {
    number: "01",
    icon: Search,
    title: "Meet pets",
    description: "Browse pets from partner shelters and discover your new companion.",
  },
  {
    number: "02",
    icon: Handshake,
    title: "Connect",
    description: "Reach the shelter directly to learn more about a pet.",
  },
  {
    number: "03",
    icon: HelpingHand,
    title: "Support",
    description: "Share a listing, foster, or find ways to help a shelter.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Adopts = () => {
  return (
    <section
      id="adopts"
      className="relative overflow-hidden bg-[#F8F5EE] py-12 md:py-20 border-t border-gray-200"
    >
      {/* Background decoration */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#DCE8D9]/50 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#DCE8D9]/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* Main content */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              variants={itemVariants}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#DCE8D9] bg-white/70 px-4 py-2"
            >
              <Heart size={15} className="text-[#2F5D50]" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-[#2F5D50]">
                1TWO ADOPTS
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="max-w-xl font-serif text-5xl leading-[1.12] text-[#242B27] md:text-7xl"
            >
              Every pet deserves
              <span className="mt-2 block italic text-[#2F5D50]">
                a place to call home.
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-7 max-w-lg text-base leading-8 font-serif text-[#68716A] md:text-lg"
            >
              Our shelter adoption programme. We work with shelters to help
              pets find the families they belong with — and to make choosing
              adoption a little easier.
            </motion.p>

            {/* CTA */}
            <motion.div variants={itemVariants} className="mt-9">
              <a
                href="#adoption-pets"
                className="group inline-flex items-center gap-4 rounded-full bg-[#2F5D50] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#2F5D50]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#24483D]"
              >
                Explore adoption
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={17} />
                </span>
              </a>
            </motion.div>

            {/* Small note */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#DCE8D9]">
                <PawPrint size={20} className="text-[#2F5D50]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#242B27]">
                  A little love changes everything.
                </p>
                <p className="mt-1 text-xs text-[#68716A]">
                  Give a shelter pet a chance at a new beginning.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 35 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative order-2 lg:order-2"
          >
            <div className="relative mx-auto max-w-[560px]">

              {/* Main image */}
              <div className="relative h-[420px] overflow-hidden rounded-[35px] shadow-2xl shadow-[#2F5D50]/10 md:h-[570px]">
                <img
                  src="/Images/adoption-main.jpg"
                  alt="A happy rescue pet waiting for a loving home"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#17251F]/40 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7 right-7">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                    <Sparkles size={14} />
                    A new beginning starts here
                  </span>
                </div>
              </div>

              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-9 -left-4 flex max-w-[270px] items-center gap-4 rounded-2xl border border-[#E7EDE3] bg-white p-4 shadow-xl md:-left-12 md:p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#DCE8D9]">
                  <Heart size={23} className="text-[#2F5D50]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#242B27]">
                    Find your new best friend
                  </p>
                  <p className="mt-1 text-xs text-[#68716A]">
                    Make room for more love.
                  </p>
                </div>
              </motion.div>

              {/* Floating decorative circle */}
              <div className="absolute -right-4 -top-5 flex h-20 w-20 items-center justify-center rounded-full border border-[#DCE8D9] bg-[#F8F5EE] shadow-lg md:-right-8 md:h-24 md:w-24">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2F5D50] text-white md:h-16 md:w-16">
                  <PawPrint size={27} />
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* FEATURE CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mt-28 grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {adoptionFeatures.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-[#DCE8D9] bg-white/70 p-7 transition-all duration-500 hover:border-[#2F5D50]/30 hover:bg-white hover:shadow-xl hover:shadow-[#2F5D50]/5 md:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-widest text-[#9BA69B]">
                    {item.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DCE8D9] text-[#2F5D50] transition-all duration-500 group-hover:bg-[#2F5D50] group-hover:text-white">
                    <Icon size={21} />
                  </div>
                </div>

                <h3 className="mt-8 font-serif text-3xl text-[#242B27]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#68716A]">
                  {item.description}
                </p>

                <div className="mt-7 h-[2px] w-10 bg-[#2F5D50] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Adopts;
