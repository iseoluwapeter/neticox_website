import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import StepperForm from "./StepperForm";
import servicesData from "../data/services.json";

const ServiceBooking = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    setServices(servicesData);
  }, []);

  const handleServiceSelect = (serviceName) => {
    setSelectedService(serviceName);
  };

  return (
    <div className="p-6">
      {!selectedService ? (
        <SearchBar onServiceSelect={handleServiceSelect} services={services} />
      ) : (
        <StepperForm selectedService={selectedService} />
      )}
    </div>
  );
};

export default ServiceBooking;
