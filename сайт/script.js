// Данные о команде KYRO TEAM - МОЖНО РЕДАКТИРОВАТЬ ЗДЕСЬ
const teamData = [
    {
        "id": 1,
        "name": "Pok1ta",
        "role": "Снайпер",
        "country": "RU",
        "faceitLevel": 6,
        "photo": "фото/пацан 1.png",
        "description": "Главный снайпер команды KYRO TEAM. Специализируется на игре с AWP, отлично держит углы и выигрывает ключевые раунды. Стабильно показывает высокий KDA и является одним из самых надежных игроков в клатч-ситуациях."
    },
    {
        "id": 2,
        "name": "KaYzOn",
        "role": "Люркер",
        "country": "RU",
        "faceitLevel": 4,
        "photo": "фото/пацык 2.png",
        "description": "Специалист по игре на флангах. Отлично находит слабые места в защите противника и создает преимущества для команды. Мастерски использует гранаты и часто получает первые фраги на неожиданных позициях."
    },
    {
        "id": 3,
        "name": "Twix",
        "role": "Энтри",
        "country": "RU",
        "faceitLevel": 10,
        "photo": "фото/поцык 3.png",
        "description": "Первым номер в атаке команды. Смело врывается на точки и открывает раунды для товарищей. Обладает отличной реакцией и механикой, что позволяет ему эффективно вступать в первые перестрелки."
    },
    {
        "id": 4,
        "name": "fn1xxx",
        "role": "Саппорт",
        "country": "RU",
        "faceitLevel": 6,
        "photo": "фото/пацык 2.png",
        "description": "Опытный саппорт-игрок. Мастерски использует флешки и дымовые гранаты для поддержки команды. Всегда прикрывает спины товарищей и обеспечивает безопасное передвижение по карте."
    },
    {
        "id": 5,
        "name": "veulz",
        "role": "IGL (Капитан)",
        "country": "RU",
        "faceitLevel": 9,
        "photo": "фото/поцык 3.png",
        "description": "Капитан и стратег команды. Отлично читает игру, принимает правильные решения в критических ситуациях и координирует действия команды. Его опыт и игровое видение помогают KYRO TEAM побеждать в сложных матчах."
    }
];

// Данные о новостях
let newsData = [
    {
        id: 1,
        title: "ВШФОВФШВЦТГ0ЛАТЬФЗЛТЧЗШЦТЬАД-ФЬХЬСБЗД",
        description: "ВФЛВЬТФЛТВФОТВОШФИРВФИТВДФРТВФВТФЩВТ",
        date: "28.04.2026",
        image: "Новость"
    },
    {
        id: 2,
        title: "2",
        description: "2",
        date: "28.04.2026",
        image: "Новость"
    },
    {
        id: 3,
        title: "3",
        description: "3",
        date: "28.04.2026",
        image: "Новость"
    }
];

function loadNews() {
    fetch('news.json')
        .then(res => res.json())
        .then(data => {
            newsData = data;
            renderNews();
        })
        .catch(() => {
            console.log("Ошибка загрузки новостей");
            renderNews();
        });
}// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    renderTeam();
    loadNews();
    setupEventListeners();
    setupSmoothScrolling();
});

// Рендеринг основного состава
function renderTeam() {
    const teamGrid = document.getElementById('teamGrid');
    
    teamData.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';
        playerCard.onclick = () => showPlayerStats(player);
        
        playerCard.innerHTML = `
            ${player.photo ? `<div class="player-bg-photo" style="background-image: url('${player.photo}')"></div>` : ''}
            <h3 class="player-name">${player.name}</h3>
            <p class="player-role">${player.role}</p>
            <div class="player-stats">
                <div class="stat-item">
                    <div class="stat-value">${player.faceitLevel}</div>
                    <div class="stat-label">Level</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${player.country}</div>
                    <div class="stat-label">Страна</div>
                </div>
            </div>
        `;
        
        teamGrid.appendChild(playerCard);
    });
}

// Рендеринг новостей
function renderNews() {
    const newsGrid = document.getElementById('newsGrid');
    
    newsData.forEach(news => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        
        newsCard.innerHTML = `
            <div class="news-date">${news.date}</div>
            <h3 class="news-title">${news.title}</h3>
        `;
        
        newsCard.onclick = () => showNewsModal(news);
        
        newsGrid.appendChild(newsCard);
    });
}

// Показать модальное окно с новостью
function showNewsModal(news) {
    const modal = document.getElementById('playerModal');
    const playerStats = document.getElementById('playerStats');
    
    playerStats.innerHTML = `
        <div class="player-stats-detail">
            <h2 style="color: var(--primary-color); margin-bottom: 1.5rem; text-align: center; font-size: 2.5rem;">
                ${news.title}
            </h2>
            <div style="color: var(--text-light); font-size: 1.1rem; line-height: 1.8; text-align: center; margin-bottom: 2rem;">
                ${news.description}
            </div>
            <button class="modal-back-btn" onclick="closeModal()">← Назад</button>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Показать статистику игрока в модальном окне
function showPlayerStats(player) {
    const modal = document.getElementById('playerModal');
    const playerStats = document.getElementById('playerStats');
    
    playerStats.innerHTML = `
        <div class="player-stats-detail">
            <h2 style="color: var(--primary-color); margin-bottom: 1.5rem; text-align: center; font-size: 2.5rem;">
                ${player.name}
            </h2>
            <div style="text-align: center; margin-bottom: 2rem;">
                <div style="color: #ff6b35; font-weight: bold; margin-bottom: 0.5rem; font-size: 1.8rem;">${player.role}</div>
                <div style="color: rgba(255, 255, 255, 0.7); font-size: 1rem;">${player.country} • Level ${player.faceitLevel}</div>
            </div>
            <div style="color: var(--text-light); font-size: 1.1rem; line-height: 1.8; margin-bottom: 2rem; text-align: center;">
                ${player.description}
            </div>
            <button class="modal-back-btn" onclick="closeModal()">← Назад</button>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Закрытие модального окна
function closeModal() {
    const modal = document.getElementById('playerModal');
    modal.style.display = 'none';
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Закрытие модального окна
    const modal = document.getElementById('playerModal');
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
    
    // Мобильное меню
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Закрытие мобильного меню при клике на ссылку
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Плавная прокрутка
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Анимация при прокрутке
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            }
        });
    }, observerOptions);
    
    // Наблюдаем за карточками
    document.querySelectorAll('.player-card, .news-card').forEach(card => {
        observer.observe(card);
    });
}

// Запускаем анимацию при прокрутке
window.addEventListener('load', animateOnScroll);

// Параллакс эффект для hero секции
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Динамическое добавление новостей
function addNews(title, description, type) {
    const newNews = {
        id: newsData.length + 1,
        title: title,
        description: description,
        type: type,
        date: "Только что",
        image: "🔥"
    };
    
    newsData.unshift(newNews);
    renderNews();
}

// Функция для обновления статистики игрока
function updatePlayerStats(playerId, newStats) {
    const player = teamData.find(p => p.id === playerId);
    if (player) {
        Object.assign(player.stats, newStats);
        renderTeam();
    }
}

// Функция для обновления уровня Faceit
function updateFaceitLevel(playerId, newLevel) {
    const player = teamData.find(p => p.id === playerId);
    if (player) {
        player.faceitLevel = newLevel;
        renderTeam();
    }
}

// Экспорт функций для использования в консоли
window.kyroFunctions = {
    addNews: addNews,
    updatePlayerStats: updatePlayerStats,
    updateFaceitLevel: updateFaceitLevel,
    showPlayerStats: showPlayerStats,
    teamData: teamData,
    substitutesData: substitutesData
};