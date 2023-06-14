import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'

import requests from '../Requests'
const Home = () => {
  return (
    <>
      <Main />
      <Row rowId='1' title='Upcoming' url={requests.requestUpcoming} />
      <Row rowId='2' title='Popular' url={requests.requestPopular} />
      <Row rowId='3' title='Trending' url={requests.requestTrending} />
      <Row rowId='4' title='Top Rated' url={requests.requestTopRated} />
      <Row rowId='5' title='Horror' url={requests.requestHorror} />
    </>
  )
}

export default Home
