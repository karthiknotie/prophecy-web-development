import { useRoutes } from 'react-router-dom';
import './App.css';
import mongoose from 'mongoose';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Blog from "./Pages/Blog";
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import BlogOverview from './Pages/BlogOverview';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Teams from './Pages/Teams';
import Career from './Pages/Career';
import CookiePolicy from './Pages/CookiePolicy';
import AiandDataAnalytics from './Pages/AiandDataAnalytics';
import DigitalAcceleration from './Pages/DigitalAcceleration';
import ApplicationModernization from './Pages/ApplicationModernization';
import DatabaseModernization from './Pages/DatabaseModernization';
import InfraStructureModernization from './Pages/InfraStructureModernization';
import CyberSecurity from './Pages/CyberSecurity';
import SiteReliabilityServices from './Pages/SiteReliabilityServices';
import Automation from './Pages/Automation';
import StaffingandITConsulting from './Pages/StaffingandITConsulting';
import RoboticProcessAutomation from './Pages/RoboticProcessAutomation';
import DataandAI from './Pages/DataandAI';
import CloudandDevOps from './Pages/CloudandDevOps';
import SnowflakeandInformatica from './Pages/SnowflakeandInformatica';
import ServiceNow from './Pages/ServiceNow';
import EPR from './Pages/EPR';
import CRM from './Pages/CRM';
import AdoveExperienceManager from './Pages/AdoveExperienceManager';
import Optimizely from './Pages/Optimizely';
import About from './Pages/About';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import AnimationCursor from './Components/AnimationCursor';
import { isMobile } from 'react-device-detect';
import { Provider } from "react-redux";
import { store } from './redux/store';
import SingleBlog from './Pages/SingleBlog';
import Login from './Pages/user/Login';
import Register from './Pages/user/Register';
import AdminLayout from './Pages/admin/AdminLayout';
import DashBoard from './Pages/admin/dashboard/DashBoard';
import AddPost from './Pages/admin/post/AddPost';
import ManagePost from './Pages/admin/post/ManagePost';
import PrivateRouter from './Pages/PrivateRouter';
import CookieConsent from "react-cookie-consent";
import UpdatePost from './Pages/admin/post/UpdatePost'
import { useLocation } from 'react-router-dom';
import AddCareer from './Pages/admin/career/AddCareer';
import ManageCareer from './Pages/admin/career/ManageCareer'
import UpdateCareer from './Pages/admin/career/UpdateCareer'
import ChatComponent from './Components/ChatComponent';
import ManageApplicationForm from './Pages/admin/career/CareerQuery';
import EnquiryQuery from './Pages/admin/enquiry/EnquiryQuery';

function App() {


  const location = useLocation();
  // Exclude Header for specific admin-related routes
  const shouldShowHeader = !location.pathname.startsWith("/dashboard") && location.pathname !== '/admin/login' && location.pathname !== '/login';
  const shouldShowFooter = !location.pathname.startsWith("/dashboard") && location.pathname !== '/admin/login'  && location.pathname !== '/login';
  const shouldShowChatComponent = !location.pathname.startsWith("/dashboard") && location.pathname !== '/admin/login'  && location.pathname !== '/login';


  // useEffect(() => {
  //   // Check if the user has already accepted cookies
  //   const isConsentGiven = document.cookie.includes("myCookieConsent=true");
  //   if (isConsentGiven) {
  //     // Initialize Google Analytics if consent is already given
  //     loadGoogleAnalytics();
  //   }
  // }, []);

  // const loadGoogleAnalytics = () => {
  //   // Load Google Analytics script and initialize
  //   const script = document.createElement("script");
  //   script.src = "https://www.googletagmanager.com/gtag/js?id=G-1DGS5CETR2";
  //   script.async = true;
  //   document.head.appendChild(script);
    
  //   script.onload = () => {
  //     window.dataLayer = window.dataLayer || [];
  //     function gtag() {
  //       window.dataLayer.push(arguments);
  //     }
  //     gtag("js", new Date());
  //     gtag("config", "G-1DGS5CETR2");
  //   };
  // };

  const handleAcceptCookies = () => {
    // Save consent in a cookie
    document.cookie = "myCookieConsent=true; max-age=31536000; path=/"; // 1 year expiration
    // loadGoogleAnalytics(); // Load Google Analytics script after consent
  };

  const handleDeclineCookies = () => {
    // Save decline in a cookie
    document.cookie = "myCookieConsent=false; max-age=31536000; path=/"; // 1 year expiration
  };




  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: !isMobile,
      lerp: 0.03,
      direction: 'vertical',
      touchMultiplier: 0.5,
    });

    const update = (time) => {
      lenis.raf(time);
      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);

    return () => {
      // Cleanup function
    };
  }, []);

  const routes = [
    
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/blog', element: <Blog /> },
    { path: '/contact', element: <Contact /> },
    { path: '/services', element: <Services /> },
    { path: '/blog-overview', element: <BlogOverview /> },
    { path: '/privacypolicy', element: <PrivacyPolicy /> },
    { path: '/cookiepolicy', element: <CookiePolicy /> },
    { path: '/team', element: <Teams /> },
    { path: '/career', element: <Career /> },
    { path: '/ai-and-data-analytics', element: <AiandDataAnalytics /> },
    { path: '/digital-acceleration', element: <DigitalAcceleration /> },
    { path: '/application-modernization', element: <ApplicationModernization /> },
    { path: '/database-modernization', element: <DatabaseModernization /> },
    { path: '/infrastructure-modernization', element: <InfraStructureModernization /> },
    { path: '/cybersecurity', element: <CyberSecurity /> },
    { path: '/site-reliabilities', element: <SiteReliabilityServices /> },
    { path: '/automation', element: <Automation /> },
    { path: '/staffing-and-consulting', element: <StaffingandITConsulting /> },
    { path: '/robotic-process-automation', element: <RoboticProcessAutomation /> },
    { path: '/data-and-ai', element: <DataandAI /> },
    { path: '/cloud-and-devops', element: <CloudandDevOps /> },
    { path: '/snowflake-and-informatica', element: <SnowflakeandInformatica /> },
    { path: '/servicenow', element: <ServiceNow /> },
    { path: '/epr', element: <EPR /> },
    { path: '/crm', element: <CRM /> },
    { path: '/adobe-experience-manager', element: <AdoveExperienceManager /> },
    { path: '/optimizely', element: <Optimizely /> },
    { path: '/admin/login', element: <Login /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },

    {path:"/career/:id", element:<Career />},
    {path:"/blog/:id", element:<BlogOverview />},


    
  
    // Admin Layout with nested routes
    {
      path: '/dashboard',
      element: <PrivateRouter><AdminLayout /></PrivateRouter> ,
      children: [
        { index: true, element: <AddPost /> }, // Default route for /dashboard
        { path: 'add-post', element: <AddPost /> },
        { path: 'manage-post', element: <ManagePost /> },
        { path : 'update-items/:id', element:<UpdatePost/>},
        { path : 'career-add', element:<AddCareer/>},
        {path : 'career-manage', element:<ManageCareer/>},
        {path :'update-career/:id', element:<UpdateCareer/>},
        {path :'career-query', element:<ManageApplicationForm/>},
        {path :'enquiry-form', element:<EnquiryQuery/>},
      ],
    },
  
    { path: '/blogs/:id', element: <BlogOverview /> },
    { path: '/single-blog/:id', element: <SingleBlog /> },
  ];
  
  
  const routing = useRoutes(routes);


  return (
    <>  
    
        <CookieConsent
        className="myCookieConsent"
        location="bottom"
        buttonText="Close"
        declineButtonText="Decline"
        enableDeclineButton
        cookieName="myCookieConsent"
        expires={365}
        onAccept={handleAcceptCookies}
        // onDecline={handleDeclineCookies}
      >  <p>We use cookies to optimize your experience, analyze traffic, and deliver personalized content. By continuing to use our website, you consent to our use of cookies.
        <span>   Learn more in our <a href="/privacypolicy">Privacy Policy</a>.
      </span>
      </p>{" "}
      
      </CookieConsent>

      {shouldShowChatComponent && <ChatComponent />}

    <Provider store={store}>
      <div className="prophecy">
        <AnimationCursor className="CursorAnimation" />
        {shouldShowHeader && <Header />} {/* Conditionally render Header */}
        {routing}
        {shouldShowFooter && <Footer />}
      </div>
    </Provider>
</>

  );
}

export default App;
