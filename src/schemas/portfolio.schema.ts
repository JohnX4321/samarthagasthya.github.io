/**
 * Runtime validation schema for portfolio data
 * Ensures portfolio data integrity at runtime
 */

import { z } from 'zod';

export const SkillItemSchema = z.object({
  name: z.string().min(1),
  icon: z.string().min(1),
  type: z.enum(['brands', 'solid', 'rsi']),
});

export const SkillCategorySchema = z.object({
  category: z.string().min(1),
  items: z.array(SkillItemSchema),
});

export const PersonalInfoSchema = z.object({
  name: z.string().min(1),
  title: z.string().min(1),
  tagline: z.string().min(1),
  bio: z.string().min(1),
  email: z.string(),
  phone: z.string(),
  location: z.string().min(1),
  lookingFor: z.string().min(1),
  social: z.object({
    github: z.string().url().or(z.literal('#')),
    linkedin: z.string().url().or(z.literal('#')),
    twitter: z.string().url().or(z.literal('#')),
  }),
});

export const EducationSchema = z.object({
  id: z.number().positive(),
  degree: z.string().min(1),
  institution: z.string().min(1),
  location: z.string().min(1),
  period: z.string().min(1),
  gpa: z.string().min(1),
  highlights: z.array(z.string()),
});

export const ExperienceSchema = z.object({
  id: z.number().positive(),
  title: z.string().min(1),
  company: z.string().min(1),
  url: z.string().url().or(z.literal('')),
  location: z.string().min(1),
  period: z.string().min(1),
  type: z.string().min(1),
  description: z.string().min(1),
  achievements: z.array(z.string()),
});

export const ProjectLinkSchema = z.object({
  live: z.string().url().or(z.literal('#')),
  github: z.string().url(),
});

export const ProjectSchema = z.object({
  id: z.number().positive(),
  title: z.string().min(1),
  category: z.string().min(1),
  description: z.string().min(1),
  technologies: z.array(z.string()),
  image: z.string().min(1),
  links: ProjectLinkSchema,
  highlights: z.array(z.string()),
});

export const CertificationSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1),
  provider: z.string().min(1),
  issuer: z.string().min(1),
  date: z.string().min(1),
  credentialId: z.string(),
  description: z.string().min(1),
  skills: z.array(z.string()),
  badgeUrl: z.string().url(),
});

export const PortfolioDataSchema = z.object({
  personal: PersonalInfoSchema,
  education: z.array(EducationSchema),
  skills: z.array(SkillCategorySchema),
  experience: z.array(ExperienceSchema),
  projects: z.array(ProjectSchema),
  certifications: z.array(CertificationSchema),
});

/**
 * Validates portfolio data at runtime
 * @returns Validated data or throws validation error
 */
export function validatePortfolioData(data: unknown) {
  return PortfolioDataSchema.parse(data);
}

/**
 * Safe validation that returns result instead of throwing
 */
export function validatePortfolioDataSafe(data: unknown) {
  return PortfolioDataSchema.safeParse(data);
}
