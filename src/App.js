import { useEffect, useState } from 'react';
import './App.scss';
import Header from "./Components/Header/Header"
import Nav from "./Components/Nav/Nav"
import Post from "./Components/Post/Post"
import axios from 'axios';

function App() {

    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {

    }

    useEffect(() => {
        axios.get("https://cloud.codesupply.co/endpoint/react/data.json")
            .then(data => setPosts(data.data))
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        setFilteredPosts([])
        if (searchText.length !== 0) {
            const arr = []
            posts.forEach((post) => {
                if (post.title.toLowerCase().includes(searchText.toLowerCase()) || post.text.toLowerCase().includes(searchText.toLowerCase())) {
                    arr.push(post)
                }
            })
            setFilteredPosts(arr)
        }
    }, [searchText])

    return (
        <main>
            <div className='container'>
                <Header searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch}></Header>
                <Nav></Nav>
                <div className='posts-container'>
                    {
                        posts.length > 0 && filteredPosts.length === 0 && searchText.length === 0 ? posts.map((post, index) => {
                            return <Post
                                key={index}
                                author={post.autor}
                                date={post.date}
                                img={post.img}
                                img_2x={post.img_2x}
                                tags={post.tags}
                                text={post.text}
                                title={post.title}
                                views={post.views}
                            ></Post>
                        }) : ""
                    }

                    {
                        posts.length > 0 && filteredPosts.length > 0 && searchText.length > 0 ? filteredPosts.map((post, index) => {
                            return <Post
                                key={index}
                                author={post.autor}
                                date={post.date}
                                img={post.img}
                                img_2x={post.img_2x}
                                tags={post.tags}
                                text={post.text}
                                title={post.title}
                                views={post.views}
                            ></Post>
                        }) : ""
                    }

                    {
                        posts.length > 0 && filteredPosts.length === 0 && searchText.length > 0 ? (<div> Nothing was found with the search text "{searchText}"</div>) : ""
                    }
                </div>
            </div>
        </main >
    );
}

export default App;
