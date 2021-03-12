import axios from "axios";
import React, { useState, useEffect } from "react"
import {
  Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, NavLink, Alert
} from 'reactstrap';

const ViewDetailEducationStudent = ({ id }) => {
  const initStudent = {
    id_edu_stu: "",
    id_stu: "",
    id_university: "",
    id_faculty: "",
    id_course: "",
    id_major: "",
  };
  const [student, setStudent] = useState([initStudent]);
  const [submited, setSumited] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:8080/students/" + id)
      .then((response) => {
        setStudent(response.data);
      });
  }, [id]);//เมื่อidมีการเปลี่ยนเเปรง ก็จะรีหน้าทำการเปลี่ยนที่เราเปลี่ยน

  const [education, setEducation] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/EducationStudent/" + id)
      .then((response) => {
        setEducation(response.data);
      });
  }, [id]);//เมื่อidมีการเปลี่ยนเเปรง ก็จะรีหน้าทำการเปลี่ยนที่เราเปลี่ยน
  const handleInputChange = (event) => {
    let { name, value } = event.target;
    //if (name === "tags") {
    //  value = value.split(",");
    // }
    setEducation({ ...education, [name]: value });
  };


  const saveStudent = () => {
    var data = {
      id_edu_stu: education.id_edu_stu,
      id_stu: education.id_stu,
      id_university: education.id_university,
      id_faculty: education.id_faculty,
      id_course: education.id_course,
      id_major: education.id_major,


    }
    axios.put("http://localhost:8080/EducationStudent/" + education.id_edu_stu, data)
      .then((response) => {
        console.log(response.data);
        setStudent({ ...student, data });//ก็อป เเละ เขียน ทับ ตัวใหม่สุด
        setSumited(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const newStudent = () => {
    setSumited(false);
  };


  return (
    <div>
      <div class="container">
        <Form>
          <center><h3> ข้อมูลส่วนตัว </h3></center>
          <Row>
            <Col>
              <Label for="examplePassword">รหัสนักศึกษา</Label> : {student.id_stu}
            </Col>

          </Row>
          <Row>
            <Col>
              <Label for="examplePassword">คำนำหน้า</Label> : {student.name_title}
            </Col>
            <Col>
              <Label for="exampleEmail">ชื่อ</Label> : {student.fname_stu}
            </Col>
            <Col>
              <Label for="examplePassword">นามสกุล</Label> : {student.lname_stu}

            </Col>
          </Row>
          <Row>
            <Col>
              <Label for="examplePassword">ระดับชั้น</Label> : {student.year_class}
            </Col>
            <Col>
              <Label for="exampleEmail">ห้อง</Label> : {student.class}
            </Col>
          </Row>


          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col><NavLink href={"/insertdetaileducationstudent/" + student.id_stu}>เพิ่มข้อมูลการศึกษาต่อ</NavLink>
            </Col>

          </Row>
        </Form>

      </div>
      <br />
      <div>
        <br />
        <div class="container">
          <Form>

            {submited ? (<Alert color="success"><br /><br /><br /><br />
              <center>อัพเดตเสร็จสิ้น!!<br /><br /><br /><br /><br />
                <Button color="btn btn-success" onClick={newStudent}>OK</Button></center>
            </Alert>
            ) : (
              <Form>

                <center><h3> เเก้ไขข้อมูลส่วนตัว </h3></center>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="id_stu">รหัส</Label>
                      <Input type="text"
                        name="id_edu_stu"
                        id="productName"
                        value={education.id_edu_stu || ""}
                        onChange={handleInputChange}
                        placeholder="" disabled />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="id_stu">รหัส</Label>
                      <Input type="text"
                        name="id_stu"
                        id="productName"
                        value={education.id_stu || ""}
                        onChange={handleInputChange}
                        placeholder="" disabled />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col >
                    <FormGroup>
                      <Label for="id_university  ">สายการเรียน</Label>
                      <Input type="select" name="id_university" id="id_university" onChange={handleInputChange} placeholder="ระบุชื่อ" >
                        <option value="" selected>{education.name_uni} </option>
                        <option value="1">ศิลป์ภาษา</option>
                        <option value="2">คณิต-วิทย์</option>
                        <option value="3">ศิลป์คำนวณ</option>
                      </Input></FormGroup>
                  </Col>
                  <Col >
                    <FormGroup>
                      <Label for="id_faculty">สายการเรียน</Label>
                      <Input type="select" name="id_faculty" id="id_faculty" onChange={handleInputChange} placeholder="ระบุชื่อ" >
                        <option value="" selected>{education.name_faculty} </option>
                        <option value="1">ศิลป์ภาษา</option>
                        <option value="2">คณิต-วิทย์</option>
                        <option value="3">ศิลป์คำนวณ</option>
                      </Input></FormGroup>
                  </Col>

                </Row>
                <Row form>
                  <Col >
                    <FormGroup>
                      <Label for="id_course">สายการเรียน</Label>
                      <Input type="select" name="id_course" id="id_course" onChange={handleInputChange} placeholder="ระบุชื่อ" >
                        <option value="" selected>{education.name_course} </option>
                        <option value="1">ศิลป์ภาษา</option>
                        <option value="2">คณิต-วิทย์</option>
                        <option value="3">ศิลป์คำนวณ</option>
                      </Input></FormGroup>
                  </Col>
                  <Col >
                    <FormGroup>
                      <Label for="id_major">สายการเรียน</Label>
                      <Input type="select" name="id_major" id="id_major" onChange={handleInputChange} placeholder="ระบุชื่อ" >
                        <option value="" selected>{education.name_major} </option>
                        <option value="1">ศิลป์ภาษา</option>
                        <option value="2">คณิต-วิทย์</option>
                        <option value="3">ศิลป์คำนวณ</option>
                      </Input></FormGroup>
                  </Col>
                </Row>

                <Button className="btn btn-success" onClick={saveStudent}>Update</Button>




              </Form>
            )}

          </Form>

        </div>

      </div></div>

  );
}

export default ViewDetailEducationStudent;