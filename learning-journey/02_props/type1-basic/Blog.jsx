function Blog(props){  // props jo keh student kay () ismein hai yeh eik tareeqa hai data ko parent say laanay ka yahan names, ages wagheira aata ha
    return (
        <div>
            <img src={props.image} width="100px" height="100px"/>
        </div>
    );
}

export default Blog;
