import axios from "axios";
import React, { useState, useEffect } from "react"
import {  Row, Col, Form, FormGroup, Label,  NavLink  } from 'reactstrap';

const ViewProfile = ({id}) => {

  const [student, setStudent] = useState([]);
 
  useEffect(() => {
      axios.get("http://localhost:8080/students/"+id)
      .then((response)=>{
       setStudent(response.data);
      });
  }, [id]);//เมื่อidมีการเปลี่ยนเเปรง ก็จะรีหน้าทำการเปลี่ยนที่เราเปลี่ยน


    return (
        <div>
          <br />
<div class="container">
<Form>
    <center><h3> ข้อมูลส่วนตัว </h3></center>
      <Row form>
      <Col>
          <FormGroup>
            <Label for="id_stu">รหัสประจำตัว</Label>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
            {student.id_stu}
          </FormGroup>
        </Col>
      <Col>
          <FormGroup>
            <Label for="id_title">คำนำหน้า</Label>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
            {student.name_title}
          </FormGroup>
        </Col>
      <Col>
          <FormGroup>
            <Label for="fname_stu">ชื่อ</Label>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
            {student.fname_stu}
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
          <Label for="lname_stu">นามสกุล</Label>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
          {student.lname_stu}
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
        <FormGroup>
        <Label for="id_curriculum">สายการเรียน</Label>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
        {student.name_curriculum }

        </FormGroup></Col>
        <Col>
        <FormGroup>
        <Label for="GPA_stu">GPA รวม</Label>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
        {student.GPA_stu }

        </FormGroup></Col>
        <Col>
        <FormGroup>
        <Label for="year_class">ปีการศึกษา</Label>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
        {student.year_stu }

        </FormGroup></Col>       
      </Row>
      <Row>
        <Col>
        <FormGroup>
        <Label for="class">มัธยมปีที่</Label>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
        {student.year_class }

        </FormGroup></Col>
        <Col>
        <FormGroup>
        <Label for="year_stu">ห้อง</Label>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
        {student.class }

        </FormGroup></Col>
        <Col></Col>

      </Row>
 
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col><NavLink href="/home">กลับหน้าหลัก</NavLink></Col>
        <Col><NavLink href={"/editprofile/" + student.id_stu}>เเก้ไขข้อมูลส่วนตัว</NavLink>
</Col>

      </Row>
    </Form>
</div>    




</div>
);
  }
  
  export default ViewProfile;