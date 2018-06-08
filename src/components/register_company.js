import React, { Component } from "react";
import { Row, Col, Container, Button, FormText, Input } from "reactstrap";
export default class Companyregister extends Component {
  render() {
    return (
      <div className="register">
        <Container>
          <Col>
            <Row className="margin-top-2">
              <Col md="4">อีเมล</Col>
              <Col md="8">
                <Input />
              </Col>
            </Row>
            <Row className="margin-top-2">
              <Col md="4">รหัสผ่าน</Col>
              <Col md="8">
                <Input type="password" />
              </Col>
            </Row>
            <Row className="margin-top-2">
              <Col md="4">ยืนยันรหัสผ่าน</Col>
              <Col md="8">
                <Input type="password" />
              </Col>
            </Row>
            <Row className="margin-top-2">
              <Col md="4">ชื่อ</Col>
              <Col md="8">
                <Input className="width-100" />
              </Col>
            </Row>
            <Row className="margin-top-2">
              <Col md="4">นามสกุล</Col>
              <Col md="8">
                <Input className="width-100" />
              </Col>
            </Row>
            <Row className="margin-top-2">
              <Col md="4">รหัสบัตรประชาชน</Col>
              <Col md="8">
                <Input className="width-100" />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="margin-top-2">
              <Col md="4">หลักฐานยืนยันตัวตน</Col>
              <Col md="8">
                <Input type="file" />
                <FormText color="muted">
                  สำเนาบัตรประชาชน ไฟล์ PDF/JPG ขนาดไม่เกิน 4 MB
                </FormText>
              </Col>
            </Row>
            <Row className="margin-top-2">
              <Col md="4">ชื่อบริษัท</Col>
              <Col md="8">
                <Input />
              </Col>
            </Row>
            <Row className="margin-top-2">
              <Col md="4">ประเภทบริษัท</Col>
              <Col md="8">
                <Input type="text" />
              </Col>
            </Row>
            <Row className="margin-top-2">
              <Col md="4">เบอร์โทรศัพท์</Col>
              <Col md="8">
                <Input type="text" />
              </Col>
            </Row>
            <Row className="margin-top-2">
              <Col md="4">รายละเอียดเพิ่มเติม</Col>
              <Col md="8">
                <Input type="textarea" />
              </Col>
            </Row>
          </Col>

          <Button color="primary " size="lg" className="registerButton" block>
            ยืนยัน
          </Button>
        </Container>
      </div>
    );
  }
}
