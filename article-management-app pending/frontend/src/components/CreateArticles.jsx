import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

function CreateArticles() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);

    try {
      await axios.post('http://localhost:9999/api/articles', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Article created...');
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

  const customUploadAdapter = (loader) => {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const formData = new FormData();
          loader.file.then((file) => {
            formData.append('media', file);

            axios.post('http://localhost:9999/api/upload', formData)
              .then((res) => {
                resolve({
                  default: `http://localhost:9999/${res.data.filePath}`,
                });
              })
              .catch((err) => {
                console.error('Upload failed:', err);
                reject(err);
              });
          });
        });
      },
    };
  };

  const uploadPlugin = (editor) => {
    console.log('Upload plugin initialized');
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return customUploadAdapter(loader);
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Article Title"
        required
      />
      <CKEditor
        editor={ClassicEditor}
        config={{
          // extraPlugins: [uploadPlugin],
          uploadUrl: 'http://localhost:9999/api/upload',
          mediaEmbed: {
            previewsInData: true,
          },
        }}
        data={content}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
        }}
      />
      <button type="submit">Create Article</button>
    </form>
  );
}

export default CreateArticles;
