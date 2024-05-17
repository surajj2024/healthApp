// import React from 'react';

const HealthInfo = ({ healthData }) => {
    return (
        <div>
            {healthData.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>Body Part: {item.bodyPart}</p>
                    <p>Equipment: {item.equipment}</p>
                    <p>Target: {item.target}</p>
                </div>
            ))}
        </div>
    );
};

export default HealthInfo;
