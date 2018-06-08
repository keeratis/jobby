import React, { Component } from "react";
import {
  Row,
  Col,
  Container,
  Button,
  FormGroup,
  CustomInput,
  FormText,
  Input
} from "reactstrap";
export default class Studentregister extends Component {
  render() {
    return (
      <div className="register">
        <Container>
          <Col>
            <Row className="margin-top-2">
              <Col lg="4">อีเมล</Col>
              <Col lg="8">
                <Input className="width-100" />
              </Col>
            </Row>
            <Row className="margin-top-2">
              <Col lg="4">รหัสผ่าน</Col>
              <Col lg="8">
                <Input type="password" className="width-100" />
              </Col>
            </Row>
            <Row className="margin-top-2">
              <Col lg="4">ยืนยันรหัสผ่าน</Col>
              <Col lg="8">
                <Input type="password" className="width-100" />
              </Col>
            </Row>
            <Row className="margin-top-2">
              <Col lg="4">ชื่อ</Col>
              <Col lg="8">
                <Input className="width-100" />
              </Col>
            </Row>
            <Row className="margin-top-2">
              <Col lg="4">นามสกุล</Col>
              <Col lg="8">
                <Input className="width-100" />
              </Col>
            </Row>
            <Row className="margin-top-2">
              <Col lg="4">ชื่อเล่น</Col>
              <Col lg="8">
                <Input className="width-100" />
              </Col>
            </Row>
            <Row className="margin-top-2">
              <Col lg="4">วันเกิด</Col>
              <Col lg="8">
                <Input type="date" className="width-100" />
              </Col>
            </Row>
            <Row className="margin-top-2">
              <Col lg="4">เพศ</Col>
              <Col lg="8">
                <FormGroup>
                  <CustomInput
                    type="radio"
                    id="gender"
                    name="customRadio"
                    label="ชาย"
                    value="male"
                  />
                  <CustomInput
                    type="radio"
                    id="gender2"
                    name="customRadio"
                    label="หญิง"
                    value="female"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className="margin-top-2">
              <Col lg="4">มหาวิทยาลัย</Col>
              <Col lg="8">
                <Input className="width-100" />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="margin-top-2">
              <Col lg="4">เบอร์โทร</Col>
              <Col lg="8">
                <Input className="width-100" />
              </Col>
            </Row>
            <Row className="margin-top-2">
              <Col lg="4">Line ID</Col>
              <Col lg="8">
                <Input className="width-100" />
              </Col>
            </Row>
            <Row className="margin-top-2">
              <Col lg="4">ประสบการณ์</Col>
              <Col lg="8">
                <Input type="textarea" />
              </Col>
            </Row>
            <Row className="margin-top-2">
              <Col lg="4">รูปถ่าย</Col>
              <Col lg="8">
                <Input type="file" className="width-100" />
                <FormText color="muted">รูปถ่ายขนาดไม่เกิน 2 MB</FormText>
              </Col>
            </Row>
            <Row className="margin-top-2">
              <Col lg="4">ความสามารถ</Col>
              <Col lg="8">
                <Input type="textarea" className="width-100" />
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
