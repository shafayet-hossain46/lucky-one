import React from 'react';
import './Course.css';

const Course = ({course, selectedId}) => {
    const {id, name, img, price} = course;
    return (
        <div className="col-md-4 mb-2">
            <div className="card rounded-3 border-0 shadow">
                <img src={img} className="card-img-top img-fluid" alt="pic"/>
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p>Price: {price}</p>
                    <div className="d-grid gap-2">
                        <button onClick={() => {selectedId(course)}} className="btn btn-primary" type="button">Select</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Course;