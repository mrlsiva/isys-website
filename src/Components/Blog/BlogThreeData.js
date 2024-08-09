import {v4 as uuidv4} from 'uuid';
import thumb1 from '../../assets/img/home3/b1.jpg';
import thumb2 from '../../assets/img/home3/b1.jpg';
import thumb3 from '../../assets/img/home3/b1.jpg';

const BlogThreeData = [
    {
        id: uuidv4(),
        thumb: thumb1,
        title: 'Work hard properly and grow your startup business',
        btnText: 'Read More',
        btnLink: '/newsDetails',
        comments: '04 comments',
        date: '28 May 2022'
    },

    {
        id: uuidv4(),
        thumb: thumb2,
        title: 'Beyond out space stock market you should know',
        btnText: 'Read More',
        btnLink: '/newsDetails',
        comments: '02 comments',
        date: '10 Jan 2022'
    },

    {
        id: uuidv4(),
        thumb: thumb3,
        title: 'Finding products to sell in the digital agency niche',
        btnText: 'Read More',
        btnLink: '/newsDetails',
        comments: '03 comments',
        date: '20 Aug 2022'
    },
]

export default BlogThreeData;