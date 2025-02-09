//TEO WEE CHERNG KYSTON S10270092H

'use client'; // Make sure to mark this file as a client component in Next.js

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { cuisineData } from '../cuisineData/cuisineData'; // Import the cuisine data
import L from 'leaflet';

// Dynamically import MapContainer and other components from react-leaflet
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

// Define a custom icon without shadow
const customIcon = new L.Icon({
  iconUrl: '/pointer.png', // Path to your local marker icon
  iconSize: [25, 25], // Size of the icon
  iconAnchor: [12, 25], // Anchor point of the icon
  popupAnchor: [1, -34], // Popup anchor point
});

const InteractiveMap = () => {
  // Add state to check if the map should be rendered
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set state to true once it's confirmed that we're on the client side
    setIsClient(true);

    // Cleanup function to remove the map container
    return () => {
      const mapContainer = document.querySelector('.leaflet-container');
      if (mapContainer) {
        mapContainer._leaflet_id = null;
      }
    };
  }, []);

  // If not on the client-side, don't render the map
  if (!isClient) {
    return null;
  }

  // Flatten the cuisine data into a single array
  const allCuisines = Object.values(cuisineData).flat();

  return (
    <div>
      <MapContainer center={[20, 0]} zoom={2} style={{ width: '100%', height: '600px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {allCuisines.map(cuisine => (
          <Marker key={cuisine.id} position={cuisine.position} icon={customIcon}>
            <Popup>
              <img src={cuisine.src} alt={cuisine.alt} style={{ width: '50px', height: 'auto' }} />
              <p>{cuisine.alt}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;