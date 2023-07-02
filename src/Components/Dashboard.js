import React from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Dashboard = () => {
    return (
        <div>
            <h1 className="my-4 text-center">SQL Injection</h1>
            <Row className="card-container">
                <Row>
                    <Card className="my-2">
                        <Card.Body>
                            <Card.Title>Lab 1</Card.Title>
                            <Card.Text>content</Card.Text>
                            <Link className='btn btn-primary' type='button' to="/lab" >Click Me</Link>
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <Card className="my-2">
                        <Card.Body>
                            <Card.Title>Lab 2</Card.Title>
                            <Card.Text>content</Card.Text>
                            <Button variant="primary">Click Me</Button>
                        </Card.Body>
                    </Card>
                </Row>
            </Row>
        </div>)
}
export default Dashboard;