import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const AboutTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/usersApi')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.success) {
          setTeamMembers(data.data); // Set the state to the 'data' array
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <section className="w3l-team-main">
      <div className="team py-5">
        <div className="container py-lg-5">
          <h3 className="hny-title text-center">
            Meet the <span>Team</span>
          </h3>
          <div className="row team-row mt-5">
            {teamMembers.length > 0 ? (
              teamMembers.map((member, index) => (
                <div key={index} className="col-lg-4 col-sm-6 mb-lg-0 mb-4 team-wrapper position-relative">
                  <Link to="#">
                    <img
                      src={member.image || 'default-image.jpg'} // Add fallback for missing image
                      className="team_member img-fluid"
                      alt={`Team Member ${member.full_name}`}
                      style={{ width: '300px',height:'300px' }}

                    />
                  </Link>
                  <div className="team_info mt-3 position-absolute">
                    <h3>
                      <Link to="#" className="team_name">
                        {member.full_name}
                      </Link>
                    </h3>
                    <span className="team_role">{member.full_name}</span>
                    <ul className="team-social mt-3">
                      {member.facebook && (
                        <li>
                          <Link to={member.facebook}>
                            <span className="fa fa-facebook icon_facebook"></span>
                          </Link>
                        </li>
                      )}
                      {member.twitter && (
                        <li>
                          <Link to={member.twitter}>
                            <span className="fa fa-twitter icon_twitter"></span>
                          </Link>
                        </li>
                      )}
                      {member.github && (
                        <li>
                          <Link to={member.github}>
                            <span className="fa fa-github icon_github"></span>
                          </Link>
                        </li>
                      )}
                      {/* Add more social links as necessary */}
                    </ul>
                  </div>
                </div>
              ))
            ) : (
              <p>No team members found</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;


