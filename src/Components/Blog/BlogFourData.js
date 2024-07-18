import {v4 as uuidv4} from 'uuid';
import thumb1 from '../../assets/img/home4/b1.jpg';
import thumb2 from '../../assets/img/home4/b2.jpg';
import thumb3 from '../../assets/img/home4/b3.jpg';
import authorImg from '../../assets/img/blog/author2.jpg';
import authorImg1 from '../../assets/img/blog/author3.jpg';

const blogFourData = [
    {
        id: uuidv4(),
        thumb: thumb1,
        title: 'work hard properly and grow your startup business',
        catName: 'Business',
        btnLink: '/newsDetails',
        authorName: 'Busico',
        authorImg: authorImg,
        date: '28 May 2022',
        comments: '03 Comments'
    },

    {
        id: uuidv4(),
        thumb: thumb2,
        title: 'Finding Products to Sell in the Digital Agency Niche',
        catName: 'Digital Agency',
        btnLink: '/newsDetails',
        authorName: 'Salman',
        authorImg: authorImg1,
        date: '17 Jan 2022',
        comments: '02 Comments'
    },

    {
        id: uuidv4(),
        thumb: thumb3,
        title: 'Beyond Outpaces Stock Market You Should Know',
        catName: 'Marketing',
        btnLink: '/newsDetails',
        authorName: 'Busico',
        authorImg: authorImg,
        date: '22 Feb 2022',
        comments: '05 Comments'
    },
]

export default blogFourData;