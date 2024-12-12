import React from "react";

const About: React.FC = () => {
    return (
      <div
        id="about-project"
        className="component component-proposition-text my-5 my-md-7"
      >
        <div className="container">
          <div className="row gy-4 gy-md-0">
            <div className="col-md-4 d-flex flex-column align-items-center">
              <h3>95&nbsp;m²</h3>
              <div className="fw-bold text-primary">Total leasable area</div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center">
              <h3>Záchod</h3>
              <div className="fw-bold text-primary">
                Available space for&nbsp;rent
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center">
              <h3>1 000&nbsp;m²</h3>
              <div className="fw-bold text-primary">
                The smallest unit for&nbsp;rent
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


export default About; // Ensure the component is exported for use in other files


