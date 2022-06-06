import InputSearch from "./inputSearch/indexSearch";
import Logo from "./logo/indexLogo";
import "./stylesHeader.css";

function Header({ showProducts }) {
  return (
    <div className="containerLogoEinput">
      <Logo />
      <InputSearch showProducts={showProducts} />
    </div>
  );
}
export default Header;
