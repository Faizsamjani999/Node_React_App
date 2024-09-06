import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ArticleList.css'; // Import the CSS file

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://localhost:9999/api/articles');
                setArticles(response.data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div className="article-list-container">
            <h1 className="page-title">Article List</h1>
            {articles.length === 0 ? (
                <p className="no-articles">No articles found</p>
            ) : (
                <ul className="article-list">
                    {articles.map((article) => (
                        <li key={article._id} className="article-item">
                            <Link to={`/articles/${article._id}`} className="article-link">
                                <h2 className="article-title">{article.title}</h2>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ArticleList;
