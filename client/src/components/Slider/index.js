import React, {useState} from 'react';
import './index.css';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    };

    return (
        <div className="container-slider">
            <div className="arrow left" direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined/>
            </div>
            <div className="wrapper" slideIndex={slideIndex}>
                <div className="slide">
                    <div class="imgContainer">
                        <img className="image" src="https://m.media-amazon.com/images/I/41+nRKKynBL._AC_.jpg" alt="Pic of Arnold"/>
                    </div>
                    <div className="infoContainer">
                        <h1>GET TO THE CHOPPA</h1>
                        <p>PLS BUY LOTS OF OUR PRODUCTS</p>
                        <button><a href="https://www.youtube.com/watch?v=-xZQ0YZ7ls4">TOUCH ME NOW</a></button>
                    </div>
                </div>
                <div className="slide">
                    <div class="imgContainer">
                        <img className="image" src="https://cdn.discordapp.com/attachments/905114660771069962/912957153650810941/DA-JARNOLD-2.png" alt="Pic of Jungold"/>
                    </div>
                    <div className="infoContainer">
                        <h1>I'LL BE BACK</h1>
                        <p>DON'T MISS OUT ON OUR END OF YEAR SALE</p>
                        <button>FEEL MY MUSCLES</button>
                    </div>
                </div>
                <div className="slide">
                    <div class="imgContainer">
                        <img className="image" src="https://m.media-amazon.com/images/I/41+nRKKynBL._AC_.jpg" alt="Pic of Arnold"/>
                    </div>
                    <div className="infoContainer">
                        <h1>HASTA LA VISTA BABY</h1>
                        <p>DONT YOU KNOW ABOUT THE WORD</p>
                        <button>COME WITH ME</button>
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