import React, { useState, useEffect } from 'react';
import axios from 'axios'
import SilderIndex from '../components/SilderIndex';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody, Label, Row, Col, Container, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

function Index(props) {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [education, setEducation] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/education/getEducation")
      .then((response) => {
        setEducation(response.data);
      });

  }, []);
  return (

    <div>
      <div class="caruB">
        <div class="container">
          <center>
            <SilderIndex />
          </center>
        </div>
      </div>
      <br />
      <div class="container">
        <center><h2> ประชาสัมพันธ์ </h2></center>
        <Row>
          {education.map((education) => {
            return (
              <CardGroup>
                <Card>
                  <CardImg top width="100%" src="https://climate.onep.go.th/wp-content/uploads/2020/01/default-image-300x225.jpg" alt="Card image cap" />

                  <CardBody>
                    <CardTitle tag="h5">{education.name_uni}</CardTitle>
                    <CardText>รอบ :  {education.name_round} 
                    <br/> สมัคร:  {education.open_date} - {education.close_date}</CardText>
                    <Button color="info">รายละเอียด</Button>
                  </CardBody>
                </Card>
              </CardGroup>
            )
          })}

        </Row>
        <br />
      </div>
    </div>

  );
}

export default Index;
