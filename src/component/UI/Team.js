import React from "react";
import "../../styles/team.css";

import team1 from "../../images/batsa.jpg";
import team2 from "../../images/Yao.jpg";
import team3 from "../../images/Timothy.jpg";
import team4 from "../../images/team-04.png";
import team5 from "../../images/team-01.png";
import team6 from "../../images/team-03.png";

const teamMembers = [
  {
    id: 1,
    name: "Batsa Isaac",
    position: "Software Engineer",
    imageUrl: team1,
  },
  {
    id: 2,
    name: "Yao Nyanyuie Loh",
    position: "Creatives Design",
    imageUrl: team2,
  },
  {
    id: 3,
    name: "Timoty Tulasi",
    position: "Project Manager",
    imageUrl: team3,
  },
  {
    id: 6,
    name: "Sam John",
    position: "Digital Marketer",
    imageUrl: team6,
  },
  // {
  //   id: 4,
  //   name: "Josephine Gyabaah",
  //   position: "Social Media Manager",
  //   imageUrl: team4,
  // },
  // {
  //   id: 5,
  //   name: "Dwamena Margaret",
  //   position: "UX/UI",
  //   imageUrl: team5,
  // },
 
];

const Team = () => {
  return (
    <section className='our_team'>
      <div className='container'>
        <div className='team__content'>
          <h6 className='subtitle'>Our Team</h6>
          <h2>
            Meet with <span className='highlight'> Our Team</span>
          </h2>
        </div>
        <div className='team__team-wrapper'>
          {teamMembers.map((item) => (
            <div className='team__item' key={item.id}>
              <div className='team__img'>
                <img src={item.imageUrl} alt={item.name} />
              </div>
              <div className='team__details'>
                <h4>{item.name}</h4>
                <p className='description'>{item.position}</p>
                <div className='team__member-social'>
                  <span>
                    <i className='ri-linkedin-line'></i>
                  </span>
                  <span>
                    <i className='ri-twitter-line'></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
