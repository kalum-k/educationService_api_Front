import React, { useState } from 'react';
import {
  Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Badge
} from 'reactstrap';

const ViewEducationStudentDetail = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <div>
      <div class="container">
        <Row>
          <Col><h3>สาขา</h3></Col>
          <Col></Col>
          <Col></Col>
          <Col><h3>รอบที่</h3></Col>
        </Row>
        <br />
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}><Row><h3>มหาวิทยาลัย</h3><h3>&nbsp; : &nbsp; </h3><h3>ใส่มหาวิทยาลัย</h3></Row>  </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}><Row><h3>คณะ</h3><h3>&nbsp; : &nbsp; </h3><h3>ใส่คณะ</h3></Row>  </Col>
        </Row>
      </div>
      <br />
      <div class="container">
        <Badge color="primary">Primary</Badge>
        <Badge color="secondary">Secondary</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="danger">Danger</Badge>
        <Badge color="warning">Warning</Badge>
        <Badge color="info">Info</Badge>
        <Badge color="light">Light</Badge>
        <Badge color="dark">Dark</Badge>
        <p> </p>
        <FormGroup>
          <h4> <Label for="exampleText">เงื่อนไข</Label></h4>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <h4> <Label for="exampleText">เอกสาร</Label></h4>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
      </div>
      <br />
      <div class="container">
        <p> </p>
        <h4><b>โหลดเอกสารเพิ่มเติม</b></h4>
        <h4><b>โหลดเอกสารเพิ่มเติม</b></h4>
        <h4><b>โหลดเอกสารเพิ่มเติม</b></h4>
        <h4><b>โหลดเอกสารเพิ่มเติม</b></h4>
        <h4><b>โหลดเอกสารเพิ่มเติม</b></h4>

      </div>




    </div>
  );
}

export default ViewEducationStudentDetail;