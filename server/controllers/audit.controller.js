import * as cheerio from "cheerio";

export default async function audit(req, res) {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        success: false,
        message: "URL is required",
      });
    }

    const response = await fetch(url);

    if (!response.ok) {
      return res.status(400).json({
        success: false,
        message: "Invalid URL or website not reachable",
      });
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    const title = $("title").text();
    const metaDescription = $('meta[name="description"]').attr("content");
    const h1Count = $("h1").length;
    const canonical = $('link[rel="canonical"]').attr("href");
    const ogTitle = $('meta[property="og:title"]').attr("content");

    const images = $("img");
    let missingAlt = 0;

    images.each((_, element) => {
      const alt = $(element).attr("alt");
      if (!alt) missingAlt++;
    });

    return res.json({
      success: true,
      audit: {
        title: title || "Missing",
        metaDescription: metaDescription || "Missing",
        h1Count,
        canonical: canonical || "Missing",
        ogTitle: ogTitle || "Missing",
        totalImages: images.length,
        imagesMissingAlt: missingAlt,
      },
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}