import React from "react";
import styles from "../components/body.module.css";

let color = ["#8c978c", "#155aaf", "#671b6e", "#43f564", "#2434b4", "#f64d89"];
class Body extends React.Component {
  render() {
    const wrp = (color) => {
      const body = document.getElementsByClassName("body")[0];
      body.style.backgroundColor = color;

      const h2 = document.getElementsByTagName("h2")[0];
      h2.innerHTML = `<h2>Kare ki klike a, se kare ki gen koulè ${color}</h2>`;
    };
    const style = {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      marginLeft: "20px",
    };
    const style1 = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "350px",
    };
    return (
      <div className="body" style={style1}>
        <div>
          <h2>Welcome. Click any square</h2>{" "}
          <div style={style}>
            {" "}
            {color.map((color) => (
              <div
                class="boite"
                onClick={() => {
                  wrp(color);
                }}
                style={{
                  background: color,
                  width: "70px",
                  height: "70px",
                  border: " solid 5px white ",
                }}
              >
                {color}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
