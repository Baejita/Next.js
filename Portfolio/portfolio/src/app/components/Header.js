import Navigation from "./Navigation";
import Logo from "./Logo";
import HeroSection from "./HeroSection";
import NavbarCharin from "./Navbar";

function Header() {
  return (
    <>
      <header className=" px-8  ">
        <div className="flex justify-between items-center max-w-7xl mx-auto ">
          <NavbarCharin />

          <Logo />

          <Navigation />
        </div>
      </header>
    </>
  );
}

export default Header;
