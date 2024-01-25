import React from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { singledata, updateStudent, deleteStudent } from '../../services/action/student.action';
import UpdateStudentForm from '../Updateform/Updateform';
import { useNavigate } from 'react-router';

const StudentView = () => {
    const navigate = useNavigate(); 
    const { students, student } = useSelector((state) => state.student);
    const dispatch = useDispatch();

    const handleEdit = (id, index) => {
        dispatch(singledata(students[index]));
        navigate('/UpdateStudentForm');
    };

    const handleUpdate = (id, updatedData) => {
        dispatch(updateStudent(id, updatedData));
        dispatch(singledata(null));
    };

    const handleDelete = (id) => {
        dispatch(deleteStudent(id));
        dispatch(singledata(null));
    };

    const renupdate = () => {
        if (student) {
            return <UpdateStudentForm student={student} onUpdate={handleUpdate} />;
        }
        return null;
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <h2 className="text-center mb-4">Student Information</h2>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>Number</th>
                            <th>Course</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((std, index) => (
                            <tr key={std.id}>
                                <td>{index + 1}</td>
                                <td>{`${std.Fname} ${std.Lname}`}</td>
                                <td>{std.city}</td>
                                <td>{std.number}</td>
                                <td>{std.course}</td>
                                <td>
                                    <Button variant="primary" onClick={() => handleEdit(std.id, index)}>
                                        Edit
                                    </Button>
                                    <Button variant="danger" onClick={() => handleDelete(std.id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            {renupdate()}
        </div>
    );
};

export default StudentView;
