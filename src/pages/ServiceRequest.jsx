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
        title="Startup Lab – Where Ideas Take Flight"
        description="The Neticox Hub Startup Lab is more than an incubator; it’s a global launchpad for innovators, entrepreneurs, and change-makers."
      />

      <StepperForm selectedService={selectedService} />
    </div>
  );
};

export default ServiceRequest;
