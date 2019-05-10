import sizes from './sizes';
import bg from './bg.svg';

export default {
  root: {
    height: "100vh",
    display: "flex",
    alginItems: "flex-start",
    justifyContent: "center",
    /* background by SVGBackgrounds.com */
    backgroundColor: "#270faa",
    backgroundImage: `url(${bg})`,
    overflow: "scroll"
  },
  container: {
    width: "50%",
    display: "flex",
    alginItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("lg")]: {
      width: "60%"
    }
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alginItems: "center",
    color: "white",
    "& a": {
      color: "white",
      marginTop: "2.5rem"
    }
  },
  palette: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "1.5rem",
  },
  heading: {
    fontSize: "2rem"
  }
}