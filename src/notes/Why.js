import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MakeNavBar} from "../Global";
import {MakeBigHeader, MakeBigImage, MakeImagedHeader, MakeSmallHeader, MakeText} from "../BuilderFunctions";

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
        <MakeImagedHeader Content="Note: Why?" Source="../forest_bluered.jpg" AltText="A blue forest with a redish sky and distant red mountains." />
        <MakeMain/>
    </div>
}

function MakeMain() {
    return (<div className="container">
        <div className="row">
            <div className="col-lg-9 mx-auto">
                <MakeSmallHeader Content="Everyone’s got a website these days"/>
                <MakeText
                    Content="I’m not saying this one is going to be any different. It has no greater purpose other than being a dumping ground for which I can lay out my thoughts on whatever subjects I’m interested in. There’s no schedule, no filter, and certainly no profit incentive. It’s for my personal enjoyment alone. Thus, I owe you nothing, and you owe me nothing."/>
                <MakeText
                    Content="Anyways, onto the main subject. The reason I chose to make this website is because when I view old posts I've sent on social media, I feel a sort of disconnect. Even reading texts that are two to three months old makes me stop and question “Did I really say that? Why would I say that?” I don’t find this concerning though, in a way, I find it sort of amusing. People change every second, every day, every month, every year, and I am no exception. Every entry on this website will be a snapshot of who I was when I wrote it, and I’ll be able to look back and reflect on myself through reading the notes I put on this website. Maybe I’ll cringe, laugh, or agree with my past self. Who knows?"/>
                <MakeText
                    Content="Now, you might be wondering why I don’t write a journal, or place these entries in .txt files on my computer. The reason is that I wanted to try making a website for fun. I took a course on web development recently, and I’d like to apply everything I learned from that course onto this website. As such, the website is made with React and Bootstrap, and a little bit of malice on my end. The images you see were taken in New Hampshire four years ago, during the pandemic. I edited them with photoshop to make them a bit... Grunge? I don’t know the proper term, but I think it looks cool, so it’s here to stay. In the future, I’ll probably add some different pictures for different entries."/>
                <MakeText
                    Content="Finishing up, I don’t have much else to say. If you’ve read through all of that, thank you.   Goodbye."/>
            </div>
        </div>
    </div>);
}

export default FirstNote;
