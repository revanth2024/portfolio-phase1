import banner01 from "./Images/banner1/banner1.png";
import banner02 from "./Images/banner2/banner1.png";
import banner03 from "./Images/banner3/banner1.png";
import banner04 from "./Images/banner4/banner1.png";
import banner05 from "./Images/banner5/banner1.png";
import banner06 from "./Images/banner6/banner1.png";
import banner07 from "./Images/banner7/banner1.png";
import banner08 from "./Images/banner8/banner1.png";

import { technology } from "../../../utils/technologyIcons";

import modalimage01 from "./Images/banner1/banner1.png";
import modalimage02 from "./Images/banner1/banner2.png";
import modalimage03 from "./Images/banner1/banner3.png";

import modalsecondimg1 from "./Images/banner2/banner1.png";
import modalsecondimg2 from "./Images/banner2/banner2.png";
import modalsecondimg3 from "./Images/banner2/banner3.png";
import modalsecondimg4 from "./Images/banner2/banner4.png";
import modalsecondimg5 from "./Images/banner2/banner5.png";

import modalthirdimg1 from "./Images/banner3/banner1.png";
import modalthirdimg2 from "./Images/banner3/banner2.png";
import modalthirdimg3 from "./Images/banner3/banner3.png";
import modalthirdimg4 from "./Images/banner3/banner4.png";
import modalthirdimg5 from "./Images/banner3/banner5.png";

import modalfourthimg1 from "./Images/banner4/banner1.png";
import modalfourthimg2 from "./Images/banner4/banner2.png";
import modalfourthimg3 from "./Images/banner4/banner3.png";

import modalfifthimg1 from "./Images/banner5/banner1.png";
import modalfifthimg2 from "./Images/banner5/banner2.png";
import modalfifthimg3 from "./Images/banner5/banner3.png";
import modalfifthimg4 from "./Images/banner5/banner4.png";
import modalfifthimg5 from "./Images/banner5/banner5.png";
import modalfifthimg6 from "./Images/banner5/banner6.png";

import modalsixthimg1 from "./Images/banner6/banner1.png";
import modalsixthimg2 from "./Images/banner6/banner2.png";
import modalsixthimg3 from "./Images/banner6/banner3.png";

import modalseventhimg1 from "./Images/banner7/banner1.png";
import modalseventhimg2 from "./Images/banner7/banner2.png";
import modalseventhimg3 from "./Images/banner7/banner3.png";
import modalseventhimg4 from "./Images/banner7/banner4.png";

import modaleightimg1 from "./Images/banner8/banner1.png";
import modaleightimg2 from "./Images/banner8/banner2.png";
import modaleightimg3 from "./Images/banner8/banner3.png";

const uploadedProjectScreenshots = import.meta.glob(
  "./Images/{service-connect-portfolio,zenthi,collman,meatzone,task-management,employee-management}/*.png",
  { eager: true, import: "default", query: "?url" },
);

const projectImages = (project, filenames) =>
  filenames.map(
    (filename) => uploadedProjectScreenshots[`./Images/${project}/${filename}`],
  );

export const projects = [
  {
    name: "Service Connect - Automotive Service System",
    category: "web-app",
    img: projectImages("service-connect-portfolio", ["login-page.png"])[0],
    tools: [
      technology("React", "react", "61DAFB"),
      technology("SCSS", "sass", "CC6699"),
      technology("Bootstrap", "bootstrap", "7952B3"),
      technology("JavaScript", "javascript", "F7DF1E"),
      technology("jQuery", "jquery", "0769AD"),
    ],
    sliderImg: projectImages("service-connect-portfolio", [
      "dashboard.png",
      "login-page.png",
      "appointment-request.png",
      "quotation.png",
      "service-activity.png",
      "create-service-manager.png",
      "payments.png",
      "customer.png",
      "review.png",
    ]),
    description: [
      "A responsive automotive service platform with dedicated customer, service advisor, manager, and administrator experiences.",
      "Supports real-time communication, voice chat, and daily service progress tracking across customer and workshop workflows.",
      "Screens include service dashboards, appointments, quotations, activity updates, payments, customer records, reviews, and service-manager tools.",
    ],
  },
  {
    name: "Zenthi - Healthcare & Wellness Application",
    category: "web-app",
    technology: "Multi-tenant Healthcare Platform",
    img: projectImages("zenthi", ["dashboard-zenthi.png"])[0],
    tools: [
      technology("Vite", "vite", "61DAFB"),
      technology("SCSS", "sass", "CC6699"),
      technology("Bootstrap", "bootstrap", "7952B3"),
      technology("JavaScript", "javascript", "F7DF1E"),
      technology("Material UI", "mui", "007FFF"),
      technology("Redux", "redux", "764ABC"),
      technology("Razorpay", "razorpay", "47A248"),
      technology("Rest API", "swagger", "85EA2D"),
      technology("JSON Web Tokens", "jsonwebtokens", "000000"),
      technology("Vercel", "vercel", "000000"),
    ],
    sliderImg: projectImages("zenthi", [
      "dashboard-zenthi.png",
      "login-zenthi.png",
      "center-dashboard.png",
      "practitioner-homepage.png",
      "all-practitioner.png",
      "practitioner-list.png",
      "practitioner-details.png",
      "articles-list.png",
      "article-view.png",
      "profile-details.png",
      "profile-info.png",
      "filter-popup.png",
      "booking-details.png",
      "stay-details.png",
      "retreat-register.png",
      "create-subscription.png",
      "settings-change.png",
      "notification.png",
    ]),
    description: [
      "A US-client healthcare and wellness platform built as a multi-tenant application for wellness centers.",
      "Provides dedicated experiences for centers, customers, practitioners, and administrators.",
      "Includes practitioner discovery, wellness resources and articles, bookings, subscriptions, profile management, and platform settings.",
    ],
  },
  {
    name: "Collman - Banking & Financial Management System",
    category: "web-app",
    technology: "Banking and Financial Management Platform",
    img: projectImages("collman", ["payment-tracker.png"])[0],
    tools: [
      technology("Vite", "react", "61DAFB"),
      technology("SCSS", "sass", "CC6699"),
      technology("JavaScript", "javascript", "F7DF1E"),
      technology("Redux", "redux", "764ABC"),
      technology("Node.js", "nodedotjs", "339933"),
      technology("Express.js", "express", "000000"),
      technology("MongoDB", "mongodb", "47A248"),
    ],
    sliderImg: projectImages("collman", [
      "payment-tracker.png",
      "login-collman.png",
      "client-list.png",
      "customer-list.png",
      "user-details.png",
      "create-allocation.png",
      "master-selection.png",
      "knowledge-base.png",
    ]),
    description: [
      "A banking and financial management system for organizing client and customer information and day-to-day operations.",
      "Features dashboards, payment tracking, customer and client records, allocation workflows, and configurable master data.",
      "Includes real-time data views, audit logs, campaigns, a knowledge base, DCR workflows, and target tracking.",
    ],
  },
  {
    name: "Task Management Application",
    category: "web-app",
    technology: "Project and Workforce Management",
    img: projectImages("task-management", ["wbs-canban.png"])[0],
    tools: [
      technology("React", "react", "61DAFB"),
      technology("CSS", "css", "1572B6"),
      technology("JavaScript", "javascript", "F7DF1E"),
      technology("Jquery", "jquery", "0769AD"),
      technology("Bootstrap", "bootstrap", "7952B3"),
      technology("Material UI", "mui", "007FFF  "),
      technology("Redux", "redux", "764ABC"),
    ],
    sliderImg: projectImages("task-management", [
      "wbs-canban.png",
      "workspace.png",
      "login-task.png",
      "create-project.png",
      "wbs-list.png",
      "weekly-timesheet.png",
      "subtask-view.png",
    ]),
    description: [
      "A project and workforce management application for organizing projects, work breakdown structures, and daily tasks.",
      "Includes timesheets, attendance, reports, task and subtask tracking, progress updates, and workflow management.",
      "Supports Scrum-style work organization and project-level visibility for teams.",
    ],
  },
  {
    name: "MeatZone - B2B Meat Ordering & Management Platform",
    category: "web-app",
    technology: "Multi-tenant B2B Ordering Platform",
    img: projectImages("meatzone", ["meatzone-login.png"])[0],
    tools: [
      technology("Vite", "react", "61DAFB"),
      technology("JavaScript", "javascript", "F7DF1E"),
      technology("SCSS", "sass", "CC6699"),
      technology("Redux", "redux", "764ABC"),
      technology("Firebase", "firebase", "DD2C00"),
      technology("Razorpay", "razorpay", "47A248"),
      technology("Vercel", "vercel", "000000"),
      technology("Postman", "postman", "FF6C37"),
      technology("JWT Authentication", "jsonwebtokens", "000000"),
    ],
    sliderImg: projectImages("meatzone", [
      "meat-dashboard.png",
      "meatzone-login.png",
      "store.png",
      "items.png",
      "items-list.png",
      "item-details.png",
      "availability-time.png",
      "orders-page.png",
      "orders-display.png",
      "assign-orders.png",
      "offer-setup.png",
      "delivery-partner.png",
    ]),
    description: [
      "A modern, multi-tenant B2B platform for meat ordering, inventory, customer management, and delivery operations.",
      "Supports real-time order tracking, POS integration, thermal printer workflows, inventory control, and customer and delivery-partner applications.",
      "Includes ratings and monitoring plus dedicated Admin and Super Admin dashboards.",
    ],
  },

  {
    name: "Employee Management Application",
    category: "web-app",
    technology: "Employee Management System",
    img: projectImages("employee-management", ["employee-management.png"])[0],
    tools: [
      technology("Next.js", "nextdotjs", "000000"),
      technology("SCSS", "sass", "CC6699"),
      technology("Bootstrap", "bootstrap", "764ABC"),
      technology("JavaScript", "javascript", "F7DF1E"),
      technology("Redux", "redux", "764ABC"),
    ],
    sliderImg: projectImages("employee-management", [
      "employee-management.png",
      "employee-list.png",
      "add-employee-modal.png",
      "edit-employee.png",
      "confirm-delete.png",
      "responsive-employee.png",
      "tab-view-employee.png",
      "error-add-modal.png",
    ]),
    description: [
      "An employee management application for viewing and maintaining employee records.",
      "Includes employee search, department filtering, employee profiles, and add, edit, and delete workflows.",
      "Provides responsive layouts and form validation feedback for common data-entry scenarios.",
    ],
  },
  {
    name: "Instagram Chat App Clone",
    category: "web-app",
    technology: "React Chat Application",
    img: banner01,
    tools: [
      technology("React", "react", "61DAFB"),
      technology("SCSS", "sass", "CC6699"),
      technology("Material UI", "mui", "007FFF"),
      technology("JavaScript", "javascript", "F7DF1E"),
      technology("Jquery", "jquery", "0769AD"),
      technology("Redux", "redux", "764ABC"),
    ],
    url: "https://revanth2024.github.io/instagram-chatapp/",
    sliderImg: [modalimage01, modalimage02, modalimage03],
    description: [
      "A responsive chat application interface with message management and theme options.",
      "The adaptive sidebar keeps navigation usable across desktop and mobile screen sizes.",
    ],
  },
  {
    name: "Camera Ecommerce Website",
    category: "website",
    technology: "React E-commerce",
    img: banner02,
    tools: [
      technology("React", "react", "61DAFB"),
      technology("Scss", "sass", "CC6699"),
      technology("Material UI", "mui", "007FFF"),
      technology("JavaScript", "javascript", "F7DF1E"),
      technology("Jquery", "jquery", "F7DF1E"),
      technology("Redux", "redux", "764ABC"),
      technology("Node.js", "nodejs", "339933"),
      technology("Express.js", "expressjs", "339933"),
      technology("MongoDB", "mongodb", "47A248"),
    ],
    url: "https://revanth2024.github.io/camera-ecommerce/",
    sliderImg: [
      modalsecondimg1,
      modalsecondimg2,
      modalsecondimg3,
      modalsecondimg4,
      modalsecondimg5,
    ],
    description: [
      "A camera e-commerce experience for browsing products, managing a cart, and reviewing order totals.",
      "The responsive React interface supports product discovery and a straightforward shopping flow.",
    ],
  },
  {
    name: "Reyos TC and ABA Services Website",
    category: "website",
    technology: "HTML Website",
    img: banner07,
    tools: [
      technology("HTML5", "html5", "E34F26"),
      technology("CSS3", "css", "1572B6"),
      technology("JavaScript", "javascript", "F7DF1E"),
      technology("Bootstrap", "bootstrap", "7952B3"),
      technology("PHP", "php", "777BB4"),
    ],
    url: "https://reyostcforotandabaservices.com/",
    sliderImg: [
      modalseventhimg1,
      modalseventhimg2,
      modalseventhimg3,
      modalseventhimg4,
    ],
    description: [
      "Provides intensive, evidence-based, and data-driven interventions for children and adolescents with Autism and other developmental delays (e.g., Intellectual Disabilities, Language Disorders, Learning Disabilities).",
      "Specializes in the acquisition of language, communication skills, pre-academic and academic skills, independent functioning, and socialization.",
      "Aims to unlock the potential of children through comprehensive and personalized care.",
      "Delivers a comprehensive program that enhances various developmental areas to support overall growth and independence.",
    ],
  },
  {
    name: "Best Gents Hostel Website",
    category: "website",
    technology: "HTML Website",
    img: banner08,
    tools: [
      technology("HTML5", "html5", "E34F26"),
      technology("CSS3", "css", "1572B6"),
      technology("JavaScript", "javascript", "F7DF1E"),
      technology("Bootstrap", "bootstrap", "7952B3"),
      technology("PHP", "php", "777BB4"),
    ],
    url: "https://menspgchennai.com/",
    sliderImg: [modaleightimg1, modaleightimg2, modaleightimg3],
    description: [
      "Located in Madipakkam, near Sunshine Chennai Senior Secondary School, and just 1.5 km from Velachery Railway Station, Best Gents Hostel offers comfortable and affordable accommodations.",
      "Ventilated Rooms: Enjoy proper ventilation in all rooms for natural air circulation.",
      "Safety First: Equipped with fire-fighting equipment as per safety regulations.",
      "Health Care: If needed, our management provides personal care, immediate doctor's consultation, and a specially prepared diet with parental care based on medical advice.Clean and Colorful Rooms: All rooms are neat, colorful, and come with a range of facilities.",
      "Room Options: Choose from independent single or sharing rooms, available with or without air conditioning. UV Disinfection: Our A/C rooms are fitted with UV disinfectant devices to help protect against viruses.",
      "Affordable Rates: We offer very reasonable room rents. Please see the rental tariff below for details.",
    ],
  },
  {
    name: "JCCorporation Website",
    category: "website",
    technology: "HTML Website",
    img: banner03,
    tools: [
      technology("HTML5", "html5", "E34F26"),
      technology("CSS3", "css", "1572B6"),
      technology("JavaScript", "javascript", "F7DF1E"),
      technology("Bootstrap", "bootstrap", "7952B3"),
      technology("jQuery", "jquery", "0769AD"),
    ],
    url: "https://jccorporations.com/",
    sliderImg: [
      modalthirdimg1,
      modalthirdimg2,
      modalthirdimg3,
      modalthirdimg4,
      modalthirdimg5,
    ],
    description: [
      "JCCorporation is a prominent IT services company known for its leadership in providing comprehensive IT solutions.",
      "Specializing in staff augmentation, JCCorporation excels in meeting diverse client needs by supplying skilled professionals for various IT roles.",
      "Their commitment extends beyond mere staffing; they emphasize job assurance, ensuring that their placements not only meet current project demands but also contribute to long-term career growth and stability for their employees.",
      "JCCorporation's reputation as a leading IT services provider is underscored by their dedication to delivering high-quality personnel and securing job opportunities that align with both client expectations and employee aspirations.",
    ],
  },
  {
    name: "Doctor At Home  Website Template",
    category: "website",
    technology: "HTML Website",
    img: banner04,
    tools: [
      technology("HTML5", "html5", "E34F26"),
      technology("CSS3", "css", "1572B6"),
      technology("JavaScript", "javascript", "F7DF1E"),
      technology("Bootstrap", "bootstrap", "7952B3"),
      technology("PHP", "php", "777BB4"),
    ],
    url: "https://doctorathome.org/",
    sliderImg: [modalfourthimg1, modalfourthimg2, modalfourthimg3],
    description: [
      "The Doctor at Home website provides specialized services in wound dressing and bed sore care through its Special Geriatrics Care Unit.",
      "This unit is equipped with 10 beds and offers intensive care focused on wound management and bed sore prevention and treatment.",
      "In addition to these services, the facility provides comprehensive healthcare support including physiotherapy sessions, chest X-ray examinations, and ECG (electrocardiogram) diagnostics. This ensures a holistic approach to medical care, addressing both acute and chronic health needs for patients in need of specialized attention.",
    ],
  },
  {
    name: "Santa Event Management Website",
    category: "website",
    technology: "HTML Website",
    img: banner05,
    tools: [
      technology("HTML5", "html5", "E34F26"),
      technology("CSS3", "css", "1572B6"),
      technology("JavaScript", "javascript", "F7DF1E"),
      technology("Bootstrap", "bootstrap", "7952B3"),
      technology("PHP", "php", "777BB4"),
    ],
    url: "https://santaeventmanagement.com/",
    sliderImg: [
      modalfifthimg1,
      modalfifthimg2,
      modalfifthimg3,
      modalfifthimg4,
      modalfifthimg5,
      modalfifthimg6,
    ],
    description: [
      "The Sanda Event Management website is designed to offer comprehensive event management services, leveraging modern web technologies to create an engaging and visually appealing user experience.",
      " A dynamic display of core services including Exhibitions, Roadshows, New Product Launches, Advertising, Seminars & Conferences, and Sound & Lights.",
      "A contact form connected to a PHP server for handling inquiries and requests.",
      "An animated map showing the company's location with AOS and GSAP-enhanced effects.",
      "The Sanda Event Management website is designed to be user-friendly, with intuitive navigation and visually appealing animations. The use of AOS and GSAP ensures that users remain engaged while exploring the services and capabilities of Sanda Event Management.",
      "The Sanda Event Management website effectively combines aesthetic appeal with functionality, utilizing advanced animation libraries and robust backend support to provide a seamless and engaging user experience.",
    ],
  },
  {
    name: "Global CC Hospital Template",
    category: "website",
    technology: "HTML Website",
    img: banner06,
    tools: [
      technology("HTML5", "html5", "E34F26"),
      technology("CSS3", "css", "1572B6"),
      technology("JavaScript", "javascript", "F7DF1E"),
      technology("Bootstrap", "bootstrap", "7952B3"),
      technology("PHP", "php", "777BB4"),
    ],
    url: "https://www.gcchospitals.com/",
    sliderImg: [modalsixthimg1, modalsixthimg2, modalsixthimg3],
    description: [
      "Global Critical Care Hospital is committed to providing top-notch healthcare services in a user-friendly and accessible manner. Our website is designed to connect you seamlessly to our world-class facilities and expert medical care",
      "This website is structured to provide easy navigation through multiple pages, each dedicated to different aspects of our services and facilities.",
      "This website leverages PHP to create a dynamic and interactive experience, ensuring real-time updates and seamless performance.",
      "Visit our website to learn more about our services, meet our medical team, and access a wealth of information designed to support your health journey.",
    ],
  },
];
