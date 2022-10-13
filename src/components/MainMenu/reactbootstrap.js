import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

//Global_varibal for RESTAPI_url
const url = `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`;

class ReactBootstrap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: [], //empty array
    };
  }

  render() {
    return (
      <>
        <div className="container text-center">
          <h2 className="py-3">REACT BOOTSTRAP UI PACKAGE</h2>

          <Container>
            <Row>
              {this.state.photo.map((res, i) => {
                return (
                  <Col lg={4} md={4} sm={6} xs={12}>
                    <Card className="my-2">
                      <Card.Img variant="top"  className="w-50 mx-auto my-2" src={res.thumbnailUrl } />
                      <Card.Body>
                        <Card.Title className="h6">{res.title }</Card.Title>
                     
                        <a className="btn btn-primary" href={res.url} target="_blank" >Visit Site</a>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </>
    );
  }

  componentDidMount() {
    axios.get(url).then((result) => this.setState({ photo: result.data }));
  }
}

export default ReactBootstrap;
