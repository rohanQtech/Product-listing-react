import logo from "../assest/image/logo.png";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DevicesIcon from "@material-ui/icons/Devices";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import CloudOffIcon from "@material-ui/icons/CloudOff";
const Header2 = () => {
  return (
    <>
      <div class="wrapper">
        <nav id="sidebar" bg="dark">
          <div class="sidebar-header">
            <img src={logo} alt="logo" width="300" height="100" />
          </div>

          <ul class="list-unstyled components">
            <li class="active" >
              <AccountCircleIcon />
            </li>
            <li>
              <DevicesIcon />
            </li>
            <li></li>
            <li>
              <LocalOfferIcon />
            </li>
            <li>
              <CloudOffIcon />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Header2;
