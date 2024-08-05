import {v4 as uuidv4} from 'uuid';
import img1 from '../../assets/img/home3/s1.png';
import img2 from '../../assets/img/home3/s2.png';
import img3 from '../../assets/img/home3/s3.png';


const ProfessionalServiceData = [
    {
        id: uuidv4(),
        img: img1,
        title: 'Web App Development',
        desc: 'Get secure, scalable, high performing and feature packed web development services catering to different industry verticals at market leading prices.',
    },

    {
        id: uuidv4(),
        img: img2,
        title: 'Mobile App Development',
        desc: 'We have more than a decade of experience in providing secure, scalable, feature-packed and high performing custom application development services.',
    },

    {
        id: uuidv4(),
        img: img3,
        title: 'Full Stack Development',
        desc: 'There is no need to hire frontend and backend development team separately. We provide full stack development on MEAN, MERN, PHP + Vue.js, .Net + JS, to name a few.',
    },
    {
        id: uuidv4(),
        img: img3,
        title: 'Corporate Services',
        desc: 'Our team of trainers for corporate IT training services comes from experienced backgrounds and hold certification in their respective fields.',
    },
    {
        id: uuidv4(),
        img: img3,
        title: 'It Support Helpdesk',
        desc: 'Besides providing custom software app development services, we also provide the best-in-class software maintenance services & support to clients.',
    },
    {
        id: uuidv4(),
        img: img3,
        title: 'Software Consulting',
        desc: 'Our software consulting teams offer technology advice so that you can implement the optimal technology-stack for your custom software requirements.',
    },

    
]

export default ProfessionalServiceData;