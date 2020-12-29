import Logo from "components/Logo";
import renderFile from "public/render.json";

const Header = () => (
  <header className="header-wrapper">
    <Logo />

    <div className="header__text-block">
      <h2 className="header__text-h2">{renderFile.collection}</h2>
      <p className="header__text-contacts">
        <span className="text-contacts__element">Anastasiia Iliukhina</span>
        <span className="text-contacts__element">b2b@mdnt45.com </span>
        <span className="text-contacts__element">+18563904090</span>
      </p>
    </div>
  </header>
);

export default Header;
