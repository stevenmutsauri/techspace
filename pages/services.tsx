import React from "react";
import Card from "../components/Card";
import img1 from "../public/images/img1.png";
import img2 from "../public/images/img2.png";
import img3 from "../public/images/service3.png";
import img4 from "../public/images/service44.png";
import img5 from "../public/images/img5.png";
import img6 from '../public/images/img6.png';
// import 'bootstrap/dist/css/bootstrap.css'

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card 
              title="Web Development" 
              imgsrc={img1} 
              
              info="We Develop responsive, secure and profitable websites with 
              complete content control and scalability, and easy to mantain.."

              />
              <Card 
              title="Android Development" 
              imgsrc={img2} 
              info =" We Develop Android and Apple apps for smartphones 
              and tablets with great attention to design."
              />
              <Card 
              title="Database Management" 
              imgsrc={img3} 
              info =" We Develop,Mantain , Design and Upgrade database
              systems. Data is the most critical component of a business,
              allow our developers help you grow your business🤝 

              ."
              />
              <Card 
              title="Business Analytics"
               imgsrc={img4} 
               info="Financial analytics

               Monitoring revenue, expenses and profitability of a company.
               Profitability analysis and financial performance management.
               Budget planning, formulating long-term business plans.
               Financial risk forecasting and management."
               />
              <Card 
              title="Digital Marketing" 
              imgsrc={img5} 
              info="Entire online marketing stack with focus on content, 
              creative, social media and digital.
              Digital marketing services can increase the demand for your business
              We grow business online, best SEO services, best social media marketing
              influencer marketing and affiliate marketing, email outreach,
              search engine marketing
              "
              />
              <Card 
              title="Graphic Designing" 
              imgsrc={img6} 
              info="
              We offer high quality
              Web design,App Design,
              Landing Page Design,Logo Designing, Business Card Design,
              Stationery Design, Label Design,Letterhead Design,Signage Design,
              Billboard Design, magazines and letterheads,Flyer Design,Brochure Design,
              Poster Design
          
              

              "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;