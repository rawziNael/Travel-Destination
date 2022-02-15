import { useState } from "react";
import { useParams } from "react-router-dom";
import data from '../../data.json'

function TourDetail(props) {
    const [readMore , setReadMore] = useState(false);
    let {id} = useParams();
    const results = data.filter((result)=> result.id === id);
    return (
        <>
        <h2>{results[0].name}</h2>
        <p>
            {readMore
            ?`Description : ${results[0].info}`
            : `Description : ${results[0].info.substring(0,200)} ...`}
            <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "show more"}   
            </button>
        </p>
        <p>{results[0].price}</p>
        <img src={results[0].image}/>
        </>
    );
}

export default TourDetail;