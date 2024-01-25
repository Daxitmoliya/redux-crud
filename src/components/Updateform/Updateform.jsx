import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const UpdateStudentForm = ({ student, onUpdate }) => {
    const navigate = useNavigate();
    const [updatedData, setUpdatedData] = useState({
        Fname: "",
        Lname: "",
        city: "",
        number: "",
        course: "",
    });

    const handleUpdateChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUpdatedData({ ...updatedData, [name]: value });
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        onUpdate(student.id, updatedData);
        navigate("/StudentView")
    };

    return (
        <Form onSubmit={handleUpdateSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter The First Name"
                        name="Fname"
                        value={updatedData.Fname}
                        onChange={handleUpdateChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter The Last Name"
                        name="Lname"
                        value={updatedData.Lname}
                        onChange={handleUpdateChange}
                    />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Your City"
                        name="city"
                        value={updatedData.city}
                        onChange={handleUpdateChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridNumber">
                    <Form.Label>Number</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter Your Mobile Number"
                        name="number"
                        value={updatedData.number}
                        onChange={handleUpdateChange}
                    />
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} controlId="formGridCourse">
                    <Form.Label>Course</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Your Course"
                        name="course"
                        value={updatedData.course}
                        onChange={handleUpdateChange}
                    />
                </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
                Update
            </Button>
        </Form>
    );
};

export default UpdateStudentForm;
