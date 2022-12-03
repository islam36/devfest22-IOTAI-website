import React from "react";
import { FaTemperatureHigh, FaMoneyBill, FaLink } from "react-icons/fa";
import { ImDroplet } from "react-icons/im";
import { TbWind } from "react-icons/tb";
import { GiMovementSensor } from "react-icons/gi";
import { RxDoubleArrowDown } from "react-icons/rx";
import { MdGrade, MdOutlineNetworkCheck, MdSettings} from "react-icons/md";
import profile from "./profile.jpg";
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";

const Wave = () => (
  <svg
    className="wave"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      fill="#001E6C"
      fillOpacity="1"
      d="M0,224L48,218.7C96,213,192,203,288,186.7C384,171,480,149,576,154.7C672,160,768,192,864,176C960,160,1056,96,1152,85.3C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </svg>
);

const FlippedWave = () => (
  <svg
    className="wave fliped-wave"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      fill="#001E6C"
      fillOpacity="1"
      d="M0,256L48,256C96,256,192,256,288,250.7C384,245,480,235,576,213.3C672,192,768,160,864,128C960,96,1056,64,1152,74.7C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </svg>
);

const Card = ({ icon, title, text }) => (
  <div className="card">
    <div className="card-icon">{icon}</div>
    <h4 className="card-title">{title}</h4>
    <p className="card-text">{text}</p>
  </div>
);

const cardsData = [
  {
    icon: <FaMoneyBill />,
    title: "reduced price",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi facere debitis odit blanditiis, explicabo eum velit minima tempore in cumque tempora, molestias eveniet, laboriosam id excepturi ut nostrum beatae?",
  },
  {
    icon: <MdGrade />,
    title: "No other concurrent",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi facere debitis odit blanditiis, explicabo eum velit minima tempore in cumque tempora, molestias eveniet, laboriosam id excepturi ut nostrum beatae?",
  },
  {
    icon: <MdOutlineNetworkCheck />,
    title: "Coverage of all Algeria",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi facere debitis odit blanditiis, explicabo eum velit minima tempore in cumque tempora, molestias eveniet, laboriosam id excepturi ut nostrum beatae?",
  },
  {
    icon: <MdSettings />,
    title: "Maintenance and client support",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi facere debitis odit blanditiis, explicabo eum velit minima tempore in cumque tempora, molestias eveniet, laboriosam id excepturi ut nostrum beatae?",
  },
];

const IconCircle = ({ icon, text }) => (
  <div className="flex-col">
    <div className="circle">{icon}</div>
    <p className="circle-text">{text}</p>
  </div>
);

const IconCirclesData = [
  {
    icon: <FaTemperatureHigh />,
    text: "Temperature",
  },
  {
    icon: <ImDroplet />,
    text: "Air Humidity",
  },
  {
    icon: <TbWind />,
    text: "Air Pressure",
  },
  {
    icon: <GiMovementSensor />,
    text: "Movement",
  },
];


const trustedByList = [
  {
    img: profile,
    name: 'someone'
  },
  {
    img: profile,
    name: 'someone'
  },
  {
    img: profile,
    name: 'someone'
  },
  {
    img: profile,
    name: 'someone'
  },
  {
    img: profile,
    name: 'someone'
  },
  {
    img: profile,
    name: 'someone'
  }
];


const socials = [
  {
    icon: <FaFacebook />,
    link: '#'
  },
  {
    icon: <FaTwitter />,
    link: '#'
  },
  {
    icon: <FaInstagram />,
    link: '#'
  },
  {
    icon: <FaLinkedin />,
    link: '#'
  },
  {
    icon: <FaYoutube />,
    link: '#'
  },
  {
    icon: <FaEnvelope/>,
    link: '#'
  },
]

function App() {
  return (
    <div>
      <section id="home" className="section flex-col">
        <h1 className="title secondary">IOTAI</h1>
        <h2 className="text-center primary ">
          IOT monitoring solutions for every Algerian citizan
        </h2>
        <a href="#icons" className="circle arrow-down">
          <RxDoubleArrowDown style={{ transform: "scale(1.8)" }} />
        </a>
        <Wave />
      </section>

      <section id="icons" className="section bg-primary">
        <h1 className="title white">Smart sensor solutions</h1>
        <div className="icons">
          {IconCirclesData.map((icon, index) => (
            <IconCircle key={index} icon={icon.icon} text={icon.text} />
          ))}
        </div>
        <p className="text-center white">
          With IOTAI devices you can measure temperature, air humidity, air
          pressure and movement at home, in your shop or wherever you want.
        </p>
      </section>

      <section id="cards" className="section bg-primary">
        <h1 className="title white">IOTAI is for eveyone</h1>
        <div className="cards">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </section>

      <section id="plans" className="section">
        <FlippedWave />
        <div className="flex-col">
          <h1 className="title secondary title-pos-plan ">Our plans</h1>

          <table className="plans-table">
            <thead>
              <tr>
                <th>Plan</th>
                <th>Bronze</th>
                <th>Silver</th>
                <th>Gold</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Number of devices</td>
                <td>1</td>
                <td>up to 20</td>
                <td>as much as needed</td>
              </tr>

              <tr>
                <td>Available Sensors</td>
                <td>one type</td>
                <td>three types</td>
                <td>any type</td>
              </tr>

              <tr>
                <td>Status notifications</td>
                <td>Daily report</td>
                <td>Daily report + Accident notification</td>
                <td>Daily report + Accident notification</td>
              </tr>

              <tr>
                <td>Predective model</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>available</td>
              </tr>

              <tr>
                <td>monthly subscription</td>
                <td>free</td>
                <td>20000 DA</td>
                <td>100000 DA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>


      <section id="trust" className="section">
        <h1 className="title secondary">Trusted by</h1>

        <div className="flex-wrap" style={{marginTop: '100px', padding: '50px'}}>
          {
            trustedByList.map((person, index) => (
              <div key={index} className="flex-col">
                <div className="img-container">
                  <img src={person.img} alt="" />
                </div>
                <h3 className="priamry">{person.name}</h3>
              </div>
            ))
          }          
        </div>
      </section>

      <section id="get" className="section">
        <h1 className="title primary">Get your own device Now!</h1>
      </section>

      <section id="app" className="section">
        <h1 className="title primary">Download our app</h1>
        <h3>the whole world in your fingertips</h3>
      </section>


      <section id="catalog" className="section">
        <h1 className="title primary">Our catalog of devices</h1>
      </section>

      <footer>
        <div className="sections">
          <a href="#home" className="white">Home</a>
          <a href="#icons" className="white">Measurements</a>
          <a href="#cards" className="white">Advantages</a>
          <a href="#plans" className="white">Our plans</a>
        </div>

        <div className="sections">
          <a href="#trust" className="white">Trusted by</a>
          <a href="#get" className="white">Get your device</a>
          <a href="#app" className="white">Get our app</a>
          <a href="#catalog" className="white">Catalog of devices</a>
        </div>

        <div className="socials">
          {
            socials.map((item, index) => (
              <a key={index} href={item.link} className="social">
                {item.icon}
              </a>
            ))
          }
        </div>
      </footer>
    </div>
  );
}

export default App;
