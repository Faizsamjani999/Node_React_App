import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './ArticleDetail.css';

const ArticleDetail = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get(`http://localhost:9999/api/articles/${id}`);
                setArticle(response.data);
            } catch (error) {
                console.error('Error fetching article:', error);
            }
        };

        fetchArticle();
    }, [id]);

    if (!article) return <p>Loading...</p>;

    return (
        <div className="article-detail-container">
            <h1 className="article-title">{article.title}</h1>
            <div className="green-border"></div>
            <div className="article-description" dangerouslySetInnerHTML={{ __html: article.description }} />
            <div className="article-media">
                {article.media && article.media.map((filePath, index) => (
                    <div key={index} className="media-item">
                        <img src={`http://localhost:9999/${filePath}`} alt={`Media ${index}`} className="media-image" />
                    </div>
                ))}
            </div>
            <div className="article-additional-content" dangerouslySetInnerHTML={{ __html: article.additionalContent }} />
            <Link to="/">
                <button className="back-button">Back to Form</button>
            </Link>
        </div>
    );
};

export default ArticleDetail;
