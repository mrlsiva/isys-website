import {v4 as uuidv4} from 'uuid';
import bg1 from '../../assets/img/services/1.jpg';

const servicesOneData = [
    {
        id: uuidv4(),
        bg: bg1,
        icon: 'blueprint',
        title: 'Architecture',
        desc: 'We commit ourselves to complete all projects within the timeline set with our honorable clients.',
    },

    {
        id: uuidv4(),
        bg: bg1,
        icon: 'interior-design',
        title: 'Interior Design',
        desc: 'We commit ourselves to complete all projects within the timeline set with our honorable clients.',
    },

    {
        id: uuidv4(),
        bg: bg1,
        icon: 'home',
        title: 'Home Decoration',
        desc: 'We commit ourselves to complete all projects within the timeline set with our honorable clients.',
    },

    {
        id: uuidv4(),
        bg: bg1,
        icon: 'varnish',
        title: 'Repair & Painting',
        desc: 'We commit ourselves to complete all projects within the timeline set with our honorable clients.',
    },

    {
        id: uuidv4(),
        bg: bg1,
        icon: 'sketch-1',
        title: 'Sketching',
        desc: 'We commit ourselves to complete all projects within the timeline set with our honorable clients.',
    },
    
]

export default servicesOneData;