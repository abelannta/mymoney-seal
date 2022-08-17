import React from "react";
import {Container, Row, Col, Button, Card} from "react-bootstrap"
import "../../home/content/content.css"
import CONTENTPICT from "../../../images/home/content-picture.png"
import CONTENT1 from "../../../images/home/content1.png"
import CONTENT2 from "../../../images/home/content2.png"
import CONTENT3 from "../../../images/home/content3.png"

function Content(){
    return(
        <Container>
            <Row className="home-content">
                <Col className="content1">
                <h3>Mengatur Keuangan Dengan Mudah</h3>
                <br></br>
                <p>Manage Keuanganmu lebih mudah dimanapun dan kapanpun</p>
                <br></br>
                <Button href="/login" className="loginBut">Masuk</Button> 
                <Button href="/register" className="registerBut" variant="outline-primary">Daftar</Button>
                </Col>
                <Col className="content2">
                <img src={CONTENTPICT} />
                </Col>
            </Row>

            <div className="card-content">
            <div className="d-flex justify-content-center">
                <h3>Mengapa Harus MyMoney?</h3>
            </div>
            <div className="Row d-flex justify-content-center top">
                <div className="Col">
                    <Card className="myCard">
                        <Card.Body>
                            <div>
                                <img src={CONTENT1} />
                            </div>
                            <div>
                                <h4>MUDAH DIGUNAKAN</h4>
                            </div>
                            <div className="top">
                                <p>
                                Aplikasi yang mudah digunakan bahkan oleh user baru sekalipun
                                </p>
                            </div>

                        </Card.Body>

                    </Card>
                </div>
                <div className="Col">
                    <Card className="myCard">
                        <Card.Body>
                            <div>
                            <img src={CONTENT2} />
                            </div>
                            <div>
                                <h4>MUDAH DIKONTROL</h4>
                            </div>
                            <div className="top">
                                <p>kontrol keuangan Anda dalam genggaman, dapat dilakukan kapanpun dan dimanapun</p>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="Col">
                    <Card className="myCard">
                        <Card.Body>
                            <div>
                            <img src={CONTENT3} />
                            </div>
                            <div>
                                <h4>MUDAH DIHEMAT</h4>
                            </div>
                            <div className="top">
                                <p>Menyisikan penghasilan untuk hidup yang lebih baik</p>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            </div>
        </Container>
    )
}
export default Content;