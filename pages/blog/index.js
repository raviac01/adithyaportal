import BlogNavbar from "components/blog/BlogNavbar";
import FileUpload from "components/blog/FileUpload";
import { Row, Col } from "react-bootstrap";
import CardItem from "components/posts/CardItem";
import CardListItem from "components/posts/CardListItem";
import FilteringMenu from "components/posts/FilteringMenu";
import { nanoid } from "nanoid";
import { useState } from "react";

export default function BlogHome(params) {
    const [filter, setFilter] = useState({
        view: { list: 1 },
    });
  
    const blogsData = [
        {
            id: nanoid(),
            subject: 'Physics',
            sutopic: 'Sets, Relations and Functions',
            text: 'something something',
            url: 'https://firebasestorage.googleapis.com/v0/b/jeenotes-c18d9.appspot.com/o/images%2FAdithya.jpeg?alt=media&token=853fedfe-f916-45c8-bd60-19352220f046'
        },
        {
            id: nanoid(),
            subject: 'Chemistry',
            sutopic: 'Compounds',
            text: 'compounds something',
            url: 'https://firebasestorage.googleapis.com/v0/b/jeenotes-c18d9.appspot.com/o/images%2FAdithya.jpeg?alt=media&token=853fedfe-f916-45c8-bd60-19352220f046'
        },
        {
            id: nanoid(),
            subject: 'Math',
            sutopic: 'Integration',
            text: 'Integration something',
            url: 'https://firebasestorage.googleapis.com/v0/b/jeenotes-c18d9.appspot.com/o/images%2FAdithya.jpeg?alt=media&token=853fedfe-f916-45c8-bd60-19352220f046'
        },
        {
          id: nanoid(),
          subject: 'General',
          sutopic: 'General',
          text: 'Integration something',
          url: 'https://firebasestorage.googleapis.com/v0/b/jeenotes-c18d9.appspot.com/o/images%2FAdithya.jpeg?alt=media&token=853fedfe-f916-45c8-bd60-19352220f046'
      },
      {
        id: nanoid(),
        subject: 'ONeMore',
        sutopic: 'One More',
        text: 'oner morewar something',
        url: 'https://firebasestorage.googleapis.com/v0/b/jeenotes-c18d9.appspot.com/o/images%2FAdithya.jpeg?alt=media&token=853fedfe-f916-45c8-bd60-19352220f046'
    }
    ]

  return (
    <>
      <BlogNavbar />
      
      <FileUpload />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => {
          setFilter({ ...filter, [option]: value });
        }}
      />
      <hr />

      <Row className="mb-3">
        {blogsData.map((blog) =>
          filter.view.list ? (
            <Col key={`${blog.id}-list`} md="3">
              <CardListItem
                subject={blog.subject}
                subtopic={blog.subtopic}
                text={blog.text}
              />
            </Col>
          ) : (
            <Col key={blog.id} md="2">
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
