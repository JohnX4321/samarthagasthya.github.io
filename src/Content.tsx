import {Suspense} from "react";
import {Routes,Route} from "react-router-dom";
import FallbackSpinner from "./components/FallbackSpinner.tsx";
import NavBarWithRouter from "./components/NavBar.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Experience from "./components/Experience.tsx";
import Projects from "./components/Projects.tsx";
import Home from "./components/Home.tsx";
import Certifications from "./components/Certifications.tsx";


const Content = () => (
    <div className="MainApp">
        <NavBarWithRouter />
        <main className="main">
            <Suspense fallback={<FallbackSpinner />}>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/edu" element={<About header="Education" />} />
                    <Route path="/skills" element={<Skills header="Skills" />} />
                    <Route path="/experience" element={<Experience header="Experience" />} />
                    <Route path="/projects" element={<Projects header="Projects" />} />
                    <Route path="/certifications" element={<Certifications header="Certifications"  />}/>
                </Routes>
            </Suspense>
        </main>
    </div>
);

export default Content;