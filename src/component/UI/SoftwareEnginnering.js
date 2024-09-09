import React from 'react';
import "../../styles/softwareEngineering.css";

const softwareEngineeringServices = [
  {
    id: 1,
    title: "In-Depth Requirement & Business Analysis",
    description: `
      We begin by fully understanding your business goals and objectives. Our team conducts a thorough requirement analysis to capture every functional and non-functional aspect of the software. We work closely with stakeholders, ensuring the solution is aligned with your business processes and delivers the desired impact. Whether you’re starting from scratch or enhancing existing systems, we make sure the foundation is built on clarity.
    `,
  },
  {
    id: 2,
    title: "UI/UX Design & User-Centric Prototyping",
    description: `
      Design is a key part of how users experience software. We don’t just build applications; we create intuitive, engaging interfaces that make the user experience seamless. Our designers craft wireframes and interactive prototypes to visualize the end product before development begins. Through user testing, we validate ideas and ensure the solution is aligned with user expectations, resulting in products that are not only functional but also a joy to use.
    `,
  },
  {
    id: 3,
    title: "Agile Development Process",
    description: `
      Our software development process is rooted in Agile methodologies. This approach allows us to be flexible, adapt to changing requirements, and ensure that the product evolves in sync with your needs. We break down development into manageable sprints, allowing frequent releases and continuous feedback from clients. This way, we reduce risks and make room for improvements throughout the lifecycle of the project, leading to timely delivery of quality software.
    `,
  },
  {
    id: 4,
    title: "Full-Stack Development & Integrations",
    description: `
      Our development team is experienced in both frontend and backend technologies. We create dynamic, responsive interfaces using modern frameworks like React, ensuring that the user experience is smooth across all devices. On the backend, we build robust, scalable, and secure systems using technologies like Node.js, Python, and databases like PostgreSQL. We integrate third-party services and APIs to ensure your software can seamlessly connect with other tools and platforms.
    `,
  },
  {
    id: 5,
    title: "Rigorous Testing & Quality Assurance",
    description: `
      We are committed to delivering high-quality software that performs as expected. Our testing process involves a mix of manual and automated tests to catch issues early. We conduct functional testing to ensure every feature works as intended, and load testing to measure performance under heavy use. Our goal is to prevent issues before they arise, ensuring a smooth user experience post-launch.
    `,
  },
  {
    id: 6,
    title: "Deployment, Monitoring & Continuous Support",
    description: `
      Once the software is developed and thoroughly tested, we handle deployment, ensuring a seamless go-live process. We configure and manage cloud infrastructure on platforms like AWS or Azure, making sure that the system is scalable, secure, and available at all times. Post-launch, our team continuously monitors system performance and provides support for updates, bug fixes, and optimizations. We see our role as long-term partners in the success of your software.
    `,
  },
];

const SoftwareEngineering = ({ theme }) => {
  return (
    <section className={`software-engineering ${theme === '' ? 'dark-theme' : 'light-theme'}`}>
      <div className="container">
        <h2 className="software-engineering__title">Our Approach to Software Development</h2>
        <p className="software-engineering__intro">
          At TechFix Ghana, we believe in crafting software solutions that are tailored to meet your business goals. Our approach revolves around understanding your unique needs, designing user-focused interfaces, developing robust systems, and providing long-term support. Here’s how we take your vision from concept to reality:
        </p>
        <div className="software-engineering__grid">
          {softwareEngineeringServices.map((service) => (
            <div className="software-engineering__card" key={service.id}>
              <h3 className="software-engineering__card-title">{service.title}</h3>
              <p className="software-engineering__card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareEngineering;
