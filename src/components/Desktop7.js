import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

export default function Desktop7() {
    return (
        <div className="page"  style={{background: 'rgb(181, 199, 186)', margin:'0 auto', width:'1000px'}}>
            <Container>
                <Row>
                    <Col xs={2}>
                        <p>Thông tin tài khoản</p>
                        <p>Đăng xuất</p>
                    </Col>
                    <Col xs={4}>
                        <h3 style={{}}>Hữu Thịnh</h3>
                    <Form>
                        <Form.Group className="mb-3" style={{marginTop:'35px'}} controlId="formBasicPassword">
                            <Form.Label>Nhập mật khẩu mới</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" style={{marginTop:'45px'}} controlId="formBasicPassword">
                            <Form.Label>Xác nhận lại mật khẩu</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{marginTop:'35px', marginLeft:'40px', background:'Orange'}}>
                            Cập nhật
                        </Button>
                    </Form>
                    </Col>
                    <Col xs lg = '4'>
                        <h3>Thông tin cá nhân</h3>
                        <Form.Group className="mb-3" style={{marginTop:'35px'}} controlId="formBasicPassword">
                            <Form.Label>Họ và tên(*)</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" style={{marginTop:'45px'}} controlId="formBasicPassword">
                            <Form.Label>Điện thoại</Form.Label>
                            <Form.Control type="text" placeholder="Phone" />
                        </Form.Group>
                        <Form.Group className="mb-3" style={{marginTop:'45px'}} controlId="formBasicPassword">
                            <Form.Label>Tỉnh - Thành phố</Form.Label>
                            <Form.Select aria-label="City">
                                <option>City</option>
                                <option value="1">Đà Nẵng</option>
                                <option value="2">Hồ Chí Minh</option>
                                <option value="3">Hà Nội</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" label="Nam" />
                            <Form.Check type="checkbox" label="Nữ" />
                            <Form.Check type="checkbox" label="Không xác định" />
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

