import {v4 as uuidv4} from 'uuid';
import img1 from '../../assets/img/home3/team1.jpg';
import img2 from '../../assets/img/home3/team2.jpg';
import img3 from '../../assets/img/home3/team3.jpg';

const teamFourData = [
    {
        id: uuidv4(),
        img: img1,
        name: 'Salman Ahmed',
        designation: 'CEO, Founder',
        fb: '#',
        twitter: '#',
        insta: '#',
        linkedIn: '#'
    },

    {
        id: uuidv4(),
        img: img2,
        name: 'RS Rahul Das',
        designation: 'Head Engineer',
        fb: '#',
        twitter: '#',
        insta: '#',
        linkedIn: '#'
    },

    {
        id: uuidv4(),
        img: img3,
        name: 'Samantha Liza',
        designation: 'Creative Designer',
        fb: '#',
        twitter: '#',
        insta: '#',
        linkedIn: '#'
    },
]

export default teamFourData;