import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import defaultAvt from "../../../assets/default-avt.png";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Sidebar() {
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
              <img className="avatar" src={defaultAvt} alt="" width={55} />
              <h4 className="name text--white">User</h4>
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
            <h3 className="text--white">Log out</h3>
          </div>
        </div>
      </div>
    </>
  );
}
