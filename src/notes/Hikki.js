import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MakeNavBar} from "../Global";
import {MakeBigHeader, MakeBigImage, MakeImage, MakeImagedHeader, MakeSmallHeader, MakeText} from "../BuilderFunctions";

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
        <MakeImagedHeader Content="Note: Fangames" Source="../forest_bluered.jpg" AltText="A blue forest with a redish sky and distant red mountains." />
        <MakeMain/>
    </div>
}

function MakeMain() {
    return (<div className="container">
        <div className="row">
            <div className="col-lg-9 mx-auto">
                <MakeSmallHeader Content="Fangames and Hikki"/>
                <MakeText
                    Content="It’s been hard to write this note. Initially, I was going to do a deep-dive into my work with the Omori Hikki Mod, where I would give my thoughts on the project. I would’ve talked about some regrets, some things I think I did right, and some things I’d do much differently if I had a do-over. However, I realized that a note like that would be worthless. Reflecting on the past is always good, but a single person’s recollection of the past is rarely useful. I also understand that my perspective of the past is heavily warped, out of order, and slightly schizophrenic. So, I dropped that. It’s unfortunate because I had an entire draft lined up."
                />
                <MakeImage
                    Source="../rip.png"
                    AltText="An early draft"
                />
                <MakeText
                    Content="I’m still going to slightly discuss Hikki, but it’s no longer going to be the focus. I don’t want to go digging through the past, since there’s no point in doing that. Sometimes, it’s better to let the pond stay still. Who knows what’ll come up when you start skipping stones? Ignorance is bliss, and sometimes, the best answer is no answer at all."
                />
                <MakeText
                    Content="Now, onto the main topic of this note: Fangames!"
                />
                <MakeText
                    Content="Fangames are new, relatively speaking. At least in the form we understand them now, where a bunch of people come together because they’ve been inspired by a piece of media. Many older fangames (early 2000s, very late 1990s) were developed by a single person cranking it out their basement for fun. Nowadays though, fangames are usually collectives of younger people. When I say young, I mean late teens, and very early twenties. I think this is because younger people have more free time on their hands and lack many responsibilities that occupy adult life."
                />
                <MakeText
                    Content="I’ve worked on a few fangames before, mainly Rainy Mari, Hikki Mod, and a few Mother fangames that aren’t worth mentioning. Usually, when I work on a fangame, I mostly do programming. I’m the guy who writes gameplay systems, creates cutscenes, and stuff like that. I’ve also done some custom engine stuff for a fangame before, but talking about engine development is boring, so I won’t discuss that too much. All I can say about fangame programming is that you should almost always go with an engine instead of trying to make your own from the ground up. A lot of manpower is involved in making an engine and most fan projects do not have that manpower."
                />
                <MakeText
                    Content="Trust me man, it’s not worth it to roll with whatever you’ve created with Love2D/SFML/Monogame. Just use Godot or something."
                />
                <MakeText
                    Content="I’d like to talk about Hikki and Rainy Mari, which are both Omori fangames with the same general idea. Though, Rainy Mari calls itself a mod, but it feels a lot like a fangame! Both projects have the same idea, Omori in reverse - sister lives, brother dies. I worked on both projects at the same time, but I worked on Hikki a lot more than I did Rainy Mari. I did the same thing on both though, mainly cutscenes with some minor concepting. I didn’t touch battles or enemies on either project, mostly because I didn’t know how RPGMAKER MV’s battle system worked on a basic level, and Omori had a bunch of plugins that made it more confusing. I was happy to stick to cutscenes and event scripting, even if it was boring and arduous. "
                />
                <MakeText
                    Content="Focusing on Hikki, again, I did more work on cutscenes than anything else. I also did some concepting and mapping. Here’s some of my work:"
                />
                {/*images go here*/}
                <MakeImage
                    Source="../map.png"
                    AltText="A picture of a Hikki map I worked on."
                />
                <MakeImage
                    Source="../map2.png"
                    AltText="A picture of a Hikki map I worked on."
                />
                <MakeImage
                    Source="../mp3.png"
                    AltText="A picture of a Hikki map I worked on."
                />
                <MakeImage
                    Source="../mapgate.png"
                    AltText="A picture of a Hikki map I worked on."
                />
                <MakeText
                    Content="On Rainy Mari, I did a lot of work in the early stages, but I tapered off quickly when the ball got rolling. As far as I know though, they’re doing good, still making good progress. I made a small program to convert their script files to Omori’s .yaml format. You can find that program on my Github if you’re curious. Here’s some very early sprites I did, which were just for concepting some ideas we already had:"
                />
                {/*images go here*/}
                <MakeImage
                    Source="../NON-CONFORMIST_KID.png"
                    AltText="An exploration of a cut character called the Non-Conformist"
                />
                <MakeImage
                    Source="../General_GENERALSPRITES.png"
                    AltText="Early exploration of some characters. Based on concept art by the talented JokerZM."
                />
                <MakeText
                    Content="Hikki was (inevitably) cancelled, which is a shame, but I had fun working on it. In retrospect, I probably would’ve been better off learning programming languages instead of fooling around in RPGMAKER, but it was fun to work with them. As for Rainy Mari, I left the project of my own volition. Most of the programmers were doing work I should’ve been doing, and I was way too busy with Dreamtone and some other projects to pitch in. I did some cutscene stuff when the ball got rolling though, but that’s the extent of what I did. I think the cutscene I did is still in the game, so please look forward to it when Rainy Mari releases!"
                />
                <MakeText
                    Content="One last thing – you should expect your fangame to fail. Don’t hinge any bets on it actually releasing. A lot of factors can get in the way of making a fangame, like copyright, internal developer drama, or a lack of motivation to work on the game. Very few fangames are released, and the ones that do are usually outliers. It’s not a 50/50 chance either, it’s a solid 80/20 chance that the fangame will release instead of being cancelled. This doesn’t mean that it’s not worth it to work on a fangame though, it’s always good to flex your creative muscles and put your skills to use. "
                />
                <MakeText
                    Content="Those are my thoughts on fangames, thanks for reading! Also, if this note seems a little rushed, I wrote it riiiight before my flight and didn't proofread it, sorry!"
                />
            </div>
        </div>
    </div>);
}

export default FirstNote;
