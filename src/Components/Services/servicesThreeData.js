import {v4 as uuidv4} from 'uuid';
import img1 from '../../assets/img/home3/s1.png';
import img2 from '../../assets/img/home3/s2.png';
import img3 from '../../assets/img/home3/s3.png';


const servicesThreeData = [
    {
        id: uuidv4(),
        img: img1,
        title: 'Digital Marketing',
        desc: 'Digital marketing focuses on direct response. We have the digital expertise of SEO optimization.',
    },

    {
        id: uuidv4(),
        img: img2,
        title: 'Web Development',
        desc: 'Sometimes it’s the little things in web life that make us look twice. From carousels to documentation.',
    },

    {
        id: uuidv4(),
        img: img3,
        title: 'Creative Design',
        desc: 'Busico has advanced enough where it now supports some powerful concepts that can help with the flexibility.',
    },

    
]

export default servicesThreeData;