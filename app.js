const params = new URLSearchParams(window.location.search);
const slug = params.get("app");
const baseApp = getRxApp(slug) || RX_APPS[0];
const platformFamily = getAppleDevicePlatformFamily();
const app = getRxAppView(baseApp, platformFamily);

document.title = `${app.name} | Rx Family`;
document.body.dataset.accent = app.accent;

document.getElementById("detail-subtitle").textContent = app.kicker;
document.getElementById("detail-kicker").textContent = app.kicker;
document.getElementById("detail-platforms").textContent = app.platforms;
document.getElementById("detail-heading").textContent = app.name;
document.getElementById("detail-intro").textContent = app.detailIntro;
document.getElementById("detail-panel-copy").textContent = app.shortDescription;
document.getElementById("detail-promo").textContent = app.promoText;
document.getElementById("detail-price").textContent = app.price;
document.getElementById("detail-os").textContent = app.minimumOsVersion;
document.getElementById("detail-category").textContent = app.category;
document.getElementById("detail-size").textContent = app.size;
document.getElementById("detail-rating").textContent = app.contentRating;

const icon = document.getElementById("detail-icon");
icon.src = app.icon;
icon.alt = `${app.name} icon`;

const downloadLink = document.getElementById("detail-download");
const platform = getAppleDevicePlatform();
downloadLink.href = getPlatformAwareAppUrl(baseApp);
downloadLink.textContent = platform
  ? `Download ${app.name} for ${getAppleDevicePlatformLabel(platform)}`
  : `Download ${app.name}`;

const chipRow = document.getElementById("detail-chip-row");
getDisplayTags(baseApp).forEach((tag) => {
  const chip = document.createElement("span");
  chip.className = "tag";
  chip.textContent = tag;
  chipRow.appendChild(chip);
});

const copyContainer = document.getElementById("detail-copy");
[
  app.appStoreDescription,
  ...app.paragraphs,
].forEach((paragraph) => {
  const p = document.createElement("p");
  p.textContent = paragraph;
  copyContainer.appendChild(p);
});

const featureList = document.getElementById("detail-features");
app.highlights.forEach((feature) => {
  const article = document.createElement("article");
  article.className = "detail-feature-card";
  article.innerHTML = `
    <div class="detail-feature-icon">+</div>
    <div>
      <h3>${feature.title}</h3>
      <p>${feature.description}</p>
    </div>
  `;
  featureList.appendChild(article);
});
