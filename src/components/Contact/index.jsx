import { useEffect, useRef, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Contact() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xbprycf', 'template_ekdr5c7', form.current, 'lGQZSJV7zvjl-LB6X')
      .then((result) => {
        alert('Message successfully sent');
        window.location.reload()

      }, (error) => {
        alert('Failed to send message, please try again');
      });
  };
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I would love to be an integral part of amazing projects.
            If you got me an exciting news to share or want to know more about me, don't hecitate to contact me!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        
        <div className="map-wrap">
        <div className="info-map">
          Suhail MP
          <br />
          Appartment 403, Kumar Building.<br />
          Naif, Dubai, United Arab Emirates. <br />
          <span>suhailmuhammed157@gmail.com</span>
        </div>
        <MapContainer center={[25.27517412723825, 55.30746503763953]} zoom={16} scrollWheelZoom={false}>
    <TileLayer      
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[25.27517412723825, 55.30746503763953]}>
      <Popup>
        Suhail lives here. <br />
      </Popup>
    </Marker>
  </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}
