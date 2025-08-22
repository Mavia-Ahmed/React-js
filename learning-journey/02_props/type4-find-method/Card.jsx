/*
yahan jo yeh hai "blog.find(item => item.id == 1)" ismein blog data.js mein say hai, .find method hai, item or
item.id jo hai us say woh data get keya ja raha hai jo chahiye or id bohot zaroori hai data.js ki file mein array
banatay waqt id dena zaroori hai kyun keh yahan usi kay zariye data leya ja raha hai
*/
import blog from './data'

function Card() {
    const data = blog.find(item => item.id == 1)  //data eik variable banaya gaya hai yahan find kay zarye data leye gaya usko data kay variable mein add keya hai or neechay data.image karkay data show keya gaya hai
    const data2 = blog.find(item => item.id == 2)
    return (
        <div>
            <div>
                <img src={data.image} width="100px" height="100px" />
                <h3>{data.head}</h3>
                <p>{data.description}</p>
                <p>{data.date}</p>
            </div>
            <div>
                <img src={data2.image} width="100px" height="100px" />
                <h3>{data2.head}</h3>
                <p>{data2.description}</p>
                <p>{data2.date}</p>
            </div>
        </div>
    )
}

export default Card;
