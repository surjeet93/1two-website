
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, HeartHandshake } from "lucide-react";

const CareConnects = () => {
  return (
    <section
      id="care-connects"
      className="relative flex min-h-[570px] items-center justify-center overflow-hidden bg-[#203C32] px-6 py-24 md:min-h-[650px]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('../Images/care-connect-bg.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#142D25]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#142D25]/80 via-[#142D25]/45 to-[#142D25]/70" />

      {/* Decorative Circle */}
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full border border-white/10" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full border border-white/10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10 text-[#DCE8D9] backdrop-blur-md"
        >
          <HeartHandshake size={30} strokeWidth={1.5} />
        </motion.div>

        {/* Small Label */}
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#DCE8D9] md:text-sm">
          Together, We Care
        </p>

        {/* Heading */}
        <h2 className="font-serif text-5xl font-medium leading-tight text-white sm:text-6xl md:text-7xl">
          Care connects
          <span className="block italic text-[#DCE8D9]">
            us.
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
          Better care begins with better connections. Join a community
          bringing pet owners and care providers closer together.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#about"
            className="group inline-flex items-center gap-3 rounded-full bg-[#DCE8D9] px-8 py-4 text-sm font-semibold text-[#203C32] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
          >
            Discover 1TWO
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          <a
            href="#providers"
            className="group inline-flex items-center gap-3 rounded-full border border-white/50 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#203C32]"
          >
            Become a Care Provider
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

        {/* Bottom Text */}
        <div className="mx-auto mt-16 flex items-center justify-center gap-3 text-xs tracking-wider text-white/60">
          <span className="h-px w-10 bg-white/30" />
          ONE COMMUNITY · BETTER CARE
          <span className="h-px w-10 bg-white/30" />
        </div>
      </motion.div>
    </section>
  );
};

export default CareConnects;
