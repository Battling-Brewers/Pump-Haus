import React, {useState} from 'react';
import './index.css';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";

const Slider = () => {
    const [slideindex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (slideindex === 0) {
             if (direction === "left") {
                document.getElementById("wrapper").style.transform = "translateX(-300vw)";
                setSlideIndex(3)
            } else {
                document.getElementById("wrapper").style.transform = "translateX(-100vw)";
                setSlideIndex(1)
            }
        } else if (slideindex === 1) {
            if (direction === 'left') {
                document.getElementById("wrapper").style.transform = "translateX(0vw)"
                setSlideIndex(0)
            } else {
                document.getElementById("wrapper").style.transform = "translateX(-200vw)";
                setSlideIndex(2)
            }
        } else if (slideindex === 2) {
            if (direction === "left") {
                document.getElementById("wrapper").style.transform = "translateX(-100vw)";
                setSlideIndex(1)
            } else {
                document.getElementById("wrapper").style.transform = "translateX(-300vw)";
                setSlideIndex(3)
            }
        } else if (slideindex === 3) {
            if (direction === "left") {
                document.getElementById("wrapper").style.transform = "translateX(-200vw)";
                setSlideIndex(2)
            } else {
                document.getElementById("wrapper").style.transform = "translateX(0vw)";
                setSlideIndex(0)
            }
        }
    };

    return (
        <div className="container-slider">
            <div className="arrow left" direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined/>
            </div>
            <div className="wrapper" id="wrapper" slideindex={slideindex}>
                <div className="slide">
                    <div class="imgContainer">
                        <img className="image" src="https://cdn.discordapp.com/attachments/905114660771069962/914380976715612210/unknown.png" alt="Pic of Arnold"/>
                    </div>
                    <div className="infoContainer">
                        <h1>YOU FEELIN THE BURN?</h1>
                        <p>PLS BUY LOTS OF OUR PRODUCTS</p>
                        <button className="sliderButton">TOUCH ME NOW</button>
                    </div>
                </div>
                <div className="slide">
                    <div class="imgContainer">
                        <img className="image" src="https://cdn.discordapp.com/attachments/905114660771069962/912957153650810941/DA-JARNOLD-2.png" alt="Pic of Jungold"/>
                    </div>
                    <div className="infoContainer">
                        <h1>I'LL BE BACK</h1>
                        <p>DON'T MISS OUT ON OUR END OF YEAR SALE</p>
                        <button className="sliderButton">FEEL MY MUSCLES</button>
                    </div>
                </div>
                <div className="slide">
                    <div class="imgContainer">
                        <img className="image" src="https://cdn.discordapp.com/attachments/914369970371186700/914742612810940416/unknown.png" alt="Pic of Andres"/>
                    </div>
                    <div className="infoContainer">
                        <h1>HASTA LA VISTA BABY</h1>
                        <p>DONT YOU KNOW ABOUT THE WORD</p>
                        <button className="sliderButton">COME WITH ME</button>
                    </div>
                </div>
                <div className="slide">
                    <div class="imgContainer">
                        <img className="image" src="https://cdn.discordapp.com/attachments/905114660771069962/914380803117551636/unknown.png" alt="Pic of Andres"/>
                    </div>
                    <div className="infoContainer">
                        <h1>HEYO DADDY-O</h1>
                        <p>DON'T FORGET TO SUBSCRIBE TO OUR NEWSLETTER</p>
                        <button className="sliderButton">IF YOU WANT TO LIVE</button>
                    </div>
                </div>
            </div>
            <div className="arrow right" direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined/>
            </div>
        </div>
    )
}

export default Slider;