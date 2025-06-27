import { FOOTER_LINKS } from "@/utils/constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-muted bg-white flex flex-col lg:flex-row items-center justify-between px-6 py-8 lg:px-16 lg:py-12 gap-8">
      <div className="flex-1 flex flex-col space-y-8 border-b lg:border-b-0 lg:border-r border-muted pb-8 lg:pb-0 lg:pr-12">
        <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-10 justify-between w-full">
          <h1 className="font-bold text-xl lg:text-3xl">RuEdCa.</h1>
          <h2 className="font-extrabold text-2xl lg:text-3xl uppercase">
            Ruhuna science <br className="hidden lg:block" />
            career circle
          </h2>
        </div>
        <div className="flex flex-col space-y-2 text-slate-500 text-sm">
          <p>Building the next generation of professionals.</p>
          <p>
            Faculty of Science, University of Ruhuna,
            <br /> Wellamadama, Matara, Sri Lanka
          </p>
          <p>rscc@usci.ruh.ac.lk</p>
          <p>+94 041 222 7001</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row gap-8 items-start justify-between w-full lg:px-12 text-slate-500">
        {FOOTER_LINKS.map((nav) => (
          <div key={nav.id} className="lg:max-w-lg w-full flex flex-col gap-2">
            <h2 className="font-semibold uppercase text-base mb-2">
              {nav.title}
            </h2>
            <ul className="flex flex-col gap-1">
              {nav.list.map((item) => (
                <li
                  key={item.id}
                  className="capitalize text-muted-foreground hover:text-primary transition-colors"
                >
                  <Link to={item.to}>&gt;&nbsp;{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
