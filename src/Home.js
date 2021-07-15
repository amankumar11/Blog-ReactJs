import React from 'react'
import BlogList from "./BlogList";
import useFetch from './useFetch';

const Home = () =>{
    
        const{data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return (
        <div>
            <div className="home">
                {isPending && <div>Loading...</div>}
                {blogs && <BlogList blogs={blogs} title="All the blogs!"/>}
                
                {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs" handleDelet={handleDelete}/> */}
            </div>
        </div>
    )
}

export default Home
