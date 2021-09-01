import BlogNavbar from "components/blog/BlogNavbar";
import { Row, Col } from "react-bootstrap";
import CardItem from "components/posts/CardItem";
import CardListItem from "components/posts/CardListItem";
import FilteringMenu from "components/posts/FilteringMenu";
import { useState, useEffect } from "react";
import AddPost from "components/blog/AddPost";
import { getPostsDB, deletePostDB } from "utils/firebase";

export default function BlogHome(params) {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({
    view: { list: 1 },
  });

  // const blogsData = [
  //     {
  //         id: nanoid(),
  //         subject: 'Physics',
  //         sutopic: 'Sets, Relations and Functions',
  //         text: 'something something',
  //         url: 'https://firebasestorage.googleapis.com/v0/b/jeenotes-c18d9.appspot.com/o/images%2FAdithya.jpeg?alt=media&token=853fedfe-f916-45c8-bd60-19352220f046'
  //     },
  // ]

  useEffect(() => {
    getPostsDB().then((result) => {
      if (result) setPosts(result);
    });
  }, []);

  function handleNewPostAdded(post) {
    const newPosts = [...posts, post]
    setPosts(newPosts);
  }

  function deleteFromDB(uid) {
    deletePostDB(uid);
    const newPosts = posts.filter( post => post.uid != uid)
    setPosts(newPosts)
  }

  return (
    <>
      <BlogNavbar />

      <AddPost newPostAdded={handleNewPostAdded} />

      <hr></hr>

      <FilteringMenu
        filter={filter}
        onChange={(option, value) => {
          setFilter({ ...filter, [option]: value });
        }}
      />

      <Row className="mb-3">
        {posts.map((blog) =>
          filter.view.list ? (
            <Col key={`${blog.uid}-list`} md="3">
              <CardListItem
                uid={blog.uid}
                subject={blog.subject}
                subtopic={blog.subtopic}
                text={blog.text}
                url={blog.url}
                handleDeletePost={deleteFromDB}
              />
            </Col>
          ) : (
            <Col key={blog.uid} md="3">
              <CardItem
                uid={blog.uid}
                subject={blog.subject}
                subtopic={blog.subtopic}
                text={blog.text}
                url={blog.url}
                handleDeletePost={deleteFromDB}
              />
            </Col>
          )
        )}
      </Row>
    </>
  );
}
