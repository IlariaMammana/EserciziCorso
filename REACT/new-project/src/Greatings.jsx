const Greatings = (props) => {
    console.log(props);

    return (
        <>
        {props.età >= 18? <p>Auguri {props.nomeUtente} hai compiuto {props.età} anni, ora puoi prendere la patente. </p> : <p>Auguri {props.nomeUtente} hai compiuto {props.età} anni, sei ancora troppo giovane per prendere la patente. </p>}
        </>
    )

    /* if (props.età >= 18) {
        return (
            <>
                <p>Auguri {props.nomeUtente} hai compiuto {props.età} anni, ora puoi prendere la patente. </p>
            </>
        )
    } else {
        return (
            <>
                <p>Auguri {props.nomeUtente} hai compiuto {props.età} anni, sei ancora troppo giovane per prendere la patente. </p>
            </>
        )
    } */

}

export default Greatings;