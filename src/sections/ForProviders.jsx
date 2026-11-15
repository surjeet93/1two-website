
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Users,
  CalendarCheck,
  UserRound,
  TrendingUp,
  Star,
  ShieldCheck,
  BriefcaseBusiness,
  Clock3,
} from "lucide-react";
import Typewriter from "../animations/Typewriter";

const benefits = [
  {
    number: "01",
    icon: Users,
    title: "Discover new clients",
    description:
      "Be found by owners already searching for what you offer.",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Manage bookings",
    description:
      "Keep requests, schedules and details in one place.",
  },
  {
    number: "03",
    icon: UserRound,
    title: "Build your presence",
    description:
      "A professional profile that shows your work and experience.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Grow your business",
    description:
      "Build a reputation on real bookings and real reviews.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

const ForProviders = () => {
  return (
    <section
      id="providers"
      className="relative overflow-hidden bg-[#F8F5EE] py-20 md:py-24"
    >
      {/* Background Decoration */}
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#DCE8D9]/50 blur-3xl" />
      <div className="absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-[#E7EDE3] blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">

        {/* LEFT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="relative z-10"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#DCE8D9] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2F5D50]">
              <span className="h-2 w-2 rounded-full bg-[#2F5D50]" />
              For Care Providers
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mt-7 max-w-xl text-4xl font-semibold leading-[1.15] tracking-tight text-[#242B27] sm:text-5xl lg:text-[58px]"
          >
            <Typewriter
                text="More opportunities."
                delay={2000}
                speed={100}
                deleteSpeed={50}
              />
            <span className="mt-2 block text-[#2F5D50]">
              More time for care.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg text-base font-serif leading-8 text-[#68716A] md:text-lg"
          >
            Connect with pet owners looking for trusted care. Manage your
            bookings, grow your client base and spend more time doing what
            you love.
          </motion.p>

          {/* BENEFITS */}
          <motion.div
            variants={containerVariants}
            className="mt-10 grid gap-6 sm:grid-cols-2"
          >
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  variants={itemVariants}
                  key={item.number}
                  className="group rounded-2xl border border-[#E3E9E0] bg-white/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F5D50]/30 hover:bg-white hover:shadow-xl hover:shadow-[#2F5D50]/5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DCE8D9] text-[#2F5D50] transition-colors duration-300 group-hover:bg-[#2F5D50] group-hover:text-white">
                      <Icon size={21} />
                    </div>

                    <span className="text-sm font-semibold tracking-widest text-[#A4B3A4]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-[#242B27]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#68716A]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="mt-10">
            <a
              href="#"
              className="group inline-flex items-center gap-4 rounded-full bg-[#2F5D50] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#2F5D50]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#24483E] hover:shadow-xl"
            >
              Join as a Care Provider

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT DASHBOARD PREVIEW */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[550px]"
        >
          {/* Decorative Circle */}
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#DCE8D9] md:h-56 md:w-56" />

          {/* Main Dashboard */}
          <div className="relative rounded-[30px] border border-[#E3E9E0] bg-white p-5 shadow-2xl shadow-[#2F5D50]/10 sm:p-7">

            {/* Dashboard Header */}
            <div className="flex items-center justify-between border-b border-[#EDF0EB] pb-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-[#8A948B]">
                  Provider Dashboard
                </p>
                <h3 className="mt-1 text-xl font-semibold text-[#242B27]">
                  Your workspace
                </h3>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DCE8D9] text-[#2F5D50]">
                <BriefcaseBusiness size={19} />
              </div>
            </div>

            {/* Profile Card */}
            <div className="mt-6 rounded-2xl bg-[#F8F5EE] p-4 sm:p-5">
              <div className="flex items-center gap-4">
                <div className="h-[76px] w-[76px] shrink-0 overflow-hidden rounded-2xl bg-[#DCE8D9]">
                  <img
                    src="/Images/provider-profile.jpg"
                    alt="Pet care provider"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-lg font-semibold text-[#242B27]">
                      Provider Profile
                    </h4>
                    <ShieldCheck size={17} className="text-[#2F5D50]" />
                  </div>

                  <p className="mt-1 text-sm text-[#68716A]">
                    Professional pet care
                  </p>

                  <div className="mt-2 flex items-center gap-1 text-sm text-[#2F5D50]">
                    <Star size={14} fill="currentColor" />
                    <span className="font-semibold">Reviews</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 border-t border-[#E2E8DE] pt-4">
                <div>
                  <p className="text-xs text-[#89948A]">Services</p>
                  <p className="mt-1 text-sm font-semibold text-[#242B27]">
                    Your services
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[#89948A]">Experience</p>
                  <p className="mt-1 text-sm font-semibold text-[#242B27]">
                    Your profile
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[#89948A]">Reviews</p>
                  <p className="mt-1 text-sm font-semibold text-[#242B27]">
                    Feedback
                  </p>
                </div>
              </div>
            </div>

            {/* Dashboard Cards */}
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#E8EDE6] p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DCE8D9] text-[#2F5D50]">
                  <CalendarCheck size={18} />
                </div>

                <p className="mt-4 text-sm text-[#68716A]">
                  Booking management
                </p>

                <p className="mt-1 text-sm font-semibold text-[#242B27]">
                  Stay organised
                </p>
              </div>

              <div className="rounded-2xl border border-[#E8EDE6] p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DCE8D9] text-[#2F5D50]">
                  <Clock3 size={18} />
                </div>

                <p className="mt-4 text-sm text-[#68716A]">
                  Your schedule
                </p>

                <p className="mt-1 text-sm font-semibold text-[#242B27]">
                  Manage your time
                </p>
              </div>
            </div>

            {/* Bottom Profile Message */}
            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#2F5D50] p-4 text-white">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                <ShieldCheck size={20} />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Build your presence
                </p>
                <p className="mt-1 text-xs leading-5 text-white/75">
                  Show pet owners what makes your care special.
                </p>
              </div>
            </div>
          </div>

          {/* Floating Decorative Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-8 -left-5 hidden items-center gap-3 rounded-2xl border border-[#E3E9E0] bg-white p-4 shadow-xl sm:flex"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#DCE8D9] text-[#2F5D50]">
              <TrendingUp size={21} />
            </div>

            <div>
              <p className="text-sm font-semibold text-[#242B27]">
                Grow with 1TWO
              </p>
              <p className="text-xs text-[#68716A]">
                Your care, your community
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ForProviders;
