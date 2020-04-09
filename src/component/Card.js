import React, { useState } from "react";
import "./Card.css";

const Card = React.memo((props) => {
  const { index, value } = props;
  console.log("render card", index);
  const [collapse, setCollapse] = useState(false);
  const click = () => {
    setCollapse(!collapse);
  };
  const styleButton = collapse ? "collapsible" : "collapsible active";
  const styleContent = collapse ? "100%" : null;

  return (
    <div className="card">
      <button
        className={styleButton}
        // className={collapse ? "collapsible" : "collapsible active"}
        onClick={click}
      >
        {value.question}
      </button>
      <div className="content" style={{ maxHeight: styleContent }}>
        {/* <div className="content" style={{ maxHeight: collapse ? "100%" : null }}> */}
        <p className="container">{value.answer}</p>
      </div>
    </div>
  );
});

export default Card;
