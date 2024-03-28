// header funcs
export function MakeBigHeader(props) {
    return (
        <h1 className="headerBig">
            {props.Content}
        </h1>
    );
}

export function MakeBigImage(props) {
    return (<img
        className="img-thumbnail"
        width="1500" height="80"
        src={props.Source}
        alt={props.AltText}
    />)
}

export function MakeImagedHeader(props) {
    return (<div className="masthead">
        <MakeBigHeader Content={props.Content}/>
        <MakeBigImage Source={props.Source} AltText={props.AltText}/>
    </div>)
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
export function MakeText(props) {
    return (
        <p className="paragraphRegular">
            {props.Content}
        </p>
    )
}

