/* 3rd Party Imports */
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
/* Local Imports */
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBSEmXxdPPefIe5CUeUx16x1E-q3nOMgdQ';

/* Create new component */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  };

  videoSearch(term) {
    /* search YouTube for list of videos given term */
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  };

  /* display to screen */
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300); //takes inner function and calls only once in every 300 milliseconds
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  };
};

/* take generated html and display to DOM */
ReactDOM.render(<App/>, document.querySelector('.container'));
