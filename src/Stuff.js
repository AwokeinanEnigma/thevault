import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MakeNavBar} from "./Global";
import {
    MakeBigHeader,
    MakeBigImage, MakeFreakyText, MakeHeader, MakeHeaderJustified,
    MakeImage,
    MakeImagedHeader,
    MakeSmallHeader,
    MakeText,
    MakeTextCentered
} from "./BuilderFunctions";
import {useEffect, useRef, useState} from "react";

function Stuff() {
    return (
        <div className="App">
            <MakeNavBar/>
            <MakePage/>
        </div>
    );
}

function MakePage() {
    return <div className="main-div">
        <MakeMain/>
    </div>
}

const Box = ({ imageSrc, text }) => {
    const [expanded, setExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current.scrollWidth > textRef.current.clientWidth) {
            setIsOverflowing(true);
        }
    }, []);

    return (
        <div className="box" onClick={() => setExpanded(!expanded)}>
            <img src={imageSrc} alt="Box Image" className="box-image" />
            <div ref={textRef} className={`box-text ${expanded ? 'expanded' : ''}`}>
                {text}
            </div>
        </div>
    );
};


function MakeMain() {
    const boxes = [
        { imageSrc: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632360/header.jpg', text: 'This is some text for box 1. It can be very long and should be expandable. God is watching yada yada I mean hell man this is placeholder text like just grow up I guess or get out I dunno dont ask me too many questions shit lorem ispum aint got shit on me if you know what i mean'},
        { imageSrc: 'image2.png', text: 'This is some text for box 2. It can be very long and should be expandable.' },
        // Add more boxes as needed
    ];

    return (<div className="container">

        <div className="row">
            <div className="col-lg-9 mx-auto">
                <div className="container">
                    {boxes.map((box, index) => (
                        <Box key={index} imageSrc={box.imageSrc} text={box.text}/>
                    ))}
                </div>
            </div>
        </div>
    </div>);
}

const a = () => {
    const boxes = [
        {imageSrc: 'image1.png', text: 'This is some text for box 1. It can be very long and should be expandable.'},
        {imageSrc: 'image2.png', text: 'This is some text for box 2. It can be very long and should be expandable.' },
        // Add more boxes as needed
    ];

    return (
        <div>
            <MakeNavBar />
            <div className="container">
                {boxes.map((box, index) => (
                    <Box key={index} imageSrc={box.imageSrc} text={box.text} />
                ))}
            </div>
        </div>
    );
};


export default Stuff