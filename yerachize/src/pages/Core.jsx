import React from "react";
import Header from "../components/Headers";
import Footer from "../components/Footer";
import Body from '../components/Body'

class Core extends React.Component {
  render() {
    const items = ["Home", "Contact", "Abaout"];
    const group = "Codiding Club";
    
    return (
      <>
        <Header items={items} />
        <Body />
        <Footer group={group} />
      </>
    );
  }
}

export default Core;
