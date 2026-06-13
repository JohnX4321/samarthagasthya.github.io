import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import portfolioData from '../../data/portfolioData.json';

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
        <section id="skills" className="min-h-screen py-20 px-6 bg-neutral-50 dark:bg-neutral-950">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 tracking-tight text-neutral-900 dark:text-neutral-50">
                        Skills & Expertise
                    </h2>
                    <div className="section-divider" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {portfolioData.skills.map((skillCategory, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            className="neomorph-card rounded-2xl p-8"
                        >
                            <h3 className="text-lg font-semibold mb-6 text-neutral-900 dark:text-neutral-50">
                                {skillCategory.category}
                            </h3>

                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                                {skillCategory.items.map((skill, skillIndex) => {
                                    const iconPath = iconMap[skill.icon] || DEFAULT_ICON;
                                    return (
                                        <motion.div
                                            key={skillIndex}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{
                                                duration: 0.3,
                                                delay: categoryIndex * 0.1 + skillIndex * 0.03,
                                            }}
                                            whileHover={{ y: -2 }}
                                            className="group relative"
                                        >
                                            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-colors cursor-pointer group-hover:border-neutral-300 dark:group-hover:border-neutral-600">
                                                <img
                                                    src={iconPath}
                                                    alt={skill.name}
                                                    className="w-10 h-10 invert dark:invert"
                                                />
                                                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-2 text-center leading-tight group-hover:text-neutral-900 dark:group-hover:text-neutral-200 transition-colors">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                        Constantly learning and evolving with new technologies and best practices
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
