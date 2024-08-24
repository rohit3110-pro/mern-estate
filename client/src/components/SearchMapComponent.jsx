import React, { useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const SearchMapComponent = () => {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [location, setLocation] = useState('');

  // Initialize the map when the component mounts
  React.useEffect(() => {
    const mapInstance = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapInstance);

    setMap(mapInstance);
  }, []);

  // Handle the search and update the map
  const handleSearch = async () => {
    // Use OpenStreetMap Nominatim API for geocoding
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`);
    const data = await response.json();

    if (data.length > 0) {
      const { lat, lon } = data[0];

      // Update map view and add a marker
      map.setView([lat, lon], 13);

      if (marker) {
        map.removeLayer(marker);
      }

      const newMarker = L.marker([lat, lon]).addTo(map)
        .bindPopup(location)
        .openPopup();

      setMarker(newMarker);
    } else {
      alert('Location not found');
    }
  };

  return (
    <div className='text-center rounded-lg gp-2 mb-[-10px]'>
      <input className='p-2 rounded-lg border border-black text-center'
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter a location"
      />
      <button onClick={handleSearch} className=' p-2 border  rounded-lg bg-slate-700 text-white uppercase'>Search</button>
      <div id="map" style={{ height: '500px', width: '100%' }} className='mt-2'></div>
    </div>
  );
};

export default SearchMapComponent;
