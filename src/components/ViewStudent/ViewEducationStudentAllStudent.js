import React, { useState } from 'react';
import {
  Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Badge
} from 'reactstrap';

const ViewEducationStudentAllStudent = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <div>
      <div class="container">
        <center><h3>   ค้นหาข้อมูลการรับสมัครเข้าศึกษาต่อ </h3></center>
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
          <Col xs="6">
            <FormGroup>
              <Label for="id_faculty">คณะ</Label>
              <Input type="select" name="id_faculty" id="id_faculty">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <FormGroup>
              <Label for="id_course">สาขา</Label>
              <Input type="select" name="id_course" id="id_course">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </Col>
          <Col xs="6">
            <FormGroup>
              <Label for="id_major">หมวดหมู่</Label>
              <Input type="select" name="id_major" id="id_major">
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
                <Badge color="primary">คอมพิวเตอร์</Badge>
                <Row form>
                  <Col md={6}>
                    <Label for="exampleEmail">มหาวิทยาลัย</Label>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <Label for="examplePassword">คณะ  </Label>: วิศวกรรมซอฟต์เเวร์
        </Col>
                  <Col md={6}>
                    <Label for="exampleEmail">สาขา</Label>
                  </Col>
                </Row>
              </CardBody>
              <CardBody>
                <Button href="./educationstudentdetail">รายละเอียด</Button>
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

export default ViewEducationStudentAllStudent;