export const validateSetup = (
  req,
  res,
  next
) => {
  const {
    websiteName,
    websiteUrl,
  } = req.body;

  if (
    !websiteName ||
    !websiteUrl
  ) {
    return res.status(400).json({
      success: false,
      message:
        "Website Name and URL required",
    });
  }

  next();
};