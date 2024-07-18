import {v4 as uuidv4} from 'uuid';
import portfolio1 from '../../assets/img/project/p1.jpg';
import portfolio2 from '../../assets/img/project/p2.jpg';
import portfolio3 from '../../assets/img/project/p3.jpg';
import portfolio4 from '../../assets/img/project/p1.jpg';

const portfolioTwoData = [
    {
        id: uuidv4(),
        img: portfolio1,
        category: 'Construction',
        location: 'Twelve, Portland',
        client: 'Gerding Development',
        index: '01',
    },

    {
        id: uuidv4(),
        img: portfolio2,
        category: 'Construction',
        location: 'Shreveport, Bossier',
        client: 'Southeast Land',
        index: '02',
    },

    {
        id: uuidv4(),
        img: portfolio3,
        category: 'Managenment',
        location: 'Development, House',
        client: 'Green Dopler',
        index: '03',
    },

    {
        id: uuidv4(),
        img: portfolio4,
        category: 'Construction',
        location: 'Twelve, Portland',
        client: 'Gerding Development',
        index: '04',
    },

]

export default portfolioTwoData;