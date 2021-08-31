import BlogNavbar from "components/blog/BlogNavbar";
import { Row, Col } from "react-bootstrap";
import CardItem from "components/posts/CardItem";
import CardListItem from "components/posts/CardListItem";
import FilteringMenu from "components/posts/FilteringMenu";
import { useState, useEffect } from "react";
import AddPost from "components/blog/AddPost";
import { getPostsDB } from "utils/firebase";

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
    posts.push(post)
    setPosts(posts)
  }

  console.log('re-rendering')
  return (
    <>
      <BlogNavbar />
      
      <AddPost newPostAdded={handleNewPostAdded}/>
      
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
