import logo from "../assest/image/logo.png";
import { Button } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DevicesIcon from "@material-ui/icons/Devices";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import CloudOffIcon from "@material-ui/icons/CloudOff";
const Header = () => {
  return (
    <>
      <div className="wrapper">
        <nav id="sidebar" bg="dark">
          <div class="sidebar-header">
            <img src={logo} alt="logo" width="300" height="100" />
          </div>
        </nav>
        
        <div className="row">
          <div className="col-sm-1">
            <ul class="list-unstyled components">
              <li class="active">
                <Button>
                  {" "}
                  <AccountCircleIcon />
                </Button>
              </li>
              <li>
                <Button>
                  {" "}
                  <DevicesIcon />
                </Button>
              </li>
              <li></li>
              <li>
                <Button>
                  <LocalOfferIcon />
                </Button>
              </li>
              <li>
                <Button>
                  <CloudOffIcon />
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
