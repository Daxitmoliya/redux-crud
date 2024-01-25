import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { createStudent } from '../../services/action/student.action';
import { useNavigate } from 'react-router';

const StudentForm = () => {
  const navigate = useNavigate();
    const dispatch = useDispatch()
    const [data, setdata] = useState({
        Fname: '',
        Lname: '',
        city: '',
        number: '',
        course: '',

    });
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;

        setdata({...data,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("data",data);
        dispatch(createStudent(data))
        setdata(
            {
                Fname: '',
                Lname: '',
                city: '',
                number: '',
                course: '',
            }
        )
        navigate('/StudentView');
    }
    return (
        <>
            <Container>
        <Row className="justify-content-center">
          <div className="form d-flex mt-5">
            <div className='col-12 detail'>
              <Form className='pt-3 ' onSubmit={handleSubmit} >
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="mb-0">First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter The First Name" name='Fname' value={data.Fname} onChange={handleChange} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="mb-0">Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter The Last name" name='Lname' value={data.Lname} onChange={handleChange} />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="mb-0">City</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your City" name='city' value={data.city} onChange={handleChange} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="mb-0">Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter Your Mobile Number" name='number' value={data.number} onChange={handleChange} />
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label className="mb-0">Course</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Course" name='course' value={data.course} onChange={handleChange} />
                  </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </Row>
      </Container>
        </>

    )

}
export default StudentForm;