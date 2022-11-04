import React from "react";
import {
    AboutSection,
    ContactSection,
    HeroSection,
    InterestsSection,
    Page,
    ProjectsSection,
    Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
    return (
        <>
            <Seo title="Elijah W. - Dallas, TX" />
            <Page useSplashScreenAnimation>
                <HeroSection sectionId="hero" />
                <AboutSection sectionId="about" heading="A Quick Bio!" />
                <InterestsSection
                    sectionId="details"
                    heading="My Developer Skills and Certifications"
                />
                <ProjectsSection
                    sectionId="features"
                    heading="Projects I'm Proud Of"
                />
                <ContactSection sectionId="github" heading="Contact Me" />
            </Page>
        </>
    );
}
