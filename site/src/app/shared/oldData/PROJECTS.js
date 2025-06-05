import chromeRiverImg from '../assets/img/chrome-river.jpg';
import breadCrumbImg from '../assets/img/breadcrumb-trail.jpg';
import reduxWoodsImg from '../assets/img/redux-woods.jpg';
import vigenereCipher from '../assets/img/vigenere-cipher.jpg'

export const PROJECTS = [
    {
        id: 0,
        name: 'Vigenere Cipher',
        image: vigenereCipher,
        elevation: 1233,
        featured: true,
        description:
            'Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers.'
    },
    {
        id: 1,
        name: 'Malware Analysis Sandbox',
        image: chromeRiverImg,
        elevation: 877,
        featured: false,
        description:
            'Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River.'
    },
    {
        id: 2,
        name: 'Game 1',
        image: breadCrumbImg,
        elevation: 2901,
        featured: false,
        description:
            'Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground.'
    },
    {
        id: 3,
        name: 'Pygame',
        image: reduxWoodsImg,
        elevation: 42,
        featured: false,
        description:
            "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
    }
];
