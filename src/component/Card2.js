import React from "react";
import "./Card.css";

class Card2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
  }
  shouldComponentUpdate(curentprops, nextProps) {
    console.log("Current: ", curentprops);
    console.log("Next: ", nextProps);
    return false;
  }
  click = () => {
    console.log("set state: ");
    this.setState({
      collapse: !this.state.collapse,
    });
  };
  render() {
    const { collapse } = this.state;
    const { index, value } = this.props;
    console.log("render card2: ", index);
    return (
      <div className="card">
        <button
          className={collapse ? "collapsible" : "collapsible active"}
          onClick={this.click}
        >
          {value.question}
        </button>
        <div
          className="content"
          style={{ maxHeight: collapse ? "100%" : null }}
        >
          <p className="container">{value.answer}</p>
        </div>
      </div>
    );
  }
}

export default Card2;
