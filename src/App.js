import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MakeHeader, MakeHeaderImage, MakeImagedHeader, MakeText, MakeTextCentered} from "./BuilderFunctions";
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
            <div className="col-lg-7 mx-auto">
                <MakeHeader Content="What is this?"/>
                <MakeTextCentered Content="The Vault is a website which hosts a collection of notes on various topics."/>
                <MakeTextCentered Content="Thank you."/>

                <MakeHeader Content="Contact"/>
                <MakeTextCentered Content="urbanawakening on discord. @enigmaisonline on twitter (also known as X)."/>
                <MakeTextCentered Content="Do not contact me to ask me to remove notes or change them, I do not care. A note will only be removed if you show up to my residence and beat me in hand-to-hand combat."/>
            </div>
        </div>
    </div>);
}


export default App;
