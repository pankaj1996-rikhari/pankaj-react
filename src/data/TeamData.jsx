// src/data/servicesData.js
import team1 from "../assets/images/team-1.jpg";
import team2 from "../assets/images/team-2.jpg";
import team3 from "../assets/images/team-3.jpg";
import team4 from "../assets/images/team-4.jpg";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    iconf: <FaFacebookF className="i" />,
    icont: <FaTwitter className="i" />,
    iconi: <FaInstagram className="i" />,
    iconl: <FaLinkedinIn className="i" />,
    image: team1,
    name: 'Walter White',
    designation: 'Chief Executive Officer',
  },
  {
    id: 2,
    iconf: <FaFacebookF className="i" />,
    icont: <FaTwitter className="i" />,
    iconi: <FaInstagram className="i" />,
    iconl: <FaLinkedinIn className="i" />,
    image: team2,
    name: 'Sarah Jhonson',
    designation: 'Product Manager',
  },
  {
    id: 3,
    iconf: <FaFacebookF className="i" />,
    icont: <FaTwitter className="i" />,
    iconi: <FaInstagram className="i" />,
    iconl: <FaLinkedinIn className="i" />,
    image: team3,
    name: 'William Anderson',
    designation: 'CTO',
  },
  {
    id: 4,
    iconf: <FaFacebookF className="i" />,
    icont: <FaTwitter className="i" />,
    iconi: <FaInstagram className="i" />,
    iconl: <FaLinkedinIn className="i" />,
    image: team4,
    name: 'Amanda Jepson',
    designation: 'Accountant',
  },
];

export default servicesData;
