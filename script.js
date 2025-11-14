// ==========================================
// CONSTANTS AND CONFIGURATION
// ==========================================

const CONFIG = {
  TOTAL_SCREENS: 13,
  INITIAL_SCREEN: 1,
  IMAGE_PATH: 'img/'
};

// ==========================================
// PET DATA
// ==========================================

const PETS_DATA = {
  // Perros
  Nube: {
    name: 'Nube',
    type: 'Perro',
    age: '4 años',
    note: 'Esterilizada',
    image: 'img/perro-nube.jpg',
    size: 'Tamaño mediano',
    health: 'Vacunas al día',
    compatible: 'Compatible con otros animales • Compatible con niños',
    history: 'Rescatada en carretera. Muy cariñosa y sociable. Ideal para hogar con patio.',
  },
  Manchas: {
    name: 'Manchas',
    type: 'Perro',
    age: '2 años',
    note: 'Vacunada',
    image: 'img/perro-manchas.jpg',
    size: 'Tamaño pequeño',
    health: 'Vacunas al día',
    compatible: 'Compatible con otros animales',
    history: 'Perrita muy juguetona y cariñosa. Ideal para familias.',
  },
  Roco: {
    name: 'Roco',
    type: 'Perro',
    age: '1 año',
    note: 'Cachorro',
    image: 'img/perro-roco.jpg',
    size: 'Tamaño pequeño',
    health: 'Vacunas al día',
    compatible: 'Compatible con niños',
    history: 'Cachorro muy activo y juguetón. Necesita espacio para correr.',
  },
  Luna: {
    name: 'Luna',
    type: 'Perro',
    age: '3 años',
    note: 'Tímida',
    image: 'img/perro-luna.jpg',
    size: 'Tamaño mediano',
    health: 'Vacunas al día',
    compatible: 'Compatible con otros animales',
    history: 'Perrita tímida pero muy cariñosa cuando gana confianza. Ideal para hogares tranquilos.',
  },
  Max: {
    name: 'Max',
    type: 'Perro',
    age: '3 años',
    note: 'Vacunado y esterilizado',
    image: 'img/perro-max.jpg',
    size: 'Tamaño mediano',
    health: 'Vacunas al día',
    compatible: 'Compatible con otros animales • Compatible con niños',
    history: 'Perro muy amigable y leal. Perfecto para familias activas.',
  },
  Toby: {
    name: 'Toby',
    type: 'Perro',
    age: '5 años',
    note: 'Vacunado y esterilizado',
    image: 'img/perro-toby.jpg',
    size: 'Tamaño grande',
    health: 'Vacunas al día',
    compatible: 'Compatible con otros animales',
    history: 'Perro adulto muy tranquilo y obediente. Ideal para personas mayores.',
  },
  Bella: {
    name: 'Bella',
    type: 'Perro',
    age: '1 año',
    note: 'Esterilizada',
    image: 'img/perro-bella.jpg',
    size: 'Tamaño pequeño',
    health: 'Vacunas al día',
    compatible: 'Compatible con niños',
    history: 'Perrita joven muy cariñosa y juguetona. Perfecta para familias con niños.',
  },
  
  // Gatos
  Michi: {
    name: 'Michi',
    type: 'Gato',
    age: '2 años',
    note: 'Esterilizado',
    image: 'img/gato-michi.jpg',
    size: 'Tamaño mediano',
    health: 'Vacunas al día',
    compatible: 'Compatible con otros gatos',
    history: 'Gato muy juguetón y cariñoso. Le encanta jugar y recibir mimos. Ideal para familias.',
  },
  Simba: {
    name: 'Simba',
    type: 'Gato',
    age: '4 años',
    note: 'Vacunado y esterilizado',
    image: 'img/gato-simba.jpeg',
    size: 'Tamaño grande',
    health: 'Vacunas al día',
    compatible: 'Compatible con otros animales',
    history: 'Gato tranquilo y amigable. Perfecto para hogares con otras mascotas.',
  },
  LunaCat: {
    name: 'Luna',
    type: 'Gato',
    age: '1 año',
    note: 'Esterilizada',
    image: 'img/gato-luna.jpg',
    size: 'Tamaño pequeño',
    health: 'Vacunas al día',
    compatible: 'Compatible con niños',
    history: 'Gatita joven muy activa y juguetona. Ideal para familias con niños.',
  },
  Tom: {
    name: 'Tom',
    type: 'Gato',
    age: '3 años',
    note: 'Vacunado',
    image: 'img/gato-tom.jpg',
    size: 'Tamaño mediano',
    health: 'Vacunas al día',
    compatible: 'Compatible con otros gatos',
    history: 'Gato independiente pero cariñoso. Perfecto para personas que buscan compañía tranquila.',
  },
  Mimi: {
    name: 'Mimi',
    type: 'Gato',
    age: '2 años',
    note: 'Esterilizada',
    image: 'img/gato-mimi.jpg',
    size: 'Tamaño pequeño',
    health: 'Vacunas al día',
    compatible: 'Compatible con otros animales',
    history: 'Gatita muy dulce y cariñosa. Le encanta estar cerca de las personas.',
  },
};

// Featured pets for home screen
const FEATURED_PETS = [
  { id: 1, name: 'Nube', type: 'Perro', age: '4 años', note: 'Esterilizada', image: 'img/perro-nube.jpg' },
  { id: 2, name: 'Manchas', type: 'Perro', age: '2 años', note: 'Vacunada', image: 'img/perro-manchas.jpg' },
  { id: 3, name: 'Roco', type: 'Perro', age: '1 año', note: 'Cachorro', image: 'img/perro-roco.jpg' },
  { id: 4, name: 'Luna', type: 'Perro', age: '3 años', note: 'Tímida', image: 'img/perro-luna.jpg' },
];

// Search results for dogs
const SEARCH_RESULTS = [
  { key: 'Max', name: 'Max', age: '3 años', note: 'Vacunado y esterilizado', image: 'img/perro-max.jpg' },
  { key: 'Luna', name: 'Luna', age: '2 años', note: 'Esterilizada', image: 'img/perro-default.jpeg' },
  { key: 'Toby', name: 'Toby', age: '5 años', note: 'Vacunado y esterilizado', image: 'img/perro-toby.jpg' },
  { key: 'Bella', name: 'Bella', age: '1 año', note: 'Esterilizada', image: 'img/perro-bella.jpg' },
];

// Cats list
const CATS_LIST = [
  { key: 'Michi', name: 'Michi', age: '2 años', note: 'Esterilizado', image: 'img/gato-michi.jpg' },
  { key: 'Simba', name: 'Simba', age: '4 años', note: 'Vacunado y esterilizado', image: 'img/gato-simba.jpeg' },
  { key: 'LunaCat', name: 'Luna', age: '1 año', note: 'Esterilizada', image: 'img/gato-luna.jpg' },
  { key: 'Tom', name: 'Tom', age: '3 años', note: 'Vacunado', image: 'img/gato-tom.jpg' },
  { key: 'Mimi', name: 'Mimi', age: '2 años', note: 'Esterilizada', image: 'img/gato-mimi.jpg' },
];

// ==========================================
// NAVIGATION STATE
// ==========================================

let currentScreen = CONFIG.INITIAL_SCREEN;

// ==========================================
// NAVIGATION FUNCTIONS
// ==========================================

/**
 * Updates the view based on current screen
 */
function updateView() {
  // Toggle screen visibility
  for (let i = 1; i <= CONFIG.TOTAL_SCREENS; i++) {
    const screen = document.getElementById(`screen-${i}`);
    if (screen) {
      screen.classList.toggle('active', i === currentScreen);
    }
  }
  
  // Update navigation buttons
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const pager = document.getElementById('pager');
  
  if (prevBtn) prevBtn.disabled = currentScreen === 1;
  if (nextBtn) nextBtn.disabled = currentScreen === CONFIG.TOTAL_SCREENS;
  if (pager) pager.innerText = `Pantalla ${currentScreen} / ${CONFIG.TOTAL_SCREENS}`;
  
  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Render cats when screen 5 is active
  if (currentScreen === 5) {
    renderCats();
  }
}

/**
 * Navigate relative to current screen
 * @param {number} direction - -1 for previous, 1 for next
 */
function nav(direction) {
  currentScreen = Math.min(CONFIG.TOTAL_SCREENS, Math.max(1, currentScreen + direction));
  updateView();
}

/**
 * Navigate to specific screen
 * @param {number} screenNumber - Screen number to navigate to
 */
function goTo(screenNumber) {
  if (screenNumber < 1) screenNumber = 1;
  if (screenNumber > CONFIG.TOTAL_SCREENS) screenNumber = CONFIG.TOTAL_SCREENS;
  currentScreen = screenNumber;
  updateView();
}

// ==========================================
// PET CARD RENDERING
// ==========================================

/**
 * Creates HTML for a pet card
 * @param {Object} pet - Pet data
 * @param {string} primaryAction - Primary button onclick action
 * @param {string} secondaryAction - Secondary button onclick action
 * @param {string} primaryLabel - Primary button label
 * @param {string} secondaryLabel - Secondary button label
 * @returns {string} HTML string
 */
function createPetCardHTML(pet, primaryAction, secondaryAction, primaryLabel = 'Ver', secondaryLabel = 'Favorito') {
  const imgStyle = pet.key === 'Simba' ? 'style="object-position: center top;"' : '';
  
  return `
    <img src="${pet.image}" alt="${pet.name}" ${imgStyle}>
    <div class="info">
      <strong>${pet.name}</strong>
      <div class="muted">${pet.age} • ${pet.note}</div>
      <div style="height:8px"></div>
      <div style="display:flex;gap:6px">
        <button class="btn primary" onclick="${primaryAction}">${primaryLabel}</button>
        <button class="btn ghost" onclick="${secondaryAction}">${secondaryLabel}</button>
      </div>
    </div>
  `;
}

/**
 * Renders featured pets on home screen
 */
function renderFeatured() {
  const container = document.getElementById('featured');
  if (!container) return;
  
  container.innerHTML = '';
  
  FEATURED_PETS.forEach((pet) => {
    const div = document.createElement('div');
    div.className = 'pet-card';
    div.innerHTML = createPetCardHTML(
      pet,
      `showPetProfile('${pet.name}')`,
      `alert('Guardado en favoritos (simulado)')`,
      'Ver',
      'Favorito'
    );
    container.appendChild(div);
  });
}

/**
 * Renders search results
 */
function renderResults() {
  const container = document.getElementById('results');
  if (!container) return;
  
  container.innerHTML = '';
  
  SEARCH_RESULTS.forEach((pet) => {
    const div = document.createElement('div');
    div.className = 'pet-card';
    div.innerHTML = createPetCardHTML(
      pet,
      `showPetProfile('${pet.key}')`,
      `alert('Compartido (simulado)')`,
      'Ver',
      'Compartir'
    );
    container.appendChild(div);
  });
}

/**
 * Renders cats list
 */
function renderCats() {
  const container = document.getElementById('cats-grid');
  if (!container) return;
  
  container.innerHTML = '';
  
  CATS_LIST.forEach((cat) => {
    const div = document.createElement('div');
    div.className = 'pet-card';
    div.innerHTML = createPetCardHTML(
      cat,
      `showPetProfile('${cat.key}')`,
      `alert('Guardado en favoritos (simulado)')`,
      'Ver',
      'Favorito'
    );
    container.appendChild(div);
  });
}

// ==========================================
// PET PROFILE FUNCTIONS
// ==========================================

/**
 * Shows detailed pet profile
 * @param {string} petName - Pet name/key
 */
function showPetProfile(petName) {
  const pet = PETS_DATA[petName];
  
  if (!pet) {
    alert('Mascota no encontrada');
    return;
  }
  
  // Update screen 7 title
  const titleElement = document.getElementById('s7');
  if (titleElement) {
    titleElement.textContent = `Ficha: ${pet.name}`;
  }
  
  // Update screen 7 content
  const screen7 = document.getElementById('screen-7');
  if (!screen7) return;
  
  const img = screen7.querySelector('img');
  const infoDiv = screen7.querySelector('div[style*="flex:1"] .muted');
  const historyP = screen7.querySelectorAll('p.muted')[0];
  
  if (img) {
    img.src = pet.image;
    img.alt = pet.name;
    img.style.objectPosition = petName === 'Simba' ? 'center top' : '';
  }
  
  if (infoDiv) {
    infoDiv.textContent = `${pet.age} • ${pet.size} • ${pet.note} • ${pet.health} • ${pet.compatible}`;
  }
  
  if (historyP) {
    historyP.textContent = `Historia: ${pet.history}`;
  }
  
  goTo(7);
}

// ==========================================
// FILTER FUNCTIONS
// ==========================================

/**
 * Applies filter and navigates to results
 * @param {string} tag - Filter tag
 */
function applyFilter(tag) {
  alert(`Filtro aplicado: ${tag} (simulado)`);
  goTo(6);
}

// ==========================================
// FORM SUBMISSION FUNCTIONS
// ==========================================

/**
 * Validates and submits adoption form
 */
function submitAdoption() {
  const name = document.getElementById('ad-name')?.value.trim();
  
  if (!name) {
    alert('Por favor indica tu nombre');
    return;
  }
  
  alert('Solicitud enviada (simulado).');
  goTo(9);
}

/**
 * Saves a new pet to the system
 */
function savePet() {
  const petName = document.getElementById('pet-name')?.value.trim();
  
  if (!petName) {
    alert('Ingresa nombre de la mascota');
    return;
  }
  
  alert(`Mascota registrada (simulado): ${petName}`);
  goTo(11);
}

// ==========================================
// REQUEST MANAGEMENT FUNCTIONS
// ==========================================

/**
 * Approves an adoption request
 * @param {HTMLElement} btn - Button element
 */
function approveRequest(btn) {
  const li = btn.closest('li');
  if (!li) return;
  
  const statusElement = li.querySelector('.muted');
  if (statusElement) {
    statusElement.innerText = `Aprobado • ${new Date().toLocaleDateString()}`;
  }
  
  alert('Solicitud aprobada (simulado)');
}

/**
 * Rejects an adoption request
 * @param {HTMLElement} btn - Button element
 */
function rejectRequest(btn) {
  const li = btn.closest('li');
  if (!li) return;
  
  const statusElement = li.querySelector('.muted');
  if (statusElement) {
    statusElement.innerText = `Rechazado • ${new Date().toLocaleDateString()}`;
  }
  
  alert('Solicitud rechazada (simulado)');
}

// ==========================================
// INITIALIZATION
// ==========================================

/**
 * Initialize application on DOM ready
 */
document.addEventListener('DOMContentLoaded', () => {
  renderFeatured();
  renderResults();
  renderCats();
  updateView();
  
  console.log('✅ PetLink inicializado correctamente');
});
