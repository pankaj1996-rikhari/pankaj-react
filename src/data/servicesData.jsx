// src/data/servicesData.js

import { BsActivity, BsBoundingBoxCircles, BsBroadcast } from 'react-icons/bs';
import { IoCalendarOutline } from 'react-icons/io5';
import { FaMobileAlt, FaCloud, FaLock, FaBullhorn } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    icon: <BsActivity className="i" />,
    title: "Web Development",
    description:
      "Building fast, secure and scalable websites tailored to your business needs and audience.",
  },
  {
    id: 2,
    icon: <BsBoundingBoxCircles className="i" />,
    title: "UI/UX Design",
    description:
      "Designing intuitive, responsive interfaces that deliver seamless user experiences across devices.",
  },
  {
    id: 3,
    icon: <IoCalendarOutline className="i" />,
    title: "E-Commerce Solutions",
    description:
      "Developing robust online stores with smooth checkout, payment gateways and product management.",
  },
  {
    id: 4,
    icon: <BsBroadcast className="i" />,
    title: "SEO & Optimization",
    description:
      "Improving website speed, visibility and ranking with proven SEO strategies and tools.",
  },
  {
    id: 5,
    icon: <FaMobileAlt className="i" />,
    title: "Mobile App Development",
    description:
      "Creating high-performance mobile applications for iOS and Android with modern technologies.",
  },
  {
    id: 6,
    icon: <FaCloud className="i" />,
    title: "Cloud Integration",
    description:
      "Seamless integration with cloud services to enhance scalability, security, and flexibility.",
  },
  {
    id: 7,
    icon: <FaLock className="i" />,
    title: "Cybersecurity",
    description:
      "Implementing advanced security measures to protect your website and data from threats.",
  },
  {
    id: 8,
    icon: <FaBullhorn className="i" />,
    title: "Digital Marketing",
    description:
      "Boosting your brand presence with targeted campaigns, social media, and content marketing.",
  },
];


export default servicesData;
