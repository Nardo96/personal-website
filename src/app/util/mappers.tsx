export const AboutJobsMap = new Map([
    ['#', 'Title'],
    ['##', 'Company'],
    ['@', 'Location'],
    ['@@', 'Date Range'],
    ['-', 'Bullet Point'],

])

export const AboutSkillsMap = new Map([
    ['-', 'Bullet Point']
])

export const AboutEducationMap = new Map([
    ['#', 'Title'],
    ['##', 'Subtitle'],
    ['@', 'Location'],
    ['@@', 'Date Range'],
    ['-', 'Bullet Point']
])

export const TranslationsMap = new Map([
    ['#', 'Title'],
    ['-','Line'],
])

export const ProjectsMap = new Map([
    ['#', 'Title'],
    ['@', 'Git Repo'],
    ['$', 'Image'],
    ['-', 'Description']
])

export const ProjectsSmallMap = new Map([
    ['$', 'Image'],
])

export const MapperRegistry: Record<string, Map<string, string>> = {
  "about-jobs": AboutJobsMap,
  "about-skills": AboutSkillsMap,
  "about-education": AboutEducationMap,
  "translations": TranslationsMap,
  "projects-small": ProjectsSmallMap,
  "projects": ProjectsMap,
};