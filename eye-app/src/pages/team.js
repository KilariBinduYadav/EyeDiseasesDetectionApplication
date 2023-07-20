import React from 'react';
import style from "../styles/form.modules.css";
import Table from 'react-bootstrap/Table';

const Team = () => {
    return (
        <>
            <br/>
            <h3 className="fs-1" style={{textAlign:'Center', color: 'blue'}}>Team Details</h3>
            <br/>
            <div class='form-container'>
                <div class='form'>
                <h5>Project Guide: Dr. R Velumani</h5>
                <h6>(Associate Professor, Dept. of CSE)</h6>
                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>Roll Number</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1.</td>
                                            <td>Kilari Bindu Yadav</td>
                                            <td>19131A0599</td>
                                        </tr>
                                        <tr>
                                            <td>2.</td>
                                            <td>V. Satya Nikhil</td>
                                            <td>19131A05Q4</td>
                                        </tr>
                                        <tr>
                                            <td>3.</td>
                                            <td>A. Tarun Kumar</td>
                                            <td>19131A0507</td>
                                        </tr>
                                        <tr>
                                            <td>4.</td>
                                            <td>J. Gowrish</td>
                                            <td>20135A0512</td>
                                        </tr>
                                        
                                    </tbody>
                                </Table>
                </div>
            </div>
        </>
    );
};

export default Team;