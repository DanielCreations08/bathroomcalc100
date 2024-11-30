const nodesConfig = {
  desktop: [
    { id: "protective-measures", x: 780, y: 180, title: "Protective Measures", description: "Choose the level of protection to limit dust transfer." },
    { id: "demo", x: 780, y: 470, title: "Demo Options", description: "Select the type of demolition required for your project." },
    { id: "shower", x: 280, y: 310, title: "Shower Options", description: "Decide on the type of shower for your bathroom." },
    { id: "shower-plumbing", x: 280, y: 775, title: "Shower Plumbing", description: "Choose the plumbing work required for the shower." },
    { id: "tub", x: 280, y: 1072, title: "Tub Options", description: "Select the type of bathtub you want." },
    { id: "flooring", x: 1273, y: 180, title: "Flooring Options", description: "Pick the flooring material for your bathroom." },
    { id: "drywall", x: 1273, y: 470, title: "Drywall Options", description: "Choose the drywall finish or replacement needed." },
    { id: "paint", x: 1273, y: 776, title: "Paint Options", description: "Select the type of painting for walls and ceiling." },
    { id: "vanity-install", x: 780, y: 775, title: "Vanity Install", description: "Decide on the installation of your vanity." },
    { id: "toilet-removal", x: 1273, y: 1072, title: "Toilet Removal", description: "Select the option for toilet removal and replacement." }
  ], 
  tablet: [
    { id: "protective-measures", x: 50, y: 150, title: "Protective Measures", description: "Choose the level of protection to limit dust transfer." },
    { id: "demo", x: 200, y: 300, title: "Demo Options", description: "Select the type of demolition required for your project." },
    { id: "shower", x: 400, y: 450, title: "Shower Options", description: "Decide on the type of shower for your bathroom." },
    { id: "shower-plumbing", x: 600, y: 600, title: "Shower Plumbing", description: "Choose the plumbing work required for the shower." },
    { id: "tub", x: 100, y: 750, title: "Tub Options", description: "Select the type of bathtub you want." },
    { id: "flooring", x: 300, y: 900, title: "Flooring Options", description: "Pick the flooring material for your bathroom." },
    { id: "drywall", x: 500, y: 1050, title: "Drywall Options", description: "Choose the drywall finish or replacement needed." },
    { id: "paint", x: 700, y: 1200, title: "Paint Options", description: "Select the type of painting for walls and ceiling." },
    { id: "vanity-toilet", x: 300, y: 1350, title: "Vanity and Toilet", description: "Decide on vanity and toilet installation." },
  ],
  mobile: [
    { id: "protective-measures", x: 500, y: 200, title: "Protective Measures", description: "Choose the level of protection to limit dust transfer." },
    { id: "demo", x: 200, y: 200, title: "Demo Options", description: "Select the type of demolition required for your project." },
    { id: "shower", x: 20, y: 300, title: "Shower Options", description: "Decide on the type of shower for your bathroom." },
    { id: "shower-plumbing", x: 20, y: 400, title: "Shower Plumbing", description: "Choose the plumbing work required for the shower." },
    { id: "tub", x: 20, y: 500, title: "Tub Options", description: "Select the type of bathtub you want." },
    { id: "flooring", x: 20, y: 600, title: "Flooring Options", description: "Pick the flooring material for your bathroom." },
    { id: "drywall", x: 20, y: 700, title: "Drywall Options", description: "Choose the drywall finish or replacement needed." },
    { id: "paint", x: 20, y: 800, title: "Paint Options", description: "Select the type of painting for walls and ceiling." },
    { id: "vanity-toilet", x: 20, y: 900, title: "Vanity and Toilet", description: "Decide on vanity and toilet installation." },
  ],
};

let nodes = [];
let currentNodeIndex = 0;

function detectNodes() {
  if (window.innerWidth > 1024) {
    nodes = nodesConfig.desktop;
  } else if (window.innerWidth > 768) {
    nodes = nodesConfig.tablet;
  } else {
    nodes = nodesConfig.mobile;
  }
  positionNodes();
}

function positionNodes() {
  const zoomContainer = document.getElementById("zoom-container");
  nodes.forEach(({ id, x, y }) => {
    const nodeElement = document.getElementById(id);
    nodeElement.style.left = `${x}px`;
    nodeElement.style.top = `${y}px`;
  });
}

function startPresentation() {
  const welcomePopup = document.getElementById("welcome-popup");
  welcomePopup.classList.remove("show");
  setTimeout(() => {
    welcomePopup.style.display = "none";
    focusNode(0);
  }, 500);
}

function focusNode(index) {
  const node = nodes[index];
  const zoomContainer = document.getElementById("zoom-container");
  const scale = 1.7;
  const translateX = -node.x * scale + window.innerWidth / 2 - 120;
  const translateY = -node.y * scale + window.innerHeight / 2 - 50;

  zoomContainer.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;

  setTimeout(() => {
    showPopup(index);
  }, 1000);
}

function showPopup(index) {
  const popup = document.getElementById("popup");
  const title = document.getElementById("popup-title");
  const message = document.getElementById("popup-message");

  const node = nodes[index];
  title.textContent = node.title;
  message.textContent = node.description;

  popup.style.display = "block";
  setTimeout(() => {
    popup.classList.add("show");
  }, 10);
}

function nextNode() {
  const popup = document.getElementById("popup");
  popup.classList.remove("show");
  setTimeout(() => {
    popup.style.display = "none";
    currentNodeIndex++;
    if (currentNodeIndex < nodes.length) {
      focusNode(currentNodeIndex);
    } else {
      alert("You've completed the presentation!");
    }
  }, 500);
}

function goBack() {
  if (currentNodeIndex > 0) {
    currentNodeIndex--;
    const popup = document.getElementById("popup");
    popup.classList.remove("show");
    setTimeout(() => {
      popup.style.display = "none";
      focusNode(currentNodeIndex);
    }, 500);
  } else {
    alert("You are already at the first node!");
  }
}

window.addEventListener("resize", detectNodes);
document.getElementById("welcome-popup").classList.add("show");
detectNodes();