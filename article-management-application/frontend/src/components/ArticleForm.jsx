import React, { useState } from 'react';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications
import './ArticleForm.css';

const ArticleForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [additionalContent, setAdditionalContent] = useState('');
    const [files, setFiles] = useState([]);
    const navigate = useNavigate(); // Hook for navigation

    const handleFileChange = (e) => {
        setFiles(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('additionalContent', additionalContent);
        for (let i = 0; i < files.length; i++) {
            formData.append('media', files[i]);
        }

        try {
            const response = await axios.post('http://localhost:9999/api/articles', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Article created:', response.data);
            // Clear form fields
            setTitle('');
            setDescription('');
            setAdditionalContent('');
            setFiles([]);
            // Show success toast
            toast.success('Article created successfully!');
            // Navigate to ArticleList page after a short delay
            setTimeout(() => navigate('/articles'), 2000);
        } catch (error) {
            console.error('Error creating article:', error);
            // Show error toast
            toast.error('Error creating article. Please try again.');
        }
    };

    return (
        <div className="article-form-container">
            <h1>Create New Article</h1>
            <form onSubmit={handleSubmit} className="article-form">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter article title"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data={description}
                        onChange={(event, editor) => setDescription(editor.getData())}
                        config={{
                            ckfinder: {
                                uploadUrl: 'http://localhost:9999/api/upload',
                            },
                        }}
                    />
                </div>
                <div className="form-group">
                    <label>Additional Content</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data={additionalContent}
                        onChange={(event, editor) => setAdditionalContent(editor.getData())}
                        config={{
                            ckfinder: {
                                uploadUrl: 'http://localhost:9999/api/upload',
                            },
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="media">Upload Media</label>
                    <input
                        id="media"
                        type="file"
                        multiple
                        onChange={handleFileChange}
                    />
                </div>
                <div className="form-group button-group">
                    <button type="submit" className="submit-button">Create Article</button>
                    <button
                        type="button"
                        className="view-list-button"
                        onClick={() => navigate('/articles')}
                    >
                        View Articles List
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ArticleForm;
