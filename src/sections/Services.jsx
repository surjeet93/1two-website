
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, PawPrint } from "lucide-react";
import Typewriter from "../animations/Typewriter";

const services = [
  {
    number: "01",
    title: "Veterinary care",
    description:
      "Check-ups, vaccines and treatment at verified clinics near you.",
    image: "../images/veterinary2.jpg",
    featured: true,
  },
  {
    number: "02",
    title: "Dog walking",
    description:
      "Any length of walk, with live GPS you can follow from your phone.",
    image: "../images/dog-walking.jpg",
  },
  {
    number: "03",
    title: "Pet sitting",
    description: "Your home or theirs.",
    image: "../images/pet-sitting.jpg",
  },
  {
    number: "04",
    title: "Grooming",
    description: "Dogs and cats, salon or home.",
    image: "../images/grooming.jpg",
  },
  {
    number: "05",
    title: "Training",
    description: "Sessions with verified trainers.",
    image: "../images/tranning.jpg",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
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

const Services = () => {
  const featured = services[0];
  const otherServices = services.slice(1);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg bg-[#F8F5EE] px-5 py-10 md:px-10 lg:px-16"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#DCE8D9]/70 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 rounded-full bg-[#DCE8D9] px-5 py-2 text-sm font-semibold text-[#2F5D50]">
              <PawPrint size={18} />
              OUR SERVICES
            </div>

            <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-[#242B27] md:text-5xl lg:text-6xl">
              <Typewriter
                text="What does your pet"
                delay={2000}
                speed={100}
                deleteSpeed={50}
              />
              <span className="block text-[#2F5D50]">
                need today?
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base leading-8 text-[#68716A] md:text-lg">
              Five kinds of care, one trusted place. Every provider you see on
              1TWO has passed the same verification.
            </p>

            <p className="mt-4 font-serif text-xl italic text-[#2F5D50]">
              Happy Pets, Happy You.
            </p>
          </div>
        </motion.div>

        {/* Featured Veterinary Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="group relative mt-14 h-[390px] overflow-hidden rounded-[28px] md:h-[430px]"
        >
          <img
            src={featured.image}
            alt={featured.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#14271D]/95 via-[#14271D]/65 to-transparent" />

          <div className="relative flex h-full max-w-xl flex-col justify-center p-8 md:p-12 lg:p-16">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#DCE8D9] px-4 py-2 text-sm font-semibold text-[#242B27]">
              {featured.number}
              <span>•</span>
              Featured Service
            </span>

            <h3 className="mt-7 font-serif text-4xl font-bold text-white md:text-5xl">
              {featured.title}
            </h3>

            <p className="mt-4 max-w-md text-base leading-8 text-white/85 md:text-lg">
              {featured.description}
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex w-fit items-center gap-3 text-white underline decoration-white/50 underline-offset-8 transition-all hover:decoration-white"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 transition-all duration-300 group-hover:bg-white group-hover:text-[#2F5D50]">
                <ArrowUpRight size={22} />
              </span>
              Learn more
            </a>
          </div>

          <PawPrint
            size={70}
            className="absolute bottom-10 right-10 hidden rotate-12 text-white/20 md:block"
          />
        </motion.div>

        {/* Other Services - 3 Column Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-4"
        >
          {otherServices.map((service, index) => (
            <motion.div
              key={service.number}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`group relative h-[330px] cursor-pointer overflow-hidden rounded-[25px] md:h-[350px] ${
                index === 1 || index === 2
                  ? "md:col-span-3"
                  : "md:col-span-1"
              }`}
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#14271D]/95 via-[#14271D]/20 to-transparent" />

              {/* Number */}
              <span className="absolute left-6 top-6 text-sm font-semibold tracking-widest text-white/90">
                {service.number}
              </span>

              {/* Arrow */}
              <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 text-white backdrop-blur-sm transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#2F5D50]">
                <ArrowUpRight size={20} />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                <h3 className="font-serif text-2xl font-bold text-white md:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-2 max-w-lg text-sm leading-6 text-white/85 md:text-base">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white underline decoration-white/50 underline-offset-4 transition-all hover:decoration-white"
                >
                  Learn more
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <div className="mt-9 flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#2F5D50]" />

          <p className="text-sm leading-6 text-[#68716A]">
            Providers complete verification before they can take bookings on
            1TWO.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;
