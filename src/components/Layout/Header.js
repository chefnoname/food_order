import { Fragment } from "react";

import classes from "./Header.module.css";
import buffetImage from "../../assets/buffet.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>camelCaseCaf&egrave;</h1>
        <button>Basket</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={buffetImage} alt="A table of some BANGING! food" />
      </div>
    </Fragment>
  );
};

export default Header;
