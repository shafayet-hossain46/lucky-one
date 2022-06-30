import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import SelectedCourse from '../SelectedCourse/SelectedCourse';
import './Courses.css'

const Courses = () => {
    // State for all the courses.
    const [courses, setCourses] = useState([])

    // State for selected courses
    const [selectedCourse, setSelectedCourse] = useState([])

    // Loading data
    useEffect(()=>{
        fetch('data.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])


    // Get the selected data.
    const selectedData = selectedItem => {
        const newSelectedCourse = [...selectedCourse, selectedItem]
        setSelectedCourse(newSelectedCourse);
    }
    
    
    return (
        <div className="coursesContainer container mt-5">
            <div className="row">
                <div className="col-md-9">
                   <div className="row">
                   {
                        courses.map(course => <Course selectedId={selectedData} course={course} key={course.id}></Course>)
                    }
                   </div>
                </div>
                <div className="col-md-3">
                    <SelectedCourse selectedCourse={selectedCourse}></SelectedCourse>
                </div>
            </div>
        </div>
    );
};

export default Courses;