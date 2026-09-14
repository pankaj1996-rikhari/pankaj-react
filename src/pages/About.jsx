import { Helmet } from "react-helmet-async";
import about from "../assets/images/about-img.svg";
import { BsDiagram3Fill, BsFullscreenExit } from "react-icons/bs";
import { FaUsers, FaLightbulb, FaFileAlt, FaPeopleCarry, FaPuzzlePiece, FaChartLine, FaShoppingCart, FaGraduationCap, FaStethoscope, FaBuilding, FaCreditCard, FaPlane, FaFilm, FaTruck, FaUtensils, FaBriefcase } from "react-icons/fa";


const beliefsData = [
  { id: 1, icon: <FaUsers />, title: "Customer-centric Approach" },
  { id: 2, icon: <FaLightbulb />, title: "Innovation" },
  { id: 3, icon: <FaFileAlt />, title: "Transparency" },
  { id: 4, icon: <FaPeopleCarry />, title: "Teamwork and Synergy" },
  { id: 5, icon: <FaPuzzlePiece />, title: "Integrity" },
  { id: 6, icon: <FaChartLine />, title: "Long-term Outlook" },
];

const industries = [
  { id: 1, icon: <FaShoppingCart />, title: "E-Commerce & Retail" },
  { id: 2, icon: <FaGraduationCap />, title: "Education & E-Learning" },
  { id: 3, icon: <FaStethoscope />, title: "Healthcare & Telemedicine" },
  { id: 4, icon: <FaBuilding />, title: "Real Estate & Property" },
  { id: 5, icon: <FaCreditCard />, title: "Finance & FinTech" },
  { id: 6, icon: <FaPlane />, title: "Travel & Hospitality" },
  { id: 7, icon: <FaFilm />, title: "Media & Entertainment" },
  { id: 8, icon: <FaTruck />, title: "Logistics & Transportation" },
  { id: 9, icon: <FaUtensils />, title: "Food Delivery & Restaurants" },
  { id: 10, icon: <FaBriefcase />, title: "Corporate & Enterprise" },
];



const About = () => {
  return (
    <>
    <Helmet>
      <title>About - My Website</title>
      <meta name="description" content="This is the About page of my website" />
    </Helmet>
      <section id="about" className="section about">
        <div className="container">
          <div className="row gy-3">
            <div
              className="col-lg-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <img src={about} alt="" className="img-fluid" />
            </div>
            <div
              className="col-lg-6 d-flex flex-column justify-content-center aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="about-content ps-0 ps-lg-3">
                <h3>
                  Building reliable digital products with modern web
                  technologies.
                </h3>
                <p className="fst-italic">
                  Web development combines creativity and logic to craft
                  responsive, scalable and user-friendly online experiences for
                  businesses worldwide.
                </p>
                <ul>
                  <li>
                    <BsDiagram3Fill className="i" />
                    <div>
                      <h4>Front-end design with seamless user interaction</h4>
                      <p>
                        Creating fast, accessible interfaces using React, HTML,
                        CSS and JavaScript for engaging and interactive web
                        solutions.
                      </p>
                    </div>
                  </li>
                  <li>
                    <BsFullscreenExit className="i" />
                    <div>
                      <h4>Back-end logic and secure data integration</h4>
                      <p>
                        Developing scalable APIs, managing databases and
                        ensuring smooth server communication with Node.js and
                        modern frameworks.
                      </p>
                    </div>
                  </li>
                </ul>
                <p>
                  Every web project demands clean code, optimized performance
                  and strong security practices. Our focus is delivering
                  future-ready solutions that empower clients to scale their
                  digital presence with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 text-center services section light-background">
        <div className="container">
          <h2 className="mb-5 fw-bold">We Believe In...</h2>
          <div className="row g-4 justify-content-center">
            {beliefsData.map((item) => (
              <div className="col-6 col-md-4 col-lg-2" key={item.id}>
                <div className="belief-card p-4 h-100 d-flex flex-column align-items-center justify-content-center">
                  <div className="belief-icon mb-3">{item.icon}</div>
                  <h6 className="fw-semibold">{item.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 text-center">
        <div className="container">
          <h2 className="mb-5 fw-bold">
            Industries We Serve in Web Development
          </h2>
          <div className="row g-4 justify-content-center">

           {industries.map((item)=>{
              return(
               <div className="col-6 col-md-4 col-lg-3" key={item.id}>
              <div className="industry-card p-4 h-100 d-flex flex-column align-items-center justify-content-center">
                <div className="industry-icon mb-3">{item.icon}</div>
                <h6 className="fw-semibold">
                   {item.title}
                </h6>
              </div>
            </div>
              )
           })}

            


          </div>
        </div>
      </section>


      
      
    </>
  );
};

export default About;
