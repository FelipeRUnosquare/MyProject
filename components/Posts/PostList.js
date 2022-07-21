import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import ReactPaginate from "react-paginate";
import styles from "./posts.module.sass";

const PostList = (props) => {
  const [postsData, setPostsData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    setPostsData(
      props.userPostData.length > 0
        ? props.userPostData.slice(0, props.userPostData.length)
        : []
    );
  }, [props.userPostData]);

  const postPerPage = 1;

  const pagesVisited = pageNumber * postPerPage;

  const displayPosts = postsData
    .slice(pagesVisited, pagesVisited + postPerPage)
    .map((post) => {
      return <PostItem key={post.id} data={post} />;
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
