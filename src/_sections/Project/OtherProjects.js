import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const OtherProjects = (props) => {
   useEffect(() => {
      Aos.init({duration: 2000});
   }, []);

   return (
      <>
         <div data-aos="zoom-in-up" key={props.id} className="col-lg-4 col-md-6 col-12 px-4 mb-md-5 mb-3">
            <a href={props.extUrl} className="">
               <div className="inner position-relative">
                  <div className="img d-flex align-items-center justify-content-center">
                     {/* {props.projectImg ? <img src={props.projectImg} alt="" className="" /> : <span className="">&lt;/&gt;</span>} */}
                     <span data-aos="zoom-in" className="text-uppercase text-center">
                        {props.title}
                     </span>
                  </div>
                  <div data-aos="fade-up" className="description h-100 p-4 position-absolute d-flex align-items-center justify-content-center">
                     <div className="position-relative">
                        <h5 className="title pb-2 text-capitalize">{props.title}</h5>
                        <p className="pt-2 pb-3">{props.description}</p>
                        <div className="project-stack pb-4 d-flex align-items-center">
                           {props.stack.map((item) => (
                              <span key={item.id} className="stack me-2">
                                 {item.name}
                              </span>
                           ))}
                        </div>
                        <div className="icons">
                           <>
                              <a href={props.githubLink} className="me-4">
                                 {props.githubIcon}
                              </a>
                              <a href={props.extUrl} className="">
                                 {props.extIcon}
                              </a>
                           </>
                        </div>
                     </div>
                  </div>
               </div>
            </a>
         </div>
      </>
   );
};

export default OtherProjects;
