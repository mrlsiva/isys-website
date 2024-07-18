import {v4 as uuidv4} from 'uuid';
import portfolio1 from '../../assets/img/home3/p1.jpg';
import portfolio2 from '../../assets/img/home3/p2.jpg';
import portfolio3 from '../../assets/img/home3/p3.jpg';
import portfolio4 from '../../assets/img/home3/p4.jpg';

const PortfolioThreeData = [
    {
        id: uuidv4(),
        img: portfolio1,
        title: 'Sketch To Figma',
        category: 'Design',
        projectDate: 'May 25 2010',
        index: '01',
    },
    {
        id: uuidv4(),
        img: portfolio2,
        title: 'Sketch To Figma',
        category: 'Design',
        projectDate: 'May 25 2010',
        index: '02',
    },
    {
        id: uuidv4(),
        img: portfolio3,
        title: 'Sketch To Figma',
        category: 'Design',
        projectDate: 'May 25 2010',
        index: '03',
    },
    {
        id: uuidv4(),
        img: portfolio4,
        title: 'Sketch To Figma',
        category: 'Design',
        projectDate: 'May 25 2010',
        index: '04',
    },

]

export default PortfolioThreeData;