import Navbar from "../../views/Navbar/Navbar";
import LogoSection from "../../views/LogoSection/LogoSection";
import { useSelector } from "react-redux";
import { isDesktop } from "../../../redux/deviceRedux";

const Header = () => {
  const device = useSelector(isDesktop);

  return (
    <>
      <Navbar isDesktop={device} />
      <LogoSection />
    </>
  );
};

export default Header;
