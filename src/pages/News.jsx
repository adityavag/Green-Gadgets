import React, { useEffect, useState } from 'react'
import NewsCard from '../components/NewsCard'
import newsData from '../data/articles.json'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function News() {
  const newsArticles = newsData.map(news => {
    return <NewsCard title={news.title} description={news.description} content={news.content} date={news.publishedAt} />
  })

  return (
    <div>
      <Navbar />
      <div className='p-8 grid grid-cols-3 max-lg:grid-cols-1'>
        {newsArticles}
      </div>
    </div>
  )
}