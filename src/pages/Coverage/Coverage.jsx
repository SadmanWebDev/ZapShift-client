import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;

    const district = serviceCenters.find((c) =>
      c?.district?.toLowerCase().includes(location.toLowerCase())
    );

    if (district) {
      // ensure coordinates exist
      if (district.latitude && district.longitude) {
        const coord = [district.latitude, district.longitude];
        mapRef.current.flyTo(coord, 14);
      } else {
        console.warn("District found but coordinates missing:", district);
      }
    }
  };

  return (
    <div className="bg-white py-[80px] px-[100px] rounded-3xl mb-[124px]">
      <h1 className="text-5xl font-bold text-secondary">
        We are available in 64 districts
      </h1>

      {/* Search */}
      <div>
        <form onSubmit={handleSearch}>
          <label className="input rounded-[50px] bg-base-300 my-[50px] border-none">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              className="grow"
              name="location"
              placeholder="Search"
            />
            <button className="btn absolute right-0 btn-primary text-black rounded-[50px] px-5">
              Search
            </button>
          </label>
        </form>
      </div>

      {/* Map */}
      <div className="border w-full h-[426px] mt-5">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[426px]"
          ref={mapRef}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* SAFE MARKER RENDERING */}
          {serviceCenters
            .filter(
              (center) =>
                typeof center.latitude === "number" &&
                typeof center.longitude === "number"
            )
            .map((center, index) => (
              <Marker
                key={index}
                position={[center.latitude, center.longitude]}
              >
                <Popup>
                  <strong>{center.district}</strong> <br />
                  Service area:{" "}
                  {Array.isArray(center.covered_area)
                    ? center.covered_area.join(", ")
                    : "No data available"}
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
