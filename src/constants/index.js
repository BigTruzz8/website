import {
    mobile,
    backend,
    creator,
  
    TSwipe,
    

  } from "../assets";
  import rest from './RestuarantDatabase.png'
  import cust from './Cust.png'
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    
    {
      title: "Undergraduate Researcher",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: backend,
    },
    {
      title: "Software Engineering Intern",
      icon: creator,
    },
  ];
  
  
  
  const experiences = [
    
    {
      title: "Undergraduate Researcher",
      company_name: "Virginia Tech IDPro",
      icon: backend,
      iconBg: "#2e1065",
      date: "Dec. 2023 - Present",
      points: [
        " Utilizing computer vision and machine learning algorithms, such as YOLO and UNet to provide precise and efficient measurements of various growth parameters in plants advised by Dr. Zhao.",
        " Working on quantifying growth parameters such as plant height, leaf area, and stem diameter, to gain a deeper understanding of plant physiology and overall health.",
      ],
    },
    {
      title: "Software Engineering Fellow",
      company_name: "HeadstarterAI",
      icon: backend,
      iconBg: "#2e1065",
      date: "Jul. 2024 - Sep 2024",
      points: [
        "Deployed an inventory management system for 300+ items Firebase, React.js, and Material UI, hosted on Vercel for seamless performance.",
        "Working on interactive Virginia Tech Engineering Rate my professors AI chatbot using Google Gemini API, React.js, Next.js, and Vercel.",
        "Created an interactive customer AI chatbot with Gemini API, React, and Next.js. Deployed chatbot on Vercel hosting platform."
        
      ],
    },
    {
      title: "Resarch Intern",
      company_name: "Virginia Tech National Security Institute",
      icon: backend,
      iconBg: "#2e1065",
      date: "Jan. 2025 - May 2025",
      points: [
        "Developed computer vision app that processes 60+ frames per second, tracking 21 hand landmarks per frame.",
        "Designed Streamlit UI showcasing live military signal classifications and annotated hand landmark overlays, enabling rapid interpretation of 7+ critical operation commands.",
        "Using Python, OpenCV and MediaPipe, to enable navigation through hand movement for DoD-aligned research at the VT National Security Institute."
      ],
    },
    {
      title: "Softwawre Engineering Intern",
      company_name: "Peraton",
      icon: backend,
      iconBg: "#2e1065",
      date: "August. 2025 - Dec. 2025",
      points: [
        "Incoming Software Engineering Intern at Peraton."
      ],
    },
  ];
  
  
  
  const projects = [
    {
      name: "Travel Swipe",
      description:
        "An interactive travel discovery and booking platform where users can swipe through curated destinations, view detailed information, check real-time weather, and book flights seamlessly. Swipe-based interface to browse 100+ destinations worldwide.",
      image: TSwipe,
      source_code_link: "https://travel-swipe.vercel.app/",
    },
    {
      name: "ChefMate",
      description:
        "A restaurant management system that streamlines day-to-day operations for managers and staff. Manage employees, shifts, menus, and ingredients from a single dashboard. Backend REST API with MySQL database hosted on AWS RDS for scalability. Secure login with bcrypt encryption and persistent sessions for authenticated access.",
      
      image: rest,
      source_code_link: "https://github.com/drewcodes0001/restaurant-database",
    },
    {
      name: "CustoBot",
      description:
        "Developed an AI-driven customer support system using Google Gemini API, React, and Next.js to automate response times. Implemented a user-friendly interface with Material UI, enhancing user experience and accessibility. Deployed the application on Vercel, ensuring scalability and smooth performance across multiple platforms.",
      image: cust,
      source_code_link: "https://customer-support-bhvji6y8m-surya-koteras-projects.vercel.app/",
    },
  ];
  
  export { services, experiences, projects };