import sizes from './sizes'

export default {
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alginItems: "flex-start",
    justifyContent: "center"
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
      marginTop: "1.7em"
    }
  },
  palette: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "1.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
    },
  }
}