import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';

function News() {
  const [news, setNews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedNews, setSelectedNews] = useState({});

  const handleModalClose = () => setShowModal(false);
  const handleModalOpen = (item) => {
    setSelectedNews(item);
    setShowModal(true);
  };

  useEffect(() => {
    const fetchNews = async () => {
      const options = {
        method: 'GET',
        url: 'https://weather338.p.rapidapi.com/news/list',
        params: {offset: '0', limit: '10'},
        headers: {
          'X-RapidAPI-Key': '6140437819mshde10e4c24a2ee67p1245bbjsn02dc65e4c22b',
          'X-RapidAPI-Host': 'weather338.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setNews(response.data);
      } catch (error) {
        if (error.response && error.response.status === 429) {
          console.error('Too many requests. Please try again later.');
        } else {
          console.error('Failed to fetch news.', error);
        }
      }
    };

    fetchNews();
  }, []);

  return (
    <Container>
      <h1 className="text-center my-5">Latest News</h1>
      <Row xs={1} md={2} className="myrow g-4 my-2 mx-2">
        {news.map((item) => (
          <Col key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.image_url} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.teaser_title} <br /> By {item.author}
                </Card.Text>
                <Card.Text>{item.author_bio_link}</Card.Text>
                <Button variant="primary" onClick={() => handleModalOpen(item)}>
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={showModal} onHide={handleModalClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedNews.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedNews.description}</p>
          <p>
            <strong>Author:</strong> {selectedNews.author}
          </p>
          <p>
            <strong>Published:</strong> {selectedNews.publishdate}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default News;