import React, { useState } from 'react';
    import ImageLightbox from '@/components/ImageLightbox';
    import { Brain, Gamepad2, MessageSquare, Users, Zap } from 'lucide-react';
    import { useLanguage } from '@/contexts/LanguageContext';

    import HeroSection from '@/components/portfolio/HeroSection';
    import AboutSection from '@/components/portfolio/AboutSection';
    import WhatIDoSection from '@/components/portfolio/WhatIDoSection';
    import ProjectsSection from '@/components/portfolio/ProjectsSection';
    import ContactSection from '@/components/portfolio/ContactSection';

    const PortfolioPage = () => {
      const { t } = useLanguage();
      const [selectedImage, setSelectedImage] = useState(null);

      const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
          opacity: 1,
          x: 0,
          transition: {
            delay: i * 0.1,
            duration: 0.5,
          },
        }),
      };

      const paragraphStyle = "mb-4 p-4 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm text-slate-700 leading-relaxed";

      const whatIDoImages = [
        { src: "/images/portfolio/start-smart.jpg", alt: "Reto Start Smart: robot guide over a holographic city" },
        { src: "/images/portfolio/dayone-welcome.jpg", alt: "Day One onboarding course welcome screen with Truck" },
        { src: "/images/portfolio/feedback-cover.jpg", alt: "Course cover: How to give effective feedback" },
        { src: "/images/portfolio/feedback-lesson.jpg", alt: "Interactive lesson on the importance of feedback at work" },
        { src: "/images/portfolio/chat-cover.jpg", alt: "Course cover: Effective written communication in chat" },
        { src: "/images/portfolio/chat-voice.jpg", alt: "Voice message types explained in a phone mockup" },
        { src: "/images/portfolio/chat-phone.jpg", alt: "Interactive chat simulation with opening message tips" },
        { src: "/images/portfolio/detective-briefing.jpg", alt: "Detective-style briefing scene for an incident-response course" },
        { src: "/images/portfolio/detective-triage.jpg", alt: "Drag-and-drop activity to classify incidents by severity" },
        { src: "/images/portfolio/clip-nodes.jpg", alt: "Interactive network map activating telecom nodes" },
        { src: "/images/portfolio/achiever.jpg", alt: "Gamification player-type card: The Achiever" },
        { src: "/images/portfolio/four-keys.jpg", alt: "Infographic: 4 keys to your gamification strategy" },
      ];

      const userImageURL = "/images/portfolio/monica-avatar.jpg";

      const whatIDoList = [
        { textKey: "whatIDoListItem1", icon: <Gamepad2 className="h-5 w-5 text-primary mr-2" /> },
        { textKey: "whatIDoListItem2", icon: <MessageSquare className="h-5 w-5 text-primary mr-2" /> },
        { textKey: "whatIDoListItem3", icon: <Zap className="h-5 w-5 text-primary mr-2" /> },
        { textKey: "whatIDoListItem4", icon: <Brain className="h-5 w-5 text-primary mr-2" /> },
        { textKey: "whatIDoListItem5", icon: <Users className="h-5 w-5 text-primary mr-2" /> }
      ];

      const projectsList = [
        { titleKey: "project1Title", descriptionKey: "project1Desc", icon: <Users className="h-10 w-10 text-primary mb-4" /> },
        { titleKey: "project2Title", descriptionKey: "project2Desc", icon: <Gamepad2 className="h-10 w-10 text-primary mb-4" /> },
        { titleKey: "project3Title", descriptionKey: "project3Desc", icon: <Zap className="h-10 w-10 text-primary mb-4" /> },
        { titleKey: "project4Title", descriptionKey: "project4Desc", icon: <Users className="h-10 w-10 text-primary mb-4" /> }, // Corrected icon
        { titleKey: "project5Title", descriptionKey: "project5Desc", icon: <Brain className="h-10 w-10 text-primary mb-4" /> },
        { titleKey: "project6Title", descriptionKey: "project6Desc", icon: <MessageSquare className="h-10 w-10 text-primary mb-4" /> }
      ];

      const openLightbox = (imageSrc) => {
        setSelectedImage(imageSrc);
      };

      const closeLightbox = () => {
        setSelectedImage(null);
      };

      return (
        <>
          <HeroSection t={t} userImageURL={userImageURL} />
          <AboutSection t={t} paragraphStyle={paragraphStyle} />
          <WhatIDoSection 
            t={t} 
            whatIDoList={whatIDoList} 
            whatIDoImages={whatIDoImages} 
            listItemVariants={listItemVariants}
            openLightbox={openLightbox}
          />
          <ProjectsSection t={t} projectsList={projectsList} />
          <ContactSection t={t} />
          <ImageLightbox imageUrl={selectedImage} altText="Selected image" onClose={closeLightbox} />
        </>
      );
    };

    export default PortfolioPage;