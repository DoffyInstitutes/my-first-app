import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const handleDelete = (id) => {
        setBlogs(blogs.filter(blog => blog.id !== id))
    }

    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => fetch("http://ec2-18-218-192-90.us-east-2.compute.amazonaws.com:9000/blogs")
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                setIsLoading(false);
                ;
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            })
            , 1000)
    }, []);

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
        </div>
    );
}

export default Home;