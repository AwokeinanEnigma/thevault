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


const Box = ({ imageSrc, text, link }) => {
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
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={imageSrc} alt="Box Image" className="box-image" />
            </a>
            <div ref={textRef} className={`box-text ${expanded ? 'expanded' : ''}`}>
                {text}
            </div>
        </div>
    );
};

function MakeMain() {
    const boxes = [
        {
            imageSrc: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2771670/header.jpg',
            text: "Psychopomp, as short as it is, is fantastic. I really like this game, it’s dense and packed full of interesting concepts that I haven’t seen in other games. The art style is unique, the gameplay is fun, and the music is great. There’s a song at the end of the game which I still listen to, months after playing. I think you should play it, it’s free and only an hour and a half long. The developer is making a paid, expanded version of the game, which I will 100% pick up on day one.",
            link: "https://store.steampowered.com/app/2771670/Psychopomp/",
        },
        {
            imageSrc: "firepunchbanner.png",
            text: "Live.",
            link: "https://example.com/firepunch",
        },
        {
            imageSrc: "https://static.wixstatic.com/media/b48361_dcc13b3f897f45f3b76eefea596d93c6~mv2.png/v1/fill/w_1920,h_990,al_c,q_90,enc_auto/b48361_dcc13b3f897f45f3b76eefea596d93c6~mv2.png",
            text: "Murder Drones is such a strange show to write about. It’s so, so, self-indulgent with a lot of its ideas. It feels like the creator had a billion ideas and threw all of them at the wall. Some ideas stuck, some of them... didn’t. It has those rough marks of a creator’s first major production, which are both endearing and annoying at the same time. I can’t say I didn’t enjoy my time with it, but my enjoyment of the show exponentially grew at the last couple of episodes. Not in an ironic “because it was almost over,” sort of way, but because the last few episodes were much better compared to the other episodes. There’s some interesting symbolism with Christianity and God and Satan near the end, but it doesn’t really go anywhere. Not going to spoil anything though. If you’ve got time to kill, it’s worth a watch.  ",
            link: "?",
        },
        {
            imageSrc: "https://pbs.twimg.com/profile_banners/1403439889052360704/1699673461/1500x500",
            text: "I'm the writer on this game. 10/10."
        },
        {
            imageSrc: "https://parahumans.wordpress.com/wp-content/uploads/2011/06/cityscape2.jpg",
            text: "Worm is a two-million word web serial about a girl with bug powers. It's very, very, good. Rough, but interesting, with a lot of interesting ideas. It's good, I recommend it. There's a lot of great world-building, unique characters, and the superpowers are fun and have a lot of interesting interactions. It definitely stumbles towards the end, but there are a few amazing moments here and there. Even though it takes a direction I really dislike towards the end, there are some amazing moments here and there that I still think about, months after reading. Go read it, you'll find it by googling parahumans. It's the wordpress link, not the reddit link."
        },
        // todo: add more shit
    ];

    return (<div className="container">

        <div className="row">
            <div className="col-lg-9 mx-auto">
                <MakeBigHeader Content="Stuff"/>
                <MakeTextCentered Content="This is a list of short notes on various games/music/shows that I've played/listened to/watched. There are no ratings here, just thoughts. Also note that none of these are set in stone, so all of these are prone to change at any time. You can click on a box to expand it."/>
                <div className="container">
                    {boxes.map((box, index) => (
                        <Box key={index} imageSrc={box.imageSrc} text={box.text}/>
                    ))}
                </div>
            </div>
        </div>
    </div>);
}

export default Stuff