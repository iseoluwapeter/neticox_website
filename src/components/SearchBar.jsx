import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onServiceSelect, services }) => {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setFiltered([]);
      return;
    }

    const results = services.filter((service) =>
      service.name.toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(results);
  };

  const handleSelect = (service) => {
    // trigger parent callback if needed
    if (onServiceSelect) {
      onServiceSelect(service.name);
    }
    setQuery(""); // clear search
    setFiltered([]);

    // navigate to the service page (adjust route as needed)
    navigate(`/service_request`, { state: { selectedService: service.name } });
  };

  return (
    <div className="relative w-full mx-auto">
      <div className="flex gap-2">
        <input
          type="search"
          value={query}
          onChange={handleChange}
          placeholder="What service do you need?"
          className="border bg-white text-black rounded-lg px-3 py-4 w-full"
        />
      </div>
      {filtered.length > 0 && (
        <ul className="absolute bg-white text-black shadow-sm border h-[170px] rounded w-full mt-1 max-h-60 overflow-y-auto z-10">
          {filtered.map((service) => (
            <li
              key={service.id}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(service)}
            >
              {service.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
