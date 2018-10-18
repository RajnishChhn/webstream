import React, { PropTypes, Component } from 'react';

class Movie extends Component {

	constructor(props){
		super(props);
		this.state = {
			title: '',
			year: '',
			votes: '',
			description: '',
			poster: '',
			backdrop: '',
		};
		this.handleSync = this.handleSync.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	componentDidMount() {
		var name = '';
		if(!this.props.movie.name) {
			name = this.props.movie.original_title;
		} else {
			name = this.props.movie.name;
		}

		this.setState({
			title: name,
			year: this.props.movie.release_date,
			votes: this.props.movie.vote_average,
			description: this.props.movie.overview,
			poster: 'http://image.tmdb.org/t/p/original' + this.props.movie.poster_path,
			backdrop: 'http://image.tmdb.org/t/p/original' + this.props.movie.backdrop_path,
		})
	}

	handleDelete () {
		this.props.confirmDeletion(this.state);
	}

	handleEdit() {
		this.props.onEdit(this.state);
	}

	handleSync() {
		this.props.onMouseLookup(this.state);
	}

	render() {

		const { title, votes, description } = this.state;

    return(
      <div onMouseEnter={this.handleSync} className="Movie" style={{backgroundImage: 'url(' + this.state.poster + ')'}}>
        <div className="overlay">
          <a onClick={this.handleEdit} className="EditButton"><i className="fa fa-edit"></i></a>
					<a onClick={this.handleDelete} className="DeleteButton"><i className="fa fa-trash-alt"></i></a>
        </div>
      </div>
    )
  }
}

export default Movie;
