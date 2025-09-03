import React from "react";
import { useLocation } from "react-router-dom";
import HeroProp from "../components/HeroProp";
import { aboutus_image } from "../assets";
import StepperForm from "../components/StepperForm";

const ServiceRequest = () => {
  const location = useLocation();
  const { selectedService } = location.state || {}; // fallback if no state

  return (
    <div>
      <HeroProp
        image={aboutus_image}
        title="Make a service request"
        description="We are at your service to offet you the best of service, just say the world"
      />

      <StepperForm selectedService={selectedService} />
    </div>
  );
};

export default ServiceRequest;
