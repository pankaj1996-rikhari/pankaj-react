import React from 'react'
import ServiceCard from '../components/ServiceCard';
import servicesData from '../data/servicesData';
import Todo from '../components/Todo';

const Service = () => {
  return (
    <>
    <section id="services" className="services section light-background">
    {/* Section Title */}
    <div
      className="container section-title aos-init aos-animate"
      data-aos="fade-up"
    >
      <h2>Services</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* End Section Title */}
    <div className="container">
      <div className="row gy-4">
  
       {servicesData.map((service) =>{
          return(
          <div key={service.id}
                  className="col-xl-3 col-md-6 d-flex aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={100}
              >
                <ServiceCard service ={service}/>
              </div>
          )
       })}
  
        
  
      </div>
    </div>
  </section>


<Todo/>
</>
  )
}

export default Service
