import {v4 as uuidv4} from 'uuid';
import portfolio1 from '../../assets/img/home4/p1.jpg';
import portfolio2 from '../../assets/img/home4/p2.jpg';
import portfolio3 from '../../assets/img/home4/p3.jpg';
import portfolio4 from '../../assets/img/home4/p4.jpg';
import portfolio5 from '../../assets/img/home4/p5.jpg';

const portfolioFourData = [
    {
        id: uuidv4(),
        img: portfolio1,
        category: 'ARCHITECTS',
        title: 'Business Documentary',
    },

    {
        id: uuidv4(),
        img: portfolio2,
        category: 'DESIGN',
        title: 'CATALYST ARCHITECTS',
    },

    {
        id: uuidv4(),
        img: portfolio3,
        category: 'Interior',
        title: 'HILIX COMPUND VILLA',
    },

    {
        id: uuidv4(),
        img: portfolio4,
        category: 'Decoration',
        title: 'Home Decoration',
    },

    {
        id: uuidv4(),
        img: portfolio5,
        category: 'Decoration',
        title: 'Home Decoration',
    },
]

export default portfolioFourData;