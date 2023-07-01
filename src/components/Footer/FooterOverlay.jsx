import React from 'react';

import './FooterOverlay.css';

const FooterOverlay = () => (
  <div className="w-full h-full z-[-1] flex flex-col absolute">
    <div className="h-[25%] bg-[#090909]" />
    <div className="bg-[url('./assets/bg.png')] bg-center bg-cover bg-repeat bg-fixed h-[75%]" />
  </div>
);

export default FooterOverlay;
