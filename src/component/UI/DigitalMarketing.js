import React from 'react';
import "../../styles/digitalMarketing.css";

const digitalMarketingServices = [
  {
    id: 1,
    title: "Business & Target Audience Analysis",
    description: `
      - Business Analysis: Understand your business and its current online presence (website, social media, reviews). Identify strengths, weaknesses, and opportunities for improvement.
      - Target Audience Research: Identify your ideal customers by analyzing demographics, interests, online behavior, and purchasing patterns.
    `,
  },
  {
    id: 2,
    title: "Website Optimization & Content Marketing",
    description: `
       Website Audit & Optimization: Ensure your website is mobilefriendly, userfriendly, and optimized for search engines (SEO).
       HighQuality Content Creation: Develop engaging content showcasing your business (e.g., blog posts, photos, videos, virtual tours). Highlight your key services and unique offerings.
       Local SEO: Optimize your website and online listings (Google My Business, etc.).
    `,
  },
  {
    id: 3,
    title: "Paid Advertising",
    description: `
       Search Engine Marketing (SEM): Utilize paid search ads (e.g., Google Ads) targeting relevant keywords to drive qualified traffic to your website.
       Social Media Advertising: Run targeted ads on platforms like Facebook and Instagram, attracting customers based on their interests and location.
       Retargeting: Reconnect with website visitors who haven’t converted yet with targeted ads displayed across the web.
    `,
  },
  {
    id: 4,
    title: "Reputation Management",
    description: `
      Monitor Online Reviews: Regularly track reviews on Google My Business, Yelp, and other platforms.
      Respond to Reviews: Promptly address both positive and negative reviews, demonstrating your commitment to customer satisfaction.
      Encourage Positive Reviews: Guide happy customers to leave positive reviews on your preferred platforms.
    `,
  },
  {
    id: 5,
    title: "Email Marketing",
    description: `
      Email List Building: Capture customer email addresses through website forms, promotions, and social media.
      Segmented Email Marketing Campaigns: Tailor email campaigns to different customer segments promoting relevant packages and offers.
      Promotional Emails: Highlight special offers, upcoming events, and packages to incentivize bookings.
      Transactional Emails: Send confirmation emails, pre-visit information, and post-visit follow-up emails with customer feedback surveys.
    `,
  },
  {
    id: 6,
    title: "Analytics & Reporting",
    description: `
      Track Campaign Performance: Monitor website traffic, engagement metrics on social media, lead generation, and conversions.
      Monthly Reports: Provide detailed reports on campaign performance, highlighting key metrics and areas for improvement.
    `,
  },
  {
    id: 7,
    title: "Social Media Marketing",
    description: `
       Identify Relevant Platforms: Focus on platforms where your target audience spends time (e.g., Facebook, Instagram, LinkedIn).
       Optimize Social Media Profiles: Create engaging profiles that showcase your business's amenities, customer experiences, and local attractions.
       Regular Content Posting: Develop a consistent content calendar to keep followers engaged with highquality photos, videos, stories, and interactive posts.
       Social Media Engagement: Respond to comments and messages promptly, fostering a positive online reputation.
       Social Media Contests & Giveaways: Run contests and giveaways to generate excitement and increase brand awareness.
    `,
  },
];

const plans = [
  {
    id: 1,
    name: "Starter Plan",
    services: [
      "Website Management: Monthly updates and maintenance, Basic SEO optimization for improved search engine ranking.",
      "Social Media Management: Management of up to 3 social media platforms, 10 posts per month including graphics and content, monthly social media calendar, engagement with followers (replying to comments and messages).",
      "Email Marketing: Monthly newsletter creation and distribution, subscriber management.",
      "Content Creation: 2 blog posts per month focused on your business's services and local attractions.",
      "Analytics and Reporting: Monthly performance report with insights and recommendations."
    ]
  },
  {
    id: 2,
    name: "Gold Plan",
    services: [
      "Website Management: Weekly updates and maintenance, advanced SEO optimization and keyword research, landing page creation for special promotions and events.",
      "Social Media Management: Management of up to 5 social media platforms, 20 posts per month including graphics, content, and video, bi-weekly social media calendar, engagement with followers and influencers, monthly social media campaign.",
      "Email Marketing: Bi-weekly newsletters, targeted email campaigns for special events and promotions.",
      "Content Creation: 4 blog posts per month focused on your business's services, events, and local attractions, shooting videos for TikTok.",
      "Paid Advertising: Monthly budget allocation for Google Ads and Social Media Ads (Facebook, Instagram, TikTok, etc., depending on your budget).",
      "Analytics and Reporting: Bi-weekly performance report with detailed insights and recommendations."
    ]
  },
  {
    id: 3,
    name: "Platinum Plan",
    services: [
      "Website Management: Daily updates and maintenance, comprehensive SEO strategy including local SEO, custom landing pages for all major services and events, website redesign and optimization quarterly.",
      "Social Media Management: Management of all social media platforms, 30 posts per month including graphics, content, video, and live streams, weekly social media calendar, engagement with followers, influencers, and partnerships, bi-weekly social media campaign.",
      "Email Marketing: Weekly newsletters, personalised email campaigns based on customer segmentation.",
      "Content Creation: 8 blog posts per month focused on your business's services, events, and local attractions, virtual tours and 360-degree videos (based on your preference and budget).",
      "Paid Advertising: Monthly budget allocation for Google Ads and Social Media Ads, retargeting campaigns.",
      "Influencer Marketing: Collaboration with local and national influencers.",
      "Event Promotion: Comprehensive digital marketing for all events.",
      "Analytics and Reporting: Weekly performance report with in-depth analysis and actionable insights, quarterly strategy meetings to review progress and adjust the plan as needed."
    ]
  }
];

const DigitalMarketing = ({ theme }) => {
  return (
    <section className={`digital-marketing ${theme === '' ? 'dark-theme' : 'light-theme'}`}>
      <div className="container">
        <h2 className="digital-marketing__title">Comprehensive Digital Marketing Plan</h2>
        <p className="digital-marketing__intro">
          This comprehensive digital marketing plan outlines strategies for promoting your business across various online channels, attracting customers, boosting engagement, and promoting your various amenities and services. We offer three different plans to cater to your specific needs and budget.
        </p>
        <div className="digital-marketing__grid">
          {digitalMarketingServices.map((service) => (
            <div className="digital-marketing__card" key={service.id}>
              <h3 className="digital-marketing__card-title">{service.title}</h3>
              <p className="digital-marketing__card-description">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="digital-marketing__plans">
          {plans.map((plan) => (
            <div className="digital-marketing__plan" key={plan.id}>
              <h3 className="digital-marketing__plan-title">{plan.name}</h3>
              <ul className="digital-marketing__plan-services">
                {plan.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;
