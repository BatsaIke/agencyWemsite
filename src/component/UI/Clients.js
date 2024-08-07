import React from "react";
import "../../styles/clients.css";
import kimo from '../../images/kimo.png';
import estatemasters from '../../images/estatemasters.jpg';
import dwellys from '../../images/dwelys.png';
import perpool from '../../images/perpool.png';
import triplehillhotel from '../../images/triple hill.jpg';
import acestudyabroadgh from '../../images/acestudy.jpeg';

const clients = [
  {
    id: 1,
    name: "Kimo Group",
    logo: kimo,
    website: "https://www.kimogroup.com/",
  },
  {
    id: 2,
    name: "Estate Masters",
    logo: estatemasters,
    website: "https://estatemastersgh.com/",
  },
  {
    id: 3,
    name: "Dwellys",
    logo: dwellys,
    website: "https://dwellys.com/",
  },
  {
    id: 4,
    name: "Perpool Ghana",
    logo: perpool,
    website: "https://perpoolgh.com/",
  },
  {
    id: 5,
    name: "Triple Hill Hotel",
    logo: triplehillhotel,
    website: "https://triplehillhotel.com/",
  },
  {
    id: 6,
    name: "Ace Study Abroad",
    logo: acestudyabroadgh,
    website: "https://acestudyabroadgh.com/",
  },
];

const Clients = () => {
  return (
    <section className='clients'>
      <div className='container'>
        <h2 className='clients__title'>Our Clients</h2>
        <p className='clients__description'>
          We are proud to work with a diverse group of clients from various industries. Each logo below represents a trusted partnership and our commitment to providing excellent service.
        </p>
        <div className='clients__grid'>
          {clients.map((client) => (
            <div className='client__card' key={client.id}>
              <a href={client.website} target="_blank" rel="noopener noreferrer">
                <img src={client.logo} alt={`${client.name} Logo`} className='client__logo' />
                <p className='client__name'>{client.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
