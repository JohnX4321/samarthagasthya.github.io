import { ThemeProvider } from './context/ThemeContext';
import { SkipLink } from './components/SkipLink';
import { MobileRedirectFAB } from './components/MobileRedirectFAB';
import { Navigation } from './components/Navigation';
import { Home } from './components/sections/Home';
import { Education } from './components/sections/Education';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';
import { OpenSourceLicenses } from './components/sections/OpenSourceLicenses';
import {SiGithub} from "react-icons/si";
import { useState } from 'react';

function App() {
    const [showLicenses, setShowLicenses] = useState(false);

    return (
        <ThemeProvider>
            <SkipLink />
            <MobileRedirectFAB />
            <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300 overflow-x-hidden">
                <Navigation />
                {/* <ThemeToggle /> */}

                <main id="main-content">
                    <Home />
                    <Education />
                    <Experience />
                    <Skills />
                    <Projects />
                    <Certifications />
                    <Contact />
                </main>

                <footer className="bg-white dark:bg-neutral-900 py-8 text-center text-neutral-500 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-800 text-sm">
          <p>&copy; 2026 . Built using TailwindCSS, React.js, Bootstrap</p>
            <p>Hosted on Vercel</p>
                    <p>Find Source at {" "}<a href={"https://github.com/samarthsubramanya/samarthagasthya.github.io/"} target={"_blank"}><SiGithub className="inline-flex text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"/></a></p>
                    <p>Icons fetched from : Icons8. Logos are trademarks of their respective owners.</p>
                    <p>Few Cover Images generated using Gemini Nano Banana Pro</p>
                    <button 
                        onClick={() => setShowLicenses(true)}
                        className="text-neutral-700 dark:text-neutral-300 hover:underline font-medium mt-2"
                    >
                        View Open Source Licenses
                    </button>
                    <p>Version : 2.0.2</p>
                </footer>

                <OpenSourceLicenses isOpen={showLicenses} onClose={() => setShowLicenses(false)} />
            </div>
        </ThemeProvider>
    );
}

export default App;
