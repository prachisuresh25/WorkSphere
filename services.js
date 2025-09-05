// Services page functionality for WorkSphere

// Service categories only (no fake providers)
const serviceCategories = [
  {
    id: "cleaning",
    name: "Home Cleaning",
    description: "Professional house cleaning services",
    icon: "fas fa-home",
    basePrice: 500,
  },
  {
    id: "repair",
    name: "Home Repair",
    description: "Plumbing, electrical, and handyman services",
    icon: "fas fa-wrench",
    basePrice: 800,
  },
  {
    id: "tutoring",
    name: "Tutoring",
    description: "Academic support and skill development",
    icon: "fas fa-graduation-cap",
    basePrice: 300,
  },
  {
    id: "beauty",
    name: "Beauty Services",
    description: "Hair, makeup, and wellness services",
    icon: "fas fa-cut",
    basePrice: 600,
  },
  {
    id: "auto",
    name: "Auto Services",
    description: "Car maintenance and repair",
    icon: "fas fa-car",
    basePrice: 1000,
  },
  {
    id: "tech",
    name: "Tech Support",
    description: "Computer and device assistance",
    icon: "fas fa-laptop",
    basePrice: 700,
  },
]

let filteredCategories = [...serviceCategories]

document.addEventListener("DOMContentLoaded", () => {
  // Initialize services page
  initializeServicesPage()

  // Set up event listeners
  setupEventListeners()

  // Load URL parameters
  loadURLParameters()
})

function initializeServicesPage() {
  renderServices()
  updateResultsCount()
}

function setupEventListeners() {
  // Search functionality
  const serviceSearch = document.getElementById("serviceSearch")
  const locationSearch = document.getElementById("locationSearch")

  if (serviceSearch) {
    serviceSearch.addEventListener("input", debounce(filterServices, 300))
  }

  if (locationSearch) {
    locationSearch.addEventListener("input", debounce(filterServices, 300))
  }

  // Filter event listeners
  const categoryFilter = document.getElementById("categoryFilter")
  const priceFilter = document.getElementById("priceFilter")
  const ratingFilter = document.getElementById("ratingFilter")
  const sortFilter = document.getElementById("sortFilter")

  if (categoryFilter) categoryFilter.addEventListener("change", filterServices)
  if (priceFilter) priceFilter.addEventListener("change", filterServices)
  if (ratingFilter) ratingFilter.addEventListener("change", filterServices)
  if (sortFilter) sortFilter.addEventListener("change", filterServices)
}

function loadURLParameters() {
  const urlParams = new URLSearchParams(window.location.search)
  const searchTerm = urlParams.get("search")
  const location = urlParams.get("location")

  if (searchTerm) {
    const serviceSearch = document.getElementById("serviceSearch")
    if (serviceSearch) {
      serviceSearch.value = searchTerm
    }
  }

  if (location) {
    const locationSearch = document.getElementById("locationSearch")
    if (locationSearch) {
      locationSearch.value = location
    }
  }

  // Apply initial filters
  if (searchTerm || location) {
    filterServices()
  }
}

function filterServices() {
  const serviceSearch = document.getElementById("serviceSearch")?.value.toLowerCase() || ""
  const locationSearch = document.getElementById("locationSearch")?.value.toLowerCase() || ""
  const categoryFilter = document.getElementById("categoryFilter")?.value || ""
  const priceFilter = document.getElementById("priceFilter")?.value || ""
  const ratingFilter = document.getElementById("ratingFilter")?.value || ""
  const sortFilter = document.getElementById("sortFilter")?.value || "relevance"

  // Filter categories
  filteredCategories = serviceCategories.filter((category) => {
    // Search filter
    const matchesSearch =
      !serviceSearch ||
      category.name.toLowerCase().includes(serviceSearch) ||
      category.description.toLowerCase().includes(serviceSearch)

    // Location filter (for now, we'll just check if location is provided)
    const matchesLocation = !locationSearch || true // In real app, this would filter by actual location

    // Category filter
    const matchesCategory = !categoryFilter || category.id === categoryFilter

    // Price filter
    let matchesPrice = true
    if (priceFilter) {
      const price = category.basePrice
      switch (priceFilter) {
        case "0-500":
          matchesPrice = price <= 500
          break
        case "500-1000":
          matchesPrice = price > 500 && price <= 1000
          break
        case "1000-2000":
          matchesPrice = price > 1000 && price <= 2000
          break
        case "2000+":
          matchesPrice = price > 2000
          break
      }
    }

    return matchesSearch && matchesLocation && matchesCategory && matchesPrice
  })

  // Sort categories
  sortServices(sortFilter)

  // Render filtered results
  renderServices()
  updateResultsCount()
}

function sortServices(sortBy) {
  switch (sortBy) {
    case "price-low":
      filteredCategories.sort((a, b) => a.basePrice - b.basePrice)
      break
    case "price-high":
      filteredCategories.sort((a, b) => b.basePrice - a.basePrice)
      break
    case "rating":
      // For categories, we'll sort by name as a placeholder
      filteredCategories.sort((a, b) => a.name.localeCompare(b.name))
      break
    case "relevance":
    default:
      // Keep original order for relevance
      break
  }
}

function renderServices() {
  const servicesGrid = document.getElementById("servicesGrid")
  const noResults = document.getElementById("noResults")

  if (!servicesGrid) return

  if (filteredCategories.length === 0) {
    servicesGrid.innerHTML = ""
    if (noResults) noResults.style.display = "block"
    return
  }

  if (noResults) noResults.style.display = "none"

  servicesGrid.innerHTML = filteredCategories
    .map(
      (category) => `
        <div class="col-md-6 col-lg-4">
            <div class="provider-card">
                <div class="provider-info">
                    <div class="d-flex align-items-center mb-3">
                        <div class="service-icon me-3" style="width: 50px; height: 50px; font-size: 1.25rem;">
                            <i class="${category.icon}"></i>
                        </div>
                        <div>
                            <h5 class="provider-name mb-1">${category.name}</h5>
                            <p class="provider-service mb-0">${category.description}</p>
                        </div>
                    </div>
                    
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="provider-price">Starting from ₹${category.basePrice}</div>
                        <button class="btn btn-primary btn-sm" onclick="viewCategory('${category.id}')">
                            View Providers
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

function updateResultsCount() {
  const resultsCount = document.getElementById("resultsCount")
  if (resultsCount) {
    const count = filteredCategories.length

    if (count === 0) {
      resultsCount.textContent = "No services found"
    } else {
      resultsCount.textContent = `Showing ${count} service ${count === 1 ? "category" : "categories"}`
    }
  }
}

function clearFilters() {
  // Reset all filter inputs
  const inputs = ["serviceSearch", "locationSearch", "categoryFilter", "priceFilter", "ratingFilter"]
  inputs.forEach((id) => {
    const element = document.getElementById(id)
    if (element) {
      element.value = ""
    }
  })

  // Reset sort to relevance
  const sortFilter = document.getElementById("sortFilter")
  if (sortFilter) {
    sortFilter.value = "relevance"
  }

  // Reapply filters (which will show all categories)
  filterServices()
}

function searchServices() {
  filterServices()
}

function viewCategory(categoryId) {
  // In a real application, this would navigate to a detailed category page
  const category = serviceCategories.find((cat) => cat.id === categoryId)
  if (category) {
    alert(`${category.name} category selected. In a real application, this would show actual workers in this category.`)
  }
}

// Utility function for debouncing
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
