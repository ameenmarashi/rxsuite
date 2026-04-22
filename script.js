const greetingNode = document.getElementById("welcome-line");
const familyGrid = document.getElementById("family-grid");
const cardTemplate = document.getElementById("app-card-template");

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

function renderGreeting() {
  greetingNode.textContent = `${getGreeting()} 👋`;
}

function openAppDetail(slug) {
  window.location.href = `./app.html?app=${slug}`;
}

function renderApps() {
  RX_APPS.forEach((app) => {
    const fragment = cardTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".family-card");
    const icon = fragment.querySelector(".app-icon");
    const kicker = fragment.querySelector(".card-kicker");
    const title = fragment.querySelector("h3");
    const description = fragment.querySelector(".family-description");
    const featureList = fragment.querySelector(".feature-list");
    const platformLine = fragment.querySelector(".platform-line");
    const tagRow = fragment.querySelector(".tag-row");
    const price = fragment.querySelector(".price-note");
    const button = fragment.querySelector(".card-button");

    icon.src = app.icon;
    icon.alt = `${app.name} icon`;
    kicker.textContent = app.kicker;
    title.textContent = app.name;
    description.textContent = app.shortDescription;
    platformLine.textContent = app.platforms;
    price.textContent = app.price;
    button.href = `./app.html?app=${app.slug}`;
    button.textContent = `Explore ${app.name}`;

    card.tabIndex = 0;
    card.setAttribute("role", "link");
    card.setAttribute("aria-label", `Open details for ${app.name}`);
    card.dataset.accent = app.accent;

    card.addEventListener("click", () => openAppDetail(app.slug));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openAppDetail(app.slug);
      }
    });

    button.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    app.cardFeatures.forEach((feature) => {
      const item = document.createElement("p");
      item.className = "feature-item";
      item.textContent = `\u2713 ${feature}`;
      featureList.appendChild(item);
    });

    getDisplayTags(app).forEach((tag) => {
      const chip = document.createElement("span");
      chip.className = "tag";
      chip.textContent = tag;
      tagRow.appendChild(chip);
    });

    familyGrid.appendChild(fragment);
  });
}

renderGreeting();
renderApps();
