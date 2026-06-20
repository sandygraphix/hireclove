import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // If you ever create an admin dashboard or private portal, disallow it here:
      // disallow: "/private/", 
    },
    sitemap: "https://hireclove.com/sitemap.xml",
  };
}
