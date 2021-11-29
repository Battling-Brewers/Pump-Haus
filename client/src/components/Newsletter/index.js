import React from 'react';
import './newsletter.css';
import { Send } from '@mui/icons-material';

const Newsletter = () => {
    return (
        <div className="newsl-container">
            <h1>Newsletter</h1>
            <div className="description">SUBSCRIBE TO OUR NEWSLETTER DAMMIT!</div>
            <div className="input-newsl-container">
                <input placeholder="ENTER YOUR EMAIL HERE" />
                <button>
                    <Send />
                </button>
            </div>
        </div>
    )
}

export default Newsletter;