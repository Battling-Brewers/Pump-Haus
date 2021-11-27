import React from "react";
import { Footer } from 'react-materialize';
import './footer.css'
const Bottom = () => {
  return (
    <Footer className="deep-orange darken-2">
        <a target="_blank" rel="noreferrer" href="mailto:pumphaus2021.com">
          <i className="material-icons medium black-text">email</i>
        </a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/HausPump?ref_src=twsrc%5Etfw">
        <i className="material-icons medium black-text">verified</i>
        </a>
        <a target="_blank" rel="noreferrer"  href="https://youtu.be/-xZQ0YZ7ls4">
        <i className="material-icons medium black-text">smart_display</i>
        </a>
    </Footer>
  );
}

export default Bottom;