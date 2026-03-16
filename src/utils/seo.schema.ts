/**
 * Generates JSON-LD structured data for SEO
 * Supports: Person, ProfilePage, Project, EducationEvent, BreadcrumbList
 */

import { PortfolioData } from '../types/portfolio';

export interface StructuredDataOptions {
  siteUrl: string;
  imageUrl?: string;
}

/**
 * Generate Person schema for homepage
 */
export const generatePersonSchema = (data: PortfolioData, options: StructuredDataOptions) => {
  const { personal } = data;
  const { siteUrl, imageUrl } = options;

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}#person`,
    name: personal.name,
    url: siteUrl,
    email: personal.email,
    jobTitle: personal.title,
    description: personal.bio,
    image: imageUrl || `${siteUrl}/images/profile.webp`,
    location: {
      '@type': 'Place',
      name: personal.location,
    },
    sameAs: [
      personal.social.github,
      personal.social.linkedin,
    ].filter(url => url !== '#'),
    worksFor: {
      '@type': 'Organization',
      name: 'Self-Employed',
    },
  };
};

/**
 * Generate WebSite schema for search engines
 */
export const generateWebsiteSchema = (siteUrl: string, title: string) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: siteUrl,
    name: title,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
};

/**
 * Generate BreadcrumbList schema
 */
export const generateBreadcrumbSchema = (siteUrl: string) => {
  const breadcrumbs = [
    { name: 'Home', url: `${siteUrl}#home` },
    { name: 'About', url: `${siteUrl}#about` },
    { name: 'Projects', url: `${siteUrl}#projects` },
    { name: 'Experience', url: `${siteUrl}#experience` },
    { name: 'Skills', url: `${siteUrl}#skills` },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

/**
 * Generate Project schema
 */
export const generateProjectSchema = (
  project: PortfolioData['projects'][0],
  siteUrl: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.description,
    image: `${siteUrl}${project.image}`,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    url: project.links.live !== '#' ? project.links.live : undefined,
    codeRepository: project.links.github,
    keywords: project.technologies.join(', '),
  };
};

/**
 * Generate Education schema
 */
export const generateEducationSchema = (
  education: PortfolioData['education'][0],
  _siteUrl: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationEvent',
    name: education.degree,
    provider: {
      '@type': 'EducationalOrganization',
      name: education.institution,
      url: education.location,
    },
    location: education.location,
    description: `GPA: ${education.gpa}`,
    startDate: education.period.split(' - ')[0],
    endDate: education.period.includes('-') ? education.period.split(' - ')[1] : undefined,
  };
};

/**
 * Generate Certification schema
 */
export const generateCertificationSchema = (
  cert: PortfolioData['certifications'][0],
  _siteUrl: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalCredential',
    name: cert.name,
    credentialCategory: 'Certificate',
    issuedBy: {
      '@type': 'EducationalOrganization',
      name: cert.issuer,
    },
    dateIssued: cert.date,
    description: cert.description,
    credentialId: cert.credentialId || cert.badgeUrl,
    url: cert.badgeUrl,
  };
};

/**
 * Combine all schemas into a single JSON-LD script
 */
export const generateAllSchemas = (data: PortfolioData, options: StructuredDataOptions) => {
  const { siteUrl, imageUrl } = options;
  const schemas = [
    generatePersonSchema(data, { siteUrl, imageUrl }),
    generateWebsiteSchema(siteUrl, 'Samarth Agasthya - Full-Stack Engineer & ML Enthusiast'),
    generateBreadcrumbSchema(siteUrl),
    ...data.projects.map(p => generateProjectSchema(p, siteUrl)),
    ...data.education.map(e => generateEducationSchema(e, siteUrl)),
    ...data.certifications.map(c => generateCertificationSchema(c, siteUrl)),
  ];

  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
};
