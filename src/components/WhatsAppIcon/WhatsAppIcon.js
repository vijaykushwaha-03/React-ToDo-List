import React from 'react';
import './WhatsAppIcon.css';

const WhatsAppIcon = () => {
  const openWhatsApp = () => {
    // Replace with your actual phone number or a placeholder
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <div className="whatsapp-icon" onClick={openWhatsApp}>
      {/* Using text 'WA' as a simple placeholder for the icon */}
      WA
    </div>
  );
};

export default WhatsAppIcon;
