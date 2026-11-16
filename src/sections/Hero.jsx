import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Heart, PawPrint, ShieldCheck } from "lucide-react";

import Typewriter from "../animations/Typewriter";
import FadeUp from "../animations/FadeUp";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const slides = [
  {
    id: 1,
    image: "/Images/slider-img-2.jpg",
    badge: "Care that connects us",
    title: "Better care for every pet.",
    subtitle: "Stronger connections",
    description:
      "1TWO brings pet owners and trusted care providers together, making it easier to find, book and manage the care pet needs.",
    buttonText: "Find Pet Care",
  },
  {
    id: 2,
    image: "/Images/hero-pet.jpg",
    badge: "Trusted hands, happy paws",
    title: "Every pet deserves",
    subtitle: "Love and attention",
    description:
      "Discover caring and reliable pet professionals who make every moment safer, happier and more comfortable for your pet.",
    buttonText: "Explore Services",
  },
];
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousSlide(currentSlide);

      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);
  // Next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center ">
      {/* BACKGROUND IMAGE */}

      <div className="absolute inset-0  overflow-hidden ">
        {/* Previous image - background */}
        {previousSlide !== null && (
          <img
            src={slides[previousSlide].image}
            alt="Pet care"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        )}

        {/* Current image - slides from right to left */}
        <img
          key={slide.id}
          src={slide.image}
          alt="pet "
          onAnimationEnd={() => setPreviousSlide(null)}
          className="absolute inset-0 w-full h-full object-cover  overflow-hidden object-center   hero-slide-image"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#F8F5EE] via-[#F8F5EE]/30 to-[#2F5D50]/20" />
      <div className="relative  z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 4, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* BADGE */}

          <FadeUp>
            <div className="inline-flex items-center gap-2 bg-[#DCE8D9] px-5 py-3 rounded-full text-[#2F5D50]">
              <PawPrint size={18} />

              <span className="text-sm font-semibold transition-all duration-700 ease-in-out">
                {slide.badge}
              </span>
            </div>
          </FadeUp>

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mt-8 text-[#242B27]"
          >
            {slide.title}
            <span className="block text-[#2F5D50]">Stonger connections</span>
            <span className="block transition-all duration-700 ease-in-out">
              <Typewriter
                text={slide.subtitle}
                speed={100}
                delay={0}
                deleteSpeed={50}
              />
            </span>
          </motion.h1>

          {/* PARAGRAPH */}

          <FadeUp delay={0.5}>
            <p className="text-lg md:text-xl leading-8 text-[#424B45] max-w-xl mt-7">
              {slide.description}
            </p>
          </FadeUp>

          <FadeUp delay={0.7}>
            <div className="flex flex-wrap gap-4 mt-9">
              <motion.a
                href="#services"
                whileHover={{ scale: 1.06, y: -4 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-3 bg-[#2F5D50] text-white px-8 py-4 rounded-full font-semibold shadow-lg"
              >
                {slide.buttonText}
                <ArrowRight size={20} />
              </motion.a>

              <motion.a
                href="#providers"
                whileHover={{ scale: 1.06, y: -4 }}
                whileTap={{ scale: 0.96 }}
                className="border-2 border-[#2F5D50] text-[#2F5D50] px-8 py-4 rounded-full font-semibold hover:bg-[#2F5D50] hover:text-white transition-colors duration-300"
              >
                Become a Provider
              </motion.a>
            </div>
          </FadeUp>

          <div
            ref={ref}
            className="grid grid-cols-3 gap-5 mt-16 max-w-xl bg-white/70 backdrop-blur-xl rounded-3xl p-5 shadow-lg"
          >
            <div>
              <PawPrint className="text-[#2F5D50] mb-2" size={26} />

              <h3 className="text-2xl md:text-3xl font-bold text-[#2F5D50]">
                {inView && <CountUp end={500} duration={2.5} />}+
              </h3>

              <p className="text-xs md:text-sm text-gray-600">Pet Owners</p>
            </div>

            <div>
              <Heart className="text-[#2F5D50] mb-2" size={26} />

              <h3 className="text-2xl md:text-3xl font-bold text-[#2F5D50]">
                {inView && <CountUp end={100} duration={2.5} />}+
              </h3>

              <p className="text-xs md:text-sm text-gray-600">Providers</p>
            </div>

            <div>
              <ShieldCheck className="text-[#2F5D50] mb-2" size={26} />
              <h3 className="text-2xl md:text-3xl font-bold text-[#2F5D50]">
                {inView && <CountUp end={98} duration={2.5} />}%
              </h3>
              <p className="text-xs md:text-sm text-gray-600">Trust</p>
            </div>
          </div>
        </motion.div>

        {/* SLIDER CONTROLS */}

        <div className="absolute bottom-8 right-10 z-20 flex items-center gap-4">
          {/* PREVIOUS */}
          <button onClick={prevSlide}> </button>

          {/* DOTS */}
          <div className="flex gap-2">
            {slides.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 bg-[#2F5D50]"
                    : "w-2.5 bg-[#2F5D50]/40"
                }`}
              />
            ))}
          </div>

          {/* NEXT */}
          <button onClick={nextSlide}></button>
        </div>

        {/* FLOATING DECORATION */}
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="hidden lg:block absolute top-[42%] right-[8%] bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-xl"
        >
          <div className="flex items-center gap-3">
            <Heart className="text-[#2F5D50]" size={30} />
            <div>
              <h3 className="font-bold text-[#242B27]">Trusted Pet Care</h3>

              <p className="text-sm text-gray-500">Love & attention</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
