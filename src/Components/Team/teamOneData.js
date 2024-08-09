import {v4 as uuidv4} from 'uuid';
import img1 from '../../assets/img/team/1.png';
import img2 from '../../assets/img/team/2.png';
import img3 from '../../assets/img/team/3.png';

const teamOneData = [
    {
        id: uuidv4(),
        img: img1,
        name: 'Abraham Reza',
        designation: 'Contructor',
        fb: '#',
        twitter: '#',
        insta: '#',
        linkedIn: '#'
    },

    {
        id: uuidv4(),
        img: img2,
        name: 'Salman Ahmed',
        designation: 'Engineer',
        fb: '#',
        twitter: '#',
        insta: '#',
        linkedIn: '#'
    },

    {
        id: uuidv4(),
        img: img3,
        name: 'Daniel David',
        designation: 'Mechanic',
        fb: '#',
        twitter: '#',
        insta: '#',
        linkedIn: '#'
    },

    
]

export default teamOneData;