import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Posts = ({ posts, loading }) => {
  const [showM, setShowM] = useState(false);
  const [modalData, setModalData] = useState(null);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const Truncate = (string, number) => {
    if (!string) {
      return null;
    }
    if (string.length <= number) {
      return string;
    }
    return string.slice(0, number) + "...";
  };

  const modalShow = () => {
    setShowM(true);
  };

  const closeModal = () => {
    setShowM(false);
  };

  const openModalHandle = (product) => {
    setModalData(product);
    modalShow();
  };

  return (
    <>
      <div className="grid">
        {posts.map((product) => (
          <div className="App text-center" key={product.id}>
            <Container>
              <Row className="justify-content-center">
                <Col md={6}>
                  <Link  className='text-link'
                    onClick={() => {
                      openModalHandle(product);
                    }}
                    variant="success"
                  >
                    <div style={{ width: "300%" }} className="card">
                      <img
                        className="card-image"
                        src={product.image}
                        alt={product.title}
                      />
                      <div className="card-body">
                        <h5
                          className="card-title"
                          title={
                            product.title.length >= 50 ? product.title : null
                          }
                        >
                          {Truncate(product.title, 55)}
                        </h5>
                        <div className="card-detail">
                          <StarRatings
                            rating={product.rating.rate}
                            starDimension="16px"
                            starSpacing="1px"
                            starRatedColor="black"
                          />
                          <span>Stock:{product.rating.count} </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Col>
              </Row>
            </Container>
          </div>
        ))}
      </div>

      <Modal show={showM} onHide={closeModal}>
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>{modalData?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalData && (
            <>
              <img
                src={modalData.image}
                alt={modalData.title}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <h5 className="mt-3">Price: ${modalData.price}</h5>
              <p>{modalData.description}</p>
              <p>Category: {modalData.category}</p>
              <div>
                Rating: {modalData.rating.rate} ({modalData.rating.count}{" "}
                reviews)
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={closeModal}
            className="text-danger"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Posts;
