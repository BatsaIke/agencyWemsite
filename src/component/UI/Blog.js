import React from "react";
import '../../styles/blog.css'

import videoImg from '../../images/video.png'
import articleImg from "../../images/article.png";
import caseStudy from "../../images/case-study.png";

const blogData = [
  {
    id: 1,
    imgUrl: videoImg,
    title: "video",
    desc: "To Know more about me, watch introduction video...",
    linkUrl: "#",
  },
  {
    id: 2,
    imgUrl: articleImg,
    title: "article",
    desc: "boost your conversion rate with us...",
    linkUrl: "#",
  },
  {
    id: 3,
    imgUrl: caseStudy,
    title: "case-study",
    desc: "To Know more about me, watch introduction video...",
    linkUrl: "#",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <div className='container'>
        <div className='blog__top-content'>
          <h6 className='subtitle'>Our Blog</h6>
          <h2>
            Let's Have a look from our
            <span className='highlight'> recent blog</span>
          </h2>
        </div>
        <div className='blog__wrapper'>
          {blogData.map((item) => (
            <div className='blog__item' key={item.id}>
              <h3>{item.title}</h3>
              <div className='blog__img'>
                <img src={item.imgUrl} alt={item.name} />
              </div>
              <p className='description blog__desc'>{item.desc}</p>
              <div>
                <a href='' className='learn__more'>
                  <i class='ri-arrow-right-line'></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
