import React from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import Clock from './components/Clock'
import Menu from './components/Menu'



const CATEGORIES_LIST = [
  {
    category: 'sports',
    styles: {
      overflow: "hidden",
    }
  },
  {
    category: 'health',
    styles: {
      // height: 50,
      // width: 100,
    }
  },
  {
    category: 'entertainment',
    styles: {
      // height: 50,
      // width: 100,
    }
  },
  {
    category: 'business',
    styles: {
      // height: 50,
      // width: 100,
    }
  },
  {
    category: 'technology',
    styles: {
      // height: 50,
      // width: 100,
    }
  },
  {
    category: 'science',
    styles: {
      // height: 50,
      // width: 100,
    }
  },
]


class App extends React.Component {
  state = { serverMessage: '' }

  componentDidMount(){
    fetch('/api/demo')
      .then(response => response.json())
      .then(data => this.setState({ serverMessage: data.message }))
  }

  render(){
    return (
      <div>
      <header>
        <nav id="navbox">
          <span>
            <Menu />
          </span>
          <span id="logo">
            News Block
          </span>
          <span>
            <SearchBar/>
          </span>
        </nav>
      </header>
      <div class="timeblock">
        <Clock/> 
        <span>|</span>
        <h2>Todays news for a better world</h2>
      </div>
      <main>
        <div class="windows">
          <div id="topnews">
            <h1>Top News</h1>
          </div>
          {CATEGORIES_LIST.map(category => <div class="winsizes"style={category.styles} ><h1>{category.category}</h1></div>)}
        </div>
      </main>
    </div>
    )
  }
}

export default App
