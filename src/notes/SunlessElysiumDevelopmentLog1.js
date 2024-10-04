import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MakeNavBar} from "../Global";
import {
    MakeBigHeader,
    MakeBigImage, MakeFreakyText, MakeHeader, MakeHeaderJustified,
    MakeImage,
    MakeImagedHeader,
    MakeSmallHeader,
    MakeText,
    MakeTextCentered
} from "../BuilderFunctions";

function FirstNote() {
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

function MakeMain() {
    return (<div className="container">
        <div className="row">
            <div className="col-lg-9 mx-auto">
                <MakeHeaderJustified Content="SUNLESS ELYSIUM: DEV LOG #1"/>
                <MakeFreakyText
                    Content="[website note] Wow, this shit looked like hot ass. I redid some of the CSS. I’m not rewriting those earlier entries though; they can stay terrible forever. Not at all sorry for the time between notes, but I'll try to do these more frequently."
                />
                <MakeText
                    Content="Recently, I played Disco Elysium. This was disastrous for my mental state. "
                />

                <MakeText
                    Content="On a more serious note, whenever I play a new game, or watch a new show/movie, or read a book, it infects my creative brain. It changes the tune of my creative brain, so to speak. So, now after playing Disco Elysium, I am more motivated to write than I have ever been before.  But – I’m (unfortunately) a game developer, so I also want to make games. How do I reconcile this?"/>
                <MakeTextCentered
                    Content="The answer? Simply make game (with a lot of writing). "
                />
                <MakeText
                    Content="That’s why I’ve started work on a small prototype, which I’m calling SUNLESS ELYSIUM (stylized using all caps, because it’s cool!). For now, I’m going to keep it as a very small project. I have a clear gameplay loop, a clear vision for the game, and a clear path to achieving that vision. It’s a Disco-Elysium inspired game where you talk to NPCs with branching dialogue trees and different results. The main gameplay loop is just talking to NPCs."
                />
                <MakeText
                    Content="Here’s the pitch for the game: The sun has mysteriously gone out, and riots have broken out across the country. Mysterious, human-like entities roam the streets and bring death and panic in their wake. People from all walks seek shelter, and you must provide it for them. You must choose who to let in, and who to keep out. Who can you trust? Are the people at your doorstep human, or are they something else? Converse with the things at your door and decide whether to let them in or condemn them to a world without a sun."
                />
                <MakeText
                    Content="Onto the more technical aspect of this note, in a game where the game loop primarily involves talking to NPCs, there needs to be some method to create the conversations. There are a few out-of-the-box solutions which you can buy online. The problem with that is that I make my games with a shoestring budget of dust & roach corpses, so I’m not willing to shell out money for anything. That leaves me with one solution:"
                />
                <MakeText
                    Content="Write my own scripting language and interpreter."
                />
                <MakeImage
                    Source="../diarunscript.png"
                    AltText="A picture of a script in Notepad++"
                />
                <MakeText
                    Content="Was this a good idea? Probably not. The technical details are arduous and irrelevant, so I won’t discuss them much. All you need to know is that it’s an interpreted language which doesn’t compile to any machine code. Every line of ‘code’ corresponds directly to C# code which will execute separate C# based on the parameters its given. Example:"
                />
                <MakeImage
                    Source="../diagram.png"
                    AltText="A picture of a script in Notepad++"
                />
                <MakeText
                    Content="All in all, this took me about a week of work. It sucked to get conditional stuff working, but I would say that it was worth it. It’s lightweight and fast, and I can put it into any project quickly. I know I could’ve used an existing scripting language and binding like Wren, or Lua, but I wanted to experience the pain firsthand. No pain no gain, and by God, I’ve gained a lot. I don’t recommend doing this unless you’re autistic and want to get into that niche."
                />

                <MakeText
                    Content="Back to the game development part of this note. When I design a game that’s inspired by another game, I’m afraid of making an inferior clone of that game I’m inspired by. I want my games to be original and stand on their own. Even though SUNLESS ELYSIUM takes part of Disco Elysium’s name and apes the dialogue box, I still want it to stand on its own. With the direction I’m taking SUNLESS ELYSIUM, I think I’m going the right direction. I’m going for more of a horror game with unnerving undertones than something like Disco Elysium, which is a political buddy-cop detective game (which is also amazing!)."
                />
                <MakeText
                    Content="As for how far I am into the development of the game, I’m not too far, honestly. The scripting language for dialogue interactions is complete, so the only thing I really need to do is focus on the UI part of the game and create a conversation that can be played with different outcomes. I’ve only been working on the game off-and-on for less than a month as of writing this article (10/3/2024). My goal is to get a basic prototype before the end of the year with visuals and show it off to people. If people don’t like it, I’ll drop it and go back tow working on my main project. If they do, hell yeah, I’ll try to make it into a full-on game and put it on Steam."/>
                <MakeText
                    Content="In conclusion, Jesus Christ, I didn’t imagine this note would be as long as this. This note is kind of all over the place, so I'll write more about the plot and the creative aspect of the game in the next note I write. That note will come next week if work doesn’t get in the way. Thanks for stopping by!"/>

            </div>
        </div>
    </div>);
}

export default FirstNote;
