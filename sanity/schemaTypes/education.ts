import { defineField, defineType } from "sanity";

export default defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({ name: "institution", title: "Institution / Faculty", type: "string", validation: (r) => r.required() }),
    defineField({ name: "degree", title: "Degree", type: "string", validation: (r) => r.required() }),
    defineField({ name: "gpaLabel", title: "Grade Label", type: "string", initialValue: "Grade" }),
    defineField({ name: "gpaValue", title: "Grade Value", type: "string" }),
    defineField({ name: "startYear", title: "Start Year", type: "string" }),
    defineField({ name: "endYear", title: "End Year", type: "string" }),
    defineField({ name: "coursework", title: "Relevant Coursework", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "graduationProject",
      title: "Graduation Project",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Project Title" },
        { name: "status", type: "string", title: "Grade / Status" },
        { name: "description", type: "text", rows: 3, title: "Description" },
        { name: "highlights", type: "array", of: [{ type: "string" }], title: "Key Highlights" },
        { name: "note", type: "text", rows: 2, title: "Closing Note" },
      ],
    }),
  ],
  preview: {
    select: { title: "institution", subtitle: "degree" },
  },
});
