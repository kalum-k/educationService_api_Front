import React, { useState } from 'react';
import {
  Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const ViewEducationStudent = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <div>
      <div class="container">
        <center><h3>   ค้นหามหาวิทยาลัย  </h3></center>
        <br />
        <Row>
          <Col xs="6">
            <FormGroup>
              <Label for="id_university">ชื่อมหาวิทยาลัย</Label>
              <Input type="select" name="id_university" id="id_university">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
      </div>
      <br />
      <div class="container">
        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle tag="h5">มหาวิทยาลัยราชภัฏนครปฐม</CardTitle>
              </CardBody>
              <img width="100%" src="./img/LogoNpru.png" alt="Logo" />
              <CardBody>
                <CardText>คราวๆ</CardText>
                <Button href="https://www.npru.ac.th/index.php">รายละเอียด</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle tag="h5">Test</CardTitle>
              </CardBody>
              <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
              <CardBody>
                <CardText>คราวๆ</CardText>
                <Button href="./universitydetail">รายละเอียด</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>




    </div>
  );
}

export default ViewEducationStudent;