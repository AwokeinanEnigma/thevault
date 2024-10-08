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
            text: "Worm is a two-million word web serial about a girl with bug powers. There's great world-building, unique characters, and intertwined plotlines. The superpowers are interesting on their own, but the way they interact and interface with each other is extremely interesting. The characters are the highlight though, they all have different and unique perspectives and views of the world. While I dislike the direction the story goes towards the end, there are a few amazing moments here and there. I recommend it. You can find it by googling the word “Parahumans.” It's the wordpress link, not the reddit link."
        },
        {
            imageSrc: "aloneintheplanet.png",
            text: "Wakusei Closet (also known as Alone in the Planet) is a manga about a young girl who travels to a dangerous and surreal world in her dreams. Don’t let the nice and simple art style fool you, it gets extremely grotesque and surreal in \tunimaginable ways. On the writing side of things, the story is elaborately written with many subtle complexities. There are a lot of little details that are set up early in the story that pay off in ways which are only noticeable on a second, or even third read. The ending is bittersweet, but fitting, nonetheless. It’s great, and it’s worth rereading multiple times."
        },
        {
            imageSrc: "https://metallife.com/wp-content/uploads/2019/08/folklords_boom_01_h.jpg",
            text: "Folklords is a five-issue miniseries about a boy named Ansel who sets out on a quest for the legendary Folklords. Unfortunately, it’s a real diamond in the rough. There are interesting subversions of classic fantasy tropes, but it’s five issues, so everything’s moving at a breakneck pace. There’s barely any room to let the writing breathe and develop. Towards the end there’s a sort-of interesting metaphor about Tolkien and his influence on modern fantasy, but it reads as obnoxious and obtuse shit-talking more than anything else. I desperately want to like Folklords, and I think if it was continued, it would’ve become something worthy of praise. Alas, it’s condemned to be just an okay five-issue comic. While it’s worth writing about, I can’t recommend it. "
        },
        {
            imageSrc: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/392110/header.jpg?t=1728046125",
            text: "Glory to the United Empire, I will slaughter every xenofreak that stands in the path of the United Empire. There is no duty too great, no burden too great. For Zelevas, I will do anything. On a more serious note – Endless Space 2 is a strategic space 4X where you conquer the galaxy in a variety of both fun and evil ways. I love Endless Space 2, it’s one of the few 4X games I can sink my teeth into for hours on end. What makes it fun to me is seeing the growth of your empire in real time, playing against the AI and trying to outplay the AI in 4D chess, and trying to optimize your colonies to squeeze the most resources out of them. Word of caution though – I do not recommend purchasing any of the major DLC. Most of them are outright miserable to play with (looking at you, Awakening, Penumbra, Dark Matter) and buying them is just paying to make the game worse. The only two DLCs I can really recommend are the Supremacy and Vaulters DLC. Honestly, the base game is fine if you’re looking for a good time. The game is also multiplayer, which is prone to desyncing and a myriad of weird network issues, but it’s still fun. I recommend it.  ",
        },
        {
            imageSrc: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/534380/header.jpg?t=1728286912",
            text: "Dying Light 2 is an open world zombie parkour game where you slaughter the undead with IEDs, baseball bats, and sick parkour skills. To be completely honest - I despise this game on a spiritual level. I’ve finished it two times, one playthrough at launch, and the other playthrough two years later with the post-launch patches. While there are things I like about the game, my opinion of it hasn’t changed in the slightest. I think the parkour and melee system is fun, and the skill tree is implemented in a way where it’s fun to get new abilities and use them in combat. Speaking of combat, it’s fast, brutal, and fun. It is absolutely my favorite part of this game. You can tell there was a lot of work into making it flow well and synergize well with the parkour mechanics of the game. Unfortunately, everything surrounding the combat is rough and forgettable. The quests are repetitive and boring (there’s like five hundred different flavored versions of the same unfun parkour challenge), the open world is bland and uninteresting (it all sort of blends together, but to its credit, there are a few good landmarks here and there like the tower in the city), and the story is legitimately nonsensical (it tries to be gripping but it also disrespects the player by stitching together weird narrative events). I think the worst part has to be those E3 trailers they put out years ago in the late 2010s. If you go back and look at those trailers, you see a much more polished and unique game. It’s like they took what they had from the E3 trailers, watered it down until it was colorless slop, and then shat it out on the steam store. Apparently, there was some controversy behind the scenes with the lead writer being accused of sexual harassment, which led to all of his work being cut and the story being hastily rewritten. I can’t recommend it at all.",
        }
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