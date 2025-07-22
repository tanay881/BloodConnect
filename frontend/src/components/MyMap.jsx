import React, { useEffect, useRef } from 'react';

const MyMap = () => {
  const mapContainerRef = useRef(null);

  const loadGoogleMaps = (callback) => {
    if (window.google && window.google.maps) {
      callback();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB9JhedNGTCz6wYuZXNVpXQ-lXUPHD6R6I&libraries=marker`;
      script.async = true;
      script.defer = true;
      script.onload = callback;
      document.body.appendChild(script);
    }
  };

  useEffect(() => {
    loadGoogleMaps(() => {
      const map = new window.google.maps.Map(mapContainerRef.current, {
        center: { lat: 28.6139, lng: 77.2090 },
        zoom: 12,
      });

      const addresses = [
        'Connaught Place, New Delhi',
        'India Gate, New Delhi',
        'Qutub Minar, New Delhi'
      ];

      const geocoder = new window.google.maps.Geocoder();
      const { AdvancedMarkerElement } = window.google.maps.marker;

      for (const address of addresses) {
        geocoder.geocode({ address }, (results, status) => {
          if (status === 'OK' && results[0]) {
            const position = results[0].geometry.location;
            new AdvancedMarkerElement({
              map,
              position,
              title: address,
            });
          } else {
            console.warn(`Geocoding failed for: ${address}`, status);
          }
        });
      }
    });
  }, []);

  return (
    <div>
      <div
        ref={mapContainerRef}
        style={{ width: '100%', height: '600px', }}
      />
    </div>
  );
};

export default MyMap;
