import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function FirstNote() {
    return (
        <div className="App">
            <MakeTop />
        </div>
    );
}

function MakeTop() {
    return <div className="main-div">
        {/* <MakeNavBar />*/}
        <MakeHeaderImage />
        <MakeBig />
    </div>
}

// header funcs
function MakeBigHeader(props){
    return (
        <h1 className="headerBig">
            {props.Content}
        </h1>
    );
}

function MakeHeaderImage(){
    return (<div className="masthead">
        <MakeBigHeader Content="Note: Why?"/>
        <img className="img-thumbnail" width="1500" height="80" src="forest.jpg"/>
    </div>)
}

function MakeHeader(props) {
    return (
        <h1 className="headerRegular">
            {props.Content}
        </h1>
    );
}

function MakeSmallHeader(props) {
    return (
        <h2 className="headerSmall">
            {props.Content}
        </h2>
    );
}

function MakeText(props){
    return (
        <p className="paragraphRegular">
            {props.Content}
        </p>
    )
}

function MakeBig () {
    return (<div className="container">
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <MakeHeader Content="A?"/>
                <MakeText Content="This is The Vault, a website that hosts a collection of notes on various topics."/>
                <MakeText Content="It is not a portfolio, and it is not a resume. It is simply a collection of notes."/>
                <MakeText Content="Do not take any of the words written on this website as gospel. Thank you."/>
            </div>
        </div>
    </div>);
}

export default FirstNote;
