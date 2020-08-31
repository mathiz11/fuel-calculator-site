import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const Home = () => {
    return (
        <Layout title="Calculateur Rallye !">
            <SEO title="Calculateur Rallye !" />
            <div className="home">
                <a href="/fuel-calculator" className="bg-shadow-blue"><h2>Calculateur d'essence ></h2></a>
                <a href="/gear-box-calculator" className="bg-dark-liver"><h2>Calculateur de boite de vitesses ></h2></a>
            </div>
        </Layout>
    )
}

export default Home