import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor: 'black',
    border: '1px solid white',
  });

  const [btn, setMyBtn] = useState("white mode");

  const togglebtn = () => {
    if (myStyle.color == "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        border: '1px solid white'
      });
      setMyBtn("Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setMyBtn("white Mode");
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h1>About us</h1>
      <div
        className="accordion accordion-flush"
        id="accordionFlushExample"
        style={myStyle}
      >
        <div className="accordion-item "  style={myStyle}>
          <h2
            className="accordion-header"
            id="flush-headingOne"
            style={myStyle}
            color="white"
          >
            <button
              style={myStyle}
              className="accordion-button collapsed text-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              color="white"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
            color="white"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              quas aspernatur nihil quis ipsam itaque quos, ad eum facere quo!
              Nemo praesentium animi ex sit, sapiente totam quibusdam, itaque
              placeat incidunt soluta quod vel reiciendis laboriosam dolor modi
              obcaecati nisi. Dolore impedit repellat aliquid. Eligendi vel
              obcaecati nesciunt sapiente ipsam facere quaerat aliquid, maxime
              officiis consectetur vero error fuga similique, quos facilis
              blanditiis! Architecto aut soluta expedita rerum eaque ut numquam
              voluptatem quaerat quod vitae obcaecati ab, maxime veniam placeat
              aspernatur autem porro doloribus pariatur aperiam itaque
              doloremque minima eveniet! Amet earum saepe possimus facere cum
              reiciendis maxime impedit officiis!
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={myStyle}>
        <button type="button" className="btn btn-primary" onClick={togglebtn}>
          {btn}
        </button>
      </div>
    </div>
  );
}
