import Navigation from "./Navigation";
import Logo from "./Logo";
import HeroSection from "./HeroSection";

function Header() {
  return (
    <>
      <header className=" px-8 py-5  ">
        <div className="flex justify-between items-center max-w-7xl mx-auto ">
          <Logo />
          <Navigation />
        </div>
      </header>
    </>
  );
}

export default Header;
