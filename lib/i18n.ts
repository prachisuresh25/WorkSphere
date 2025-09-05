export const languages = {
  en: { name: "English", flag: "🇺🇸" },
  hi: { name: "हिंदी", flag: "🇮🇳" },
  mr: { name: "मराठी", flag: "🇮🇳" },
}

export type Language = keyof typeof languages

export const translations = {
  en: {
    // Navigation
    home: "Home",
    services: "Services",
    howItWorks: "How It Works",
    complaints: "Complaints",
    login: "Login",
    signup: "Sign Up",

    // Hero Section
    heroTitle: "Find Trusted Local Services Near You",
    heroSubtitle:
      "Connect with skilled professionals for home repairs, cleaning, tutoring, and more. Quality service providers at your fingertips.",
    searchPlaceholder: "What service do you need?",
    locationPlaceholder: "Enter your location",
    searchButton: "Search",
    browseServices: "Browse Services",
    joinAsProvider: "Join as Service Provider",

    // Services
    popularServices: "Popular Services",
    homeCleaning: "Home Cleaning",
    homeRepairs: "Home Repairs",
    beautyServices: "Beauty Services",
    tutoring: "Tutoring",
    autoServices: "Auto Services",
    petCare: "Pet Care",
    photography: "Photography",
    catering: "Catering",

    // How It Works
    howItWorksTitle: "How ServiceSphere Works",
    searchAndBrowse: "Search & Browse",
    compareAndChoose: "Compare & Choose",
    bookAndReview: "Book & Review",

    // Footer
    quickLinks: "Quick Links",
    support: "Support",
    contactUs: "Contact Us",

    // Authentication
    signInTitle: "Sign in to your account",
    createAccountTitle: "Create your account",
    emailAddress: "Email Address",
    password: "Password",
    confirmPassword: "Confirm Password",
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    accountType: "Account Type",
    customer: "Customer (Looking for services)",
    provider: "Service Provider (Offering services)",

    // Complaints
    fileComplaint: "File a Complaint",
    complaintType: "Complaint Type",
    serviceProvider: "Service Provider Name",
    bookingId: "Booking ID",
    subject: "Subject",
    description: "Detailed Description",
    priority: "Priority Level",
    submitComplaint: "Submit Complaint",

    // Common
    loading: "Loading...",
    save: "Save",
    cancel: "Cancel",
    edit: "Edit",
    delete: "Delete",
    view: "View",
    book: "Book",
    contact: "Contact",
    rating: "Rating",
    reviews: "Reviews",
    location: "Location",
    price: "Price",
    availability: "Availability",
  },

  hi: {
    // Navigation
    home: "होम",
    services: "सेवाएं",
    howItWorks: "यह कैसे काम करता है",
    complaints: "शिकायतें",
    login: "लॉगिन",
    signup: "साइन अप",

    // Hero Section
    heroTitle: "अपने पास विश्वसनीय स्थानीय सेवाएं खोजें",
    heroSubtitle: "घर की मरम्मत, सफाई, ट्यूशन और अन्य के लिए कुशल पेशेवरों से जुड़ें। गुणवत्तापूर्ण सेवा प्रदाता आपकी उंगलियों पर।",
    searchPlaceholder: "आपको किस सेवा की आवश्यकता है?",
    locationPlaceholder: "अपना स्थान दर्ज करें",
    searchButton: "खोजें",
    browseServices: "सेवाएं ब्राउज़ करें",
    joinAsProvider: "सेवा प्रदाता के रूप में जुड़ें",

    // Services
    popularServices: "लोकप्रिय सेवाएं",
    homeCleaning: "घर की सफाई",
    homeRepairs: "घर की मरम्मत",
    beautyServices: "सौंदर्य सेवाएं",
    tutoring: "ट्यूशन",
    autoServices: "ऑटो सेवाएं",
    petCare: "पालतू जानवरों की देखभाल",
    photography: "फोटोग्राफी",
    catering: "कैटरिंग",

    // How It Works
    howItWorksTitle: "ServiceSphere कैसे काम करता है",
    searchAndBrowse: "खोजें और ब्राउज़ करें",
    compareAndChoose: "तुलना करें और चुनें",
    bookAndReview: "बुक करें और समीक्षा करें",

    // Footer
    quickLinks: "त्वरित लिंक",
    support: "सहायता",
    contactUs: "संपर्क करें",

    // Authentication
    signInTitle: "अपने खाते में साइन इन करें",
    createAccountTitle: "अपना खाता बनाएं",
    emailAddress: "ईमेल पता",
    password: "पासवर्ड",
    confirmPassword: "पासवर्ड की पुष्टि करें",
    fullName: "पूरा नाम",
    phoneNumber: "फोन नंबर",
    accountType: "खाता प्रकार",
    customer: "ग्राहक (सेवाओं की तलाश में)",
    provider: "सेवा प्रदाता (सेवाएं प्रदान करना)",

    // Complaints
    fileComplaint: "शिकायत दर्ज करें",
    complaintType: "शिकायत का प्रकार",
    serviceProvider: "सेवा प्रदाता का नाम",
    bookingId: "बुकिंग आईडी",
    subject: "विषय",
    description: "विस्तृत विवरण",
    priority: "प्राथमिकता स्तर",
    submitComplaint: "शिकायत जमा करें",

    // Common
    loading: "लोड हो रहा है...",
    save: "सेव करें",
    cancel: "रद्द करें",
    edit: "संपादित करें",
    delete: "हटाएं",
    view: "देखें",
    book: "बुक करें",
    contact: "संपर्क करें",
    rating: "रेटिंग",
    reviews: "समीक्षाएं",
    location: "स्थान",
    price: "मूल्य",
    availability: "उपलब्धता",
  },

  mr: {
    // Navigation
    home: "होम",
    services: "सेवा",
    howItWorks: "हे कसे काम करते",
    complaints: "तक्रारी",
    login: "लॉगिन",
    signup: "साइन अप",

    // Hero Section
    heroTitle: "तुमच्या जवळ विश्वसनीय स्थानिक सेवा शोधा",
    heroSubtitle:
      "घराची दुरुस्ती, साफसफाई, शिकवणी आणि इतर गोष्टींसाठी कुशल व्यावसायिकांशी जुडा. दर्जेदार सेवा प्रदाते तुमच्या बोटांच्या टोकावर.",
    searchPlaceholder: "तुम्हाला कोणत्या सेवेची गरज आहे?",
    locationPlaceholder: "तुमचे स्थान प्रविष्ट करा",
    searchButton: "शोधा",
    browseServices: "सेवा ब्राउझ करा",
    joinAsProvider: "सेवा प्रदाता म्हणून सामील व्हा",

    // Services
    popularServices: "लोकप्रिय सेवा",
    homeCleaning: "घर साफसफाई",
    homeRepairs: "घराची दुरुस्ती",
    beautyServices: "सौंदर्य सेवा",
    tutoring: "शिकवणी",
    autoServices: "ऑटो सेवा",
    petCare: "पाळीव प्राण्यांची काळजी",
    photography: "फोटोग्राफी",
    catering: "कॅटरिंग",

    // How It Works
    howItWorksTitle: "ServiceSphere कसे काम करते",
    searchAndBrowse: "शोधा आणि ब्राउझ करा",
    compareAndChoose: "तुलना करा आणि निवडा",
    bookAndReview: "बुक करा आणि पुनरावलोकन करा",

    // Footer
    quickLinks: "द्रुत दुवे",
    support: "समर्थन",
    contactUs: "आमच्याशी संपर्क साधा",

    // Authentication
    signInTitle: "तुमच्या खात्यात साइन इन करा",
    createAccountTitle: "तुमचे खाते तयार करा",
    emailAddress: "ईमेल पत्ता",
    password: "पासवर्ड",
    confirmPassword: "पासवर्डची पुष्टी करा",
    fullName: "पूर्ण नाव",
    phoneNumber: "फोन नंबर",
    accountType: "खाते प्रकार",
    customer: "ग्राहक (सेवा शोधत आहे)",
    provider: "सेवा प्रदाता (सेवा प्रदान करणे)",

    // Complaints
    fileComplaint: "तक्रार नोंदवा",
    complaintType: "तक्रारीचा प्रकार",
    serviceProvider: "सेवा प्रदात्याचे नाव",
    bookingId: "बुकिंग आयडी",
    subject: "विषय",
    description: "तपशीलवार वर्णन",
    priority: "प्राधान्य स्तर",
    submitComplaint: "तक्रार सबमिट करा",

    // Common
    loading: "लोड होत आहे...",
    save: "जतन करा",
    cancel: "रद्द करा",
    edit: "संपादित करा",
    delete: "हटवा",
    view: "पहा",
    book: "बुक करा",
    contact: "संपर्क करा",
    rating: "रेटिंग",
    reviews: "पुनरावलोकने",
    location: "स्थान",
    price: "किंमत",
    availability: "उपलब्धता",
  },
}

export function getTranslation(key: string, lang: Language = "en"): string {
  const keys = key.split(".")
  let value: any = translations[lang]

  for (const k of keys) {
    value = value?.[k]
  }

  return value || translations.en[key as keyof typeof translations.en] || key
}
