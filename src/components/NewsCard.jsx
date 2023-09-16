import React from 'react';

const NewsCard = ({ article }) => {
    return (
        // <div>
        //     <div className="p-8">
        //         <a href={article.url} target="_blank" rel="noopener noreferrer" className=''>
        //             <img src={article.urlToImage} alt={article.title} />
        //             <h3>{article.title}</h3>
        //         </a>
        //         <p>{article.description}</p>
        //     </div>
        // </div>
        <div>
            <a href={article.url} className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100" target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">{article.title}</h5>
                <img src={article.urlToImage} alt={article.title} />
                <p className="font-normal text-gray-700">{article.description}</p>
            </a>
        </div>
    );
};
export default NewsCard;
