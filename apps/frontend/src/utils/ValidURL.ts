export const validURL = (url: string) => {
  const idx = url.lastIndexOf(".");
  if (idx === -1 || url.substring(idx + 1) === "") {
    return false;
  }

  if (!url.startsWith("http:") && !url.startsWith("https:")) {
    url = "https://" + url;
  }

  try {
    const u = new URL(url);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch (_) {
    return false;
  }
};