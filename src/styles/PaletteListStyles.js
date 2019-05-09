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
    flexWrap: "wrap"
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
    gridGap: "5%"
  }
}