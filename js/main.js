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
            grade: 'I kooliaste',
            image: 'images/lovable-uploads/12a38d0c-56bf-434f-a020-01488c349ff5.png',
            categories: ['Ülesanne', 'Kordamine'],
            subjects: ['Eesti keel', 'Inimeseõpetus'],
            theme: 'Liiklusohutus',
            keywords: ['liiklus', 'ohutus', 'harjumused', 'koolitee'],
            learningOutcomes: [
                'Kirjeldab enda ja oma pere liiklemise harjumusi',
                'Kirjeldab enda teekonda kodust kooli vastavalt oma liikumisviisile',
                'Toob välja keerulised kohad liikluses, sh kooli ümbruses'
            ]
        },
        '2': {
            title: 'Enne rattasõitu',
            grade: 'I kooliaste',
            image: 'images/lovable-uploads/3fefb442-788a-43b6-8493-48b274d797df.png',
            categories: ['Ülesanne', 'Kordamine'],
            subjects: ['Eesti keel'],
            theme: 'Jalgratturi ohutus',
            keywords: ['ratas', 'kiiver', 'ohutus', 'kontroll'],
            learningOutcomes: [
                'Selgitab ja saab aru kiivri kandmise vajalikkusest',
                'Kirjeldab enda ja oma pere liiklemise harjumusi'
            ]
        },
        '3': {
            title: 'Liiklejatüübid',
            grade: 'I kooliaste',
            image: 'images/lovable-uploads/ffe368f2-1e89-4fa2-b966-5a03626effd3.png',
            categories: ['Arutelu', 'Mäng'],
            subjects: ['Inimeseõpetus', 'Liikumisõpetus'],
            theme: 'Liiklejad ja reeglid',
            keywords: ['liiklejad', 'reeglid', 'koostöö', 'transport'],
            learningOutcomes: [
                'Nimetab reeglid, millega on vaja arvestada üksi ja ühiselt liigeldes',
                'Tunneb ära erinevaid liiklejatüüpe'
            ]
        }
    };
    
    const material = materials[materialId] || materials['1'];
    
    // Update title
    const titleElement = document.getElementById('title');
    if (titleElement) titleElement.textContent = material.title;
    
    // Update image
    const imageElement = document.getElementById('material-image');
    if (imageElement) {
        imageElement.src = material.image;
        imageElement.alt = material.title;
    }
    
    // Update grade badge
    const gradeBadge = document.getElementById('grade-badge');
    if (gradeBadge) gradeBadge.textContent = material.grade;
    
    // Update theme
    const themeElement = document.getElementById('theme');
    if (themeElement) themeElement.textContent = material.theme;
    
    // Load category tags
    const categoryContainer = document.getElementById('category-tags');
    if (categoryContainer) {
        categoryContainer.innerHTML = '';
        material.categories.forEach(category => {
            const tag = document.createElement('span');
            tag.className = 'px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full';
            tag.textContent = category;
            categoryContainer.appendChild(tag);
        });
    }
    
    // Load integration tags
    const integrationContainer = document.getElementById('integration-tags');
    if (integrationContainer) {
        integrationContainer.innerHTML = '';
        material.subjects.forEach(subject => {
            const tag = document.createElement('span');
            tag.className = 'px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full';
            tag.textContent = subject;
            integrationContainer.appendChild(tag);
        });
    }
    
    // Load keyword tags
    const keywordContainer = document.getElementById('keyword-tags');
    if (keywordContainer) {
        keywordContainer.innerHTML = '';
        material.keywords.forEach(keyword => {
            const tag = document.createElement('span');
            tag.className = 'px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full';
            tag.textContent = keyword;
            keywordContainer.appendChild(tag);
        });
    }
    
    // Load learning outcomes
    const outcomesContainer = document.getElementById('learning-outcomes');
    if (outcomesContainer) {
        outcomesContainer.innerHTML = '';
        material.learningOutcomes.forEach(outcome => {
            const li = document.createElement('li');
            li.className = 'flex items-start';
            li.innerHTML = `
                <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                ${outcome}
            `;
            outcomesContainer.appendChild(li);
        });
    }
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
    
    // Load integration tags
    const integrationContainer = document.getElementById('integration-tags');
    if (integrationContainer) {
        integrationContainer.innerHTML = '';
        bundle.subjects.forEach(subject => {
            const tag = document.createElement('span');
            tag.className = 'px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full';
            tag.textContent = subject;
            integrationContainer.appendChild(tag);
        });
    }

    // Load header tags (keywords in header)
    const headerTagsContainer = document.getElementById('header-tags');
    if (headerTagsContainer) {
        headerTagsContainer.innerHTML = '';
        
        const headerTags = ['liiklus', 'ohutus', 'märgid', 'jalakäija', 'sõidutee'];
        headerTags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full';
            tagElement.textContent = tag;
            headerTagsContainer.appendChild(tagElement);
        });
    }

    // Load grade badge
    const gradeBadge = document.getElementById('grade-badge');
    if (gradeBadge) gradeBadge.textContent = bundle.grade;

    // Load tags (in content section)
    const tagsContainer = document.getElementById('tags-container');
    if (tagsContainer) {
        tagsContainer.innerHTML = '';
        
        // Add some sample tags
        const sampleTags = ['jalgrattur', 'ohutus', 'kiiver', 'liiklus', 'kontroll'];
        sampleTags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full';
            tagElement.textContent = tag;
            tagsContainer.appendChild(tagElement);
        });
    }
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