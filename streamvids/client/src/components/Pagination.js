import React, {useState, useEffect} from "react";
import './Pagination.css';

  const defaultProps = {
    initialPage: 1
  }
  
  class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          pager: {}
        };
    }
  
    componentWillMount() {
        // set page if items array isn't empty
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
        console.log(this.props.items)
    }
  
    componentDidUpdate(prevProps, prevState) {
        // reset page if items array has changed
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }
  
    setPage(page) {
        var items = this.props.items;
        var pager = this.state.pager;
  
        if (page < 1 || page > pager.totalPages) {
            return;
        }
  
        // get new pager object for specified page
        pager = this.getPager(items.length, page, 10, 10);
  
        // get new page of items from items array
        var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
  
        // update state
        this.setState({ pager: pager });
  console.log(pageOfItems)
        // call change page function in parent component
        console.log(this.props.onChangePage(pageOfItems));
    }
  
    getPager(totalItems, currentPage, pageSize, maxPagesToDisplay) {
        // default to first page
        currentPage = currentPage || 1;
  
        // default page size is 10
        pageSize = pageSize || 10;
  
        // default max pages to display is 10
        maxPagesToDisplay = maxPagesToDisplay || 10;
      
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
  
        var startPage, endPage;
        if (totalPages <= maxPagesToDisplay) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
  
            var halfwayPoint = Math.ceil(maxPagesToDisplay / 2);
            var pastHalfwayPoint = Math.floor(maxPagesToDisplay / 2) + 1;
            var beforeHalfwayPoint = halfwayPoint - 1;
            if (currentPage <= pastHalfwayPoint) {
                startPage = 1;
                endPage = maxPagesToDisplay;
            } else if (currentPage + beforeHalfwayPoint >= totalPages) {
                startPage = totalPages - (maxPagesToDisplay - 1);
                endPage = totalPages;
            } else {
                startPage = currentPage - halfwayPoint;
                endPage = currentPage + beforeHalfwayPoint;
            }
            console.log(startPage)
            console.log(endPage)
        }
  
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
  
        // create an array of pages to ng-repeat in the pager control
        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);
  
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
  
    render() {
        var pager = this.state.pager;
  
        if (!pager.pages || pager.pages.length <= 1) {
            // don't display pager if there is only 1 page
            return null;
        }
  
        return (


    // <ul v-if="" class="pagination">
    //   <li style={{margin:'0'}} :class="{'disabled' : pager.currentPage === 1}">
    //     <a @click="setPage(1)">First</a>
    //   </li>
    //   <li style={{margin:'0'}} :class="{'disabled' : pager.currentPage === 1}">
    //     <a @click="setPage(pager.currentPage - 1)">Previous</a>
    //   </li>
    //   <li style={{margin:'0'}} v-for="page in pager.pages" :class="{'active' : pager.currentPage === page}">
    //     <a @click="setPage(page)" v-html="page"></a>
    //   </li>
    //   <li style={{margin:'0'}} :class="{'disabled' : pager.currentPage === pager.totalPages}">
    //     <a @click="setPage(pager.currentPage + 1)">Next</a>
    //   </li>
    //   <li style={{margin:'0'}} :class="{'disabled' : pager.currentPage === pager.totalPages}">
    //     <a @click="setPage(pager.totalPages)">Last</a>
    //   </li>
    // </ul>
    <div style={{textAlign:'center', margin:'auto'}}>
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li style={{margin:'0'}} className={`page-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                    <a className="page-link" style={{backgroundColor: '#1c2228 !important', color: '#fff !important'}} tabindex="-1" onClick={() => this.setPage(1)}>First</a>
                </li>
                <li style={{margin:'0'}} className={`page-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                    <a className="page-link" style={{backgroundColor: '#1c2228 !important', color: '#fff !important'}} onClick={() => this.setPage(pager.currentPage - 1)}>Previous</a>
                </li>
                {pager.pages.map((page, index) =>
                    <li style={{margin:'0'}} key={index} className={`page-item ${pager.currentPage === page ? 'active' : ''}`}>
                        <a className="page-link" style={{backgroundColor: '#1c2228 !important', color: '#fff !important'}} onClick={() => this.setPage(page)}>{page}</a>
                    </li>
                )}
                <li style={{margin:'0'}} className={ `page-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                    <a className="page-link" style={{backgroundColor: '#1c2228 !important', color: '#fff !important'}} onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
                </li>
                <li style={{margin:'0'}} className={`page-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                    <a className="page-link" style={{backgroundColor: '#1c2228 !important', color: '#fff !important'}} onClick={() => this.setPage(pager.totalPages)}>Last</a>
                </li>
            </ul>
            </nav>
            </div>
        );
    }
  }
  
//   Pagination.propTypes = propTypes;
  Pagination.defaultProps = defaultProps;

  export default Pagination