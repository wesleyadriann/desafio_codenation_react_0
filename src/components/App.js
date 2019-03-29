import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      searchString: ''
    };

    this.handleSearchString = this.handleSearchString.bind(this);
  }

  componentDidMount() {
    console.log(recipes.results)
  }

  handleSearchString = searchString => {
    this.setState({ searchString })
  }

  render() { 
    return (
      <div className="App">
        <Navbar searchString={this.handleSearchString}/>
        <div className="container mt-10">
          <div className="row">
            {recipes.results.map((info, i) => {
              return (
                <RecipeItem 
                  key={i}
                  title={info.title}
                  thumbnail={info.thumbnail}
                  ingredients={info.ingredients}
                  href={info.href}
                />
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
