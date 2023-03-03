import React, { useState } from 'react';
import ArticleService from '../../services/article.service';

export const CreateNewArticle = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleBodyChange = (event) => setBody(event.target.value);
  const handleImageChange = (event) => setImage(event.target.files[0]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('body', body);
    formData.append('image', image);

    ArticleService.create(formData)
      .then((response) => {
        console.log('Article created successfully:', response.data);
        // Optionally, redirect the user to the newly created article's page
      })
      .catch((error) => {
        console.error('Error creating article:', error);
        setErrorMessage('There was an error creating the article. Please try again later.');
      });
  };

  return (
    <div>
      <h2>Create New Article</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} />

        <label htmlFor="body">Body</label>
        <textarea id="body" value={body} onChange={handleBodyChange}></textarea>

        <label htmlFor="image">Image</label>
        <input type="file" id="image" onChange={handleImageChange} />

        <button type="submit">Create</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};