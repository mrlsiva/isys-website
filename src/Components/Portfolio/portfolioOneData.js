import {v4 as uuidv4} from 'uuid';
import portfolio1 from '../../assets/img/project/1.jpg';
import portfolio2 from '../../assets/img/project/2.jpg';
import portfolio3 from '../../assets/img/project/3.jpg';
import portfolio4 from '../../assets/img/project/4.jpg';

const portfolioOneData = [
    {
        id: uuidv4(),
        img: portfolio1,
        category: 'ARCHITECTS',
        title: 'Office ARCHITECTS',
        date: 'Jan 05 2013'
    },

    {
        id: uuidv4(),
        img: portfolio2,
        category: 'DESIGN',
        title: 'CATALYST ARCHITECTS',
        date: 'May 25 2010'
    },

    {
        id: uuidv4(),
        img: portfolio3,
        category: 'Interior',
        title: 'HILIX COMPUND VILLA',
        date: 'Jul 25 2012'
    },

    {
        id: uuidv4(),
        img: portfolio4,
        category: 'Decoration',
        title: 'Home Decoration',
        date: 'Nov 28 2018'
    },
]

export default portfolioOneData;