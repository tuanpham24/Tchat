import { useContext } from "react";
import { AuthContext } from "../../../contexts/Auth";
import { logOut } from "../../../services/auth";
import ConfirmModal from "../../confirm-modal/ConfirmModal";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import defaultAvt from "../../../assets/default-avt.png";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Sidebar() {
  const {currentUser} = useContext(AuthContext);
  console.log(currentUser.photoURL);
  return (
    <>
      <div id="sidebar">
        <div className="sidebar__menu flex-container bg--dark wrp-padding shadow--bold">
          <div className="menu">
            <Link to={"/"} className="menu__logo flex-container text--white">
              <HomeRoundedIcon className="home__icon" />
              <h1>
                TChat<span>&#127826;</span>
              </h1>
            </Link>
            <div className="menu__user flex-container border--primary ">
              <img className="avatar border--around" src={currentUser.photoURL? currentUser.photoURL : defaultAvt} alt="Avatar" width={55} />
              <h4 className="name text--white">{currentUser.displayName}</h4>
            </div>
            <ul className="menu__list">
              <li className="item">
                <Link to={"/chat-rooms/"} className="text--white">
                  Chat rooms
                </Link>
              </li>
              <li className="item">
                <Link to={"/chat-rooms/"} className="text--white">
                  Chat rooms
                </Link>
              </li>
            </ul>
          </div>

          <div className="action">
            <ConfirmModal handleLogout={logOut}/>
          </div>
        </div>
      </div>
    </>
  );
}
