import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import portfolioData from '../../data/portfolioData.json';

// Map FontAwesome icon names to SVG file paths
const iconMap: Record<string, string> = {
    'faJava': '/icons/java.svg',
    'faPython': '/icons/python.svg',
    'faJs': '/icons/javascript.svg',
    'faReact': '/icons/react.svg',
    'faHtml5': '/icons/html5.svg',
    'faCss3Alt': '/icons/css.svg',
    'faVuejs': '/icons/vuejs.svg',
    'faSass': '/icons/sass.svg',
    'faAndroid': '/icons/android.svg',
    'faAppStoreIos': '/icons/ios.svg',
    'faNodeJs': '/icons/nodejs.svg',
    'faDocker': '/icons/docker.svg',
    'faAws': '/icons/aws.svg',
    'faGitAlt': '/icons/git.svg',
    'faGithub': '/icons/github.svg',
    'faGitlab': '/icons/gitlab.svg',
    'faLinux': '/icons/linux.svg',
    'faFigma': '/icons/figma.svg',
    'faSketch': '/icons/sketch.svg',
    'faPhp': '/icons/php.svg',
    'faCode': '/icons/nextjs.svg',
    'faWind': '/icons/tailwindcss.svg',
    'faServer': '/icons/redux.svg',
    'faTS': '/icons/typescript.svg',
    'faRust': '/icons/rust.svg',
    'faC': '/icons/c.svg',
    'faCpp': '/icons/cplusplus.svg',
    'faKotlin': '/icons/kotlin.svg',
    'faCSharp': '/icons/csharp.svg',
    'faDart': '/icons/dart.svg',
    'faSwift': '/icons/swift.svg',
    'faCordova': '/icons/cordova.svg',
    'faFlutter': '/icons/flutter.svg',
    'faJetpackCompose': '/icons/jetpack-compose.svg',
    'faKMM': '/icons/jetpack-compose.svg',
    'faUnity': '/icons/unity.svg',
    'faUnreal': '/icons/unreal.svg',
    'faMongo': '/icons/mongodb.svg',
    'faPSQL': '/icons/postgresql.svg',
    'faMysql': '/icons/mysql.svg',
    'faNeo': '/icons/neo4j.svg',
    'faRealm': '/icons/realm.svg',
    'faCDB': '/icons/cockroachdb.svg',
    'faVercel': '/icons/vercel.svg',
    'faNetlify': '/icons/netlify.svg',
    'faXML': '/icons/xml.svg',
    'faJSON': '/icons/json.svg',
    'faMaterial': '/icons/materialdesign.svg',
    'faProjectDiagram': '/icons/project-diagram.svg',
    'faCodeBranch': '/icons/code-branch.svg',
    'faCloud': '/icons/cloud.svg',
    'faDharmachakra': '/icons/kubernetes.svg',
    'faCog': '/icons/cog.svg',
    'faPaintBrush': '/icons/paintbrush.svg',
    'faImage': '/icons/image.svg',
    'faDrawPolygon': '/icons/draw-polygon.svg',
    'faCube': '/icons/cube.svg',
    'faUsers': '/icons/users.svg',
    'faMobileAlt': '/icons/mobile.svg',
};

const DEFAULT_ICON = '/icons/code.svg';



export const Skills: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });


    return (
        <section id="skills" className="min-h-screen py-20 px-6 bg-white dark:bg-gray-800">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Skills & Expertise
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-accent-600 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {portfolioData.skills.map((skillCategory, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            className="neomorph-card bg-gray-50 dark:bg-gray-900 rounded-3xl p-8"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white bg-gradient-to-r from-blue-600 to-accent-600 dark:from-blue-400 dark:to-accent-400 bg-clip-text text-transparent">
                                {skillCategory.category}
                            </h3>

                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
                                {skillCategory.items.map((skill, skillIndex) => {
                                    const iconPath = iconMap[skill.icon] || DEFAULT_ICON;
                                    return (
                                        <motion.div
                                            key={skillIndex}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{
                                                duration: 0.4,
                                                delay: categoryIndex * 0.1 + skillIndex * 0.05,
                                                type: 'spring',
                                                stiffness: 200,
                                            }}
                                            whileHover={{ scale: 1.15, y: -5 }}
                                            className="group relative"
                                        >
                                            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-gray-800 neomorph-icon hover:shadow-xl transition-all duration-300 cursor-pointer">
                                                <img 
                                                    src={iconPath}
                                                    alt={skill.name}
                                                    className="w-12 h-12 invert"
                                                />
                                                <span className="text-xs font-medium text-gray-600 dark:text-gray-400 mt-2 text-center leading-tight group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                                            </div>

                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                whileHover={{ opacity: 1, y: 0 }}
                                                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-blue-600 to-accent-600 text-white text-xs rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none"
                                            >
                                                {skill.name}
                                            </motion.div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-block neomorph-card bg-gradient-to-r from-blue-50 to-accent-50 dark:from-blue-900/20 dark:to-accent-900/20 rounded-2xl p-6">
                        <p className="text-gray-700 dark:text-gray-300 text-lg">
                            Constantly learning and evolving with new technologies and best practices
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
