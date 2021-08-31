import { useRouter } from "next/router";
import BlogNavbar from "components/blog/BlogNavbar";
import { Row, Col } from "react-bootstrap";
import CardItem from "components/posts/CardItem";
import CardListItem from "components/posts/CardListItem";
import FilteringMenu from "components/posts/FilteringMenu";
import { useState, useEffect } from "react";
import AddPost from "components/blog/AddPost";
import { getPostsDB } from "utils/firebase";

export default function BlogDetails(params) {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({
    view: { list: 1 },
  });
  const { query } = useRouter();

  var filterQuery = "";
  if (query.slug) {
    filterQuery = query.slug[0] + query.slug[1]
    //console.log("query is alive", filterQuery);
  }

  //console.log("query is alive1", filterQuery);
  useEffect(() => {
    console.log("from use effect;", query);
    getPostsDB().then((result) => {
      if (result) setPosts(result);
    });
  }, []);
  console.log("ourside effect;", posts);
  
  return (
    <>
      <BlogNavbar />

      <FilteringMenu
        filter={filter}
        onChange={(option, value) => {
          setFilter({ ...filter, [option]: value });
        }}
      />

      <Row className="mb-3">
        {posts
          .filter((post) => post.id == filterQuery)
          .map((blog) =>
            filter.view.list ? (
              <Col key={`${blog.uid}-list`} md="3">
                <CardListItem
                  subject={blog.subject}
                  subtopic={blog.subtopic}
                  text={blog.text}
                />
              </Col>
            ) : (
              <Col key={blog.uid} md="3">
                <CardItem
                  subject={blog.subject}
                  subtopic={blog.subtopic}
                  text={blog.text}
                  url={blog.url}
                />
              </Col>
            )
          )}
      </Row>
    </>
  );
}
