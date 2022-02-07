import { Button } from '..';
import './BlogCard.scss';
import { IBlogCard } from '../../interfaces';

const BlogCard = ({ title, paragraph, path }: IBlogCard) => {
    return (
        <div className='blog-card'>
            <h3 className='blog-card__title'>{title}</h3>
            <p className='blog-card__paragraph'>{paragraph}</p>
            <Button title='Читать' />
        </div>
    );
};

export default BlogCard;
