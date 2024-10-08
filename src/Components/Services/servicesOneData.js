import {v4 as uuidv4} from 'uuid';
import bg1 from '../../assets/img/services/1.jpg';

const servicesOneData = [
    {
        id: uuidv4(),
        bg: bg1,
        icon: 'blueprint',
        title: 'Web App Development',
        desc: 'Get secure, scalable, high performing and feature packed web development services catering to different industry verticals at market leading prices.',
    },

    {
        id: uuidv4(),
        bg: bg1,
        icon: 'interior-design',
        title: 'Mobile App Development',
        desc: 'We have more than a decade of experience in providing secure, scalable, feature-packed and high performing custom application development services.',
    },

    {
        id: uuidv4(),
        bg: bg1,
        icon: 'home',
        title: 'Full Stack Development',
        desc: 'There is no need to hire frontend and backend development team separately. We provide full stack development on MEAN, MERN, PHP + Vue.js, .Net + JS, to name a few.',
    },

    {
        id: uuidv4(),
        bg: bg1,
        icon: 'varnish',
        title: 'Software Consulting',
        desc: 'Our software consulting teams offer technology advice so that you can implement the optimal technology-stack for your custom software requirements.',
    },

    {
        id: uuidv4(),
        bg: bg1,
        icon: 'sketch-1',
        title: 'Corporate Services',
        desc: 'Our team of trainers for corporate IT training services comes from experienced backgrounds and hold certification in their respective fields.',
    },
    {
        id: uuidv4(),
        bg: bg1,
        icon: 'sketch-1',
        title: 'It Support Helpdesk',
        desc: 'Besides providing custom software app development services, we also provide the best-in-class software maintenance services & support to clients.',
    },
    
]

export default servicesOneData;