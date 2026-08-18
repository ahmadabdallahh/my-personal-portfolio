import { defineField, defineType } from "sanity";

export default defineType({
  name: "skillCategory",
  title: "Skill Category",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Category Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "icon",
      title: "Icon name",
      type: "string",
      description: "lucide-react icon name, e.g. 'Code2', 'Layers', 'Palette'",
    }),
    defineField({
      name: "items",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
      validation: (r) => r.required().min(1),
    }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [
    { title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "items" },
    prepare: ({ title, subtitle }) => ({
      title,
      subtitle: Array.isArray(subtitle) ? subtitle.join(", ") : "",
    }),
  },
});
