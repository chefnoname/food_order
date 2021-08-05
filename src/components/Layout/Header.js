import { Fragment } from "react";
import HeaderCartBtn from "./HeaderCartBtn";

import classes from "./Header.module.css";
import buffetImage from "../../assets/buffet.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>camelCaseCaf&egrave;</h1>
        <HeaderCartBtn onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={buffetImage} alt="A table of some BANGING! food" />
      </div>
    </Fragment>
  );
};

export default Header;
