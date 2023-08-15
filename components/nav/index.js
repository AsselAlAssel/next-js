import { Navigation } from "./Navigation";

const NAV = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <nav className="flex flex-row space-x-4">
      <Navigation navLinks={navLinks} />
    </nav>
  );
};

export default NAV;
