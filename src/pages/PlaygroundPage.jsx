import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PlaygroundSection from '@/components/portfolio/PlaygroundSection';

const PlaygroundPage = () => {
    const { t } = useLanguage();

    // Datos de tus Articulate Challenges
    const challengesList = [
        {
            titleKey: "challenge1Title",
            descKey: "challenge1Desc",
            thumbnail: "/thumbnails/dopamine.png",
            demoLink: "/challenge/operation-dopamine/story.html" // Ruta larga y segura
        },
        {
            titleKey: "challenge2Title",
            descKey: "challenge2Desc",
            thumbnail: "/thumbnails/Squad.png",
            demoLink: "/challenge/meet-the-squad/story.html" // Ruta larga y segura
        },
        {
            titleKey: "challenge3Title",
            descKey: "challenge3Desc",
            thumbnail: "/thumbnails/Survive.png",
            demoLink: "/challenge/survive-stakeholder/index.html" // O story.html según tu carpeta original
        },
        {
            titleKey: "challenge4Title",
            descKey: "challenge4Desc",
            thumbnail: "/thumbnails/slider-accordion.png",
            demoLink: "/challenge/sliding-accordion/story.html" // Ruta larga y segura
        },
        {
            titleKey: "challenge5Title",
            descKey: "challenge5Desc",
            thumbnail: "/thumbnails/8m-museo.png",
            demoLink: "/challenge/museo-8m/index.html" // Ruta larga y segura
        },
        {
            titleKey: "challenge6Title",
            descKey: "challenge6Desc",
            thumbnail: "/thumbnails/mangrove-blur.png",
            demoLink: "/challenge/mangrove-blur/story.html" // Ruta larga y segura
        },
        {
            titleKey: "challenge7Title",
            descKey: "challenge7Desc",
            thumbnail: "/thumbnails/playcraft-assistant.png", // Asegúrate de guardar la imagen con este nombre
            demoLink: "/challenges/playcraft-assistant/story.html" // Ruta larga y segura
        }
    ];
    return (
        // min-h-screen asegura que cubra toda la pantalla, pt-24 da espacio para el menú superior
        <div className="pt-24 min-h-screen flex flex-col">
            <div className="flex-grow">
                <PlaygroundSection t={t} challengesList={challengesList} />
            </div>
        </div>
    );
};

export default PlaygroundPage;