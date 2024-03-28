import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MakeHeader, MakeHeaderImage, MakeImagedHeader, MakeText} from "./BuilderFunctions";
import {MakeNavBar} from "./Global";

function App() {
    return (
        <div className="App">
            <MakeNavBar/>
            <MakePage/>
        </div>
    );
}

function MakePage() {
    return <div className="main-div">
        <MakeImagedHeader Content="The Vault" Source="forest.jpg" AltText="A red forest with a gray sky and distant red mountains." />
        <MakeBody/>
    </div>
}


function MakeBody() {
    return (<div className="container">
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <MakeHeader Content="What is this?"/>
                <MakeText Content="This is The Vault, a website that hosts a collection of notes on various topics."/>
                <MakeText Content="It is not a portfolio, and it is not a resume. It is simply a collection of notes."/>
                <MakeText Content="Do not take any of the words written on this website as gospel. Thank you."/>

                <MakeHeader Content="Contact"/>
                <MakeText Content="thomas(dot)fenton(at)protonmail(dot)com"/>
                <MakeText Content="._enigma on discord"/>
            </div>
        </div>
    </div>);
}


export default App;
