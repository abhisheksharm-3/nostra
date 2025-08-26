import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ConfettiExplosion from 'react-confetti-explosion';

const Thanks = () => {
  const location = useLocation();
  const propsData = location.state;
  const [qrCodeURL, setQRCodeURL] = useState("");

  useEffect(() => {
    const dynamicText = `${propsData.userName} + ${propsData.guests} + ${propsData.visiting} + ${propsData.time}`;
    const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
      dynamicText
    )}&size=100x100&format=svg&color=acacac&bgcolor=090909`;

    setQRCodeURL(qrCodeURL);
  }, [
    propsData.id,
    propsData.userName,
    propsData.guests,
    propsData.time,
    propsData.visiting,
  ]);

  const origin = propsData.origin ? propsData.origin : "/profile"

  return (
    <div className="bg-[#090909] w-full flex flex-col items-center justify-center gap-12 h-screen">
        <ConfettiExplosion duration={3000}/>
      <h1 className="font-serif text-center text-orange-400 text-[50px] lg:text-[128px] font-bold capitalize leading-10 tracking-wide lg:pb-4">
        Thank You!
      </h1>
      <img src={qrCodeURL} alt="qr" className="h-[150px] w-[150px]" />
      <p1 className="text-center text-neutral-400 text-[16px] font-normal leading-7 tracking-wider capitalize">
        Dear {propsData.userName}, your booking for {propsData.guests} persons
        at Nostra on {propsData.visiting} at {propsData.time} is now confirmed.
        <br /> show this screen at the front counter on your visit.
        <br /> thank you for choosing Nostra.
      </p1>
      <Link to={origin}>
        <button
          type="button"
          className="bg-[#F5EFDB] text-[#090909] font-serif font-bold tracking-[0.04em] leading-[28px] py-2 px-6 rounded-[1px] border-none cursor-pointer outline-none ease-in duration-200 hover:bg-orange-400"
        >
          Click Here to Go Back!
        </button>
      </Link>
    </div>
  );
};

export default Thanks;
