// ismein ziyada kuch nahi keya gaya hai bas data.js wala kaam app.jsx mein keya hai eik array bana kar usko eik variable mein pass keya hai or us variable ko 
// student () smein likh kar neechay props ki tarah use keya gaya hai

function Card({data}) {
    return(
        <div>
            <img src={data.image} width="100px" height="100px" />
        </div>
    );
}

export default Card;
