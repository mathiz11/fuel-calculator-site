import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page introuvable" />
    <div id="page-404">
      <div className="container">
        <h1>Page Introuvable</h1>
        <p>Tu ne dois pas être sur le bon chemin</p>
        <a href="/">Page d'accueil</a>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
