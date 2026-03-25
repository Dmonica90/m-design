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
            demoLink: "/challenges/operation-dopamine/story.html"
        },
        {
            titleKey: "challenge2Title",
            descKey: "challenge2Desc",
            thumbnail: "/thumbnails/Squad.png",
            demoLink: "/challenges/meet-the-squad/story.html"
        },
        {
            titleKey: "challenge3Title",
            descKey: "challenge3Desc",
            thumbnail: "/thumbnails/Survive.png",
            demoLink: "/challenges/survive-stakeholder/index.html"
        },
        {
            titleKey: "challenge4Title",
            descKey: "challenge4Desc",
            thumbnail: "/thumbnails/slider-accordion.png",
            demoLink: "/challenges/sliding-accordion/story.html"
        },
        {
            titleKey: "challenge5Title",
            descKey: "challenge5Desc",
            thumbnail: "/thumbnails/Museo.png",
            demoLink: "/challenges/museo-8m/index.html"
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