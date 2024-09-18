import React from "react";
import { useParams, useLocation } from "react-router-dom";

const ArticleDetail = () => {
  const { title } = useParams();
  const location = useLocation();
  const article = location.state?.article;

  if (!article) {
    return <p>No article data available.</p>;
  }

  const formattedTitle = title.replace(/-/g, ' '); // Convert URL title back to a readable format

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={article.image_url}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{formattedTitle}</h1>
          <h2 className="text-gray-700 mb-4">{article.description}</h2>
          <p className="text-gray-600 mb-4">
            <strong>Published on:</strong> {new Date(article.pubDate).toLocaleDateString()}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Source:</strong> {article.source_name} 
            <a href={article.source_url} target="_blank" rel="noopener noreferrer" className="text-indigo-500 ml-1">
              Visit Source
            </a>
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Author:</strong> {article?.creator?.join(', ')}
          </p>
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Read Full Article
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
