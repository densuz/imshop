import React from 'react'
import './CSS/Blog.css';


const Blog = (props) => {
    return <div className="blog-wrap">
        <img src="https://placeimg.com/640/480/tech" alt=""/>
        <p>{props.Tanggal}</p>
        <h2><b>{props.Judul}</b></h2>
        <p>{props.Summary}</p>
    </div>
}

export default Blog;
