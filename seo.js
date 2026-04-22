const SITE_NAME = "Rx Suite";
const DEFAULT_SOCIAL_IMAGE =
  "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/fd/51/d0/fd51d0ac-165b-0a90-1bd0-136fd4fa13a6/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg";

function getCurrentPageUrl() {
  return window.location.href;
}

function ensureMeta(selector, attributes = {}) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
}

function ensureLink(selector, attributes = {}) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
}

function ensureJsonLd(id, data) {
  let script = document.getElementById(id);

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

function applySeo({
  title,
  description,
  image = DEFAULT_SOCIAL_IMAGE,
  type = "website",
  url = getCurrentPageUrl(),
  jsonLd,
}) {
  document.title = title;

  ensureMeta('meta[name="description"]', {
    name: "description",
    content: description,
  });
  ensureMeta('meta[name="robots"]', {
    name: "robots",
    content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  });
  ensureMeta('meta[name="author"]', {
    name: "author",
    content: "Ameen Marashi, MD",
  });
  ensureMeta('meta[property="og:title"]', {
    property: "og:title",
    content: title,
  });
  ensureMeta('meta[property="og:description"]', {
    property: "og:description",
    content: description,
  });
  ensureMeta('meta[property="og:type"]', {
    property: "og:type",
    content: type,
  });
  ensureMeta('meta[property="og:url"]', {
    property: "og:url",
    content: url,
  });
  ensureMeta('meta[property="og:site_name"]', {
    property: "og:site_name",
    content: SITE_NAME,
  });
  ensureMeta('meta[property="og:image"]', {
    property: "og:image",
    content: image,
  });
  ensureMeta('meta[name="twitter:card"]', {
    name: "twitter:card",
    content: "summary_large_image",
  });
  ensureMeta('meta[name="twitter:title"]', {
    name: "twitter:title",
    content: title,
  });
  ensureMeta('meta[name="twitter:description"]', {
    name: "twitter:description",
    content: description,
  });
  ensureMeta('meta[name="twitter:image"]', {
    name: "twitter:image",
    content: image,
  });
  ensureLink('link[rel="canonical"]', {
    rel: "canonical",
    href: url,
  });

  if (jsonLd) {
    ensureJsonLd("page-structured-data", jsonLd);
  }
}
