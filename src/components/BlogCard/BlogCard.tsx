import { Button } from '..';
import './BlogCard.scss';

const BlogCard = ({
    title,
    paragraph,
    path,
}: {
    title: string;
    paragraph: string;
    path?: string;
}) => {
    return (
        <div className='blog-card'>
            <h3 className='blog-card__title'>{title}</h3>
            <p className='blog-card__paragraph'>{paragraph}</p>
            <Button title='Читать' />
        </div>
    );
};

export default BlogCard;
