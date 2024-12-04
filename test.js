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
    ],
    mobile: [
        {
            id: "protective-measures",
            x: 359, y: 180,
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
            x: 359, y: 445,
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
            x: 359, y: 990,
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
            x: 134, y: 445,
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
            x: 134, y: 718,
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
            x: 585, y: 180,
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
            x: 585, y: 445,
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
            x: 585, y: 718,
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
            x: 359, y: 718,
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
            x: 134, y: 718,
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
  };


  const materials = {
    demo: {
      'Standard Demo - $1000': [
        { name: 'Waste Removal Fee', cost: 300, description: 'Fee for removal and proper disposal of all debris generated from the demo.' },
        { name: 'Protective Measures', cost: 200, description: 'Protective materials used during demolition to ensure no damage to the rest of the house.' },
      ],
      'Heavy Demo - $1500': [
        { name: 'Waste Removal Fee', cost: 350, description: 'Increased fee due to additional waste from heavy demolition.' },
        { name: 'Protective Measures', cost: 200, description: 'Protective materials used during demolition to ensure no damage to the rest of the house.' },
      ],
    },
    shower: {
      'Standard Tub Surround - $1000': [
        { name: 'Tub Surround Material', cost: 425, description: 'Includes all materials necessary for the tub surround installation.' },
      ],
      'Standard Tile Design - $2500': [
        { name: 'Tile Supplies', cost: 500, description: 'Tile supplies include cement board, screws, mortar, and grout. Tile is NOT included.' },
      ],
      'Custom Tile Design - $2750': [
        { name: 'Patterned Tiles', cost: 1200, description: 'Patterned tiles for a luxurious look. Does NOT include installation labor.' },
        { name: 'Tile Adhesive', cost: 150, description: 'Adhesive used for installing the tiles securely.' },
      ],
    },
    'shower-plumbing': {
      'Connect to Existing Plumbing': [
        { name: 'Reconnection Supplies', cost: 200, description: 'Includes supplies for connecting to existing plumbing.' },
      ],
      'Update Plumbing - 800': [
        { name: 'Plumbing Supplies', cost: 450, description: 'Includes new drains, water lines, and shower valve kit.' },
      ],
    },
    tub: {
      'Standard Tub - $1000': [
        { name: 'Standard Tub', cost: 450, description: 'A standard tub between the sizes of 28-32 inches.' },
      ],
      'Shower Base - 1000': [
        { name: 'Standard Shower Pan', cost: 450, description: 'A standard shower pan between the sizes of 28-32 inches.' },
      ],
      'Tile Base with Step - $2500': [
        { name: 'Tile Base Kit', cost: 950, description: 'Tile base with a step comes with a kit 5x7 max size. It comes with kit, waterproofing, mortar, grout, spacers, etc. Tile is NOT included.' },
      ],
      'Flush Tile Base - $3500': [
        { name: 'Flush Tile Base Kit', cost: 1100, description: 'Flush Tile bases are for safety and luxury finishes. Materials included: lumber, plywood, shower kit, waterproofing, mortar, grout, spacers, etc. Tile is NOT included.' },
      ],
    },
    flooring: {
      'Luxury Vinyl Plank Floor - $750': [
        { name: 'Luxury Vinyl Plank', cost: 750, description: 'Includes all materials required for luxury vinyl plank installation.' },
      ],
      'Tile Floor - $2000': [
        { name: 'Tile Floor Supplies', cost: 200, description: 'Includes cement boards, screws, mortar, grout, leveling clips, and anything else needed to install tile. Tile is NOT included.' },
      ],
      'Tile Floor with Design - $2250': [
        { name: 'Tile Floor Supplies with Design', cost: 200, description: 'Includes cement boards, screws, mortar, grout, leveling clips, and anything else needed to install tile with a design. Tile is NOT included.' },
      ],
    },
    drywall: {
      'Light Skim Taping Coat - $500': [
        { name: 'Skim Coat Materials', cost: 250, description: 'Includes joint compound, tape, and tools for a light skim coat.' },
      ],
      'Full Skim Coat - $1000': [
        { name: 'Full Skim Coat Materials', cost: 500, description: 'Includes additional joint compound and tools for a full skim coat.' },
      ],
      'Hang and Tape Drywall - $1800': [
        { name: 'Drywall Sheets', cost: 800, description: 'Includes drywall sheets, screws, and tape for installation.' },
      ],
    },
    paint: {
      'Paint Walls and Ceiling - $400': [
        { name: 'Paint Supplies', cost: 200, description: 'Includes primer, paint, and basic tools for painting walls and ceilings.' },
      ],
    },
    'vanity-install': {
      'Single Vanity Install - $425': [
        { name: 'Vanity Installation Supplies', cost: 200, description: 'Includes plumbing connections, sealant, and fasteners.' },
      ],
    },
    'toilet-removal': {
      'Toilet Removal and Install - $250': [
        { name: 'Toilet Installation Supplies', cost: 100, description: 'Includes wax ring, bolts, and sealant for installation.' },
      ],
    },
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
    event.preventDefault(); // Evita el envío de formularios

    const cartItems = document.getElementById('cart-items');
    const totalBudgetElement = document.getElementById('total-budget');

    // Añade el ítem seleccionado como parte de Labor Costs
    const laborCostHeader = document.getElementById('labor-cost-header');
    if (!laborCostHeader) {
        const laborHeader = document.createElement('li');
        laborHeader.id = 'labor-cost-header';
        laborHeader.textContent = 'Labor Costs';
        laborHeader.style.fontWeight = 'bold';
        cartItems.appendChild(laborHeader);
    }
    const listItem = document.createElement('li');
    listItem.textContent = `${item}`;
    cartItems.appendChild(listItem);

    // Actualiza el presupuesto total
    const currentTotal = parseInt(totalBudgetElement.textContent) || 0;
    const newTotal = currentTotal + price;
    totalBudgetElement.textContent = newTotal;

    // Cierra el pop-up actual antes de continuar
    const popup = document.getElementById('popup');
    popup.classList.remove('show');
    setTimeout(() => {
        popup.style.display = 'none';

        // Añade materiales asociados
        const nodeId = nodes[currentNodeIndex].id; // Nodo actual
        const materialsForNode = materials[nodeId] ? materials[nodeId][item] : [];

        if (materialsForNode && materialsForNode.length > 0) {
            // Muestra el pop-up de materiales
            showMaterialsPopup(materialsForNode);
        } else {
            // Pasa al siguiente nodo directamente si no hay materiales
            nextNode();
        }
    }, 500); // Espera antes de mostrar el pop-up de materiales
}

function showMaterialsPopup(materials) {
    const materialsList = document.getElementById('materials-list');
    materialsList.innerHTML = ''; // Limpia materiales previos

    // Añade los materiales al carrito bajo "Materials Added"
    const cartItems = document.getElementById('cart-items');
    const materialsHeader = document.getElementById('materials-cost-header');
    if (!materialsHeader) {
        const materialsCostHeader = document.createElement('li');
        materialsCostHeader.id = 'materials-cost-header';
        materialsCostHeader.textContent = 'Materials Added';
        materialsCostHeader.style.fontWeight = 'bold';
        cartItems.appendChild(materialsCostHeader);
    }

    materials.forEach(material => {
        const listItem = document.createElement('li');
        listItem.textContent = `${material.name}: $${material.cost}`;
        cartItems.appendChild(listItem);

        // Actualiza el total del presupuesto
        const totalBudgetElement = document.getElementById('total-budget');
        const currentTotal = parseInt(totalBudgetElement.textContent) || 0;
        const newTotal = currentTotal + material.cost;
        totalBudgetElement.textContent = newTotal;

        // Añade material al pop-up de materiales
        const popupListItem = document.createElement('li');
        popupListItem.textContent = `${material.name} - $${material.cost}`;
        materialsList.appendChild(popupListItem);
    });

    const materialsPopup = document.getElementById('materials-popup');
    materialsPopup.style.display = 'block';
    setTimeout(() => {
        materialsPopup.classList.add('show');
    }, 10);
}

function closeMaterialsPopup() {
    const materialsPopup = document.getElementById('materials-popup');
    materialsPopup.classList.remove('show');
    setTimeout(() => {
        materialsPopup.style.display = 'none';
        nextNode(); // Pasa al siguiente nodo después de cerrar el pop-up
    }, 500);
}
