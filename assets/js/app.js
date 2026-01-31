console.log("js loaded");

// Define your page content as strings
const pages = {
    dashboard: `
        <div id="dashboardPage" class="page-content active">
        <header class="header md:flex-row flex-col md:gap-0 gap-4 md:p-8 p-4">
            <div class="search-container md:w-1/3 w-full lg:w-2/5">
                <span class="search-icon">
                    <i data-lucide="search"></i>
                </span>
                <input type="text" placeholder="Search rooms, bookings, or people..." class="search-input">
            </div>
            <div class="header-actions md:w-auto w-full md:justify-end justify-between">
                <button class="notification-btn">
                    <i data-lucide="bell"></i>
                    <span class="notification-badge"></span>
                </button>
                <button class="btn-primary">
                    <i data-lucide="plus"></i> <span class="sm:inline hidden">Book a Room</span>
                </button>
            </div>
        </header>

        <div class="content md:p-8 p-4">
            <div class="stats-grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-6 gap-4">
                <div class="stat-card">
                    <div class="icon-box icon-blue">
                        <i data-lucide="hotel"></i>
                    </div>
                    <div class="stat-content">
                        <h3 class="stat-number sm:text-3xl text-2xl">24</h3>
                        <p class="stat-label">Total Rooms</p>
                        <p class="stat-meta">3 of this month</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="icon-box icon-green">
                        <i data-lucide="calendar-check"></i>
                    </div>
                    <div class="stat-content">
                        <h3 class="stat-number sm:text-3xl text-2xl">67%</h3>
                        <p class="stat-label">Today's Occupancy</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="icon-box icon-purple">
                        <i data-lucide="box"></i>
                    </div>
                    <div class="stat-content">
                        <h3 class="stat-number sm:text-3xl text-2xl">18</h3>
                        <p class="stat-label">Active Bookings</p>
                        <p class="stat-meta">4 upcoming</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="icon-box icon-orange">
                        <i data-lucide="users-2"></i>
                    </div>
                    <div class="stat-content">
                        <h3 class="stat-number sm:text-3xl text-2xl">8</h3>
                        <p class="stat-label">Available Now</p>
                        <p class="stat-meta">Rooms ready</p>
                    </div>
                </div>
            </div>

            <section class="schedule-section">
                <div class="section-header md:flex-row flex-col md:items-center items-start md:gap-0 gap-4">
                    <div class="section-title">
                        <h2>Today's Meeting Schedule</h2>
                        <p>Real-time view of room bookings</p>
                    </div>
                    <div class="legend">
                        <span class="legend-item"><span class="legend-dot legend-ongoing"></span> Ongoing</span>
                        <span class="legend-item"><span class="legend-dot legend-upcoming"></span> Upcoming</span>
                    </div>
                </div>

                <div class="table-container md:overflow-x-auto overflow-x-scroll">
                    <table class="schedule-table md:min-w-full min-w-[600px]">
                        <thead>
                            <tr>
                                <th>Room</th>
                                <th>09:00</th>
                                <th>10:00</th>
                                <th>11:00</th>
                                <th>12:00</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="room-name">Conference Room A</td>
                                <td colspan="4" class="booking-cell">
                                    <div class="booking-block">
                                        <div class="booking-info">
                                            <p class="booking-title">Product Strategy Meeting</p>
                                            <p class="booking-time">09:00 - 10:30</p>
                                        </div>
                                        <span class="booking-count">8</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>`,
    rooms: `
        `,
    users: `
        <div class="p-8">
            <h2 class="text-2xl font-bold">Users Management</h2>
            </div>`
};

// Function to change the content
function loadPage(pageKey, event) {
    // Prevent the default link behavior
    if (event) event.preventDefault();

    const contentArea = document.getElementById('main-content');
    
    if (pages[pageKey]) {
        contentArea.innerHTML = pages[pageKey];
        
        // Re-initialize Lucide icons if you use them in the new content
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // Update active class on sidebar links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    } else {
        // If no event (initial load), set active based on pageKey
        const activeLink = document.querySelector(`[data-page="${pageKey}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
}

// Carousel functionality
let slides = document.querySelectorAll(".carousel-slide");
let index = 0;

function showSlide(i) {
    if (slides.length > 0) {
        slides.forEach((slide, idx) => {
            slide.classList.remove("active", "prev");
            if (idx < i) {
                slide.classList.add("prev"); // Slides that have passed go to the left
            }
        });
        slides[i].classList.add("active");
    }
}

function nextSlide() {
    if (slides.length > 0) {
        index = (index + 1) % slides.length;
        showSlide(index);
    }
}

function prevSlide() {
    if (slides.length > 0) {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    }
}

// Load dashboard on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM loaded");
    loadPage('dashboard');
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Re-query slides after content is loaded
    slides = document.querySelectorAll(".carousel-slide");
    if (slides.length > 0) {
        setInterval(nextSlide, 4000);
    }
});