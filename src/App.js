import './App.css';
import InputBox from './components/InputBox';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PostCard from "./components/postCard";
import { CircularProgress } from '@mui/material';

function App() {
  let endPoint = "https://jsonplaceholder.typicode.com/photos/";

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");

  const End = "https://jsonplaceholder.typicode.com/photos/";

  useEffect(() => {

    console.log("id: ",id);
    if(id >= "0")
      endPoint = `${endPoint}${id}`;
    else 
      endPoint = End;

    axios.get(endPoint)
      .then(res => {
        setLoading(false);

        if(endPoint !== End){
          console.log("if bloack");
          setPosts([res.data]);
        }
        else{
          setPosts(res.data);
        }
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  }, [id]);

  console.log(posts);

  const handleSearch = (value) => {
    console.log("nadle searh: ",value);
    setId(value);
  };

  return (
    <div className="App">
      <InputBox id={id} setId={setId} handleSearch={handleSearch} />
      <h1 className='header'>Your Posts</h1>
      <div className='post-container'>
        {loading ? <CircularProgress className='backdrop'/> :
          posts.length > 0 ?
          posts.map(post => (
            <PostCard 
              title={post.title} 
              id={post.id} 
              url={post.url} 
              content={post.content} 
              key={post.id} 
            />
          )) : <p>No posts found</p>}
      </div>
    </div>
  );
}

export default App;
