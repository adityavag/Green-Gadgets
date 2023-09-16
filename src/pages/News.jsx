import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard'; // Import the NewsCard component
import Navbar from '../components/Navbar';
function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;

  useEffect(() => {
    const apiUrl =
      'https://newsapi.org/v2/everything?q=e-waste&from=2023-09-14&to=2023-09-14&sortBy=popularity&apiKey=d08dfa0f47224f17bc951ab78b1ae925';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.articles) {

          setNews(data.articles);
          setLoading(false);
        } else {
          console.error('Data structure is not as expected:', data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = news.slice(indexOfFirstArticle, indexOfLastArticle);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbar />
      <div className=''></div>
      <div className='p-8'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className=''>
            <ul className='grid grid-cols-3 max-lg:grid-cols-1 max-lg:mx-auto'>
              {currentArticles.map((item, index) => (
                <li key={index} className='max-lg:mt-4'>
                  <NewsCard article={item} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default News;