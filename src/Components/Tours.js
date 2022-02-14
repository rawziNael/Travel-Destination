// import data from '../data.json'
function Tours(props) {

    return (
        <>
            {props.data.map(city => {
                return (
                    <div>
                        <h3>Name : {city.name}</h3>
                        <img src={city.image} alt={city.name} />
                        <span></span>
                    </div>
                );
            })}
        </>
    );
}
export default Tours;