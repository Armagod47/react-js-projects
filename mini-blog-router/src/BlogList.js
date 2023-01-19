import { Link } from "react-router-dom";

const BlogList = ({blogs, titlex}) => {
    // const blogs = props.blogs;
    // const title = props.titlex;
    
    return ( 
        <div className="blog-list">
            <h2>{titlex}</h2>
            {blogs.map((blog) => (<div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Actor : {blog.actor}</p>
                </Link>
            </div>))}
        </div>
     );
}
 
export default BlogList;