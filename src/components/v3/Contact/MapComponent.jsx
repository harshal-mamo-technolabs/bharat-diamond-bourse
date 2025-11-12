'use client';

import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon in Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Custom marker icon with blue color to match UI
const createCustomIcon = () => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, #05183A 0%, #0E234E 100%);
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid white;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        position: relative;
      ">
        <div style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 50%;
        "></div>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });
};

// Component to update map view when coordinates change
function MapUpdater({ bounds }) {
  const map = useMap();
  
  useEffect(() => {
    if (bounds) {
      map.fitBounds(bounds, {
        padding: [50, 50],
        animate: true,
        duration: 0.8,
      });
    }
  }, [bounds, map]);

  return null;
}

// Custom origin marker icon (different color)
const createOriginIcon = () => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, #10B981 0%, #059669 100%);
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid white;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        position: relative;
      ">
        <div style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 50%;
        "></div>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });
};

export default function MapComponent({ lat, lng, title, location, originLat, originLng, originName }) {
  const destination = [lat, lng];
  const origin = originLat && originLng ? [originLat, originLng] : null;
  
  // Calculate bounds to fit both points if origin exists
  const bounds = origin ? L.latLngBounds([destination, origin]) : null;
  
  // Create polyline coordinates
  const polylinePositions = origin ? [origin, destination] : [];

  return (
    <div className="w-full h-full relative rounded-md overflow-hidden">
      <style jsx global>{`
        .leaflet-container {
          background: #f2f4f6;
          font-family: inherit;
        }
        .leaflet-tile-container img {
          filter: grayscale(20%) brightness(1.05) contrast(1.1);
        }
        .leaflet-control-zoom {
          border: none !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15) !important;
        }
        .leaflet-control-zoom a {
          background: white !important;
          color: #05183A !important;
          border: none !important;
          border-radius: 6px !important;
          width: 32px !important;
          height: 32px !important;
          line-height: 32px !important;
          font-size: 18px !important;
          transition: all 0.2s ease !important;
        }
        .leaflet-control-zoom a:hover {
          background: #05183A !important;
          color: white !important;
          transform: scale(1.05);
        }
        .leaflet-popup-content-wrapper {
          border-radius: 8px !important;
          box-shadow: 0 4px 16px rgba(0,0,0,0.2) !important;
          padding: 12px !important;
        }
        .leaflet-popup-content {
          margin: 0 !important;
          font-size: 14px !important;
          color: #05183A !important;
          font-weight: 600 !important;
        }
        .leaflet-popup-tip {
          background: white !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15) !important;
        }
        .custom-marker {
          background: transparent !important;
          border: none !important;
        }
      `}</style>
      
      <MapContainer
        center={bounds ? bounds.getCenter() : destination}
        zoom={bounds ? undefined : 17}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%', zIndex: 0 }}
        className="rounded-md"
        bounds={bounds || undefined}
        boundsOptions={bounds ? { padding: [50, 50] } : undefined}
      >
        <MapUpdater bounds={bounds} />
        
        {/* Modern tile layer with custom styling */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Route Line */}
        {polylinePositions.length > 0 && (
          <Polyline
            positions={polylinePositions}
            pathOptions={{
              color: '#05183A',
              weight: 4,
              opacity: 0.7,
              dashArray: '10, 10'
            }}
          />
        )}
        
        {/* Origin Marker */}
        {origin && (
          <Marker position={origin} icon={createOriginIcon()}>
            <Popup>
              <div className="text-center">
                <div className="font-semibold text-[#059669] mb-1">{originName || 'Origin'}</div>
                <div className="text-xs text-gray-600 mt-1">Starting Point</div>
              </div>
            </Popup>
          </Marker>
        )}
        
        {/* Destination Marker */}
        <Marker position={destination} icon={createCustomIcon()}>
          <Popup>
            <div className="text-center">
              <div className="font-semibold text-[#05183A] mb-1">{title}</div>
              {location && (
                <div className="text-xs text-gray-600 mt-1">{location}</div>
              )}
              <div className="text-xs text-gray-500 mt-1">Destination</div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      
      {/* Gradient overlay for modern look */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-transparent via-transparent to-white/5 rounded-md"></div>
    </div>
  );
}

