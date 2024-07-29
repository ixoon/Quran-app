import React, { useState } from 'react';
import './index.css';


function Header() {
    const [content, setContent] = useState('');

    const handleHomeClick = () => {
        const message = (
            <div>
                <h2>As-Salamu Alaikum (Peace be upon you)</h2>
                <h2>Welcome to my Quran-app</h2>
            </div>
        );
        setContent(message);
    }

    const handleAboutClick = () => {
        const aboutmsg = (
            <div>
                <h2>This is certainly a revelation from the Lord of all worlds, which the trustworthy spirit ˹Gabriel˺ brought down into your heart ˹O Prophet˺—so that you may be one of the warners— in a clear Arabic tongue.</h2>
            </div>
        )
        setContent(aboutmsg)
    };

    const handleContactClick = () => {
        const contactmsg = (
            <div>
                <h2>Contact me at: isakrahmani2022@gmail.com</h2>
            </div>
        )
        setContent(contactmsg);
    };

    return (
        <div>
            <div className="header-container">
                <h2 onClick={handleHomeClick}>Home</h2>
                <h2 onClick={handleAboutClick}>About</h2>
                <h2 onClick={handleContactClick}>Contact</h2>
            </div>
            <hr />
            <div className="content-container">
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Header;
