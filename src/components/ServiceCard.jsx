import React from 'react'

const ServiceCard = ({service}) => {
    return (
        <>
            <div className="service-item position-relative">
                <div className="icon">
                    {service.icon}
                </div>
                <h4>
                    <a href="service-details.html" className="stretched-link">
                        {service.title}
                    </a>
                </h4>
                <p>
                    {service.description}
                </p>
            </div>
        </>
    )
}

export default ServiceCard;
