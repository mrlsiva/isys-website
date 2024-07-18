import {v4 as uuidv4} from 'uuid';
import img1 from '../../assets/img/home4/t1.jpg';
import img2 from '../../assets/img/home4/t2.jpg';
import img3 from '../../assets/img/home4/t3.jpg';
import img4 from '../../assets/img/home4/t4.jpg';

const teamFiveData = [
    {
        id: uuidv4(),
        img: img1,
        name: 'Rubel Ahmed',
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

    {
        id: uuidv4(),
        img: img4,
        name: 'Salman Ahmed',
        designation: 'UI Designer',
        fb: '#',
        twitter: '#',
        insta: '#',
        linkedIn: '#'
    },
]

export default teamFiveData;