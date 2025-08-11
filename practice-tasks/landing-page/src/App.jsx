import MyNavbar from './components/Navbar';
import CarouselComponent from './components/CarouselComponent';
import CardSection from './components/CardSection';
import Footer from './components/Footer';

const slides = [
  {
    image: '/hero.jpg',
    alt: 'First Slide',
    title: 'First Slide',
    description: 'Beautiful image description.',
  },
  {
    image: '/hero2.webp',
    alt: 'Second Slide',
    title: 'Second Slide',
    description: 'More cool text here.',
  },
  {
    image: '/hero3.webp',
    alt: 'Third Slide',
    title: 'Third Slide',
    description: 'Another description.',
  },
];



function App() {
 return (
    <div>
      <MyNavbar />
      <CarouselComponent slides={slides} />
      <CardSection />
      <Footer />
    </div>
  );
}

export default App;

