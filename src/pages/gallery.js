/** @format */

import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import JsonData from "./gallery.json";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

function Gallery() {
  const [posts, setPosts] = useState(JsonData.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 12;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = posts
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((post) => {
      return (
        // <div className='col-md-4 col-lg-4 col-sm-4 col-xs-6 mb-3' key={post.id}>
        <Col xs={6} sm={4} lg={4} md={4} key={post.id} className='py-4'>
          <div className='homeCImg'>
            <img src={post.image} className='bookImg img-fluid' alt='bookImg' />
          </div>
        </Col>
      );
    });
  const pageCount = Math.ceil(posts.length / usersPerPage);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    scrollToTop();
  };
  return (
    <div className='App'>
      <div className=' py-4'>
        <div className='container d-flex align-items-center'>
          <div className='row'>{displayUsers}</div>
        </div>
        <div className='reviewsPaginationWrap mt-5'>
          <div className='categoryBlk pages-Blk container'>
            <div className='pagesWrap'>
              <p>Pages &nbsp;</p>
              <p>{pageNumber + 1} &nbsp;</p>
              <p>of &nbsp;</p>
              <p>{pageCount}</p>
            </div>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
