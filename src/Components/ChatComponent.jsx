import React, { useState, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import ChatBotImg from '../Assets/Resources/chatbot.png'; // Replace with your chatbot avatar image path
import UserBotImg from '../Assets/Resources/user-chat.png';
import '../Assets/styles/Home.css';

const ChatComponent = () => {
    // Track chatbot visibility
    const [chatOpen, setChatOpen] = useState(false);

    useEffect(() => {
        const body = document.body;
        if (chatOpen) {
            body.classList.add('no-scroll'); // Lock scroll when chatbot is open
        } else {
            body.classList.remove('no-scroll'); // Unlock scroll when chatbot is closed
        }

        // Cleanup on unmount
        return () => {
            body.classList.remove('no-scroll');
        };
    }, [chatOpen]);

    // Custom theme
    const theme = {
        background: '#fff',
        headerBgColor: '#027EF0',
        headerFontSize: '20px',
        botBubbleColor: 'linear-gradient(41deg, rgba(0,133,255,1) 0%, rgba(0,0,0,1) 100%)',
        userBubbleColor: '#000',
        headerFontColor: 'white',
        botFontColor: 'white',
        userFontColor: 'white',
    };

    // Chatbot steps
    const steps = [
        {
            id: '0',
            message: 'Welcome to Prophecy Technologies!',
            trigger: '1',
        },
        {
            id: '1',
            message: 'How can I assist you today?',
            trigger: 'main-options',
        },
        {
            id: 'main-options',
            options: [
                { value: 'Website Development', label: 'Website Development', trigger: 'website-options' },
                { value: 'Services offered', label: 'Services offered', trigger: 'services-details' },
                { value: 'Phone', label: 'Phone', trigger: 'phone-details' },
                { value: 'Email', label: 'Email', trigger: 'email-details' },
            ],
        },
        {
            id: 'website-options',
            message: 'What type of website are you looking for?',
            trigger: 'website-types',
        },
        {
            id: 'website-types',
            options: [
                { value: 'Static Website', label: 'Static Website', trigger: 'static-website' },
                { value: 'Dynamic Website', label: 'Dynamic Website', trigger: 'dynamic-website' },
            ],
        },
        {
            id: 'static-website',
            message: 'A static website primarily provides information, using HTML for any modifications or attachments.',
            trigger: 'back-to-main',
        },
        {
            id: 'dynamic-website',
            message: 'Dynamic websites allow easy data modification, such as platforms like Facebook. They require specific web knowledge to create.',
            trigger: 'back-to-main',
        },
        {
            id: 'services-details',
            message: 'At Prophecy Technologies, we offer comprehensive services to drive your business success. Which service would you like to know about?',
            trigger: 'services-options',
        },
        {
            id: 'services-options',
            options: [
                { value: 'Adobe', label: 'Adobe', trigger: 'adobe' },
                { value: 'Application Modernization', label: 'Application Modernization', trigger: 'application-modernization' },
                { value: 'Cyber Security', label: 'Cyber Security', trigger: 'cyber-security' },
                { value: 'Digital Transformation', label: 'Digital Transformation', trigger: 'digital-transformation' },
                { value: 'Infrastructure Modernization', label: 'Infrastructure Modernization', trigger: 'infrastructure-modernization' },
                { value: 'SAP', label: 'SAP', trigger: 'sap' },
                { value: 'ServiceNow', label: 'ServiceNow', trigger: 'servicenow' },
            ],
        },
        {
            id: 'adobe',
            message: 'We maximize Adobe services for unparalleled digital transformation.',
            trigger: 'back-to-main',
        },
        {
            id: 'application-modernization',
            message: 'Empower your digital landscape with comprehensive application development and management services.',
            trigger: 'back-to-main',
        },
        {
            id: 'cyber-security',
            message: 'Cybersecurity involves protecting digital systems, networks, and data from unauthorized access and attacks.',
            trigger: 'back-to-main',
        },
        {
            id: 'digital-transformation',
            message: 'Driving innovation and growth through digital transformation by leveraging technology.',
            trigger: 'back-to-main',
        },
        {
            id: 'infrastructure-modernization',
            message: 'Our technology integration extends to private, public, hybrid, and multi-cloud environments.',
            trigger: 'back-to-main',
        },
        {
            id: 'sap',
            message: 'SAP solutions for comprehensive business excellence.',
            trigger: 'back-to-main',
        },
        {
            id: 'servicenow',
            message: 'ServiceNow simplifies workflows and boosts productivity by automating processes.',
            trigger: 'back-to-main',
        },
        {
            id: 'phone-details',
            message: 'You can reach us at +1 551 689-4006.',
            trigger: 'back-to-main',
        },
        {
            id: 'email-details',
            message: 'You can email us at kumar@prophecytechs.com.',
            trigger: 'back-to-main',
        },
        {
            id: 'back-to-main',
            message: 'Thanks for chatting! How can I assist you further?',
            trigger: 'main-options', // Redirect back to main options
        },
    ];

    return (
        <ThemeProvider theme={theme}>
            <div className="chatbot-container">
                <ChatBot
                    steps={steps}
                    botAvatar={ChatBotImg}
                    floating={true}
                    userAvatar={UserBotImg}
                    opened={chatOpen}
                    toggleFloating={() => setChatOpen(!chatOpen)} // Toggle chatbot visibility
                />
            </div>
        </ThemeProvider>
    );
};

export default ChatComponent;
