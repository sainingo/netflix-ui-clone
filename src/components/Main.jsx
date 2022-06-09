import React from 'react'
import Home from './Home'
import Row from './Row'
import request from '../api/Request'
// import ErrorBoundary from './ErrorBoundary'

const Main = () => {
  return (
    <>
        <Home />
        <Row title="Popular on Netflix" fetchUrl={request.popularMovie} />
        {/* <ErrorBoundary>
        <Row title="Trending" fetchUrl={request.trendingMovie} />
         <Row title="Top Rated" fetchUrl={request.topRateMovie}  />
         <Row title="Upcoming" fetchUrl={request.upcomingMovie} />
        </ErrorBoundary> */}
        
    </>
  )
}

export default Main