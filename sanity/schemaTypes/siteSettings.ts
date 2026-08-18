import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteTitle", title: "Site Title (SEO)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "siteDescription", title: "Meta Description (SEO)", type: "text", rows: 3, validation: (r) => r.required().max(160) }),
    defineField({ name: "ogImage", title: "Open Graph Image", type: "image" }),
    defineField({ name: "email", title: "Contact Email", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
    defineField({ name: "github", title: "GitHub URL", type: "url" }),
  ],
});
