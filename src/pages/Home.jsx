import React from "react";
import bannerImg from "../assets/images/hero-img.svg";
import about from "../assets/images/about-img.svg";
import client1 from "../assets/images/testimonials-1.jpg";
import client2 from "../assets/images/testimonials-2.jpg";
import client3 from "../assets/images/testimonials-3.jpg";
import client4 from "../assets/images/testimonials-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { BsDiagram3Fill, BsFullscreenExit } from "react-icons/bs";
import { MdOutlineStar } from "react-icons/md";

import servicesData from "../data/servicesData";
import TeamData from "../data/TeamData";
import ContactForm from "../components/form/ContactForm";
import ServiceCard from "../components/ServiceCard";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
     <Helmet>
        <title>Home - My Website</title>
        <meta name="description" content="This is the Home page of my website" />
     </Helmet>
      <section id="hero" className="section hero light-background">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center aos-init aos-animate"
              data-aos="fade-up"
            >
              <h1>"Crafting web solutions that inspire innovation"</h1>
              <p>
                We are team of talented designers making websites with Bootstrap
              </p>
              <div className="d-flex">
                <a href={"/contact"} className="btn-get-started">
                  Get Started
                </a>
                <a
                  href="https://youtu.be/ajdRvxDWH4w?si=WQJe_bLhzscVCtVx"
                  target="_blank"
                  className="glightbox btn-watch-video d-flex align-items-center"
                >
                  <i className="bi bi-play-circle" />
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate"
              data-aos="zoom-out"
              data-aos-delay={200}
            >
              <img src={bannerImg} className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>

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
            {servicesData.map((service) => {
              return (
                <div
                  key={service.id}
                  className="col-xl-3 col-md-6 d-flex aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <ServiceCard service={service} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="team" className="team section">
        {/* Section Title */}
        <div
          className="container section-title aos-init aos-animate"
          data-aos="fade-up"
        >
          <h2>Team</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row gy-4">
            {TeamData.map((team, i) => {
              return (
                <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                  <div className="member">
                    <img src={team.image} className="img-fluid" alt="" />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>{team.name}</h4>
                        <span>{team.designation}</span>
                      </div>
                      <div className="social">
                        <a href="https://www.facebook.com/">{team.iconf}</a>
                        <a href="https://www.facebook.com/">{team.iconi}</a>
                        <a href="https://www.facebook.com/">{team.icont}</a>
                        <a href="https://www.facebook.com/">{team.iconl}</a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials section light-background">
      <div className="container section-title text-center mb-5">
        <h2>Testimonials</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={false}
          loop={true}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            576: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            992: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {[client1, client2, client3, client4].map((client, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item text-center p-4 bg-white rounded shadow-sm">
                <img
                  src={client}
                  className="testimonial-img mx-auto rounded-full w-24 h-24 object-cover"
                  alt={`client ${index + 1}`}
                />
                <h3 className="mt-4 font-bold text-lg">Saul Goodman</h3>
                <h4 className="text-gray-500">CEO & Founder</h4>
                <div className="stars text-yellow-400 text-xl my-2">
                  {[...Array(5)].map((_, i) => (
                    <MdOutlineStar key={i} />
                  ))}
                </div>
                <p className="italic text-gray-600">
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus.
                  </span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

      <ContactForm />
    </>
  );
};

export default Home;
