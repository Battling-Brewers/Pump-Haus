import React from 'react';
// import Auth from '../../utils/auth';
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';
const Header = () => {

    return (
        <div>
            <div>
                <div>
                    <div>
                        <input placeholder="Search" />
                    </div>
                </div>
                <div>
                    <div>PUMP HAUS</div>
                </div>
                <div>
                    <div>SIGNUP</div>
                    <div>LOGIN</div>
                </div>
            </div>
        </div>
    );
};

export default Header;