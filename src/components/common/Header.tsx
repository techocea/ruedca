import { NAV_ITEMS } from "@/utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="lg:max-w-6xl w-full mx-auto flex items-center justify-between p-4 sm:p-6">
        <div>
          <h1 className="font-bold text-3xl">RuEdCa</h1>
        </div>

        <nav className="flex items-center justify-center gap-10">
          {NAV_ITEMS.map((nav) => (
            <ul
              key={nav.id}
              className="capitalize text-muted-foreground font-medium"
            >
              <Link to={nav.to}>{nav.label}</Link>
            </ul>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
