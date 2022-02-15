function Tour(props) {

    return (
        <div>
            <h4>Name: {props.tour.name}</h4>
            <img src={props.tour.image} alt={props.tour.name}/>  
        </div>
    );
}

export default Tour;