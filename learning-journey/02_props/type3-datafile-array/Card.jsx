/*
ismein jo [0] yeh hai yeh index number hai data.js ki file mein eik array jo {} is bracket mein likha 
jata hai yeh hai 0 index iskay ilawa or banao toh woh 1 index phir 2 index and so on, ismein jo blog 
hai woh naam hai jo data.js ki file mein diya gaya hai const blog = [{}] is tarah
*/

// WITH 1 ARRAY
import blog from './data'

function Card() {
    return(
        <div>
            <img src={blog[0].image} width="100px" height="100px" />
            <h3>{blog[0].head}</h3>
            <p>{blog[0].description}</p>
            <p>{blog[0].date}</p>
        </div>
    );
}

export default Card;


// WITH 2 ARRAY
import blog from './data'

function Card() {
    return (
        <div>
            <div>
                <img src={blog[0].image} width="100px" height="100px" />
                <h3>{blog[0].head}</h3>
                <p>{blog[0].description}</p>
                <p>{blog[0].date}</p>
            </div>
            <div><img src={blog[1].image} width="100px" height="100px" />
                <h3>{blog[1].head}</h3>
                <p>{blog[1].description}</p>
                <p>{blog[1].date}</p></div>
        </div>
    );
}

export default Card;
