// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('posts').onSnapshot(snapshot => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.user}</h3>
          <p>{post.content}</p>
          {post.imageUrl && <img src={post.imageUrl} alt="Post" />}
        </div>
      ))}
    </div>
  );
}
