import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [genre, setBody] = useState('');
    const [actor, setAuthor] = useState('mario');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const inputChangeHandler = (e) => {
        setTitle(e.target.value);
    }

    const textAreaHandler = (e) => {
        setBody(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, actor, genre};
        setIsLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog),
        }).then(() => {
            setIsLoading(false);
            // redirecting  to back page
            // history.go(-1);
            history.push('/');
        })
        

       
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>

            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={inputChangeHandler}
                />
                <label>Blog Body:</label>
                <textarea 
                    required
                    value={genre}
                    onChange={textAreaHandler}
                ></textarea>
                <label>Blog Author:</label>
                <select
                    value={actor}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="Jamie Foxx, Leonardo Di Caprio">luigi</option>
                </select>
               {!isLoading && <button>Add Blog</button>}
               {isLoading && <button disabled>Adding Blog..</button>}
            </form>
        </div>
     );
}
 
export default Create;