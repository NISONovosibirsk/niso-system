import { IBlogCard } from '../../../../interfaces';
import { Button } from '../../../support';
import './BlogCard.scss';

const BlogCard = ({ title, paragraph, path }: IBlogCard) => {
    return (
        <li className='blog-card'>
            <h3 className='blog-card__title'>{title}</h3>
            <p className='blog-card__paragraph'>{paragraph}</p>
            <Button title='Читать' />
        </li>
    );
};

export default BlogCard;
