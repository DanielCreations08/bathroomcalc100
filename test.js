const nodesConfig = {
    desktop: [
        {
            id: "protective-measures",
            x: 780, y: 180,
            title: "Question 1 of 10 - Choose an Option",
            options: [
                { 
                    description: "We will set up plastic containments to limit the dust transfer into the rest of the home. Along with putting cardboard, tarps, carpet protection, and plastic over items as needed.",
                    label: "Basic Protective Measures - $200", 
                    price: 200 
                },
                { 
                    description: "In addition to the protective measures, we will bring an air scrubber to capture dust particles in the air, providing a cleaner work environment.",
                    label: "Additional Protective Measures - $300", 
                    price: 300 
                }
            ]
        },
        {
            id: "demo",
            x: 780, y: 470,
            title: "Question 2 of 10 - Choose an Option",
            options: [
                { 
                    description: "This includes the removal of standard fixtures and demolition of the shower, vanity, and flooring.",
                    label: "Standard Demo - $1000", 
                    price: 1000 
                },
                { 
                    description: "Heavy demolition includes the removal of drywall and/or tile flooring, beyond what is covered in our standard demo package.",
                    label: "Heavy Demo - $1500", 
                    price: 1500 
                }
            ]
        },
        {
            id: "shower",
            x: 280, y: 310,
            title: "Question 3 of 10 - Choose an Option",
            options: [
                { 
                    description: "Prefabricated tub surround installation for a quick, modern upgrade.",
                    label: "Standard Tub Surround - $1000", 
                    price: 1000 
                },
                { 
                    description: "Standard tile installation, including waterproofing and grout, for a refined look.",
                    label: "Standard Tile Design - $2500", 
                    price: 2500 
                },
                { 
                    description: "Installation of printed patterned or uniquely shaped tiles, including grout and waterproofing, for a distinct, luxurious finish.",
                    label: "Custom Tile Design - $2750", 
                    price: 2750 
                }
            ]
        },
        {
            id: "shower-plumbing",
            x: 280, y: 775,
            title: "Question 4 of 10 - Choose an Option",
            options: [
                { 
                    description: "Reconnect to existing plumbing for a straightforward setup.",
                    label: "Connect to Existing Plumbing - $500", 
                    price: 500 
                },
                { 
                    description: "Install new water lines and drains for an upgraded plumbing system.",
                    label: "Update Plumbing - 800", 
                    price: 800
                }
            ]
        },
        {
            id: "tub",
            x: 280, y: 1072,
            title: "Question 5 of 10 - Choose an Option",
            options: [
                { 
                    description: "Standard bathtub installation with basic plumbing.",
                    label: "Standard Tub - $1000", 
                    price: 1000 
                },
                { 
                    description: "Installation of a prefabricated shower base.",
                    label: "Shower Base - 1000", 
                    price: 1000
                },
                { 
                    description: "Custom tile base with a step for enhanced aesthetics and easier access.",
                    label: "Tile Base with Step - $2500", 
                    price: 2500 
                },
                { 
                    description: "Flush tile base for a sleek, modern look.",
                    label: "Flush Tile Base - $3500", 
                    price: 3500 
                }
            ]
        },
        {
            id: "flooring",
            x: 1273, y: 180,
            title: "Question 6 of 10 - Choose an Option",
            options: [
                { 
                    description: "Install plank flooring under 64 sq ft. Larger bathrooms will cost more.",
                    label: "Luxury Vinyl Plank Floor - $750", 
                    price: 750 
                },
                { 
                    description: "Installation of standard tile flooring for your bathroom.",
                    label: "Tile Floor - $2000", 
                    price: 2000
                },
                { 
                    description: "Custom tile flooring with a unique design to enhance bathroom aesthetics.",
                    label: "Tile Floor with Design - $2250", 
                    price: 2250 
                },
                { 
                    description: "No changes will be made to the existing floor.",
                    label: "Existing Floor (No Change) - $0", 
                    price: 0 
                }
            ]
        },
        {
            id: "drywall",
            x: 1273, y: 470,
            title: "Question 7 of 10 - Choose an Option",
            options: [
                { 
                    description: "Light Spackling",
                    label: "Spackle Only - $0", 
                    price: 0 
                },
                { 
                    description: "Light skim coat over drywall for a refreshed look.",
                    label: "Light Skim Taping Coat - $500", 
                    price: 500
                },
                { 
                    description: "Full skim coat for a smoother wall finish.",
                    label: "Full Skim Coat - $1000", 
                    price: 1000 
                },
                {               
                    description: "Includes hanging new drywall and taping seams for a complete finish.",
                    label: "Hang and Tape Drywall - $1800", 
                    price: 1800 
                }
            ]
        },
        {
            id: "paint",
            x: 1273, y: 776,
            title: "Question 8 of 10 - Choose an Option",
            options: [
                { 
                    description: "Standard paint finish for walls and ceiling.",
                    label: "Paint Walls and Ceiling - $400", 
                    price: 400
                },
                { 
                    description: "Contractor will not paint",
                    label: "No Paint - $0", 
                    price: 0
                }
            ]
        },
        {
            id: "vanity-install",
            x: 780, y: 775,
            title: "Question 9 of 10 - Choose an Option",
            options: [
                { 
                    description: "Installation of a single vanity, including faucet and plumbing connections.",
                    label: "Single Vanity Install - $425", 
                    price: 425
                }
            ]
        },
        {
            id: "toilet-removal",
            x: 1273, y: 1072,
            title: "Question 10 of 10 - Choose an Option",
            options: [
                { 
                    description: "Removal of the old toilet and installation of a new toilet.",
                    label: "Toilet Removal and Install - $250", 
                    price: 250
                }
            ]
        },

    ],
    tablet: [
      { id: "protective-measures", x: 50, y: 150, title: "Question 1 of 10 - Choose an Option", description: "Choose the level of protection to limit dust transfer." },
      { id: "demo", x: 200, y: 300, title: "Question 2 of 10 - Choose an Option", description: "Select the type of demolition required for your project." },
      { id: "shower", x: 400, y: 450, title: "Question 3 of 10 - Choose an Option", description: "Decide on the type of shower for your bathroom." },
      { id: "shower-plumbing", x: 600, y: 600, title: "Question 4 of 10 - Choose an Option", description: "Choose the plumbing work required for the shower." },
      { id: "tub", x: 100, y: 750, title: "Question 5 of 10 - Choose an Option", description: "Select the type of bathtub you want." },
      { id: "flooring", x: 300, y: 900, title: "Question 6 of 10 - Choose an Option", description: "Pick the flooring material for your bathroom." },
      { id: "drywall", x: 500, y: 1050, title: "Question 7 of 10 - Choose an Option", description: "Choose the drywall finish or replacement needed." },
      { id: "paint", x: 700, y: 1200, title: "Question 8 of 10 - Choose an Option", description: "Select the type of painting for walls and ceiling." },
      { id: "vanity-install", x: 780, y: 775, title: "Question 9 of 10 - Choose an Option", description: "Decide on the installation of your vanity." },
      { id: "toilet-removal", x: 1273, y: 1072, title: "Question 10 of 10 - Choose an Option", description: "Select the option for toilet removal and replacement." }
    ],
    mobile: [
            {
            id: "protective-measures",
            x: 780, y: 180,
            title: "Question 1 of 10 - Choose an Option",
            options: [
                { 
                    description: "We will set up plastic containments to limit the dust transfer into the rest of the home. Along with putting cardboard, tarps, carpet protection, and plastic over items as needed.",
                    label: "Basic Protective Measures - $200", 
                    price: 200 
                },
                { 
                    description: "In addition to the protective measures, we will bring an air scrubber to capture dust particles in the air, providing a cleaner work environment.",
                    label: "Additional Protective Measures - $300", 
                    price: 300 
                }
            ]
        },
      { id: "demo", x: 200, y: 200, title: "Question 2 of 10 - Choose an Option", description: "Select the type of demolition required for your project." },
      { id: "shower", x: 20, y: 300, title: "Question 3 of 10 - Choose an Option", description: "Decide on the type of shower for your bathroom." },
      { id: "shower-plumbing", x: 20, y: 400, title: "Question 4 of 10 - Choose an Option", description: "Choose the plumbing work required for the shower." },
      { id: "tub", x: 20, y: 500, title: "Question 5 of 10 - Choose an Option", description: "Select the type of bathtub you want." },
      { id: "flooring", x: 20, y: 600, title: "Question 6 of 10 - Choose an Option", description: "Pick the flooring material for your bathroom." },
      { id: "drywall", x: 20, y: 700, title: "Question 7 of 10 - Choose an Option", description: "Choose the drywall finish or replacement needed." },
      { id: "paint", x: 20, y: 800, title: "Question 8 of 10 - Choose an Option", description: "Select the type of painting for walls and ceiling." },
      { id: "vanity-install", x: 780, y: 775, title: "Question 9 of 10 - Choose an Option", description: "Decide on the installation of your vanity." },
      { id: "toilet-removal", x: 1273, y: 1072, title: "Question 10 of 10 - Choose an Option", description: "Select the option for toilet removal and replacement." }
    ],
  };

  let currentNodeIndex = 0;
  
  function detectNodes() {
    if (window.innerWidth > 1024) {
      nodes = nodesConfig.desktop;
    } else if (window.innerWidth > 768) {
      nodes = nodesConfig.tablet;
    } else {
      nodes = nodesConfig.mobile;
    }
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
    document.getElementById("welcome-popup").style.display = "none";
    focusNode(0);  // Empieza enfocando el primer nodo
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
  }, 1350);
}

  
  function showPopup(index) {
    const node = nodes[index];
    const popup = document.getElementById("popup");
    const title = document.getElementById("popup-title");
    const form = document.getElementById("node-form");

    title.textContent = node.title;
    form.innerHTML = ''; // Limpiar contenido anterior
  

    node.options.forEach(option => {
        const optionContainer = document.createElement("div");
        optionContainer.className = "option-container";

        const optionDesc = document.createElement("p");
        optionDesc.className = "option-description";
        optionDesc.textContent = option.description;

        const button = document.createElement("button");
        button.className = "option-button";
        button.textContent = option.label;
        button.onclick = (event) => addToCart(option.label, option.price, event);

        optionContainer.appendChild(optionDesc);
        optionContainer.appendChild(button);
        form.appendChild(optionContainer);
    });

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
            currentNodeIndex = 0; // Restablece al primer nodo o maneja el final de la presentación como prefieras
            alert("You've completed the presentation!");
            focusNode(currentNodeIndex); // Opcional: Vuelve al inicio o maneja el final como prefieras
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

  function addToCart(item, price, event) {
    event.preventDefault(); // Previene que el formulario se envíe y recargue la página

    const cartItems = document.getElementById('cart-items');
    const totalBudgetElement = document.getElementById('total-budget');

    // Añade el ítem al carrito
    const listItem = document.createElement('li');
    listItem.textContent = `${item} - $${price}`;
    cartItems.appendChild(listItem);

    // Actualiza el presupuesto total
    const currentTotal = parseInt(totalBudgetElement.textContent) || 0;
    const newTotal = currentTotal + price;
    totalBudgetElement.textContent = newTotal;

    // Llama a la función para moverse al siguiente nodo
    nextNode();
}