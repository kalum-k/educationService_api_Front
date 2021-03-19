import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Row, Col, Button, FormGroup, Label, Input,
  NavLink, Table
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //fornt
import { faEdit, faPen, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";

const ViewInsertStudent = (props) => {


  const [student, setStudent] = useState([]);

  const updatestudent = () => {
    axios.get("http://localhost:8080/students").then((response) => {
      console.log(response);
      setStudent(response.data.student);
      console.log("Updating products.....");
    });
  };
  useEffect(() => {
    updatestudent();
  }, []);

  return (
    <div>
      <div class="container">
        <br />
        <Row>
          <Col xs="6">
            <FormGroup>
              <Label for="year_edu">ค้นหา</Label>
              <Input type="text" name="year_edu" id="year_edu"  >
                <FontAwesomeIcon icon={faSearch} /></Input>
            </FormGroup></Col>
        </Row>
      </div>
      <br />
      <div class="container">
        <Row>
          <Col></Col>
          <Col></Col>
          <Col><NavLink href="./inserteducation">เพิ่มรายละเอียดข้อมูลการเข้าศึกษาต่อ</NavLink>
          </Col>
        </Row>
        <Table>
          <thead>
            <tr>
              <th>รหัส</th>
              <th>ชื่อ-นามสกุล</th>
              <th>เเก้ไขข้อมูล</th>
            </tr>
          </thead>
          <tbody>
            {student.map((stu) => {
              return (
                <tr key={stu.id_stu}>
                  <td>{stu.id_stu}</td>
                  <td>{stu.fname_stu} {stu.lname_stu}</td>
               
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </div>

  );
}

export default ViewInsertStudent