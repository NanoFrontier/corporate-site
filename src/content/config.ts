import { z, defineCollection } from "astro:content";

export const collections = {
  vision: defineCollection({
    schema: z.object({
      title: z.string(),
      surface_vision: z.string(),
      surface_mission: z.string(),
    }),
  }),
  tech: defineCollection({
    schema: z.object({
      title: z.string(),
      surface_core_tech: z.string(),
      surface_business_model: z.string(),
      surface_applications: z.string(),
    }),
  }),
  company: defineCollection({
    schema: z.object({
      title: z.string(),
      surface: z.object({
        name: z.string(),
        en_name: z.string(),
        address: z.string(),
        established: z.string(),
        capital: z.string(),
        ceo: z.string(),
        business: z.string(),
      }),
    }),
  }),
  team: defineCollection({
    schema: z.object({
      title: z.string(),
      surface: z.array(
        z.object({
          name: z.string(),
          role: z.string(),
          summary: z.string(),
          image: z.string(),
        })
      ),
    }),
  }),
  news: defineCollection({
    schema: z.object({
      title: z.string(),
      date: z.string(),
      summary: z.string(),
    }),
  }),
}; 