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
        <div class="p-8">
            <div class="flex justify-between items-center mb-6">
                <div>
                    <h2 class="text-2xl font-bold">Room Directory</h2>
                    <p class="text-sm text-gray-500">Manage and monitor all meeting rooms</p>
                </div>
                <button class="bg-[#10b981] text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600">
                    + Add New Room
                </button>
             </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white rounded-xl border p-6 shadow-sm">
                    <div class="flex justify-between items-start mb-4">
                        <h3 class="font-bold text-lg">Conference Room A</h3>
                        <span class="bg-orange-100 text-orange-600 text-[10px] font-bold px-2 py-1 rounded uppercase">Occupied</span>
                    </div>
                    <div class="space-y-2 text-sm text-gray-500 mb-6">
                        <p><i class="fas fa-map-marker-alt w-5"></i> 2nd Floor</p>
                        <p><i class="fas fa-users w-5"></i> Capacity: 12 people</p>
                        <p><i class="fas fa-desktop w-5"></i> Projector, Whiteboard, Video Conference</p>
                    </div>
                    <div class="flex space-x-3">
                        <button class="flex-1 border py-2 rounded-lg text-sm font-medium hover:bg-gray-50">View Details</button>
                        <button class="flex-1 bg-[#10b981] text-white py-2 rounded-lg text-sm font-medium">Book Now</button>
                    </div>
                </div>
            </div>
        </div>`,
    users: `
        <div class="p-8">
            <h2 class="text-2xl font-bold">Users Management</h2>
            </div>`,
    booking: `<div class="bg-white rounded-xl border shadow-sm m-8 overflow-hidden">
    <div class="p-6 border-b">
        <h3 class="font-bold">Recent Bookings</h3>
    </div>
    <table class="w-full text-left">
        <thead class="bg-gray-50 text-xs text-gray-400 uppercase">
            <tr>
                <th class="px-6 py-4">Booking ID</th>
                <th class="px-6 py-4">Room</th>
                <th class="px-6 py-4">User</th>
                <th class="px-6 py-4">Date & Time</th>
                <th class="px-6 py-4">Status</th>
                <th class="px-6 py-4">Actions</th>
            </tr>
        </thead>
        <tbody class="divide-y text-sm">
            <tr>
                <td class="px-6 py-4 font-medium">BK-001</td>
                <td class="px-6 py-4 text-gray-500">Conference Room A</td>
                <td class="px-6 py-4">John Smith</td>
                <td class="px-6 py-4 text-gray-500">Jan 30, 2026 • 09:00 AM</td>
                <td class="px-6 py-4">
                    <span class="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">Confirmed</span>
                </td>
                <td class="px-6 py-4 space-x-3">
                    <button class="text-gray-600 hover:text-black">Edit</button>
                    <button class="text-red-500 hover:text-red-700">Cancel</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
users: `<div class="p-8">
            <div class="flex justify-between items-center mb-6">
                <div>
                    <h2 class="text-2xl font-bold">Users Management</h2>
                    <p class="text-sm text-gray-500">Manage system users and their access</p>
                </div>
                <button class="bg-[#10b981] text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition flex items-center gap-2">
                    <i data-lucide="plus"></i> Add New User
                </button>
            </div>

            <div class="bg-white rounded-xl border shadow-sm overflow-hidden">
                <div class="p-6 border-b bg-gray-50/50">
                    <h3 class="font-bold text-gray-700">All Users</h3>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-left">
                        <thead class="bg-gray-50 text-xs text-gray-400 uppercase font-semibold">
                            <tr>
                                <th class="px-6 py-4">User</th>
                                <th class="px-6 py-4">Contact</th>
                                <th class="px-6 py-4">Company</th>
                                <th class="px-6 py-4">Role</th>
                                <th class="px-6 py-4">Bookings</th>
                                <th class="px-6 py-4">Status</th>
                                <th class="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y text-sm">
                            <tr class="hover:bg-gray-50 transition">
                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">JS</div>
                                        <span class="font-bold text-gray-900">John Smith</span>
                                    </div>
                                </td>
                                <td class="px-6 py-4 text-gray-500">
                                    <p class="text-xs italic">john.smith@company.com</p>
                                    <p class="text-xs">+1 234-567-8901</p>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-2 text-gray-600">
                                        <i data-lucide="building" class="w-4 h-4"></i> Tech Corp
                                    </div>
                                </td>
                                <td class="px-6 py-4 text-gray-600">Manager</td>
                                <td class="px-6 py-4"><span class="bg-gray-100 px-2 py-1 rounded text-xs font-semibold text-gray-700">12</span></td>
                                <td class="px-6 py-4">
                                    <span class="bg-green-100 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase">Active</span>
                                </td>
                                <td class="px-6 py-4 text-right space-x-3">
                                    <button class="text-gray-600 font-semibold hover:text-black">Edit</button>
                                    <button class="text-red-500 font-semibold hover:text-red-700">Delete</button>
                                </td>
                            </tr>
                            <tr class="hover:bg-gray-50 transition">
                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs">SJ</div>
                                        <span class="font-bold text-gray-900">Sarah Johnson</span>
                                    </div>
                                </td>
                                <td class="px-6 py-4 text-gray-500">
                                    <p class="text-xs italic">sarah.j@startup.io</p>
                                    <p class="text-xs">+1 234-567-8902</p>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-2 text-gray-600">
                                        <i data-lucide="building" class="w-4 h-4"></i> Startup Inc
                                    </div>
                                </td>
                                <td class="px-6 py-4 text-gray-600">Executive</td>
                                <td class="px-6 py-4"><span class="bg-gray-100 px-2 py-1 rounded text-xs font-semibold text-gray-700">8</span></td>
                                <td class="px-6 py-4">
                                    <span class="bg-green-100 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase">Active</span>
                                </td>
                                <td class="px-6 py-4 text-right space-x-3">
                                    <button class="text-gray-600 font-semibold hover:text-black">Edit</button>
                                    <button class="text-red-500 font-semibold hover:text-red-700">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>`,
        packages:`<div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
    <div class="relative bg-white rounded-2xl border-2 border-green-500 p-8 shadow-lg">
        <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold">
            Most Popular
        </div>
        <h3 class="text-xl font-bold mb-2">Professional</h3>
        <p class="text-gray-400 text-sm mb-6">Ideal for growing businesses</p>
        <div class="mb-8">
            <span class="text-4xl font-bold">$149</span>
            <span class="text-gray-400">/ per month</span>
        </div>
        <ul class="space-y-4 mb-8 text-sm">
            <li class="flex items-center text-gray-600">
                <i class="fas fa-check-circle text-green-500 mr-3"></i> Unlimited bookings
            </li>
            <li class="flex items-center text-gray-600">
                <i class="fas fa-check-circle text-green-500 mr-3"></i> Priority support
            </li>
        </ul>
        <button class="w-full bg-green-500 text-white py-3 rounded-xl font-bold hover:bg-green-600">Get Started</button>
    </div>
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