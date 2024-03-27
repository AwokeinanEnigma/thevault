import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MakeBigHeader, MakeText} from "./BuilderFunctions";
import {MakeNavBar} from "./Global";

function App() {
  return (
      <div className="App">
      <MakeTop />
      </div>
    );
}

function MakeTop() {
    return <div className="main-div">
        <MakeNavBar/>
        <MakeHeaderImage />
        <MakeBig />
    </div>
}
function MakeHeaderImage(){
    return (<div className="masthead">
        <MakeBigHeader Content="The Vault"/>
        <img className="img-thumbnail" width="1500" height="80" src="forest.jpg"/>
    </div>)
}



function MakeBig () {
    return (<div className="container">
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <h1 className="headerRegular" id="about">
                    What is this?
                </h1>
                <MakeText Content="This is The Vault, a website that hosts a collection of notes on various topics."/>
                <MakeText Content="It is not a portfolio, and it is not a resume. It is simply a collection of notes."/>
                <MakeText Content="Do not take any of the words written on this website as gospel. Thank you."/>

                <h1 className="headerRegular" id="contact">
                    Contact
                </h1>
                <MakeText Content="thomas(dot)fenton(at)protonmail(dot)com"/>
                <MakeText Content="._enigma on discord"/>
            </div>
        </div>
    </div>);
}


export default App;
