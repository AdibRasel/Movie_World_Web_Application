import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProfileComponents = () => {
    const navigate = useNavigate();
    const LogoutBtn = () => {
        localStorage.clear();
        navigate('/login');
        window.location.reload();
    }

    return (<>


        <div className="vh-100" style={{ backgroundColor: '#9de2ff', paddingTop: "100px" }}>
            <Container>
                <Row className="justify-content-center">
                    <Col md="9" lg="" xl="5" className="mt-5">
                        <Card style={{ borderRadius: '15px' }}>
                            <Card.Body className="p-4">
                                <div className="d-flex text-black">
                                    <div className="flex-shrink-0">
                                        <Card.Img
                                            style={{ width: '180px', borderRadius: '10px' }}
                                            src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
                                            alt='Generic placeholder image'
                                            fluid />
                                        <div className="d-flex pt-1">
                                            <Button onClick={LogoutBtn} variant="primary" className="flex-grow-1">Log Out <i className="fa-solid fa-arrow-right-from-bracket"></i></Button>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <Card.Title>Danny McLoan</Card.Title>
                                        <Card.Text>Senior Journalist</Card.Text>

                                        <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                                            style={{ backgroundColor: '#efefef' }}>
                                            <div>
                                                <p className="small text-muted mb-1">All Movie</p>
                                                <p className="mb-0">41</p>
                                            </div>
                                            <div className="px-3">
                                                <p className="small text-muted mb-1">Hollywood Movies</p>
                                                <p className="mb-0">20</p>
                                            </div>
                                            <div>
                                                <p className="small text-muted mb-1">Bollywood Movies</p>
                                                <p className="mb-0">21</p>
                                            </div>
                                        </div>
                                        <div className="d-flex pt-1">
                                            <Button variant="primary" className="flex-grow-1">Edit Profile <i className="fa-solid fa-pen-to-square"></i></Button> <br />
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>




    </>)
}

export default ProfileComponents