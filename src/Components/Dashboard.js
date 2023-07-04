import React from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Dashboard = () => {
    return (
        <div>
            <h1 className="display-1 p-5 text-center">SQL Injection</h1>
            <Row className="card-container">
                <Row>
                    <Card className="my-2">
                        <Card.Body>
                            <Card.Title>Lab 1</Card.Title>
                            <Link className='btn btn-primary mt-3' type='button' to="/lab" >Click Me</Link>
                        </Card.Body>
                    </Card>
                </Row>
            </Row>
        </div>)
}
export default Dashboard;