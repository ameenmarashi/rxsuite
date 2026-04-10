const apps = [
  {
    name: "Cleaner Rx",
    url: "https://apps.apple.com/us/app/cleaner-rx/id6760282868",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d0/31/59/d03159dd-46f0-ba4f-31d3-4f0e8203bdf4/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg",
    kicker: "Storage cleanup",
    description:
      "Review large photos, videos, screenshots, duplicate groups, and selected files with explicit user-confirmed cleanup flows.",
    tags: ["iPhone", "iPad", "Mac", "$0.99"],
    price: "One-time price: $0.99",
  },
  {
    name: "Cyber Rx",
    url: "https://apps.apple.com/us/app/cyber-rx/id6761430318",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/95/79/2a/95792a7c-5703-c6e6-f6a1-c1ac6fd76cbc/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    kicker: "Privacy diagnostics",
    description:
      "Reveal which external servers and services apps contact in the background, grouped into trackers, analytics, and essential traffic.",
    tags: ["iPhone", "iPad", "Free", "Local-first"],
    price: "Free with lifetime upgrade option",
  },
  {
    name: "Connectivty Rx",
    url: "https://apps.apple.com/us/app/connectivty-rx/id6761007058",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/3f/45/1e/3f451e77-11c0-a024-ff48-a61f24588ac3/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg",
    kicker: "Internet diagnostics",
    description:
      "Diagnose weak throughput, latency, packet loss, and upstream outages with clear explanations for browsing, calls, streaming, and gaming.",
    tags: ["iPhone", "iPad", "Free", "PDF reports"],
    price: "Free with pro diagnostics features",
  },
];

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

function renderApps() {
  apps.forEach((app) => {
    const fragment = cardTemplate.content.cloneNode(true);
    const icon = fragment.querySelector(".app-icon");
    const kicker = fragment.querySelector(".card-kicker");
    const title = fragment.querySelector("h3");
    const description = fragment.querySelector(".family-description");
    const tagRow = fragment.querySelector(".tag-row");
    const price = fragment.querySelector(".price-note");
    const button = fragment.querySelector(".card-button");

    icon.src = app.icon;
    icon.alt = `${app.name} icon`;
    kicker.textContent = app.kicker;
    title.textContent = app.name;
    description.textContent = app.description;
    price.textContent = app.price;
    button.href = app.url;
    button.textContent = `Download ${app.name}`;

    app.tags.forEach((tag) => {
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
