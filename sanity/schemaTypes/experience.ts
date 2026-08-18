import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({ name: "company", title: "Company", type: "string", validation: (r) => r.required() }),
    defineField({ name: "companyLogo", title: "Company Logo", type: "image" }),
    defineField({
      name: "employmentType",
      title: "Employment Type",
      type: "string",
      options: { list: ["Full-time", "Part-time", "Internship", "Trainee", "Training", "Freelance"] },
    }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "startDate", title: "Start Date", type: "date", options: { dateFormat: "YYYY-MM" } }),
    defineField({ name: "endDate", title: "End Date", type: "date", options: { dateFormat: "YYYY-MM" } }),
    defineField({ name: "isCurrent", title: "Currently Working Here", type: "boolean", initialValue: false }),
    defineField({
      name: "roles",
      title: "Roles at this company",
      description: "Add multiple entries if you were promoted or changed role within the same company.",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Role Title" },
            { name: "startDate", type: "date", options: { dateFormat: "YYYY-MM" } },
            { name: "endDate", type: "date", options: { dateFormat: "YYYY-MM" } },
            {
              name: "bullets",
              title: "Achievements / Responsibilities",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [
    { title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "company", subtitle: "employmentType" },
  },
});
