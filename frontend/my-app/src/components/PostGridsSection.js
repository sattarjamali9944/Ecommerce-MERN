import React from 'react';


const blogPosts = [
  {
    id: 1,
    imgSrc: 'assets/images/bg1.jpg',
    altText: 'blog-image',
    author: 'admin',
    date: 'Aug 10, 2020',
    title: 'Here to bring your life style to the next level.',
    link: '#'
  },
  {
    id: 2,
    imgSrc: 'assets/images/bg2.jpg',
    altText: 'blog-image',
    author: 'admin',
    date: 'Aug 10, 2020',
    title: 'Here to bring your life style to the next level.',
    link: '#'
  },
  {
    id: 3,
    imgSrc: 'assets/images/bg3.jpg',
    altText: 'blog-image',
    author: 'admin',
    date: 'Aug 10, 2020',
    title: 'Here to bring your life style to the next level.',
    link: '#'
  },
  {
    id: 4,
    imgSrc: 'assets/images/bg4.jpg',
    altText: 'blog-image',
    author: 'admin',
    date: 'Aug 10, 2020',
    title: 'Here to bring your life style to the next level.',
    link: '#'
  }
];

const PostGridsSection = () => {
  return (
    <section className="w3l-post-grids-6">
      <div className="post-6-mian py-5">
        <div className="container py-lg-5">
          <h3 className="hny-title text-center mb-0">Latest Blog <span>Posts</span></h3>
          <p className="mb-5 text-center">Handpicked Favourites just for you</p>
          <div className="post-hny-grids row mt-5">
            {blogPosts.map(post => (
              <div key={post.id} className="col-lg-3 col-md-6 grids5-info column-img" id="zoomIn">
                <a href={post.link}>
                  <figure>
                    <img className="img-fluid" src={post.imgSrc} alt={post.altText} />
                  </figure>
                </a>
                <div className="blog-thumbhny-caption">
                  <ul className="blog-info-list">
                    <li><a href="#admin">By {post.author}</a></li>
                    <li className="date-post">{post.date}</li>
                  </ul>
                  <h4><a href={post.link}>{post.title}</a></h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostGridsSection;
