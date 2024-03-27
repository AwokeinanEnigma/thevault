import {MakeBigHeader, MakeText} from "./BuilderFunctions";
import {MakeNavBar} from "./Global";
import {Badge, ListGroup} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function NoteLister() {
    return (
        <div className="App">
            <MakeNavBar />
            <MakeMain />
        </div>
    );
}

function MakeMain() {
    return <div className="main-div">
        {/* <MakeNavBar />*/}
        <MakeHeaderImage />
        <MakeTextContent />
    </div>
}

function MakeHeaderImage(){
    return (<div className="masthead">
        <MakeBigHeader Content="Notes"/>
        <img className="img-thumbnail" width="1500" height="80" src="forest_black.jpg"/>
    </div>)
}

function MakeTextContent () {
    return (<div className="container">
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <MakeText Content="Click on a note to view it."/>
                <ListGroup as="ol">
                    <CreateListItem
                        NoteName="Why?"
                        Subtitle="Why this website exists."
                        Date="3/27/2024"
                        NotePath="/why"
                    />
                </ListGroup>
            </div>
        </div>
    </div>);
}

function CreateListItem(props)
{
    console.log("thevault/" + props.NotePath)
    const navigate = useNavigate();
    function OnClick(){
        console.log(props.NotePath)
        navigate(props.NotePath);
    }
    return (<ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        action
        disabled = {false}
        onClick={OnClick}
        variant="dark"
        href={"thevault/" + props.NotePath}

    >
        <div className="ms-2 me-auto">
            <div className="fw-bold">{props.NoteName}</div>
            {props.Subtitle}
        </div>
        <Badge bg="primary" pill>
            {props.Date}
        </Badge>
    </ListGroup.Item>);

}

export default NoteLister;
