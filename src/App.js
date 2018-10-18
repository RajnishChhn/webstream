import React, { Component } from 'react';
import { render } from 'react-dom';
import Logo from './components/header/Logo';
import Navigation from './components/header/Navigation';
import UserProfile from './components/header/UserProfile';
import Hero from './components/Hero';
import Movie from './components/Movie';
import Carousel from './components/footer/Carousel';
import Flexbox from 'flexbox-react';

import './App.css';
import './style.scss';

class App extends Component {
	constructor(props){
    super(props);
    this.state = {
      movies: [],
			selected: {
				title: '',
				year: '',
				votes: '',
				description: '',
				poster: '',
				backdrop: ''
			},
			editMode: false,
      mounted: false
    };
		this.syncSelected = this.syncSelected.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
  }

  loadContent () {
    var requestUrl ='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&amp;page=1&api_key=166624c030b91c943c397020f20525b4';
    fetch(requestUrl).then((response) => {
      return response.json();
    }).then((data) => {
			this.setState({
        movies: data.results
      })
			console.log(data.results);
    }).catch((err) => {
        console.log("There has been error");
    })
  }


  componentDidMount(){
    if(this.props.url !== '') {
      this.loadContent();
      this.setState({
        mounted:true
      })
    }
  }

	syncSelected(movie) {
		this.setState({
			selected: movie
		})
	}

	toggleEdit(){
		this.setState({
			selected: { editMode: !this.state.editMode }
		})
		console.log("editMode" + this.state.selected.editMode);
	}

  render(){
    return (
      <div>
				<Flexbox id="flex-box" className="Header flex-container" element="header" height="40px">
						<Navigation />
						<Logo />
						<UserProfile />
			  </Flexbox>

        <Hero selected={this.state.selected} editMode={this.state.editMode} />

				<footer>
					<Carousel>
						{
							this.state.movies.map(movie => {
								return <Movie
													key={movie.id}
													movie={movie}
													onMouseLookup={this.syncSelected}
													onEdit={this.toggleEdit} />
							})
						}
					</Carousel>
				</footer>

      </div>
    )
  }
}


export default App;
