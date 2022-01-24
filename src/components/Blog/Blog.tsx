import React from 'react';
import BlogCard from '../BlogCard/BlogCard';

import './Blog.scss';

const Blog = () => {
  return (
    <section className='blog'>
      <h2 className='blog__title'>Информация для посетителей</h2>
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
    </section>
  );
};

export default Blog;
