import React, { useState } from "react";
import PostItem from "./PostItem";
import ReactPaginate from "react-paginate";
import styles from "./posts.module.sass";

const PostList = (props) => {
  const [postsData, setPostsData] = useState(
    props.userPostData.length > 0 ? props.userPostData.slice(0, 10) : []
  );
  const [pageNumber, setPageNumber] = useState(0);

  const postPerPage = 1;

  const pagesVisited = pageNumber * postPerPage;

  const displayPosts = postsData
    .slice(pagesVisited, pagesVisited + postPerPage)
    .map((post) => {
      return <PostItem key={post.id} title={post.title} body={post.body} id={post.id}/>;
    });

  let pageCount = Math.ceil(postsData.length / postPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <React.Fragment>
      {displayPosts}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel="..."
        pageCount={pageCount}
        onPageChange={changePage}
        pageRangeDisplayed={8}
        containerClassName={styles["pagination-buttons"]}
        previousLinkClassName={styles["previous-buttons"]}
        nextLinkClassName={styles["next-button"]}
        disabledClassName={styles["pagination-disabled"]}
        activeClassName={styles["pagination-active"]}
      />
    </React.Fragment>
  );
};

export default PostList;
