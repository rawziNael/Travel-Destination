import { Link } from "react-router-dom";
import Tour from '../Tour/Tour'
import data from '../../data.json'

function Tours(props) {

    return (
        <>
            {data.map((city,idx) => {
                return (
                        <div key={idx}>
                        <Link to={`/city/${city.id}`}><Tour tour={city}/></Link>
                        </div>
                );
            })}
        </>
    );
}
export default Tours;