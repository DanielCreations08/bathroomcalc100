// Updated script.js with fixed errors and improvements

// Assign global functions for accessibility
window.startQuestion = startQuestion;
window.hidePopup = hidePopup;
window.closeMaterialsPopup = closeMaterialsPopup;
window.goBack = goBack;
window.toggleChatbot = toggleChatbot;
window.closeWelcomePopup = closeWelcomePopup;
window.closeLeadForm = closeLeadForm;
window.submitLeadForm = submitLeadForm;

// Ensure welcome popup is displayed when the page loads
document.addEventListener('DOMContentLoaded', () => {
  const welcomePopup = document.getElementById('welcome-popup');
  const overlay = document.getElementById('overlay');

  if (welcomePopup && overlay) {
    welcomePopup.style.display = 'block';
    overlay.style.display = 'block';
  }
});

// Cart and section definitions
const cart = {
  'protective-measures': null,
  demo: null,
  shower: null,
  'shower-plumbing': null,
  tub: null,
  flooring: null,
  drywall: null,
  paint: null,
  vanity: null,
  toilet: null,
};

const sections = [
  'protective-measures',
  'demo',
  'shower',
  'shower-plumbing',
  'tub',
  'flooring',
  'drywall',
  'paint',
  'vanity',
  'toilet',
  
];
let currentSectionIndex = 0;

const options = {
  'protective-measures': [
    { 
      name: 'Basic Protective Measures', 
      cost: 200,
      description: 'We will set up plastic containments to limit the dust transfer into the rest of the home. Along with putting cardboard, tarps, carpet protection, and plastic over items as needed.'
    },
    { 
      name: 'Additional Protective Measures', 
      cost: 300,
      description: "In addition to the protective measures, we will bring an air scrubber to capture dust particles in the air, providing a cleaner work environment."
    }
  ],
  demo: [
    { name: 'Standard Demo', cost: 1000, description: 'This includes the removal of standard fixtures and demolition of the shower, vanity, and flooring.' },
    { name: 'Heavy Demo', cost: 1500, description: 'Heavy demolition includes the removal of drywall and/or tile flooring, beyond what is covered in our standard demo package. This option is ideal for more extensive remodels that require additional tear-down before moving forward with new installations.' },
  ],
  shower: [
    { name: 'Standard Tub Surround', cost: 1000, description: 'Prefabricated tub surround installation for a quick, modern upgrade.' },
    { name: 'Standard Tile Design', cost: 2500, description: 'Standard tile installation, including waterproofing and grout, for a refined look.' },
    { name: 'Custom Tile Design', cost: 2750, description: 'Installation of printed patterned or uniquely shaped tiles (e.g., octagon tiles), including grout and waterproofing, for a distinct, luxurious finish.' },
  ],
  'shower-plumbing': [
    { name: 'Connect to Existing Plumbing', cost: 500, description: 'Reconnect to existing plumbing for a straightforward setup.' },
    { name: 'Update Plumbing', cost: 800, description: 'Install new water lines and drains for an upgraded plumbing system.' },
  ],
  tub: [
    { name: 'Standard Tub', cost: 1000, description: 'Standard bathtub installation with basic plumbing.' },
    { name: 'Shower Base', cost: 1000, description: 'Installation of a prefabricated shower base.' },
    { name: 'Tile Base with Step', cost: 2500, description: 'Custom tile base with a step for enhanced aesthetics and easier access.' },
    { name: 'Flush Tile Base', cost: 3500, description: 'Flush tile base for a sleek, modern look.' },
  ],
  flooring: [
    { name: 'Luxury Vinyl Plank Floor', cost: 750, description: 'Install plank flooring under 64 sq ft. Larger bathrooms will cost more.' },
    { name: 'Tile Floor', cost: 2000, description: 'Installation of standard tile flooring for your bathroom.' },
    { name: 'Tile Floor with Design', cost: 2250, description: 'Custom tile flooring with a unique design to enhance bathroom aesthetics.' },
    { name: 'Existing Floor (No Change)', cost: 0, description: 'No changes will be made to the existing floor.' },
  ],
  drywall: [
    { name: 'Spackle Only', cost: 0, description: 'Light Spackling' },
    { name: 'Light Skim Taping Coat', cost: 500, description: 'Light skim coat over drywall for a refreshed look.' },
    { name: 'Full Skim Coat', cost: 1000, description: 'Full skim coat for a smoother wall finish.' },
    { name: 'Hang and Tape Drywall', cost: 1800, description: 'Includes hanging new drywall and taping seams for a complete finish.' },
  ],
  paint: [
    { name: 'Paint Walls and Ceiling', cost: 400, description: 'Standard paint finish for walls and ceiling.' },
    { name: 'No Paint', cost: 0, description: 'Contractor will not paint' },
  ],
  vanity: [
    { name: 'Single Vanity Install', cost: 425, description: 'Installation of a single vanity, including faucet and plumbing connections.' },
  ],
  toilet: [
    { name: 'Toilet Removal and Install', cost: 250, description: 'Removal of the old toilet and installation of a new toilet.' },
  ],
};

const materials = {
  demo: {
    'Standard Demo': [
      { name: 'Waste Removal Fee', cost: 300, description: 'Fee for removal and proper disposal of all debris generated from the demo.' },
      { name: 'Protective Measures', cost: 200, description: 'Protective materials used during demolition to ensure no damage to the rest of the house.' },
    ],
    'Heavy Demo': [
      { name: 'Waste Removal Fee', cost: 350, description: 'Increased fee due to additional waste from heavy demolition.' },
      { name: 'Protective Measures', cost: 200, description: 'Protective materials used during demolition to ensure no damage to the rest of the house.' },
    ],
  },
  shower: {
    'Standard Tub Surround': [
      { name: 'Tub Surround Material', cost: 425, description: 'Includes all materials necessary for the tub surround installation.' },
    ],
    'Standard Tile Design': [
      { name: 'Tile Supplies', cost: 500, description: 'Tile supplies include cement board, screws, mortar, and grout. Tile is NOT included.' },
    ],
    'Custom Tile Design': [
      { name: 'Patterned Tiles', cost: 1200, description: 'Patterned tiles for a luxurious look. Does NOT include installation labor.' },
      { name: 'Tile Adhesive', cost: 150, description: 'Adhesive used for installing the tiles securely.' },
    ],
  },
  'shower-plumbing': {
    'Update Plumbing': [
      { name: 'Plumbing Supplies', cost: 450, description: 'Includes new drains, water lines, and shower valve kit.' },
    ],
  },
  tub: {
    'Standard Tub': [
      { name: 'Standard Tub', cost: 450, description: 'A standard tub between the sizes of 28-32 inches.' },
    ],
    'Shower Base': [
      { name: 'Standard Shower Pan', cost: 450, description: 'A standard shower pan between the sizes of 28-32 inches.' },
    ],
    'Tile Base with Step': [
      { name: 'Tile Base Kit', cost: 950, description: 'Tile base with a step comes with a kit 5x7 max size. It comes with kit, waterproofing, mortar, grout, spacers, etc. Tile is NOT included.' },
    ],
    'Flush Tile Base': [
      { name: 'Flush Tile Base Kit', cost: 1100, description: 'Flush Tile bases are for safety and luxury finishes. Materials included: lumber, plywood, shower kit, waterproofing, mortar, grout, spacers, etc. Tile is NOT included.' },
    ],
  },
  flooring: {
    'Tile Floor': [
      { name: 'Tile Floor Supplies', cost: 200, description: 'Includes cement boards, screws, mortar, grout, leveling clips, and anything else needed to install tile. Tile is NOT included.' },
    ],
    'Tile Floor with Design': [
      { name: 'Tile Floor Supplies with Design', cost: 200, description: 'Includes cement boards, screws, mortar, grout, leveling clips, and anything else needed to install tile with a design. Tile is NOT included.' },
    ],
  },
};

// Function to close the welcome popup
function closeWelcomePopup() {
  const welcomePopup = document.getElementById('welcome-popup');
  const overlay = document.getElementById('overlay');

  if (welcomePopup) welcomePopup.style.display = 'none';
  if (overlay) overlay.style.display = 'none';

  // Start with the first question
  startQuestion(sections[0]);
}

// Function to start the question process
function startQuestion(section) {
  hidePopup();
  const progressText = document.getElementById('progress-text');
  if (progressText) {
    progressText.textContent = updateProgress();
  }
  zoomToSection(section, () => {
    showPopup(section);
  });
}

// Function to hide any existing popup
function hidePopup() {
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');

  if (popup) popup.style.display = 'none';
  if (overlay) overlay.style.display = 'none';
}

// Function to update the progress text
function updateProgress() {
  return `Question ${currentSectionIndex + 1} of ${sections.length}`;
}

// Function to zoom into a section
function zoomToSection(section, callback) {
  const zoomContainer = document.getElementById('zoom-container');
  const area = document.querySelector(`.${section}`);

  if (!area) {
    console.error(`Section ${section} not found.`);
    if (callback) callback(); // Continue even if section is not found
    return;
  }

  const zoomContainerRect = zoomContainer.getBoundingClientRect();
  const areaRect = area.getBoundingClientRect();

  const zoomContainerCenterX = zoomContainerRect.left + zoomContainerRect.width / 2;
  const zoomContainerCenterY = zoomContainerRect.top + zoomContainerRect.height / 2;
  const areaCenterX = areaRect.left + areaRect.width / 2;
  const areaCenterY = areaRect.top + areaRect.height / 2;

  const translateX = (zoomContainerCenterX - areaCenterX);
  const translateY = (zoomContainerCenterY - areaCenterY);
  const scale = 2.5;

  zoomContainer.style.transform = `scale(${scale}) translate(${translateX / scale}px, ${translateY / scale}px)`;
  zoomContainer.style.transition = 'transform 1.5s ease-in-out';

  zoomContainer.addEventListener('transitionend', function handleTransitionEnd() {
    zoomContainer.removeEventListener('transitionend', handleTransitionEnd);
    if (callback) callback();
  });
}

// Other functions are left unchanged, they should be refactored similarly


// Function to show the question popup
function showPopup(section) {
  console.log(`Showing popup for section: ${section}`);
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');
  const popupTitle = document.getElementById('popup-title');
  const popupButtons = document.getElementById('popup-buttons');

  if (!popup || !popupTitle || !popupButtons) {
    console.error("One or more popup elements are missing.");
    return;
  }

  // Update popup title and buttons
  popupTitle.innerHTML = `<span id="progress-text">${updateProgress()}</span> - Choose an Option`;
  popupButtons.innerHTML = '';

  if (options[section]) {
    options[section].forEach((option) => {
      const container = document.createElement('div');
      container.className = 'option-container';

      const button = document.createElement('button');
      button.textContent = `${option.name} - $${option.cost}`;
      button.className = 'option-button';
      button.onclick = () => selectOption(section, option.name, option.cost);

      // Add description for each option if it exists
      if (option.description) {
        const description = document.createElement('p');
        description.textContent = option.description;
        description.className = 'option-description';
        container.appendChild(description);
      }

      container.appendChild(button);
      popupButtons.appendChild(container);
    });
  } else {
    console.error(`No options available for section: ${section}`);
  }

  popup.style.display = 'block';
  overlay.style.display = 'block';
}

// Function to handle selecting an option
function selectOption(section, name, cost) {
  console.log(`Selecting option for section: ${section}, Name: ${name}, Cost: ${cost}`);
  cart[section] = { name, cost, type: 'labor' };

  addMaterialsToCart(section, name);
  renderCart();
  hidePopup();

  // Proceed to the next section after showing the materials
  setTimeout(() => showMaterialsPopup(section), 500);
}

// Function to add materials to the cart
function addMaterialsToCart(section, name) {
  if (materials[section] && materials[section][name]) {
    materials[section][name].forEach((material) => {
      cart[`${section}-material-${material.name}`] = {
        name: material.name,
        cost: material.cost,
        type: 'material',
      };
    });
  }
}

// Function to show the materials popup
function showMaterialsPopup(section) {
  const materialsList = document.getElementById('materials-list');
  materialsList.innerHTML = '';

  if (materials[section]) {
    const selectedOption = cart[section]?.name;
    if (selectedOption && materials[section][selectedOption]) {
      materials[section][selectedOption].forEach((material) => {
        const listItem = document.createElement('div');
        listItem.innerHTML = `<strong>${material.name}: $${material.cost}</strong><br><span>${material.description || ''}</span>`;
        materialsList.appendChild(listItem);
      });
    }
  }

  document.getElementById('materials-popup').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

// Close the materials popup and proceed to the next question
function closeMaterialsPopup() {
  document.getElementById('materials-popup').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';

  currentSectionIndex++;
  if (currentSectionIndex < sections.length) {
    startQuestion(sections[currentSectionIndex]);
  } else {
    resetZoom();
    showLeadForm(); // Show the lead form after all questions are answered
  }
}

// Complete the remaining functions for cart, chatbot, lead form, etc.

// Function to render the cart
function renderCart() {
  console.log('Rendering cart...');
  const laborCartItems = document.getElementById('labor-cart-items');
  const materialCartItems = document.getElementById('material-cart-items');

  if (!laborCartItems || !materialCartItems) {
    console.error("Cart elements are missing. Ensure the HTML contains 'labor-cart-items' and 'material-cart-items' elements.");
    return;
  }

  laborCartItems.innerHTML = '';
  materialCartItems.innerHTML = '';

  let laborTotal = 0;
  let materialTotal = 0;

  Object.values(cart).forEach((item) => {
    if (item) {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name}: $${item.cost}`;

      if (item.type === 'labor') {
        laborTotal += item.cost;
        laborCartItems.appendChild(listItem);
      } else if (item.type === 'material') {
        materialTotal += item.cost;
        materialCartItems.appendChild(listItem);
      }
    }
  });

  document.getElementById('total').textContent = laborTotal + materialTotal;
  document.getElementById('submitBidButton').disabled = !Object.values(cart).every((item) => item !== null);
}

// Reset the zoom to the original state
function resetZoom() {
  const zoomContainer = document.getElementById('zoom-container');
  zoomContainer.style.transform = 'scale(1)';
  zoomContainer.style.transition = 'transform 1s ease-in-out';
}

// Go back to the previous question
function goBack() {
  if (currentSectionIndex > 0) {
    currentSectionIndex--;
    startQuestion(sections[currentSectionIndex]);
  }
}

// Toggle chatbot visibility
function toggleChatbot() {
  const chatbotContainer = document.getElementById('chatbot-container');
  if (chatbotContainer) {
    chatbotContainer.style.display = chatbotContainer.style.display === 'none' ? 'block' : 'none';
  }
}
window.toggleChatbot = toggleChatbot; // Ensure it's globally accessible


// Function to show the lead form popup
function showLeadForm() {
  const leadFormPopup = document.getElementById('lead-form-popup');
  const overlay = document.getElementById('overlay');

  if (leadFormPopup && overlay) {
    leadFormPopup.style.display = 'block';
    overlay.style.display = 'block';
  }
}

// Function to handle submission of the lead form
function submitLeadForm() {
  const leadName = document.getElementById('lead-name').value;
  const leadPhone = document.getElementById('lead-phone').value;
  const leadAddress = document.getElementById('lead-address').value;
  const leadQuestions = document.getElementById('lead-questions').value;

  if (leadName && leadPhone && leadAddress) {
    console.log("Lead Form Submitted:");
    console.log("Name:", leadName);
    console.log("Phone Number:", leadPhone);
    console.log("Address:", leadAddress);
    console.log("Other Questions/Comments:", leadQuestions);

    // Hide the form after submission
    closeLeadForm();

    // Thank the user and end the process
    alert('Thank you! We will reach out to you soon.');
  } else {
    alert('Please fill out all required fields.');
  }
}

// Function to close the lead form popup
function closeLeadForm() {
  const leadFormPopup = document.getElementById('lead-form-popup');
  const overlay = document.getElementById('overlay');

  if (leadFormPopup && overlay) {
    leadFormPopup.style.display = 'none';
    overlay.style.display = 'none';
  }
}
