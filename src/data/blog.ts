export const blogCategories = [
  "Resume Tips",
  "Interview Tips",
  "Career Advice",
  "LinkedIn",
  "ATS",
  "Salary",
  "Career Growth",
  "Remote Jobs",
  "Job Search",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export function categoryToSlug(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export function slugToCategory(slug: string) {
  return blogCategories.find((c) => categoryToSlug(c) === slug);
}
