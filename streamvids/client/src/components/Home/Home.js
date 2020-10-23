import React from "react";
import classes from "./Home.module.css";
import axios from "axios";
import "./home.css";
import Pagination from "../Pagination";
import Slider from '../../containers/Slider/Slider.js';

class Home extends React.Component {
  constructor() {
      super();

      this.state = {
          exampleItems: '',
          filteredItems: '', // It is not filtered by default.
          pageOfItems: [],
          videos: []
      };

      // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
      this.onChangePage = this.onChangePage.bind(this);
    
      this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount(){
  axios.get('http://localhost:3002/api/v1/videos')
  .then(response => this.setState({
    videos: response.data.videos
  }))
  
  }

  onChangePage(videos) {
      // update state with new page of items
      this.setState({ pageOfItems: videos });
  }

  handleFilter(e) {
    const inputValue = e.currentTarget.value.toString().toLowerCase();
    const newFilteredItems = this.state.videos.filter(item => {
      const itemNameLowerCase = item.title.toLowerCase();
      return itemNameLowerCase.includes(inputValue);
    });
    
    if (newFilteredItems.length === 0) { // The loop to display breaks when there's no match for the items so we need to do this
      newFilteredItems.push({id: 0, name: ''});
    }
    
    this.setState({filteredItems: newFilteredItems });
  }

  render() {
    console.log(this.state.videos)
    console.log(this.state.comm)
    console.log(this.state.filteredItems)
 
    let noResultsMessage = (this.state.filteredItems.length === 0) ? <div>No results found!</div> : '';
    
    let tableDisplay = (this.state.filteredItems.length === 0) ? 'hidden' : '';
    
      return (
          <div>
            <Slider />
              <div className="container">
                  <div className="text-center">
                      <h1>React - Pagination Example with logic like Google</h1>
                    
                      <input type="text" placeholder="Filter items" onInput={this.handleFilter} />

                        <div style={{marginBottom: '150px',width: '80%'}}>
        
        <div class="gallery">
     {!this.state.videos ? <h4>loading...</h4> : this.state.videos.map((item) => {
        return (
  
  <div class="single-video">
  <figure style={{border:'1px solid blue'}}>
      <iframe src={item.comment} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </figure>
    </div>
        )})}
    </div>
   </div>
        {noResultsMessage}
                    
         <Pagination items={this.state.videos} onChangePage={this.onChangePage} />
                </div>
            </div>
          </div>
      );
  }
}
export default Home;