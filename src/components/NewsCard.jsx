import React from 'react';

const NewsCard = (props) => {
    return (
        <div>
            <div className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-8">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">{props.title}</h5>
                <p className="font-normal text-gray-700">{props.description}</p>
            </div>
        </div>
    );
};
export default NewsCard;
