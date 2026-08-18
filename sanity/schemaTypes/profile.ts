import { defineField, defineType } from "sanity";

export default defineType({
  name: "profile",
  title: "Profile (Hero)",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Full Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "title", title: "Job Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "status", title: "Availability Status", type: "string", description: "e.g. Open to Work" }),
    defineField({ name: "bio", title: "Bio", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({ name: "avatar", title: "Avatar", type: "image", options: { hotspot: true } }),
    defineField({ name: "cvFile", title: "CV (PDF)", type: "file" }),
    defineField({
      name: "socials",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              type: "string",
              options: {
                list: ["email", "linkedin", "github", "whatsapp", "cv", "phone", "twitter", "behance"],
              },
            },
            { name: "url", type: "string" },
          ],
        },
      ],
    }),
  ],
});
