
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight, PawPrint } from "lucide-react";

const faqData = [
  {
    question: "What is 1TWO?",
    answer:
      "1TWO is a pet-care platform designed to connect pet owners with care providers. Discover different services, explore profiles and find care that suits your pet's needs."
  },
  {
    question: "How are care providers verified?",
    answer:
      "1TWO focuses on building trust through provider profiles and verification information. Pet owners can review the available provider details before making a booking."
  },
  {
    question: "Which services can I find on 1TWO?",
    answer:
      "You can explore a range of pet-care services, including veterinary care, dog walking, pet sitting, grooming and training."
  },
  {
    question: "Can I track my dog's walk?",
    answer:
      "The Live GPS Tracking feature is designed to help pet owners follow their dog's walk and view the route while the service is in progress."
  },
  {
    question: "I'm a care provider. How do I join?",
    answer:
      "You can use the Join as a Care Provider option to get started. Create your professional presence and introduce your services to pet owners looking for care."
  },
  {
    question: "How can I choose the right care provider?",
    answer:
      "Explore provider profiles, compare their services and experience, and review the available information before selecting the right option for your pet."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#F8F5EE] py-12 md:py-16 border-t border-gray-200"
    >
      {/* Decorative background */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#DCE8D9]/40 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[#DCE8D9]/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#DCE8D9] bg-white/70 px-4 py-2">
            <PawPrint size={15} className="text-[#2F5D50]" />
            <span className="text-[11px] font-semibold tracking-[0.22em] text-[#2F5D50]">
              QUESTIONS & ANSWERS
            </span>
          </div>

          <h2 className="max-w-lg font-serif text-5xl leading-[1.12] text-[#242B27] md:text-6xl">
            Good to
            <span className="block italic text-[#2F5D50]">
              know.
            </span>
          </h2>

          <p className="mt-7 max-w-md text-base font-serif leading-8 text-[#68716A] md:text-lg">
            A little more clarity before you get started.
            Find answers to the questions pet owners and care
            providers often ask.
          </p>

          {/* Bottom decoration */}
          <div className="mt-12 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2F5D50] text-white">
              <PawPrint size={21} />
            </div>

            <div>
              <p className="text-sm font-semibold text-[#242B27]">
                Here for every paw.
              </p>
              <p className="mt-1 text-xs text-[#68716A]">
                Care starts with clarity.
              </p>
            </div>
          </div>

          <a
            href="#services"
            className="mt-10 inline-flex items-center gap-3 text-sm font-semibold text-[#2F5D50] transition-all duration-300 hover:gap-5"
          >
            Explore our services
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        {/* RIGHT FAQ ACCORDION */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="space-y-4"
        >
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                layout
                className={`overflow-hidden rounded-2xl border transition-all duration-500 ${
                  isOpen
                    ? "border-[#2F5D50]/20 bg-white shadow-[0_15px_45px_rgba(47,93,80,0.08)]"
                    : "border-[#E4E7DF] bg-white/60 hover:border-[#2F5D50]/30 hover:bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left md:px-8 md:py-7"
                >
                  <div className="flex items-center gap-5">
                    <span
                      className={`text-xs font-semibold tracking-widest ${
                        isOpen ? "text-[#2F5D50]" : "text-[#A0AAA1]"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <span
                      className={`text-base font-semibold leading-7 transition-colors duration-300 md:text-lg ${
                        isOpen ? "text-[#2F5D50]" : "text-[#242B27]"
                      }`}
                    >
                      {item.question}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35 }}
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                      isOpen
                        ? "bg-[#2F5D50] text-white"
                        : "bg-[#DCE8D9] text-[#2F5D50]"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: {
                          duration: 0.4,
                          ease: "easeInOut"
                        },
                        opacity: { duration: 0.3 }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-7 pl-14 md:px-8 md:pl-[4.5rem]">
                        <div className="mb-4 h-px w-full bg-[#E9EDE7]" />

                        <p className="max-w-xl text-sm leading-8 text-[#68716A] md:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;
