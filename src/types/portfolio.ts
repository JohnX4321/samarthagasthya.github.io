/**
 * Type definitions for portfolio data
 * Provides compile-time type safety for all portfolio content
 */

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  lookingFor: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  icon: string;
  type: 'brands' | 'solid' | 'rsi';
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  url: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
}

export interface ProjectLink {
  live: string;
  github: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  links: ProjectLink;
  highlights: string[];
}

export interface Certification {
  id: number;
  name: string;
  provider: string;
  issuer: string;
  date: string;
  credentialId: string;
  description: string;
  skills: string[];
  badgeUrl: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  education: Education[];
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
}
