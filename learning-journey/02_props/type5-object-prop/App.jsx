import Card from './Card'
import Image1 from '../public/blog1.webp'

const blog = {
    image: Image1,
    head: "blog 1",
    description: "loremipsum sum ipsum orem lorem sum sum ipsum sipsum",
    date: "2025-08-22"
}
function App(){
    return (
        <Card data={blog} />
    );
}

export default App;
