import React, { useState } from 'react';
import { Container, Card, CardBody, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';


const LoginForm = () => {
    const log = {
        id_stu: "",
        password_stu: "",


    };
    const [User, setUser] = useState(log);
    const session = {
        id_stu: localStorage.getItem('id_stu'),
        fname_stu: localStorage.getItem('fname_stu'),
        lname_stu: localStorage.getItem('lname_stu'),
    }
    const [ses, setSes] = useState(session);

    const inputdata = (event) => {
        let { name, value } = event.target;
        setUser({ ...User, [name]: value });
    }
    const saveStudent = () => {
        var data = {


            id_stu: User.id_stu,
            password_stu: User.password_stu,



        };//เอาค่าที่รับจาก form มาใส่ใน json

        axios.post("http://localhost:8080/Login", data)//ส่งค่าไปแอดใน DB
            .then((res) => {
                console.log(res.data.message);
                if (res.data.message == "Student") {
                    localStorage.setItem('id_stu', res.data.id_stu);
                    localStorage.setItem('fname_stu', res.data.fname_stu);
                    localStorage.setItem('lname_stu', res.data.lname_stu);
                    Swal.fire(

                        'เข้าสู่ระบบเสร็จสิ้น',
                        ' ',
                        'success',
                    )
                    window.location.assign("/")
                    }
                else {

                    Swal.fire(
                        'เข้าสู่ระบบล้มเหลว',
                        'กรุณากรอกรหัสผ่านกับอีเมลใหม่ ',
                        'error'
                    )
                }

            })

            .catch((error) => {
                console.log("error");
            });//ใช้ ดัก Error

    }


    return (
        <>
           
            <Container className="container-fluid TZS-Container">
                <div align="center" style={{ marginTop: '100px' }}>
                    <a href="/home">
                        <h4>ระบบการให้บริการสารสนเทศทุนการศึกษา ฯ</h4>

                    </a>
                </div>
                <div align="center" style={{ marginTop: '30px' }}>
                    <Card className="CardBackground-1" style={{ maxWidth: '500px' }} align="left">
                        <CardBody className="">
                            <h4>
                                <img className="Button-icon" style={{ marginRight:'10px' }} src="https://tzs-global.com/website_factor-image/button_icon/person.png" />
                                เข้าสู่ระบบ
                            </h4>
                            <div className="borderline" />
                            <form>
                                <FormGroup>
                                    <Label for="exampleEmail">รหัสนักเรียน</Label>
                                    <Input Type="id_stu" name="id_stu" placeholder="ใส่อีเมลที่นี่" onChange={inputdata} required />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail">รหัสผ่าน</Label>
                                    <Input type="password_stu" name="password_stu" placeholder="ใส่รหัสผ่านที่นี่" onChange={inputdata} required />
                                </FormGroup>
                                <div style={{ marginTop: '20px' }}>
                                    <Row>
                                        <Col md-6>
                                            <Button color="link" size="md" className="Button-Style">ลืมรหัสผ่าน?</Button>
                                        </Col>
                                        <Col md-6>
                                            <Button color="success" size="lg" className="Button-Style" onClick={saveStudent} block>เข้าสู่ระบบ</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </form>
                            <div className="borderline" style={{ marginTop: '20px' }} />
                            <div style={{ marginTop: '20px' }}>
                                <Row>
                                    <Col md-6>
                                        <div style={{ marginTop: '5px' }}>
                                            ยังไม่มีบัญชีใช่หรือไม่?
                                        </div>
                                    </Col>
                                    <Col md-6>
                                        <Button href="/register" color="secondary" size="md" className="Button-Style" outline block>ลงทะเบียน</Button>
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </Container>
        </>
    )
}

export default LoginForm;
