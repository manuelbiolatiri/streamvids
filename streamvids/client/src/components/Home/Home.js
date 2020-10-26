import React from "react";
import axios from "axios";
import "./home.css";
import Pagination from "../Pagination";
import Slider from '../../containers/Slider/Slider.js';
import 'bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Home extends React.Component {
  constructor() {
      super();

      this.state = {
          exampleItems: '',
          filteredItems: [], // It is not filtered by default.
          pageOfItems: [],
          videos: []
      };

      // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
      this.onChangePage = this.onChangePage.bind(this);
    
      this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount(){
  axios.get('https://cors-anywhere.xstreamvids.herokuapp.com/api/v1/videos')
  .then(response => this.setState({
    videos: response.data.videos
  }))
  
  }

  componentDidUpdate(prevProps, prevState) {
    // reset page if items array has changed
    if (this.state.videos !== prevState.videos) {
      this.setState({
        filteredItems: this.state.videos
      })
    
    }
}
  
  onChangePage(pageOfItems) {
      // update state with new page of items
      this.setState({ pageOfItems: pageOfItems });
  }

  handleFilter(e) {
    const inputValue = e.currentTarget.value.toString().toLowerCase();
    const newFilteredItems = this.state.videos.filter(item => {
      const itemNameLowerCase = item.title.toLowerCase();
      return itemNameLowerCase.includes(inputValue);
    });
    
    if (newFilteredItems.length === 0) { // The loop to display breaks when there's no match for the items so we need to do this
        newFilteredItems.push({id: 0, title: ''});
      }
      
      this.setState({filteredItems: newFilteredItems });
    
  }

  render() {
    console.log(this.state.filteredItems)
    console.log(this.state.filteredItems.length)
    console.log(this.state.pageOfItems)
    // let newe = [...Array(this.state.filteredItems).keys()].map(i => (
    //   { 
    //     id: (i+1), 
    //     title: i.title
    //   }
    // ));
    // let noResultsMessage= newe.id === 0 ? <div>No results found!</div> : ''
    // let tableDisplay = (newe.id === 0) ? 'hidden' : '';
    // }
    
      return (
          <div>
            
            <div>
            <Slider />
            </div>
  
            <div className="container" style={{backgroundColor: '#1c2228'}}>

            <div className="row">
            <div class="main" style={{width:'100%', margin:'auto'}}>
              <div class="form-group has-search" style={{width:'50%', margin:'auto', padding: '30px 0'}}>
    <span class="fa fa-search form-control-feedback"><FontAwesomeIcon icon={faSearch} style={{color:'gray',width:'1rem',height:'1rem'}}/></span>
    <input type="text" class="form-control" placeholder="Search Videos" onInput={this.handleFilter} />
            </div>
            </div>
        {!this.state.videos ? <h4>loading...</h4> : this.state.pageOfItems.map((item) => {
        return (
        <div className="col-lg-4 col-md-4 col-sm-12 padmobile" >
          <div >
          <iframe src={item.video} allow="fullScreen; encrypted-media; picture-in-picture"
  allowfullscreen
  frameborder="0"></iframe>
          <h6 style={{textAlign:'center', color:'white'}}>{item.title}</h6>
  
        </div>
        </div>
)})}
            </div>

  {/* {noResultsMessage} */}
  <div style={{width:'100%', margin:'auto', padding: '30px 0'}}>                
  <Pagination items={this.state.filteredItems} onChangePage={this.onChangePage} />
</div>
</div>
</div>
      );

}
}
export default Home;