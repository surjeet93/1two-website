
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Mail,
  Phone,
  Heart,
} from "lucide-react";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { name: "About 1TWO", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "How it works", href: "#how-it-works" },
      { name: "Trust and verification", href: "#trust" },
      { name: "1TWO Adopts", href: "#adoption" },
    ],
  },
  {
    title: "Pet owners",
    links: [
      { name: "Find pet care", href: "#services" },
      { name: "Live walk tracking", href: "#tracking" },
      { name: "FAQ", href: "#faq" },
      { name: "Support", href: "#contact" },
    ],
  },
  {
    title: "Care providers",
    links: [
      { name: "Join as a provider", href: "#providers" },
      { name: "Provider benefits", href: "#providers" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#243F35] text-[#F8F5EE]">

      {/* Decorative Background */}
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/10" />
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full border border-white/10" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 md:px-10 lg:px-16">

        {/* Top Footer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 gap-14 border-b border-white/15 pb-16 lg:grid-cols-[1.2fr_2fr]"
        >

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-2"
            >
             <div>
                <img className="h-12" src="../images/footer-logo.png" alt="footer-logo" />
             </div>
            </a>

            <h2 className="mt-8 max-w-sm text-3xl font-semibold leading-tight md:text-4xl">
              Care connects us.
              <span className="block text-[#B9D1B7]">
                Better care for every pet.
              </span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
              Better care begins with better connections. Join a community
              bringing pet owners and care providers closer together.
            </p>

            <a
              href="#services"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#DCE8D9] px-6 py-3 text-sm font-semibold text-[#243F35] transition-all duration-300 hover:bg-white hover:gap-5"
            >
              Discover 1TWO
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">

            {footerLinks.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
              >
                <h3 className="mb-7 text-sm font-semibold uppercase tracking-[0.16em] text-[#B9D1B7]">
                  {group.title}
                </h3>

                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-2 text-sm text-white/65 transition-all duration-300 hover:translate-x-1 hover:text-white"
                      >
                        {link.name}

                        <ArrowUpRight
                          size={14}
                          className="opacity-0 transition-all duration-300 group-hover:opacity-100"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 gap-8 border-b border-white/15 py-10 sm:grid-cols-3"
        >

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#B9D1B7]">
              <Mail size={19} />
            </div>

            <div>
              <p className="text-xs text-white/45">Email us</p>
              <a
                href="mailto:YOUR_EMAIL"
                className="mt-1 text-sm transition-colors hover:text-[#B9D1B7]"
              >
                <span>onetwo@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#B9D1B7]">
              <Phone size={19} />
            </div>

            <div>
              <p className="text-xs text-white/45">Call us</p>
              <a
                href="tel:YOUR_PHONE"
                className="mt-1 text-sm transition-colors hover:text-[#B9D1B7]"
              >
                <span>+91 000000000</span>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#B9D1B7]">
              <MapPin size={19} />
            </div>

            <div>
              <p className="text-xs text-white/45">Our location</p>
              <p className="mt-1 text-sm">Haryana, India</p>
            </div>
          </div>

        </motion.div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 py-7 text-center md:flex-row">

          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} 1TWO. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-white/55">
            <a
              href="#privacy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <span className="h-1 w-1 rounded-full bg-[#B9D1B7]" />

            <a
              href="#terms"
              className="transition-colors hover:text-white"
            >
              Terms of Service
            </a>
          </div>

          <p className="flex items-center gap-1 text-xs text-white/45">
            Made with <Heart size={13} className="fill-red-600 text-red-600" /> for pets
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
