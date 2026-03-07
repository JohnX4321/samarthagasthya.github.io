import { ThemeProvider } from './context/ThemeContext';
import { Navigation } from './components/Navigation';
import { ThemeToggle } from './components/ThemeToggle';
import { Home } from './components/sections/Home';
import { Education } from './components/sections/Education';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Certifications } from './components/sections/Certifications';
import {SiGithub} from "react-icons/si";

function App() {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
                <Navigation />
                <ThemeToggle />

                <main>
                    <Home />
                    <Education />
                    <Skills />
                    <Experience />
                    <Projects />
                    <Certifications />
                </main>

                <footer className="bg-gray-100 dark:bg-gray-950 py-8 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
          <p>&copy; 2026 . Built using TailwindCSS, React.js, Bootstrap</p>
            <p>Hosted on Vercel</p>
                    <p>Find Source at {" "}<a href={"https://github.com/samarthsubramanya/samarthagasthya.github.io/"} target={"_blank"}><SiGithub className="inline-flex text-gray-700 dark:text-gray-300 group-hover:text-red-200 dark:group-hover:text-red-400 "/></a></p>
                    <p>Icons fetched from : Icons8. Logos are trademarks of their respective owners.</p>
                    <p>Few Cover Images generated using Gemini Nano Banana Pro</p>
                    <p>Version : 2.0.2</p>
                </footer>
            </div>
        </ThemeProvider>
    );
}

export default App;
