import React, { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Search,
  ShieldCheck,
  UserRound,
  CalendarCheck,
  Heart,
} from "lucide-react";
import Typewriter from "../animations/Typewriter";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Search for a service",
    description: "Pick what your pet needs, or search by service, vet or area.",
    image: "../Images/work-search.png",
    tag: "Find the right care",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Explore verified providers",
    description:
      "See who is open now, how far away they are, and what they offer.",
    image: "../Images/explore-img.jpg",
    tag: "Care you can trust",
  },
  {
    number: "03",
    icon: UserRound,
    title: "Compare profiles and options",
    description:
      "Open a profile to see reviews, services and prices before you decide.",
    image: "../Images/compare-img.jpg",
    tag: "Explore your options",
  },
  {
    number: "04",
    icon: CalendarCheck,
    title: "Select and book",
    description:
      "Confirm the booking from your mobile, with the details in one place.",
    image: "../Images/select-book-img.jpg",
    tag: "Booking made simple",
  },
  {
    number: "05",
    icon: Heart,
    title: "Enjoy the service",
    description:
      "Manage your booking in English or Arabic, whichever suits you.",
    image: "../Images/enjoy-service-img.jpg",
    tag: "Happy pets, happy moments",
  },
];

const StepItem = ({ step, index, onActive }) => {
  const [ref, inView] = useInView({
    threshold: 0.55,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      onActive(index);
    }
  }, [inView, index, onActive]);

  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 55 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative border-b border-[#DCE8D9] py-10 transition-all duration-500 md:py-16 ${
        inView ? "opacity-100" : ""
      }`}
    >
      <div className="flex items-start gap-5 md:gap-7">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-all duration-500 md:h-14 md:w-14 ${
            inView ? "bg-[#2F5D50] text-white" : "bg-[#DCE8D9] text-[#2F5D50]"
          }`}
        >
          <Icon size={23} strokeWidth={1.7} />
        </div>

        <div className="flex-1">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs font-bold tracking-[0.2em] text-[#8A9C8D]">
              STEP {step.number}
            </span>

            {inView && <span className="h-px w-10 bg-[#2F5D50]" />}
          </div>

          <h3
            className={`text-2xl font-bold leading-tight transition-colors duration-300 md:text-3xl ${
              inView ? "text-[#2F5D50]" : "text-[#242B27]"
            }`}
          >
            {step.title}
          </h3>

          <p className="mt-5 max-w-lg text-base leading-8 text-[#68716A]">
            {step.description}
          </p>
        </div>

        <span className="hidden text-4xl font-bold text-[#DCE8D9] md:block">
          {step.number}
        </span>
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActive = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const activeStep = steps[activeIndex];

  return (
    <section
      id="how"
      className="relative overflow-visible bg-[#F8F5EE] py-24  md:py-16 border-t border-gray-200"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-flex rounded-full bg-[#DCE8D9] px-5 py-2 text-sm font-semibold tracking-wide text-[#2F5D50]">
            HOW 1TWO WORKS
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-[#242B27] md:text-5xl">
            <Typewriter
              text=" From search to settled,"
              delay={2000}
              speed={100}
              deleteSpeed={50}
            />
            <span className="block text-[#2F5D50]">in a few taps.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 font-serif text-[#68716A]">
            Meet the right people to care for your pet. Here is what that looks
            like in the app.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT SIDE - SCROLLING CONTENT */}
          <div>
            {/* Steps */}
            <div>
              {steps.map((step, index) => (
                <StepItem
                  key={step.number}
                  step={step}
                  index={index}
                  onActive={handleActive}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - STICKY IMAGE */}
          <div className="relative order-first lg:order-last">
            <div className="lg:sticky lg:top-24">
              <div className="relative h-[380px] overflow-hidden rounded-[2rem] bg-[#DCE8D9] shadow-xl md:h-[520px] lg:h-[500px] ">
                <AnimatePresence mode="sync">
                  <motion.img
                    key={activeStep.id}
                    src={activeStep.image}
                    alt={activeStep.title}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 h-full w-full object-content"
                  />
                </AnimatePresence>

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#172D25]/75 via-transparent to-transparent" />

                {/* Image content */}
                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
                  <span className="inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-md">
                    {activeStep.number} / 05
                  </span>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p className="mt-5 text-sm font-medium text-white/75">
                        {activeStep.tag}
                      </p>

                      <h3 className="mt-2 max-w-md text-3xl font-bold text-white md:text-4xl">
                        {activeStep.title}
                      </h3>
                    </motion.div>
                  </AnimatePresence>

                  {/* Progress indicators */}
                  <div className="mt-8 flex gap-2">
                    {steps.map((step, index) => (
                      <div
                        key={step.number}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          activeIndex === index
                            ? "w-12 bg-white"
                            : "w-5 bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Small bottom text */}
              <div className="mt-6 flex items-center justify-between text-sm text-[#68716A]">
                <span>Better care starts here</span>
                <span className="font-semibold text-[#2F5D50]">
                  1TWO Pet Care
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
