// Main JavaScript for WorkSphere

// Sidebar functionality
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle")
  const sidebar = document.getElementById("sidebar")
  const sidebarToggle = document.getElementById("sidebarToggle")
  const content = document.getElementById("content")

  // Create overlay
  const overlay = document.createElement("div")
  overlay.className = "sidebar-overlay"
  document.body.appendChild(overlay)

  // Toggle sidebar
  function toggleSidebar() {
    sidebar.classList.toggle("active")
    overlay.classList.toggle("active")
  }

  // Close sidebar
  function closeSidebar() {
    sidebar.classList.remove("active")
    overlay.classList.remove("active")
  }

  // Event listeners
  if (menuToggle) {
    menuToggle.addEventListener("click", toggleSidebar)
  }

  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", closeSidebar)
  }

  overlay.addEventListener("click", closeSidebar)

  // Close sidebar on window resize if screen is large
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      closeSidebar()
    }
  })

  initializeDarkMode()

  // Initialize language functionality
  initializeLanguage()

  // Initialize complaint form if it exists
  const complaintForm = document.getElementById("complaintForm")
  if (complaintForm) {
    initializeComplaintForm()
  }
})

function initializeDarkMode() {
  const darkModeToggle = document.getElementById("darkModeToggle")
  if (!darkModeToggle) return

  // Load saved theme or default to light
  const savedTheme = localStorage.getItem("theme") || "light"
  setTheme(savedTheme)

  // Dark mode toggle handler
  darkModeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light"
    const newTheme = currentTheme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  })
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme)
  document.body.setAttribute("data-theme", theme)
  const darkModeToggle = document.getElementById("darkModeToggle")

  if (darkModeToggle) {
    const icon = darkModeToggle.querySelector("i")
    if (theme === "dark") {
      icon.className = "fas fa-sun"
      darkModeToggle.title = "Switch to Light Mode"
    } else {
      icon.className = "fas fa-moon"
      darkModeToggle.title = "Switch to Dark Mode"
    }
  }
}

// Language translations
const translations = {
  en: {
    // Navigation
    home: "Home",
    services: "Services",
    howItWorks: "How It Works",
    complaints: "Complaints",
    login: "Login",
    signup: "Sign Up",

    // Hero section
    heroTitle: "Find Trusted Local Workers",
    heroSubtitle: "Connect with verified professionals for all your home and business needs",
    searchPlaceholder: "What service do you need?",
    locationPlaceholder: "Your location",
    searchButton: "Search",

    // Services
    popularServices: "Popular Services",
    popularServicesDesc: "Browse our most requested service categories",
    homeCleaning: "Home Cleaning",
    homeCleaningDesc: "Professional house cleaning services",
    homeRepair: "Home Repair",
    homeRepairDesc: "Plumbing, electrical, and handyman services",
    tutoring: "Tutoring",
    tutoringDesc: "Academic support and skill development",
    beautyServices: "Beauty Services",
    beautyServicesDesc: "Hair, makeup, and wellness services",
    autoServices: "Auto Services",
    autoServicesDesc: "Car maintenance and repair",
    techSupport: "Tech Support",
    techSupportDesc: "Computer and device assistance",

    // How it works
    step1: "Search Services",
    step1Desc: "Browse or search for the service you need",
    step2: "Compare Workers",
    step2Desc: "View profiles, ratings, and reviews",
    step3: "Book Service",
    step3Desc: "Contact and schedule with your chosen worker",
    step4: "Leave Review",
    step4Desc: "Rate your experience to help others",

    // Services page
    browseServices: "Browse All Services",
    findPerfectProvider: "Find the perfect worker for your needs",
    searchServices: "Search services...",
    location: "Location",
    search: "Search",
    filters: "Filters",
    category: "Category",
    allCategories: "All Categories",
    priceRange: "Price Range",
    anyPrice: "Any Price",
    minRating: "Minimum Rating",
    anyRating: "Any Rating",
    sortBy: "Sort By",
    relevance: "Relevance",
    rating: "Rating",
    priceLowHigh: "Price: Low to High",
    priceHighLow: "Price: High to Low",
    clearFilters: "Clear Filters",
    showingResults: "Showing all services",
    noServicesFound: "No services found",
    tryDifferentFilters: "Try adjusting your filters or search terms",

    // Complaints
    fileComplaint: "File a Complaint",
    complaintDesc: "We take your concerns seriously. Report any issues and we'll investigate promptly.",
    reportIssue: "Report Issue",
    submitComplaint: "Submit your complaint with details",
    investigation: "Investigation",
    reviewWithin24: "We review within 24 hours",
    actionTaken: "Action Taken",
    appropriateMeasures: "Appropriate measures implemented",
    resolution: "Resolution",
    issueResolved: "Issue resolved and closed",
    submitComplaintForm: "Submit a Complaint",
    fullName: "Full Name",
    email: "Email",
    phone: "Phone Number",
    complaintType: "Complaint Type",
    selectType: "Select complaint type",
    serviceQuality: "Service Quality",
    providerBehavior: "Provider Behavior",
    billing: "Billing Issue",
    safety: "Safety Concern",
    other: "Other",
    serviceProvider: "Worker Name",
    complaintDetails: "Complaint Details",
    describeComplaint: "Please describe your complaint in detail...",
    attachments: "Attachments",
    fileTypes: "Supported: Images, PDF, Word documents",
    priority: "Priority Level",
    low: "Low",
    medium: "Medium",
    high: "High",
    urgent: "Urgent",
    submitComplaintBtn: "Submit Complaint",
    trackComplaint: "Track Your Complaint",
    trackComplaintDesc: "Enter your complaint ID to check status",
    complaintId: "Complaint ID",
    track: "Track",
    contactSupport: "Contact Support",
    hours: "Hours",
    supportHours: "Mon-Fri 9AM-6PM",

    // Footer
    footerDesc: "Connecting you with trusted local workers.",
    quickLinks: "Quick Links",
    support: "Support",
    help: "Help Center",
    contact: "Contact Us",
    contactInfo: "Contact Information",
  },
  hi: {
    // Navigation
    home: "होम",
    services: "सेवाएं",
    howItWorks: "यह कैसे काम करता है",
    complaints: "शिकायतें",
    login: "लॉगिन",
    signup: "साइन अप",

    // Hero section
    heroTitle: "विश्वसनीय स्थानीय कामगार खोजें",
    heroSubtitle: "अपनी सभी घरेलू और व्यावसायिक आवश्यकताओं के लिए सत्यापित पेशेवरों से जुड़ें",
    searchPlaceholder: "आपको कौन सी सेवा चाहिए?",
    locationPlaceholder: "आपका स्थान",
    searchButton: "खोजें",

    // Services
    popularServices: "लोकप्रिय सेवाएं",
    popularServicesDesc: "हमारी सबसे अधिक मांग वाली सेवा श्रेणियों को देखें",
    homeCleaning: "घर की सफाई",
    homeCleaningDesc: "पेशेवर घर की सफाई सेवाएं",
    homeRepair: "घर की मरम्मत",
    homeRepairDesc: "प्लंबिंग, इलेक्ट्रिकल और हैंडीमैन सेवाएं",
    tutoring: "ट्यूशन",
    tutoringDesc: "शैक्षणिक सहायता और कौशल विकास",
    beautyServices: "सौंदर्य सेवाएं",
    beautyServicesDesc: "बाल, मेकअप और कल्याण सेवाएं",
    autoServices: "ऑटो सेवाएं",
    autoServicesDesc: "कार रखरखाव और मरम्मत",
    techSupport: "तकनीकी सहायता",
    techSupportDesc: "कंप्यूटर और डिवाइस सहायता",
  },
  mr: {
    // Navigation
    home: "मुख्यपृष्ठ",
    services: "सेवा",
    howItWorks: "हे कसे कार्य करते",
    complaints: "तक्रारी",
    login: "लॉगिन",
    signup: "साइन अप",

    // Hero section
    heroTitle: "विश्वसनीय स्थानिक कामगार शोधा",
    heroSubtitle: "आपल्या सर्व घरगुती आणि व्यावसायिक गरजांसाठी सत्यापित व्यावसायिकांशी जुडा",
    searchPlaceholder: "तुम्हाला कोणती सेवा हवी आहे?",
    locationPlaceholder: "तुमचे स्थान",
    searchButton: "शोधा",

    // Services
    popularServices: "लोकप्रिय सेवा",
    popularServicesDesc: "आमच्या सर्वाधिक मागणी असलेल्या सेवा श्रेणी पहा",
    homeCleaning: "घर साफसफाई",
    homeCleaningDesc: "व्यावसायिक घर साफसफाई सेवा",
    homeRepair: "घर दुरुस्ती",
    homeRepairDesc: "प्लंबिंग, इलेक्ट्रिकल आणि हँडीमन सेवा",
    tutoring: "शिकवणी",
    tutoringDesc: "शैक्षणिक सहाय्य आणि कौशल्य विकास",
    beautyServices: "सौंदर्य सेवा",
    beautyServicesDesc: "केस, मेकअप आणि निरोगी सेवा",
    autoServices: "ऑटो सेवा",
    autoServicesDesc: "कार देखभाल आणि दुरुस्ती",
    techSupport: "तांत्रिक सहाय्य",
    techSupportDesc: "संगणक आणि उपकरण सहाय्य",
  },
}

// Language functionality
function initializeLanguage() {
  const languageSelector = document.getElementById("languageSelector")
  if (!languageSelector) return

  // Load saved language or default to English
  const savedLanguage = localStorage.getItem("selectedLanguage") || "en"
  languageSelector.value = savedLanguage
  updateLanguage(savedLanguage)

  // Language change handler
  languageSelector.addEventListener("change", function () {
    const selectedLanguage = this.value
    localStorage.setItem("selectedLanguage", selectedLanguage)
    updateLanguage(selectedLanguage)
  })
}

function updateLanguage(language) {
  const elements = document.querySelectorAll("[data-translate]")
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate")
    if (translations[language] && translations[language][key]) {
      element.textContent = translations[language][key]
    }
  })

  // Update placeholders
  const placeholderElements = document.querySelectorAll("[data-translate-placeholder]")
  placeholderElements.forEach((element) => {
    const key = element.getAttribute("data-translate-placeholder")
    if (translations[language] && translations[language][key]) {
      element.placeholder = translations[language][key]
    }
  })
}

// Complaint form functionality
function initializeComplaintForm() {
  const form = document.getElementById("complaintForm")

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]')
    const originalText = submitBtn.textContent
    submitBtn.innerHTML = '<span class="loading"></span> Submitting...'
    submitBtn.disabled = true

    // Simulate form submission
    setTimeout(() => {
      alert("Complaint submitted successfully! You will receive a confirmation email with your complaint ID.")
      form.reset()
      submitBtn.textContent = originalText
      submitBtn.disabled = false
    }, 2000)
  })
}

function searchServices() {
  const searchInput =
    document.querySelector('input[placeholder*="service"]') || document.querySelector("#serviceSearch")
  const locationInput =
    document.querySelector('input[placeholder*="location"]') || document.querySelector("#locationSearch")

  if (searchInput && locationInput) {
    const service = searchInput.value.trim()
    const location = locationInput.value.trim()

    // Redirect to services page with search parameters
    let url = "services.html"
    const params = new URLSearchParams()

    if (service) params.append("search", service)
    if (location) params.append("location", location)

    if (params.toString()) {
      url += "?" + params.toString()
    }

    window.location.href = url
  }
}

// Utility functions
function showLoading(element) {
  element.innerHTML = '<span class="loading"></span>'
}

function hideLoading(element, originalContent) {
  element.innerHTML = originalContent
}

function showAlert(message, type = "info") {
  // Simple alert implementation
  alert(message)
}
