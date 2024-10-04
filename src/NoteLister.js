import {MakeBigHeader, MakeBigImage, MakeText, MakeTextCentered} from "./BuilderFunctions";
import {MakeNavBar} from "./Global";
import {Badge, ListGroup} from "react-bootstrap";

function NoteLister() {
    return (
        <div className="App">
            <MakeNavBar/>
            <MakeMain/>
        </div>
    );
}

function MakeMain() {
    return <div className="main-div">
        <MakeHeaderImage/>
        <MakeTextContent/>
        <MakeBottomImage/>
    </div>
}

function MakeBottomImage() {
    return (<div className="masthead">
        <MakeBigImage Source="forest_black.jpg" AltText="A red and black forest with a red and white sky and distant white mountains."/>
    </div>)
};

function MakeHeaderImage() {
    return (<div >
        <MakeBigHeader Content="Note Index"/>
    </div>)
}

function MakeTextContent() {
    return (<div className="container">
        <div className="row">
            <div className="col-lg-4 mx-auto">
                <MakeTextCentered Content="Click on a note to view it."/>
                <ListGroup as="ol">
                    <CreateListItem
                        NoteName="Everyone's Got A Website"
                        Subtitle="An explanation on why this website exists."
                        Date="3/27/2024"
                        NotePath="notes/why"
                    />
                    <CreateListItem
                        NoteName="Fangames"
                        Subtitle="Some thoughts on fangames."
                        Date="4/2/2024"
                        NotePath="notes/hikki"
                    />
                    <CreateListItem
                        NoteName="SUNLESS ELYSIUM, DEV LOG #1"
                        Subtitle="The first development log for SUNLESS ELYSIUM."
                        Date="10/3/2024"
                        NotePath="notes/sunlesselysiumdevelopmentlog1"
                    />
                </ListGroup>
            </div>
        </div>
    </div>);
}

function CreateListItem(props) {
    return (
        <ListGroup.Item
            className="d-flex justify-content-between align-items-start"
            action
            variant="dark"
            href={props.NotePath}
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{props.NoteName}</div>
                {props.Subtitle}
            </div>
            <Badge bg="dark" pill>
                {props.Date}
            </Badge>
        </ListGroup.Item>);

}

export default NoteLister;
