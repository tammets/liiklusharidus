/**
 * Liiklusharidus.ee - Main JavaScript File
 * Contains all interactive functionality for the website
 */

// =============================================================================
// NAVIGATION FUNCTIONS
// =============================================================================

/**
 * Toggle mobile menu visibility
 */
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
}

// =============================================================================
// FILTERING FUNCTIONS
// =============================================================================

/**
 * Filter materials based on search criteria
 */
function filterMaterials() {
    const searchInput = document.querySelector('input[type="text"]');
    const categorySelect = document.querySelectorAll('select')[0];
    const subjectSelect = document.querySelectorAll('select')[1];
    const gradeSelect = document.querySelectorAll('select')[2];
    
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;
    const selectedSubject = subjectSelect.value;
    const selectedGrade = gradeSelect.value;
    
    const materialCards = document.querySelectorAll('.material-card');
    let visibleCount = 0;
    
    materialCards.forEach(card => {
        const title = card.dataset.title.toLowerCase();
        const categories = card.dataset.category.split(',');
        const subjects = card.dataset.subject.split(',');
        const grade = card.dataset.grade;
        
        const matchesSearch = title.includes(searchTerm);
        const matchesCategory = !selectedCategory || categories.includes(selectedCategory);
        const matchesSubject = !selectedSubject || subjects.includes(selectedSubject);
        const matchesGrade = !selectedGrade || grade === selectedGrade;
        
        if (matchesSearch && matchesCategory && matchesSubject && matchesGrade) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    document.getElementById('results-count').textContent = `Leitud ${visibleCount} materjali`;
}

/**
 * Filter content bundles based on search criteria
 */
function filterBundles() {
    const searchInput = document.querySelector('input[type="text"]');
    const durationSelect = document.querySelectorAll('select')[0];
    const difficultySelect = document.querySelectorAll('select')[1];
    
    const searchTerm = searchInput.value.toLowerCase();
    const selectedDuration = durationSelect.value;
    const selectedDifficulty = difficultySelect.value;
    
    const bundleCards = document.querySelectorAll('.bundle-card');
    let visibleCount = 0;
    
    bundleCards.forEach(card => {
        const title = card.dataset.title.toLowerCase();
        const duration = card.dataset.duration;
        const difficulty = card.dataset.difficulty;
        
        const matchesSearch = title.includes(searchTerm);
        const matchesDuration = !selectedDuration || duration === selectedDuration;
        const matchesDifficulty = !selectedDifficulty || difficulty === selectedDifficulty;
        
        if (matchesSearch && matchesDuration && matchesDifficulty) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    document.getElementById('results-count').textContent = `Leitud ${visibleCount} sisukimpu`;
}

// =============================================================================
// DATA LOADING FUNCTIONS
// =============================================================================

/**
 * Load material data based on URL parameter
 */
function loadMaterialData() {
    const urlParams = new URLSearchParams(window.location.search);
    const materialId = urlParams.get('id') || '1';
    
    const materials = {
        '1': {
            title: 'Sõnu liiklusest 3',
            description: 'Õpiväljundid: Kirjeldab enda ja oma pere liiklemise harjumusi; Kirjeldab enda teekonda kodust kooli vastavalt oma liikumisviisile ja toob välja, millised on tema jaoks keerulised kohad liikluses, sh kooli ümbruses',
            grade: 'I kooliaste',
            image: 'images/lovable-uploads/12a38d0c-56bf-434f-a020-01488c349ff5.png',
            categories: ['Ülesanne', 'Kordamine'],
            subjects: ['Eesti keel', 'Inimeseõpetus']
        },
        '2': {
            title: 'Enne rattasõitu',
            description: 'Õpiväljundid: Selgitab ja saab aru kiivri kandmise vajalikkusest jalg- ja tõukerattaga, tasakaaluliikuri jms sõitmisel; Kirjeldab enda ja oma pere liiklemise harjumusi',
            grade: 'I kooliaste',
            image: 'images/lovable-uploads/3fefb442-788a-43b6-8493-48b274d797df.png',
            categories: ['Ülesanne', 'Kordamine'],
            subjects: ['Eesti keel']
        },
        '3': {
            title: 'Liiklejatüübid',
            description: 'Õpiväljundid: Nimetab reeglid, millega on vaja arvestada üksi ja ühiselt liigeldes (nt ekskursioonil, matkal, ühistranspordis, õppekäigul)',
            grade: 'I kooliaste',
            image: 'images/lovable-uploads/ffe368f2-1e89-4fa2-b966-5a03626effd3.png',
            categories: ['Arutelu', 'Mäng'],
            subjects: ['Inimeseõpetus', 'Liikumisõpetus']
        }
    };
    
    const material = materials[materialId] || materials['1'];
    
    document.getElementById('material-title').textContent = material.title;
    document.getElementById('title').textContent = material.title;
    document.getElementById('description').textContent = material.description;
    document.getElementById('grade-badge').textContent = material.grade;
    document.getElementById('material-image').src = material.image;
    document.getElementById('material-image').alt = material.title;
    
    // Load tags
    const tagsContainer = document.getElementById('tags-container');
    tagsContainer.innerHTML = '';
    
    material.categories.forEach(category => {
        const tag = document.createElement('span');
        tag.className = 'px-2 py-1 bg-blue-100 text-blue-800 border border-blue-200 text-xs rounded-full';
        tag.textContent = category;
        tagsContainer.appendChild(tag);
    });
    
    material.subjects.forEach(subject => {
        const tag = document.createElement('span');
        tag.className = 'px-2 py-1 bg-green-100 text-green-800 border border-green-200 text-xs rounded-full';
        tag.textContent = subject;
        tagsContainer.appendChild(tag);
    });
}

/**
 * Load bundle data based on URL parameter
 */
function loadBundleData() {
    const urlParams = new URLSearchParams(window.location.search);
    const bundleId = urlParams.get('id') || '1';
    
    const bundles = {
        '1': {
            title: 'Liiklusohutuse põhikursus',
            description: 'Terviklik kursus algklasside liiklushariduseks, sisaldab videoid, töölehti ja mänge',
            duration: 'Üle 60 minuti',
            difficulty: 'Lihtne',
            category: 'Üldine liiklusohutus',
            grade: 'I kooliaste',
            subjects: ['Loodusõpetus', 'Inimeseõpetus'],
            materials: [
                { title: 'Sõnu liiklusest 3', type: 'Ülesanne' },
                { title: 'Olen ettevaatlik liikleja', type: 'Ülesanne' },
                { title: 'Piiratud nähtavus talvel', type: 'Ülesanne' }
            ]
        },
        '2': {
            title: 'Jalgratturi teekond',
            description: 'Spetsialiseeritud kogu jalgratturi ohutuse ja oskuste arendamiseks',
            duration: 'Alla 30 minuti',
            difficulty: 'Keskmine',
            category: 'Jalgratturi ohutus',
            grade: 'II kooliaste',
            subjects: ['Kehaline kasvatus', 'Loodusõpetus'],
            materials: [
                { title: 'Enne rattasõitu', type: 'Ülesanne' },
                { title: 'Kiivri tähtsus', type: 'Video' },
                { title: 'Ratta kontroll', type: 'Praktika' }
            ]
        },
        '3': {
            title: 'Liiklusmärkide maailm',
            description: 'Interaktiivne tutvusmine erinevate liiklusmärkidega ja nende tähendmustega',
            duration: 'Alla 30 minuti',
            difficulty: 'Keerukas',
            category: 'Liiklusmärgid',
            grade: 'I-II kooliaste',
            subjects: ['Loodusõpetus', 'Eesti keel'],
            materials: [
                { title: 'Liiklejatüübid', type: 'Mäng' },
                { title: 'Märkide tähendused', type: 'Interaktiivne' },
                { title: 'Märkide test', type: 'Viktoriini' }
            ]
        }
    };
    
    const bundle = bundles[bundleId] || bundles['1'];
    
    document.getElementById('bundle-title').textContent = bundle.title;
    document.getElementById('title').textContent = bundle.title;
    document.getElementById('description').textContent = bundle.description;
    document.getElementById('category-badge').textContent = bundle.category;
    document.getElementById('duration').textContent = bundle.duration;
    document.getElementById('difficulty').textContent = bundle.difficulty;
    
    // Load materials
    const materialsList = document.getElementById('materials-list');
    materialsList.innerHTML = '';
    
    bundle.materials.forEach((material, index) => {
        const materialDiv = document.createElement('div');
        materialDiv.className = 'flex items-center justify-between p-4 bg-slate-50 rounded-lg';
        materialDiv.innerHTML = `
            <div class="flex items-center">
                <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <span class="text-blue-600 font-semibold text-sm">${index + 1}</span>
                </div>
                <div>
                    <h4 class="font-medium text-slate-800">${material.title}</h4>
                    <p class="text-sm text-slate-600">${material.type}</p>
                </div>
            </div>
            <button class="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                Ava
            </button>
        `;
        materialsList.appendChild(materialDiv);
    });
    
    // Load tags
    const tagsContainer = document.getElementById('tags-container');
    tagsContainer.innerHTML = '';
    
    const gradeTag = document.createElement('span');
    gradeTag.className = 'px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full';
    gradeTag.textContent = bundle.grade;
    tagsContainer.appendChild(gradeTag);
    
    bundle.subjects.forEach(subject => {
        const tag = document.createElement('span');
        tag.className = 'px-2 py-1 bg-green-100 text-green-800 border border-green-200 text-xs rounded-full';
        tag.textContent = subject;
        tagsContainer.appendChild(tag);
    });
}

// =============================================================================
// INITIALIZATION
// =============================================================================

/**
 * Initialize page-specific functionality when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    // Check which page we're on and load appropriate data
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'material-detail.html':
            loadMaterialData();
            break;
        case 'bundle-detail.html':
            loadBundleData();
            break;
        default:
            // No specific initialization needed for other pages
            break;
    }
});