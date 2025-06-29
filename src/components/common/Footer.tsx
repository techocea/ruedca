import { FOOTER_LINKS } from "@/utils/constants";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
      <footer className="relative w-full isolate bg-gradient-to-tr from-primary to-primary/90 text-base-content/80">
        {/* decorative blurred circle */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-white/10 blur-3xl"/>

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24 grid gap-y-12 gap-x-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <h1 className="font-extrabold text-3xl text-white">RuEdCa.</h1>
            <p className="text-sm leading-relaxed text-base-content/70">
              Ruhuna Science Career Circle
            </p>
            <p className="text-sm leading-relaxed text-base-content/70">Building the next generation of professionals.</p>
          </div>

          {/* Quick nav lists */}
          {FOOTER_LINKS.map(nav => (
              <nav key={nav.id}
                   className="space-y-3">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-base-content">
                  {nav.title}
                </h2>
                <ul className="space-y-3 text-sm">
                  {nav.list.map(item => (
                      <li key={item.id}>
                        <Link
                            to={item.to}
                            className="transition-colors capitalize hover:text-white/90"
                        >
                          &gt;&nbsp;{item.label}
                        </Link>
                      </li>
                  ))}
                </ul>
              </nav>
          ))}

          {/* Contact + socials */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-base-content">
              Contact
            </h2>
            <address className="not-italic text-sm leading-relaxed">
              Faculty of Science, <br/>University of Ruhuna,<br/>
              Wellamadama, Matara, Sri Lanka
            </address>
            <p className="text-sm">
              <a href="mailto:rscc@usci.ruh.ac.lk"
                 className="hover:text-white/90">
                rscc@usci.ruh.ac.lk
              </a>
            </p>

            {/* socials */}
            <div className="flex gap-4 pt-2">
              <a
                  href="https://www.facebook.com"
                  aria-label="Facebook"
                  className="transition-opacity hover:opacity-80"
              >
                <Facebook className="h-5 w-5"/>
              </a>
              <a href="https://www.instagram.com"
                 aria-label="Instagram"
                 className="transition-opacity hover:opacity-80">
                <Instagram className="h-5 w-5"/>
              </a>
              <a href="https://www.linkedin.com"
                 aria-label="LinkedIn"
                 className="transition-opacity hover:opacity-80">
                <Linkedin className="h-5 w-5"/>
              </a>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="border-t border-white/10 bg-black/10 py-4 text-center text-xs text-white/60 backdrop-blur-sm">
          © {new Date().getFullYear()} Ruhuna Science Career Circle — All rights reserved.
        </div>
      </footer>
  );
};

export default Footer;
