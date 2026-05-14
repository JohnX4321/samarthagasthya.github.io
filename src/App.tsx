import { ThemeProvider } from './context/ThemeContext';
import { SkipLink } from './components/SkipLink';
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
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
                <Navigation />
                {/* <ThemeToggle /> */}

                <main id="main-content">
                    <Home />
                    <Education />
                    <Skills />
                    <Experience />
                    <Projects />
                    <Certifications />
                    <Contact />
                </main>

                <footer className="bg-gray-100 dark:bg-gray-950 py-8 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
          <p>&copy; 2026 . Built using TailwindCSS, React.js, Bootstrap</p>
            <p>Hosted on Vercel</p>
                    <p>Find Source at {" "}<a href={"https://github.com/samarthsubramanya/samarthagasthya.github.io/"} target={"_blank"}><SiGithub className="inline-flex text-gray-700 dark:text-gray-300 group-hover:text-red-200 dark:group-hover:text-red-400 "/></a></p>
                    <p>Icons fetched from : Icons8. Logos are trademarks of their respective owners.</p>
                    <p>Few Cover Images generated using Gemini Nano Banana Pro</p>
                    <button 
                        onClick={() => setShowLicenses(true)}
                        className="text-blue-600 dark:text-blue-400 hover:underline font-semibold mt-2"
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
