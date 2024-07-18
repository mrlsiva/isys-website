import {v4 as uuidv4} from 'uuid';
import thumb1 from '../../assets/img/blog/b1.jpg';
import thumb2 from '../../assets/img/blog/b2.jpg';
import thumb3 from '../../assets/img/blog/b3.jpg';
import authorImg from '../../assets/img/blog/author2.jpg';
import authorImg1 from '../../assets/img/blog/author3.jpg';

const blogOneData = [
    {
        id: uuidv4(),
        thumb: thumb1,
        title: 'CREATE QUALITY VIDEOS IN SECONDS USING WIX',
        btnText: 'Read More',
        btnLink: '/newsDetails',
        authorName: 'Busico',
        authorImg: authorImg,
        date: '28 MAY 2022'
    },

    {
        id: uuidv4(),
        thumb: thumb2,
        title: 'OPEN YOUR BUSINESS FOR CREATIVE IDEAS',
        btnText: 'Read More',
        btnLink: '/newsDetails',
        authorName: 'Salman',
        authorImg: authorImg1,
        date: '17 NOV 2022'
    },

    {
        id: uuidv4(),
        thumb: thumb3,
        title: 'CONVINCE OTHERS NOT TO USE DARK PATTERNS',
        btnText: 'Read More',
        btnLink: '/newsDetails',
        authorName: 'Busico',
        authorImg: authorImg,
        date: '20 JAN 2020'
    },
]

export default blogOneData;