import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';
import {
    SiMongodb,
    SiTypescript,
    SiRust,
    SiC,
    SiCplusplus,
    SiKotlin,
    SiSharp,
    SiDart,
    SiSwift,
    SiApachecordova, SiFlutter, SiJetpackcompose, SiUnity, SiUnrealengine, SiPostgresql, SiMysql, SiNeo4J, SiRealm,
    SiCockroachlabs, SiVercel, SiNetlify, SiRocket, SiXml, SiJson, SiMaterialdesign
} from "react-icons/si";


import portfolioData from '../../data/portfolioData.json';
import {TbBrandKotlin} from "react-icons/tb";

const getIcon = (iconName: string, type: string) => {
    const icons = type === 'brands' ? brandIcons : solidIcons;
    return icons[iconName as keyof typeof icons];
};

const getRSIcon = (iconName: string) => {
    if (iconName === 'faTS')
        return <SiTypescript  className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"/>;
    else if (iconName === 'faRust')
        return <SiRust  className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"/>;
    else if (iconName === 'faC')
        return <SiC className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"/>;
    else if (iconName === 'faCpp')
        return <SiCplusplus  className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"/>;
    else if (iconName === 'faKotlin')
        return <SiKotlin  className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"/>;
    else if (iconName === 'faCSharp')
        return <SiSharp  className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"/>;
    else if (iconName === 'faDart')
        return <SiDart  className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"/>;
    else if (iconName === 'faSwift')
        return <SiSwift className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"/>;
    else if (iconName === 'faCordova')
        return <SiApachecordova  className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"/>;
    else if (iconName === 'faFlutter')
        return <SiFlutter  className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"/>;
    else if (iconName === 'faJetpackCompose')
        return <SiJetpackcompose  className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"/>;
    else if (iconName === 'faKMM')
        return <TbBrandKotlin  className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"/>;
    else if (iconName === 'faUnity')
        return <SiUnity  className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"/>;
    else if (iconName === 'faUnreal')
        return <SiUnrealengine  className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"/>;
    else if (iconName === 'faMongo')
        return <SiMongodb  className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"/>;
    else if (iconName === 'faPSQL')
        return <SiPostgresql  className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"/>;
    else if (iconName === 'faMysql')
        return <SiMysql  className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"/>;
    else if (iconName === 'faNeo')
        return <SiNeo4J  className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"/>;
    else if (iconName === 'faRealm')
        return <SiRealm  className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"/>;
    else if (iconName === 'faCDB')
        return <SiCockroachlabs  className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"/>;
    else if (iconName === 'faVercel')
        return <SiVercel  className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"/>;
    else if (iconName === 'faNetlify')
        return <SiNetlify  className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"/>;
    else if (iconName === 'faXML')
        return <SiXml  className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"/>;
    else if (iconName === 'faJSON')
        return <SiJson  className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"/>;
    else if (iconName === 'faMaterial')
        return <SiMaterialdesign  className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"/>;
    return <SiRocket  className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"/>;
}

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
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
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
                            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                                {skillCategory.category}
                            </h3>

                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
                                {skillCategory.items.map((skill, skillIndex) => {
                                    const icon = getIcon(skill.icon, skill.type);
                                    // @ts-ignore
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
                                                {
                                                    skill.type === 'rsi' ? (
                                                        getRSIcon(skill.icon)
                                                    ) : (
                                                        <FontAwesomeIcon
                                                            icon={icon}
                                                            className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                                                        />
                                                    )
                                                }
                                                <span className="text-xs font-medium text-gray-600 dark:text-gray-400 mt-2 text-center leading-tight group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                                            </div>

                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                whileHover={{ opacity: 1, y: 0 }}
                                                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none"
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
                    <div className="inline-block neomorph-card bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6">
                        <p className="text-gray-700 dark:text-gray-300 text-lg">
                            Constantly learning and evolving with new technologies and best practices
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
