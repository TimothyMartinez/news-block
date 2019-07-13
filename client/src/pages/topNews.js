import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class TopNews extends React.Component {
  state = { articles: [] }

  componentDidMount() {
      axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NA_API_KEY}&language=en&pageSize=21`)
        .then(response => this.setState({ articles.response.data }))
  }

  render(){
    console.log(this.state)
    return(
      <>
        <h1>Top News</h1>
        
        <div id="articles">
          {this.state.articles.map(article => (
            <Link key={article.title} to={article.url}>
              <div className="article">
                <h3>{article.title}</h3>
                <img src={article.urlToImage}/>
                <h4>{article.description}</h4>
                <p>{article.source.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </>
    )
  }
}

export default TopNews