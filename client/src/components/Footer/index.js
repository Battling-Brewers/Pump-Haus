import React from "react";
import { Footer } from 'react-materialize';
import './footer.css'
const Bottom = () => {
  return (
    <div className="deep-orange darken-2">
      <div className="container">
            <div className="row footer-row">
            <div className="col s6 center-align">
                <p className="grey-text text-lighten-4">Copyright Pump-Haus LLC 2021,
                All Rights Reserved</p>
              </div>
              <div className="col s6 center-align">
                <h5 className="white-text center-align">Social</h5>
                {/* <ul className="row center-align">
                  <li className="footer-icon-links"> */}
                    <a target="_blank" rel="noreferrer" href="mailto:pumphaus2021.com">
                    <i className="material-icons medium black-text">email</i>
                    </a>
                  {/* </li>
                  <li className="footer-icon-links"> */}
                      <a target="_blank" rel="noreferrer" href="https://twitter.com/HausPump?ref_src=twsrc%5Etfw">
                      <i className="material-icons medium black-text">verified</i>
                      </a>
                  {/* </li>
                  <li className="footer-icon-links"> */}
                    <a target="_blank" rel="noreferrer"  href="https://youtu.be/-xZQ0YZ7ls4">
                      <i className="material-icons medium black-text">smart_display</i>
                    </a>
                  {/* </li>
                </ul> */}
              </div>
            </div>
          </div>
    </div>
    
  );
}

export default Bottom;
