import React from 'react'
import TeamData from "../data/TeamData";
const Team = () => {
  return (
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
  )
}

export default Team
