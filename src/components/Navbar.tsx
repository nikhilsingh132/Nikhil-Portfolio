import { navIcons, navLinks } from "#constants/index";
import dayjs from "dayjs";

const Navbar = (): React.ReactNode => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Nikhil's Portfolio</p>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id} className="cursor-pointer">
              {link.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map((icon) => (
            <li key={icon.id}>
              <img src={icon.img} alt={icon.img} />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
