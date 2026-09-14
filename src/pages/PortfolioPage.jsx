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
        { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/3913c9f8-cff2-4084-a914-b4e290044ff2/2beddbcc6b428e859084a99bdee2fd7d.jpg", alt: "Elearning module with a robot guide and map interface" },
        { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/3913c9f8-cff2-4084-a914-b4e290044ff2/2847b50a7b94bcdd019fa443ed46e089.jpg", alt: "AI character 'Marty' introduction screen for an elearning course" },
        { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/3913c9f8-cff2-4084-a914-b4e290044ff2/d44b6f06a2b404af5a018fb1aa65b3c7.jpg", alt: "Elearning scenario with a character on a phone call in a warehouse" },
        { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/3913c9f8-cff2-4084-a914-b4e290044ff2/f12891c35000679056b1ec1ec8d03b3b.jpg", alt: "Robot character explaining social and environmental harmony" },
        { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/3913c9f8-cff2-4084-a914-b4e290044ff2/468bdddbdc286861efe973feb543edbd.jpg", alt: "Gamified elearning challenges displayed on a futuristic city map" },
        { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/3913c9f8-cff2-4084-a914-b4e290044ff2/c7dac16036e17f306b9dbbaa118b80ab.jpg", alt: "Informational slide about environmental damage from cigarette butts" },
        { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/3913c9f8-cff2-4084-a914-b4e290044ff2/d881689c1f0146e0937c8f1c3253116d.jpg", alt: "Elearning module start screen for waste management course" },
        { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/3913c9f8-cff2-4084-a914-b4e290044ff2/59586c8f0fbe4f20902689f8d1efdb2d.jpg", alt: "Multiple choice quiz interface for an elearning assessment" },
        { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/3913c9f8-cff2-4084-a914-b4e290044ff2/0fcb034d9a09c84bcb641939f003b383.jpg", alt: "Gamified elearning level selection screen with product categories" },
        { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/3913c9f8-cff2-4084-a914-b4e290044ff2/8cf3a912d827f0e21eef7c5dff2431fc.jpg", alt: "Elearning challenge completion screen with a starfish badge" },
        { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/3913c9f8-cff2-4084-a914-b4e290044ff2/38bde3f0bd2c5ba128eedbae992d5da6.jpg", alt: "Elearning interactive scene in a supermarket aisle looking for shampoo" },
        { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/3913c9f8-cff2-4084-a914-b4e290044ff2/2bd4cd4788abd5334f98e59a66b11f1d.jpg", alt: "Elearning quiz question about supported digital resources" },
      ];

      const userImageURL = "https://storage.googleapis.com/hostinger-horizons-assets-prod/3913c9f8-cff2-4084-a914-b4e290044ff2/dbd4c98acea435ac55e2f298179e7cd0.jpg";

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