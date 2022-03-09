import './Blog.scss';
import BlogCard from './BlogCard/BlogCard';

const Blog = () => {
    return (
        <section className='blog'>
            <h2 className='blog__title'>Информация для посетителей</h2>
            <ul className='blog__cards'>
                <BlogCard
                    title='Sed ut perspiciatis'
                    paragraph='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.'
                />
                <BlogCard
                    title='Sed ut perspiciatis'
                    paragraph='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.'
                />
                <BlogCard
                    title='Sed ut perspiciatis'
                    paragraph='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.'
                />
                <BlogCard
                    title='Sed ut perspiciatis'
                    paragraph='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.'
                />
            </ul>
        </section>
    );
};

export default Blog;
