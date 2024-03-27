
// header funcs
export function MakeBigHeader(props){
    return (
        <h1 className="headerBig">
            {props.Content}
        </h1>
    );
}


export function MakeHeader(props) {
    return (
        <h1 className="headerRegular">
            {props.Content}
        </h1>
    );
}

export function MakeSmallHeader(props) {
    return (
        <h2 className="headerSmall">
            {props.Content}
        </h2>
    );
}

// text funcs
export function MakeText(props){
    return (
        <p className="paragraphRegular">
            {props.Content}
        </p>
    )
}

