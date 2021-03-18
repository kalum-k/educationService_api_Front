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
    const [edudetail, setEdudetail] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/eduDetail/getEduDetail")
            .then((response) => {
                setEdudetail(response.data);
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
                    {edudetail.map((edudetail) => {
                        return (
                            <CardGroup>
                                <Card>
                                    <CardImg top width="100%" src="data:image/jpeg;base64,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" alt="Card image cap" />

                                    <CardBody>
                                        <CardTitle tag="h5">{edudetail.name_course}</CardTitle>
                                        <CardText>{edudetail.name_faculty}
                                            <br />
                    จำนวนที่เปิดรับสมัคร : {edudetail.number_of_edu} คน</CardText>
                                        <CardText> </CardText>
                                        <Button onClick={toggle} color="info">รายละเอียด</Button>
                                        <Modal isOpen={modal} toggle={toggle} className={className}>
                                            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                                            <ModalBody>
                                                <h2>{edudetail.name_course}</h2>
                                                <h4>{edudetail.name_faculty}</h4>
                                                <hr />
                                                <p> จำนวนที่เปิดรับสมัคร : {edudetail.number_of_edu} คน</p>

                                            </ModalBody>
                                            <ModalFooter>
                                                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                                                <Button color="secondary" onClick={toggle}>Cancel</Button>
                                            </ModalFooter>
                                        </Modal>
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
