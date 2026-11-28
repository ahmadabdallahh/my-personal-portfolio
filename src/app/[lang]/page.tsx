import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
    getEducation,
    getExperience,
    getProfile,
    getProjects,
    getSkillCategories,
} from "@/lib/data";

export default function Home() {
    const profile = getProfile();
    const skillCategories = getSkillCategories();
    const experience = getExperience();
    const projects = getProjects();
    const education = getEducation();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: profile.name,
        jobTitle: profile.title,
        address: profile.location,
        description: profile.bio,
        sameAs: profile.socials
            .filter((s) => s.platform !== "cv")
            .map((s) => s.url),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <main>
                <Hero profile={profile} />
                <Skills categories={skillCategories} />
                <Experience items={experience} />
                <Projects projects={projects} />
                <Education education={education} />
                <Contact profile={profile} />
            </main>
            <Footer profile={profile} />
        </>
    );
}
