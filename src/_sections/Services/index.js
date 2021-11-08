import React from 'react';
import {MDBContainer, MDBRow} from 'mdb-react-ui-kit';
import Title from '../../_components/Title';
import {services} from '../../_helpers/routes';
import './index.scss';

import servicesBg from '../../_assets/images/projects-4.jpg';

const Services = () => {
   return (
      <MDBContainer fluid className="__services p-0 py-5 position-relative">
         {/* <div className="img position-absolute">
            <img src={servicesBg} alt="" className="h-100 w-100" />
         </div> */}
         <MDBContainer className="p-0 __container py-5 h-100 d-flex align-items-center justify-content-center position-relative">
            <MDBRow className="m-0 inner w-100 py-3">
               <Title className="align-items-center pb-5 title" heading="my services" desc="What I do" />
               {services.map((itm) => (
                  <div key={itm.id} className="col-md-4 col-12 p-4 d-flex align-items-center justify-content-center">
                     <article className="cardin w-100 p-4 h-100">
                        <div className="img mb-2">{itm.icon}</div>
                        <article className="content">
                           <div className="">
                              <h6 className="text-capitalize mb-2">{itm.title}</h6>
                              <p className="">{itm.desc}</p>
                           </div>
                        </article>
                     </article>
                  </div>
               ))}
               {/* {services.map((itm) => (
                  <div key={itm.id} className="col-md-4 col-12 mb-4 d-flex align-items-center justify-content-center">
                     <article className="cards">
                        <div className="img">{itm.icon}</div>
                        <article className="content">
                           <div className="">
                              <h6 className="text-capitalize mb-2">{itm.title}</h6>
                              <p className="">{itm.desc}</p>
                           </div>
                        </article>
                     </article>
                  </div>
               ))} */}
            </MDBRow>
         </MDBContainer>
      </MDBContainer>
   );
};

export default Services;
