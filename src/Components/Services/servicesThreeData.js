import {v4 as uuidv4} from 'uuid';
import img1 from '../../assets/img/home3/s1.png';
import img2 from '../../assets/img/home3/s2.png';
import img3 from '../../assets/img/home3/s3.png';


const servicesThreeData = [
    {
        id: uuidv4(),
        img: img1,
        title: 'Innovation idea',
        desc: 'The main goal of this software is to help enterprise level businesses generate and evaluate ideas so that innovation can be cultivated and implemented.',
    },

    {
        id: uuidv4(),
        img: img2,
        title: 'Streamline',
        desc: 'If you are a big company, we can help you streamline the processes and growth in the long term.',
    },

    {
        id: uuidv4(),
        img: img3,
        title: 'Creative team',
        desc: 'Isys Technologies is your team workspace where knowledge and collaboration meet to achieve great things.',
    },

    
]

export default servicesThreeData;