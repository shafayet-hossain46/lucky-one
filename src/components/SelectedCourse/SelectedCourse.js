import React from 'react';
import LuckyOne from '../LuckyOne/LuckyOne';
import './SelectedCourse.css'

const SelectedCourse = ({selectedCourse}) => {
    
   



    return (
        <div className="text-center px-5">
            <h4 className="mb-5">Select Your One</h4>
            {
                selectedCourse.map((course) => <div className="mb-3 selectedItem">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={course.img} className="img-fluid rounded-pill" alt="pic"/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{course.name}</h5>
                        </div>
                        </div>
                    </div>
                    
                </div>)
            }
            <div>
                <LuckyOne key={1} selectedItem={selectedCourse}></LuckyOne>
            </div>
        </div>
    );
};

export default SelectedCourse;