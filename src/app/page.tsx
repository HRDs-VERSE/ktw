"use client"

import type React from "react"

import { useState } from "react"
import {
  ChevronDownIcon,
  ChevronUpIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  CarIcon,
  StarIcon,
  CheckCircleIcon,
  ClockIcon,
  ShieldCheckIcon,
  UsersIcon,
  AwardIcon,
  NavigationIcon,
  CameraIcon,
  CalendarIcon,
  MessageCircleIcon,
  GlobeIcon,
  CreditCardIcon,
  WifiIcon,
  AirplayIcon,
  MapIcon,
} from "lucide-react"
import Link from "next/link"

// Destinations data organized by state with more details
const destinationsByState = {
  Uttarakhand: {
    description: "The Land of Gods - Experience spiritual journeys and mountain adventures",
    destinations: [
      {
        name: "Jaipur",
        distance: "280 km",
        duration: "5-6 hours",
        highlights: ["Pink City", "Amber Fort", "City Palace"],
      },
      {
        name: "Haridwar",
        distance: "220 km",
        duration: "4-5 hours",
        highlights: ["Ganga Aarti", "Har Ki Pauri", "Temples"],
      },
      {
        name: "Dehradun",
        distance: "250 km",
        duration: "5 hours",
        highlights: ["Capital City", "Pleasant Weather", "Gateway to Hills"],
      },
      {
        name: "Rishikesh",
        distance: "240 km",
        duration: "5 hours",
        highlights: ["Yoga Capital", "Adventure Sports", "Spiritual Retreat"],
      },
      {
        name: "Chakrata",
        distance: "320 km",
        duration: "7 hours",
        highlights: ["Hill Station", "Tiger Falls", "Peaceful Environment"],
      },
      {
        name: "Chopta",
        distance: "460 km",
        duration: "10 hours",
        highlights: ["Mini Switzerland", "Tungnath Temple", "Trekking"],
      },
      {
        name: "Kedarnath",
        distance: "480 km",
        duration: "12 hours",
        highlights: ["Sacred Temple", "Pilgrimage", "Mountain Views"],
      },
      {
        name: "Auli",
        distance: "500 km",
        duration: "12 hours",
        highlights: ["Skiing Destination", "Cable Car", "Snow Activities"],
      },
      {
        name: "Badrinath",
        distance: "520 km",
        duration: "13 hours",
        highlights: ["Holy Shrine", "Char Dham", "Spiritual Journey"],
      },
      {
        name: "Mussoorie",
        distance: "290 km",
        duration: "6 hours",
        highlights: ["Queen of Hills", "Mall Road", "Scenic Beauty"],
      },
      {
        name: "Haldwani",
        distance: "300 km",
        duration: "6 hours",
        highlights: ["Gateway to Kumaon", "Commercial Hub", "Pleasant Climate"],
      },
      {
        name: "Jim Corbett",
        distance: "250 km",
        duration: "5 hours",
        highlights: ["National Park", "Wildlife Safari", "Tiger Reserve"],
      },
      {
        name: "Nainital",
        distance: "320 km",
        duration: "7 hours",
        highlights: ["Lake City", "Naini Lake", "Hill Station"],
      },
      {
        name: "Kaichi Dhaam Mukteshwar",
        distance: "350 km",
        duration: "8 hours",
        highlights: ["Spiritual Place", "Mountain Views", "Peaceful"],
      },
      {
        name: "Kausani",
        distance: "380 km",
        duration: "8 hours",
        highlights: ["Switzerland of India", "Himalayan Views", "Tea Gardens"],
      },
    ],
  },
  "Himachal Pradesh": {
    description: "Land of Snow - Discover pristine mountains and adventure destinations",
    destinations: [
      {
        name: "Shimla",
        distance: "350 km",
        duration: "7 hours",
        highlights: ["Summer Capital", "Mall Road", "Toy Train"],
      },
      {
        name: "Manali",
        distance: "540 km",
        duration: "12 hours",
        highlights: ["Adventure Hub", "Rohtang Pass", "Solang Valley"],
      },
      {
        name: "Kasol",
        distance: "520 km",
        duration: "11 hours",
        highlights: ["Mini Israel", "Parvati Valley", "Trekking Base"],
      },
      {
        name: "Jibhi",
        distance: "480 km",
        duration: "10 hours",
        highlights: ["Hidden Gem", "Waterfall", "Peaceful Valley"],
      },
      {
        name: "Dharamshala",
        distance: "480 km",
        duration: "10 hours",
        highlights: ["Dalai Lama Residence", "McLeod Ganj", "Tibetan Culture"],
      },
      {
        name: "Una",
        distance: "380 km",
        duration: "8 hours",
        highlights: ["Industrial Town", "Chintpurni Temple", "Religious Site"],
      },
      {
        name: "Hamirpur",
        distance: "420 km",
        duration: "9 hours",
        highlights: ["Educational Hub", "Temples", "Cultural Heritage"],
      },
      {
        name: "Chintpurni",
        distance: "400 km",
        duration: "8 hours",
        highlights: ["Shakti Peetha", "Religious Tourism", "Temple Town"],
      },
      {
        name: "Jwala Ji Temple",
        distance: "450 km",
        duration: "9 hours",
        highlights: ["Eternal Flame", "Sacred Site", "Pilgrimage"],
      },
      {
        name: "Kalka",
        distance: "300 km",
        duration: "6 hours",
        highlights: ["Toy Train Start", "Gateway to Hills", "Railway Junction"],
      },
      {
        name: "Solan",
        distance: "320 km",
        duration: "6 hours",
        highlights: ["Mushroom City", "Brewery", "Hill Station"],
      },
      {
        name: "Dalhousie",
        distance: "580 km",
        duration: "12 hours",
        highlights: ["Colonial Charm", "Khajjiar", "Pine Forests"],
      },
    ],
  },
  "Uttar Pradesh": {
    description: "Heart of India - Explore rich heritage, culture, and historical monuments",
    destinations: [
      {
        name: "Agra",
        distance: "200 km",
        duration: "3-4 hours",
        highlights: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri"],
      },
      {
        name: "Vrindavan",
        distance: "150 km",
        duration: "3 hours",
        highlights: ["Krishna Birthplace", "Temples", "Spiritual Journey"],
      },
      {
        name: "Mathura",
        distance: "145 km",
        duration: "3 hours",
        highlights: ["Krishna Janmabhoomi", "Holy City", "Religious Tourism"],
      },
      {
        name: "Firozabad",
        distance: "200 km",
        duration: "4 hours",
        highlights: ["Glass City", "Industrial Hub", "Handicrafts"],
      },
      {
        name: "Kanpur",
        distance: "450 km",
        duration: "8 hours",
        highlights: ["Industrial City", "Ganga Ghat", "Commercial Hub"],
      },
      {
        name: "Lucknow",
        distance: "550 km",
        duration: "10 hours",
        highlights: ["City of Nawabs", "Cuisine", "Cultural Heritage"],
      },
      {
        name: "Ayodhya",
        distance: "650 km",
        duration: "12 hours",
        highlights: ["Ram Janmabhoomi", "Sacred City", "Pilgrimage"],
      },
      {
        name: "Banaras",
        distance: "800 km",
        duration: "14 hours",
        highlights: ["Varanasi", "Ganga Aarti", "Spiritual Capital"],
      },
      {
        name: "Aligarh",
        distance: "130 km",
        duration: "2.5 hours",
        highlights: ["University Town", "Educational Hub", "Historical City"],
      },
      {
        name: "Moradabad",
        distance: "170 km",
        duration: "3 hours",
        highlights: ["Brass City", "Handicrafts", "Industrial Center"],
      },
      {
        name: "Bareilly",
        distance: "250 km",
        duration: "5 hours",
        highlights: ["Furniture Hub", "Historical City", "Cultural Center"],
      },
    ],
  },
  Rajasthan: {
    description: "Land of Kings - Experience royal heritage, desert adventures, and magnificent palaces",
    destinations: [
      {
        name: "Jaipur",
        distance: "280 km",
        duration: "5 hours",
        highlights: ["Pink City", "Amber Fort", "City Palace"],
      },
      {
        name: "Khathu Shyam Ji",
        distance: "320 km",
        duration: "6 hours",
        highlights: ["Sacred Temple", "Religious Tourism", "Pilgrimage"],
      },
      {
        name: "Birla Pilani",
        distance: "250 km",
        duration: "5 hours",
        highlights: ["Educational Hub", "BITS Pilani", "Academic Excellence"],
      },
      {
        name: "Udaipur",
        distance: "650 km",
        duration: "12 hours",
        highlights: ["City of Lakes", "Lake Palace", "Romantic Destination"],
      },
      {
        name: "Ajmer",
        distance: "400 km",
        duration: "7 hours",
        highlights: ["Ajmer Sharif", "Sufi Culture", "Religious Harmony"],
      },
    ],
  },
  Punjab: {
    description: "Land of Five Rivers - Discover Sikh heritage, golden temples, and vibrant culture",
    destinations: [
      {
        name: "Chandigarh",
        distance: "250 km",
        duration: "5 hours",
        highlights: ["Planned City", "Rock Garden", "Modern Architecture"],
      },
      {
        name: "Zirakpur",
        distance: "240 km",
        duration: "4.5 hours",
        highlights: ["Satellite Town", "Industrial Hub", "Residential Area"],
      },
      {
        name: "Patiala",
        distance: "250 km",
        duration: "5 hours",
        highlights: ["Royal Heritage", "Qila Mubarak", "Cultural Center"],
      },
      {
        name: "Mansa",
        distance: "280 km",
        duration: "6 hours",
        highlights: ["Agricultural Hub", "Rural Tourism", "Peaceful Town"],
      },
      {
        name: "Ludhiana",
        distance: "300 km",
        duration: "6 hours",
        highlights: ["Industrial City", "Textile Hub", "Commercial Center"],
      },
      {
        name: "Khanna",
        distance: "320 km",
        duration: "6.5 hours",
        highlights: ["Industrial Town", "Paper Mills", "Business Hub"],
      },
      {
        name: "Jalandhar",
        distance: "350 km",
        duration: "7 hours",
        highlights: ["Sports Goods", "Industrial City", "Cultural Heritage"],
      },
      {
        name: "Amritsar",
        distance: "450 km",
        duration: "8 hours",
        highlights: ["Golden Temple", "Wagah Border", "Sikh Heritage"],
      },
      {
        name: "Bathinda",
        distance: "250 km",
        duration: "5 hours",
        highlights: ["Historical City", "Qila Mubarak", "Agricultural Center"],
      },
      {
        name: "Jammu",
        distance: "580 km",
        duration: "12 hours",
        highlights: ["Winter Capital", "Vaishno Devi", "Pilgrimage Base"],
      },
    ],
  },
  Haryana: {
    description: "Gateway to North India - Experience agricultural prosperity and modern development",
    destinations: [
      {
        name: "Ambala",
        distance: "200 km",
        duration: "4 hours",
        highlights: ["Cantonment Town", "Railway Junction", "Historical Significance"],
      },
      {
        name: "Rohtak",
        distance: "70 km",
        duration: "1.5 hours",
        highlights: ["Educational Hub", "Agricultural Center", "Sports Culture"],
      },
      {
        name: "Hisar",
        distance: "170 km",
        duration: "3.5 hours",
        highlights: ["Steel City", "Agricultural University", "Industrial Hub"],
      },
      {
        name: "Rewari",
        distance: "90 km",
        duration: "2 hours",
        highlights: ["Heritage Steam Loco", "Railway Museum", "Historical Town"],
      },
      {
        name: "Panipat",
        distance: "90 km",
        duration: "2 hours",
        highlights: ["Textile Hub", "Historical Battles", "Industrial City"],
      },
      {
        name: "Sonipat",
        distance: "50 km",
        duration: "1 hour",
        highlights: ["Educational Hub", "Industrial Growth", "Satellite City"],
      },
      {
        name: "Karnal",
        distance: "130 km",
        duration: "2.5 hours",
        highlights: ["Rice Bowl", "Agricultural Research", "Green Revolution"],
      },
      {
        name: "Yamuna Nagar",
        distance: "170 km",
        duration: "3.5 hours",
        highlights: ["Plywood Hub", "Industrial Town", "River Yamuna"],
      },
    ],
  },
}

// Enhanced tour packages with more details
const tourPackages = [
  {
    title: "Delhi to Manali Adventure",
    description:
      "Experience the scenic beauty of Manali with comfortable taxi service from Delhi. Enjoy snow-capped mountains, adventure sports, and local culture.",
    image: "https://images.unsplash.com/photo-1655470062377-ef3f5161960a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "3-5 Days",
    price: "₹15,000 - ₹25,000",
    highlights: ["Rohtang Pass", "Solang Valley", "Hadimba Temple", "Mall Road"],
    bestTime: "March to June, October to February",
    activities: ["Paragliding", "River Rafting", "Skiing", "Trekking"],
  },
  {
    title: "Delhi to Chopta Mini Switzerland",
    description:
      "Discover the mini Switzerland of India with our reliable transport service. Perfect for nature lovers and trekking enthusiasts.",
    image: "https://images.unsplash.com/photo-1547452377-b2ac40e02ed6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "2-4 Days",
    price: "₹12,000 - ₹20,000",
    highlights: ["Tungnath Temple", "Chandrashila Peak", "Deoria Tal", "Ukhimath"],
    bestTime: "April to November",
    activities: ["Trekking", "Photography", "Camping", "Bird Watching"],
  },
  {
    title: "Delhi to Agra Heritage Tour",
    description:
      "Visit the iconic Taj Mahal and explore the historical city of Agra. Experience Mughal architecture and rich cultural heritage.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "1-2 Days",
    price: "₹8,000 - ₹15,000",
    highlights: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Mehtab Bagh"],
    bestTime: "October to March",
    activities: ["Heritage Walk", "Photography", "Shopping", "Cultural Tours"],
  },
  {
    title: "Delhi to Rishikesh-Haridwar Spiritual Journey",
    description:
      "Spiritual journey to the yoga capital and holy city of Haridwar. Experience divine peace and adventure activities.",
    image: "https://images.unsplash.com/photo-1511754863001-18d44abd0a93?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "2-3 Days",
    price: "₹10,000 - ₹18,000",
    highlights: ["Ganga Aarti", "Laxman Jhula", "Beatles Ashram", "Har Ki Pauri"],
    bestTime: "September to April",
    activities: ["Yoga", "River Rafting", "Bungee Jumping", "Meditation"],
  },
  {
    title: "Delhi Airport Premium Transfer",
    description:
      "Convenient and reliable airport transfer service for your travel needs. Professional drivers and comfortable vehicles.",
    image: "https://images.unsplash.com/photo-1619878795791-53b2e88f7c5f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "As per flight",
    price: "₹1,500 - ₹3,000",
    highlights: ["24/7 Service", "Flight Tracking", "Meet & Greet", "Luggage Assistance"],
    bestTime: "Year Round",
    activities: ["Airport Pickup", "City Drop", "Hotel Transfer", "Flight Assistance"],
  },
  {
    title: "Corporate Taxi Service Delhi-Gurgaon",
    description:
      "Professional taxi service for corporate clients in Delhi-Gurgaon corridor. Reliable, punctual, and comfortable business travel.",
    image: "https://images.unsplash.com/photo-1490650404312-a2175773bbf5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "Hourly/Daily",
    price: "₹2,000 - ₹5,000/day",
    highlights: ["Professional Drivers", "Clean Vehicles", "Punctual Service", "Corporate Billing"],
    bestTime: "Year Round",
    activities: ["Business Meetings", "Airport Transfers", "Client Visits", "Conference Transport"],
  },
  {
    title: "Delhi Sightseeing Complete Tour",
    description:
      "Explore India Gate, Red Fort, Qutub Minar, Lotus Temple, and Humayun's Tomb with our comprehensive city tour package.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "Full Day",
    price: "₹3,000 - ₹6,000",
    highlights: ["India Gate", "Red Fort", "Qutub Minar", "Lotus Temple", "Humayun's Tomb"],
    bestTime: "October to March",
    activities: ["Heritage Tours", "Photography", "Cultural Experience", "Local Cuisine"],
  },
  {
    title: "Golden Triangle Tour",
    description:
      "Experience Delhi, Agra, and Jaipur in one comprehensive tour. Perfect introduction to India's rich heritage and culture.",
    image: "https://media.holidify.com/images/bgImages/GOLDEN-TRIANGLE-INDIA.jpg",
    duration: "5-7 Days",
    price: "₹25,000 - ₹45,000",
    highlights: ["Delhi Monuments", "Taj Mahal", "Amber Fort", "City Palace"],
    bestTime: "October to March",
    activities: ["Heritage Tours", "Cultural Shows", "Shopping", "Local Cuisine"],
  },
]

// Testimonials data
const testimonials = [
  {
    name: "Sheshadri singh",
    location: "Delhi",
    rating: 5,
    comment:
      "If you're looking for a dog-friendly cab service, I highly recommend services ! As a dog owner, it's always a...",
    trip: "Delhi",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUbI_UrgQX5gdOaGYEUiZmvxJFz599CBHWvjerfLB67cfk8Ue5j=w90-h90-p-rp-mo-ba2-br100",
  },
  {
    name: "Deepak Sharma",
    location: "Delhi",
    rating: 5,
    comment:
      "Made our Delhi to Agra trip stress-free and enjoyable. The driver was punctual, and the transparent pricing meant...",
    trip: "Delhi to Agra",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVnHvebFABqxDKo4emp3ayEGcse75NUesexCLrrWdrfwfMN2imb=w90-h90-p-rp-mo-br100",
  },
  {
    name: "Sanket Dwivedi",
    location: "Delhi",
    rating: 5,
    comment:
      "Our family trip from Delhi to Rishikesh was fantastic with KTW. Spacious vehicle, courteous driver, and smooth booking ...",
    trip: "Delhi to Rishikesh",
    image: "https://lh3.googleusercontent.com/a/ACg8ocIwgZyId2kZkoqUO9hLQv7Jz65BmGdJw6kqihamIjq7qJqYww=w90-h90-p-rp-mo-br100",
  },
  {
    name: "Vedansh",
    location: "Delhi",
    rating: 5,
    comment:
      "Literally best and most affordable service in the market. A good and polite host with all time availability. Enjoyed the trip and it was really very comfortable...",
    trip: "Delhi",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVlG2sUP5gNUJFLtVYfePkbf39AflvVIq6QBTuAU1rJArd34RQq=w90-h90-p-rp-mo-br100",
  },
]

// FAQ data
const faqs = [
  {
    question: "What types of vehicles do you provide?",
    answer:
      "We offer a wide range of vehicles including sedans, SUVs, tempo travelers, and luxury cars. All vehicles are well-maintained, air-conditioned, and driven by experienced drivers.",
  },
  {
    question: "Are your drivers experienced and licensed?",
    answer:
      "Yes, all our drivers are experienced, licensed, and well-trained. They have extensive knowledge of routes and local attractions, ensuring a safe and informative journey.",
  },
  {
    question: "Do you provide 24/7 service?",
    answer:
      "Yes, we provide round-the-clock service including airport transfers, emergency travel, and long-distance trips. Our customer support is available 24/7.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We offer flexible cancellation policies. For local trips, you can cancel up to 2 hours before departure. For outstation trips, cancellation is allowed up to 24 hours before departure with minimal charges.",
  },
  {
    question: "Do you provide tour guides?",
    answer:
      "Yes, we can arrange experienced tour guides for sightseeing trips and heritage tours. Our guides are knowledgeable about local history, culture, and attractions.",
  },
  {
    question: "What safety measures do you follow?",
    answer:
      "We follow strict safety protocols including regular vehicle maintenance, GPS tracking, driver background verification, and 24/7 monitoring. All vehicles are equipped with first aid kits and emergency contact numbers.",
  },
]

// Header Component with enhanced design
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-xl sticky top-0 z-50 border-b border-blue-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div>
              <h1 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                KRIDHA TRAVEL WORLD
              </h1>
              <p className="text-sm text-gray-600 hidden md:block">Your Trusted Travel Partner</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Services", id: "services" },
              { name: "Destinations", id: "destinations" },
              { name: "Packages", id: "packages" },
              { name: "Testimonials", id: "testimonials" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
              ></span>
              <span
                className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              {[
                { name: "Home", id: "home" },
                { name: "About", id: "about" },
                { name: "Services", id: "services" },
                { name: "Destinations", id: "destinations" },
                { name: "Packages", id: "packages" },
                { name: "Testimonials", id: "testimonials" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-blue-600 transition-colors py-2 text-left font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

// Enhanced Hero Section
function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToPackages = () => {
    const element = document.getElementById("packages")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-24 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Explore India with
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              KRIDHA TRAVEL WORLD
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Your trusted partner for comfortable taxi services and unforgettable tour packages across India. Experience
            the beauty, culture, and heritage of incredible India with our premium travel services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book Your Journey Now
            </button>
            <button
              onClick={scrollToPackages}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-800 transition-all"
            >
              Explore Packages
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-blue-200">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-blue-200">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">5+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-blue-200">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// About Us Section
function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About KRIDHA TRAVEL WORLD</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a premier travel service provider dedicated to making your journey comfortable, safe, and
              memorable. With years of experience in the travel industry, we have built a reputation for excellence and
              reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to provide exceptional travel experiences, KRIDHA TRAVEL WORLD has been serving
                travelers across India for over 5 years. We started as a small taxi service in Delhi and have grown into
                a comprehensive travel solution provider.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our commitment to quality service, customer satisfaction, and safety has made us the preferred choice
                for thousands of travelers. We believe that every journey should be comfortable, safe, and enriching.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Experienced Drivers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* <img
                src="/placeholder.svg?height=400&width=500&text=Travel+Team"
                alt="Our Team"
                className="rounded-lg shadow-xl"
              /> */}
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <AwardIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide safe, comfortable, and reliable travel services that exceed customer expectations. We strive
                to make every journey a pleasant experience while promoting responsible tourism.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="bg-orange-600 p-3 rounded-lg mr-4">
                  <GlobeIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To become India's most trusted travel partner, connecting people to incredible destinations while
                contributing to sustainable tourism and local community development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: <CarIcon className="h-8 w-8" />,
      title: "Taxi Services",
      description: "Comfortable and reliable taxi services for local and outstation trips with experienced drivers.",
      features: ["AC Vehicles", "GPS Tracking", "24/7 Availability", "Competitive Rates"],
    },
    {
      icon: <MapIcon className="h-8 w-8" />,
      title: "Tour Packages",
      description: "Customized tour packages to popular destinations across India with complete travel solutions.",
      features: ["Custom Itineraries", "Hotel Bookings", "Sightseeing", "Local Guides"],
    },
    {
      icon: <AirplayIcon className="h-8 w-8" />,
      title: "Airport Transfers",
      description: "Hassle-free airport pickup and drop services with flight tracking and meet & greet facility.",
      features: ["Flight Tracking", "Meet & Greet", "Luggage Assistance", "On-time Service"],
    },
    {
      icon: <UsersIcon className="h-8 w-8" />,
      title: "Corporate Services",
      description: "Professional transportation solutions for corporate clients with dedicated account management.",
      features: ["Corporate Billing", "Priority Booking", "Professional Drivers", "Fleet Management"],
    },
    {
      icon: <ClockIcon className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your travel needs and emergency assistance.",
      features: ["Emergency Support", "Live Tracking", "Customer Care", "Instant Booking"],
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      title: "Safety & Security",
      description: "Comprehensive safety measures including driver verification, vehicle maintenance, and insurance.",
      features: ["Driver Verification", "Vehicle Maintenance", "Insurance Coverage", "Safety Protocols"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive travel solutions designed to meet all your transportation and tour needs with the
            highest standards of service and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 group">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 rounded-lg inline-block mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Enhanced Destinations Section
function DestinationsSection() {
  const [openState, setOpenState] = useState<string | null>(null)

  const toggleState = (state: string) => {
    setOpenState(openState === state ? null : state)
  }

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Destinations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore incredible destinations across India with our comfortable taxi services. From spiritual journeys to
            adventure trips, we cover all major tourist destinations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {Object.entries(destinationsByState).map(([state, stateData]) => (
            <div key={state} className="mb-6">
              <button
                onClick={() => toggleState(state)}
                className="w-full bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 flex justify-between items-center hover:from-blue-100 hover:to-blue-200 transition-all shadow-md hover:shadow-lg"
              >
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{state}</h3>
                  <p className="text-gray-600">{stateData.description}</p>
                </div>
                {openState === state ? (
                  <ChevronUpIcon className="h-8 w-8 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDownIcon className="h-8 w-8 text-blue-600 flex-shrink-0" />
                )}
              </button>

              {openState === state && (
                <div className="bg-white border-l-4 border-blue-600 rounded-b-xl shadow-lg mt-2 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stateData.destinations.map((destination, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200"
                      >
                        <div className="flex items-start space-x-3 mb-3">
                          <MapPinIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold text-gray-800">Delhi to {destination.name}</h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                              <span className="flex items-center space-x-1">
                                <NavigationIcon className="h-3 w-3" />
                                <span>{destination.distance}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <ClockIcon className="h-3 w-3" />
                                <span>{destination.duration}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          {destination.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1 mb-1"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Enhanced Tour Packages Section
function TourPackagesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="packages" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Tour Packages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover India's incredible destinations with our carefully crafted tour packages. Each package includes
            comfortable transportation, expert guidance, and unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tourPackages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-full text-sm font-semibold text-blue-600">
                  {pkg.duration}
                </div>
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {pkg.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{pkg.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {highlight}
                      </span>
                    ))}
                    {pkg.highlights.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        +{pkg.highlights.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span className="flex items-center space-x-1">
                      <CalendarIcon className="h-4 w-4" />
                      <span>Best Time:</span>
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">{pkg.bestTime}</p>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">(4.8/5)</span>
                </div>

                <button
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all font-semibold shadow-md hover:shadow-lg"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: <ShieldCheckIcon color="black" className="h-12 w-12" />,
      title: "Safety First",
      description: "All our vehicles are regularly maintained and drivers are thoroughly verified for your safety.",
    },
    {
      icon: <ClockIcon color="black" className="h-12 w-12" />,
      title: "24/7 Service",
      description: "Round-the-clock availability for all your travel needs, including emergency services.",
    },
    {
      icon: <CreditCardIcon color="black" className="h-12 w-12" />,
      title: "Flexible Payment",
      description: "Multiple payment options including cash, card, UPI, and corporate billing facilities.",
    },
    {
      icon: <WifiIcon color="black" className="h-12 w-12" />,
      title: "GPS Tracking",
      description: "Real-time GPS tracking for all vehicles ensuring transparency and safety.",
    },
    {
      icon: <UsersIcon color="black" className="h-12 w-12" />,
      title: "Expert Drivers",
      description: "Experienced and courteous drivers with extensive knowledge of routes and destinations.",
    },
    {
      icon: <AwardIcon color="black" className="h-12 w-12" />,
      title: "Quality Assurance",
      description: "Commitment to excellence with regular quality checks and customer feedback integration.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We are committed to providing exceptional travel experiences with the highest standards of service, safety,
            and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white bg-opacity-10 p-6 rounded-full inline-block mb-6 group-hover:bg-opacity-20 transition-all">
                <div className="text-white group-hover:scale-110 transition-transform">{feature.icon}</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-blue-100 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers have to say about their travel
            experiences with KRIDHA TRAVEL WORLD.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-3 leading-relaxed text-sm">"{testimonial.comment}"</p>

              <div className="text-xs text-blue-600 font-semibold">Trip: {testimonial.trip}</div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 max-w-md mx-auto">
            <div className="text-4xl font-bold mb-2">4.9/5</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-blue-100">Based on 315+ customer reviews</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our services, booking process, and travel policies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-white border border-gray-200 rounded-lg p-6 flex justify-between items-center hover:bg-gray-50 transition-colors shadow-sm text-left"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                {openFAQ === index ? (
                  <ChevronUpIcon className="h-6 w-6 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6 text-blue-600 flex-shrink-0" />
                )}
              </button>

              {openFAQ === index && (
                <div className="bg-white border-l border-r border-b border-gray-200 rounded-b-lg p-6 mt-0">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Gallery Section
function GallerySection() {
  const galleryImages = [
    {
      src: "https://media1.thrillophilia.com/filestore/wfx721jw4rfqw4ozhjx5c4741bkn_1563352774_rafting2.jpg?w=600&dpr=1.3",
      alt: "Manali Adventure",
      title: "Manali Adventure",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1697730352959-a77dac39c883?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Taj Mahal Visit",
      title: "Taj Mahal Heritage Tour",
    },
    {
      src: "https://images.unsplash.com/photo-1709623868300-e3b78cad10e1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Rishikesh Spiritual",
      title: "Rishikesh Spiritual Journey",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661962404003-e0ca40da40ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Jaipur Palace",
      title: "Jaipur Royal Experience",
    },
    {
      src: "https://images.unsplash.com/photo-1641735735000-c9719ac2740b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Shimla Hills",
      title: "Shimla Hill Station",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1697730331435-92e07494db43?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Golden Temple",
      title: "Amritsar Golden Temple",
    },
    {
      src: "https://images.unsplash.com/photo-1599208912391-fe821096b980?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Nainital Lake",
      title: "Nainital Lake City",
    },
    {
      src: "https://images.unsplash.com/photo-1706961121527-4017856774c7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Udaipur Palace",
      title: "Udaipur City of Lakes",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Travel Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore the beautiful destinations and memorable moments captured during our tours. Get inspired for your
            next adventure with KRIDHA TRAVEL WORLD.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">{image.title}</h3>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white bg-opacity-20 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <CameraIcon className="h-5 w-5 text-black" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Enhanced Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    passengers: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    alert("Thank you for your inquiry! We will get back to you within 24 hours with a customized quote.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: "",
      travelDate: "",
      passengers: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your journey? Get in touch with us for personalized travel solutions, instant quotes, and
            expert travel advice.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>

              <div className="space-y-6">
                {/* <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <MailIcon color="black" className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-100">info@kridhtravelworld.com</div>
                  </div>
                </div> */}

                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <PhoneIcon color="black" className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-blue-100">+91-96756 42555</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <MapPinIcon color="black"  className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-blue-100">T-1, Delhi airport, 8/142, Mehram Nagar West, New Delhi, Delhi 110037 India</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <ClockIcon color="black" className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Working Hours</div>
                    <div className="text-blue-100">24/7 Available</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-blue-400">
                <h4 className="font-semibold mb-4">Why Choose Us?</h4>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-4 w-4 flex-shrink-0" />
                    <span>Professional and experienced drivers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-4 w-4 flex-shrink-0" />
                    <span>Well-maintained and comfortable vehicles</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-4 w-4 flex-shrink-0" />
                    <span>24/7 customer support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-4 w-4 flex-shrink-0" />
                    <span>Competitive and transparent pricing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-4 w-4 flex-shrink-0" />
                    <span>Customized travel solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Send us a Message</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="destination" className="block text-gray-700 text-sm font-semibold mb-2">
                    Destination
                  </label>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  >
                    <option value="">Select destination</option>
                    <option value="manali">Delhi to Manali</option>
                    <option value="agra">Delhi to Agra</option>
                    <option value="rishikesh">Delhi to Rishikesh</option>
                    <option value="shimla">Delhi to Shimla</option>
                    <option value="jaipur">Delhi to Jaipur</option>
                    <option value="other">Other destination</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="travelDate" className="block text-gray-700 text-sm font-semibold mb-2">
                    Travel Date
                  </label>
                  <input
                    type="date"
                    id="travelDate"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="passengers" className="block text-gray-700 text-sm font-semibold mb-2">
                    Number of Passengers
                  </label>
                  <select
                    id="passengers"
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  >
                    <option value="">Select passengers</option>
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4">4 Passengers</option>
                    <option value="5+">5+ Passengers</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
                  Additional Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="Tell us about your specific requirements, preferred vehicle type, or any special requests..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Send Message & Get Quote
              </button>

              <p className="text-sm text-gray-600 mt-4 text-center">
                We'll respond within 24 hours with a personalized quote and travel plan.
              </p>
            </form>
          </div> */}
        </div>

        {/* Quick Contact Options */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
              <MessageCircleIcon className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-4">Get instant quotes and support</p>
            <Link href={`https://wa.me/${919675642555}`}  className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
              Chat Now
            </Link>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
              <PhoneIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Speak directly with our travel experts</p>
            <Link href={"tel:+919675642555"} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Call Now
            </Link>
          </div>

          {/* <div className="text-center">
            <div className="bg-orange-100 p-4 rounded-full inline-block mb-4">
              <MailIcon className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600 mb-4">Send detailed travel requirements</p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Email Us
            </button>
          </div> */}
        </div>
      </div>
    </section>
  )
}

// Enhanced Footer
function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg">
                <CarIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">KRIDHA TRAVEL WORLD</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted travel partner for comfortable and reliable transportation services across India. Experience
              the journey of a lifetime with us.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-5 h-5 bg-white rounded-sm"></div>
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-5 h-5 bg-white rounded-sm"></div>
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-lg hover:bg-pink-700 transition-colors">
                <span className="sr-only">Instagram</span>
                <div className="w-5 h-5 bg-white rounded-sm"></div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#destinations" className="text-gray-300 hover:text-white transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#packages" className="text-gray-300 hover:text-white transition-colors">
                  Tour Packages
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Taxi Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Tour Packages
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Airport Transfers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Corporate Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Wedding Transportation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Event Transportation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPinIcon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">T-1, Delhi airport, 8/142, Mehram Nagar West, New Delhi, Delhi 110037 India</span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">+91-96756 42555</span>
              </div>
              {/* <div className="flex items-center space-x-3">
                <MailIcon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">info@kridhtravelworld.com</span>
              </div> */}
              <div className="flex items-center space-x-3">
                <ClockIcon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">24/7 Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300">© 2025 KRIDHA TRAVEL WORLD. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                Cancellation Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DestinationsSection />
      <TourPackagesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  )
}
