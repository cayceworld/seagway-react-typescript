import Navbar from "../../views/Navbar/Navbar";
import LogoSection from "../../views/LogoSection/LogoSection";
import { useSelector } from "react-redux";
import { getDevice } from "../../../redux/deviceRedux";

const Header = () => {
  const device = useSelector(getDevice);
  const isDesktop = device.isDesktop;

  return (
    <>
      <Navbar isDesktop={isDesktop} />
      <LogoSection />
    </>
  );
};

export default Header;
