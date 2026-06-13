import * as cheerio from "cheerio";

export async function POST(req) {
  try {
    const { url } =
      await req.json();

    const response =
      await fetch(url);

    const html =
      await response.text();

    const $ = cheerio.load(html);

    const title =
      $("title").text();

    const metaDescription =
      $(
        'meta[name="description"]'
      ).attr("content");

    const h1Count =
      $("h1").length;

    const canonical =
      $(
        'link[rel="canonical"]'
      ).attr("href");

    const ogTitle =
      $(
        'meta[property="og:title"]'
      ).attr("content");

    const images =
      $("img");

    let missingAlt = 0;

    images.each(
      (_, element) => {
        const alt =
          $(element).attr("alt");

        if (!alt) {
          missingAlt++;
        }
      }
    );

    return Response.json({
      success: true,

      audit: {
        title:
          title || "Missing",

        metaDescription:
          metaDescription ||
          "Missing",

        h1Count,

        canonical:
          canonical ||
          "Missing",

        ogTitle:
          ogTitle ||
          "Missing",

        totalImages:
          images.length,

        imagesMissingAlt:
          missingAlt,
      },
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message:
          error.message,
      },
      {
        status: 500,
      }
    );
  }
}