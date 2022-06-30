import React, { useState } from 'react';

const LuckyOne = (props) => {
    // State for lucky one
    const [lucky, setLucky] = useState(["Didn't select"])

    // Lucky one getting
    const LuckyOne = item => {
        const luckyItem = item[Math.floor(Math.random() * item.length)];
        setLucky(luckyItem);        
    }


    return (
        <div>
            <div className="d-grid mb-5 mt-5">
                <button onClick={() =>LuckyOne(props.selectedItem)}className="btn btn-primary" type="button">Lucky-One</button>
            </div> <div className="mb-3 selectedItem">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={lucky.img} className="img-fluid rounded-pill" alt=""/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{lucky?.name}</h5>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default LuckyOne;