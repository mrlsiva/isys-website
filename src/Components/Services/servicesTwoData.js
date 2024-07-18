import {v4 as uuidv4} from 'uuid';
import img1 from '../../assets/img/home2/s1.jpg';
import img2 from '../../assets/img/home2/s2.jpg';
import img3 from '../../assets/img/home2/s3.jpg';


const servicesTwoData = [
    {
        id: uuidv4(),
        img: img1,
        icon: 'construction-site',
        title: 'BUILDING REPAIR & CONSTRUCTION',
        desc: 'We commit ourselves to complete all projects within the timeline set with our honorable clients.',
    },

    {
        id: uuidv4(),
        img: img2,
        icon: 'sketch',
        title: 'Any Kind project Planning',
        desc: 'Thousands of successful projects we are one of the most trusted construction companies.',
    },

    {
        id: uuidv4(),
        img: img3,
        icon: 'house-plan',
        title: 'Office, Home Interior Design',
        desc: 'We commit ourselves to complete all projects within the timeline set with our honorable clients.',
    },
    
]

export default servicesTwoData;