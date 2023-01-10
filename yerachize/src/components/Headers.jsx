import React from "react";
import styles from "../components/header.module.css";
import PropTypes from "prop-types";

class Header extends React.Component{
    // state={items:this.props.items}
  render(){
    {console.log(this.props.items)}
    return (
      <>
        <nav>
          <ul>{this.props.items.map(e => {
           return <li> <a href="#">{e}</a> </li>            
          })}
          
          </ul>
        </nav>
      </>
    );
  }
    
  }

  Header.propTypes ={
    items:PropTypes.array.isRequired,
  }

  export default Header 



