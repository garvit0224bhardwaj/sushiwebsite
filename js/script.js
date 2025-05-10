// For SVG and PNG assets, use direct import from /assets directory
import check from '/assets/check.svg';
import star from '/assets/star.svg';
import sushi12 from '/assets/sushi-12.png';
import sushi11 from '/assets/sushi-11.png';
import sushi10 from '/assets/sushi-10.png';

// AOS (Animate On Scroll) imports
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

// Data arrays
const trendingSushis = [
    'Make Sushi',
    'Nigiri Sushi',
    'Oshizushi',
    'Temaki Sushi',
    'Uramaki Sushi',
    'Inari Sushi'
];

const trendingDrinks = [
    "Oruncha",
    "Ofukucha",
    "Sakura Tea",
    "Kombu-cha",
    "Aojiru",
    "Mugicha",
];

const cards = [
    {
        imgSrc: sushi12,
        alt: "sushi-12",
        title: "Chezu Sushi",
        rating: "4.8",
        price: "$21.00"
    },
    {
        imgSrc: sushi11,
        alt: "sushi-11",
        title: "Originale Sushi",
        rating: "4.8",
        price: "$21.00",
        active: true
    },
    {
        imgSrc: sushi10,
        alt: "sushi-10",
        title: "Ramen Legendo",
        rating: "4.8",
        price: "$21.00"
    }
];

// Export the arrays if you need to use them in other files
export { trendingSushis, trendingDrinks, cards };