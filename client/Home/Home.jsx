import React from 'react'
import './Home.css'
import Item from '../../components/Item'

import Layout from '../../components/shared/Layout/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <Item />
      </div>
    </Layout>
  )
}

export default Home