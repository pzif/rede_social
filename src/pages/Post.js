// src/pages/Post.js
import React, { useState } from 'react';
import { storage, db, auth } from '../firebase';

export default function Post() {
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (image) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.error(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              const user = auth.currentUser;
              db.collection('posts').add({
                user: user.email,
                content,
                imageUrl: url,
                createdAt: new Date(),
              });
              setContent('');
              setImage(null);
            });
        }
      );
    }
  };

  return (
    <div>
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Post</button>
    </div>
  );
}
