import { Project, Skill, ContactLink, Experience } from "./types";

// --- PERSONALIZATION ---
// Replace these with your actual details.
export const YOUR_NAME = "Snehil";
export const YOUR_HEADLINE =
  "Android App Developer | Passionate Developer | Creative Thinker | Problem Solver";
export const YOUR_BIO = `Hello! I'm ${YOUR_NAME}, an Android App Developer based in [Your Location]. I graduated from Bharati Vidyapeeth College of Engineering Deemed University, Pune, and I specialize in building dynamic and user-friendly mobile applications. I'm passionate about creating intuitive experiences and continuously learning new technologies. In my free time, I enjoy Guitar and Singing and Cooking.`;
export const YOUR_EMAIL = "snehil09087@gmail.com";

// --- NAVIGATION ---
export const NAV_LINKS = [
  { id: "about", title: "About", href: "#about" },
  { id: "experience", title: "Experience", href: "#experience" },
  { id: "skills", title: "Skills", href: "#skills" },
  { id: "projects", title: "Projects", href: "#projects" },
  { id: "contact", title: "Contact", href: "#contact" },
];

// --- EXPERIENCE ---
export const EXPERIENCE_DATA: Experience[] = [
    {
        id: "chamberly-ab",
        company: "Chamberly AB",
        role: "Android Developer",
        duration: "July 2025 - Present",
        description: "As an Android Developer at Chamberly AB, I am responsible for developing and maintaining our Android application. My key responsibilities include building new features, fixing bugs, and improving application performance. I work closely with the design and product teams to create a seamless user experience. I am passionate about writing clean, efficient, and maintainable code."
    }
]

// --- PROJECTS ---
// Add your projects here.
export const PROJECTS_DATA: Project[] = [
  {
    id: "project-SwipeRightly",
    title: "SwipeRightly - Android Dating App",
    description: `📱 SwipeRightly App – Real-Time Dating App with Firebase & Jetpack Compose
SwipeRightly is a fully functional dating app designed to demonstrate a modern Android development workflow using Jetpack Compose, MVVM architecture, and Firebase for real-time features. It offers an intuitive swiping experience, secure user authentication, and live chat—all backed by a scalable cloud infrastructure.

🧠 Architecture & Tech Stack
Built on the MVVM pattern, the app separates UI, logic, and data layers cleanly:

View (UI Layer): Built entirely with Jetpack Compose, screens like SwipeScreen.kt and LoginScreen.kt observe state from the ViewModel and update reactively.

ViewModel (SWViewModel.kt): Manages user actions (login, signup, swipes), fetches data from Firebase, and updates UI states using mutableStateOf.

Model (Data Layer): Uses Kotlin data classes (UserData, ChatData) and Firebase services (Firestore, Auth, Storage) for backend logic and storage.

🔐 Authentication Flow
The app uses Firebase Authentication to manage sign-ups and logins:

On signup, the app verifies unique usernames before creating an account and storing profile data in Firestore.

On login, credentials are validated, and the user is navigated to the swipe screen.

❤️ Swiping Experience
The core feature is a responsive, physics-based card swiping interface:

Cards are rendered using ProfileCard composables.

A custom SwipeableCard modifier handles gestures, rotation, and direction.

Upon a right swipe, the app checks for reciprocal matches:

If matched, a chat document is created and a match popup is shown.

If not, the swipe is logged for future reference.

💬 Real-Time Chat
When users match, they can chat instantly:

Chat uses a snapshot listener on Firestore to enable real-time updates.

Messages are sent and stored in a nested Firestore collection under a shared chatId.`,
    imageUrl: undefined, // Ensuring imageUrl is explicitly undefined or omitted
    tags: [
      "Kotlin",
      "Jetpack Compose",
      "Firebase Auth",
      "Firestore",
      "MVVM",
      "daggerHilt",
      "Android SDK",
    ],
    liveUrl:
      "https://drive.google.com/drive/folders/1F7GbHq0D2syjN9_HfdHwydgnSFLwjLqP?usp=drive_link",
    sourceUrl: "https://github.com/Snehil208001/SwipeRightly",
  },
  {
    id: "project-quickbuy",
    title: "QuickBuy - Android Shopping App",
    description: `🛍️ Android Shopping App with Jetpack Compose & Firebase.\n\nThis is a modern, feature-rich e-commerce application for Android, built with the latest technologies to demonstrate a complete development lifecycle from user authentication to payment processing. It's a perfect showcase of clean architecture and modern UI development.\n\n✨ Key Features:\n- Sleek User Interface: Built entirely with Jetpack Compose for a dynamic, declarative, and responsive UI. Includes a smooth splash screen and intuitive navigation.\n- Firebase Integration: Utilizes Firebase for authentication (Email/Password, Google Sign-In), Firestore for real-time database, and Firebase Storage for product images.\n- MVVM Architecture: Follows MVVM (Model-View-ViewModel) for a clean, scalable, and testable codebase.\n- Feature Rich: Includes product listings, search, cart management, order history, and user profiles.`,
    imageUrl: undefined, // Ensuring imageUrl is explicitly undefined or omitted
    tags: [
      "Kotlin",
      "Jetpack Compose",
      "Firebase Auth",
      "Firestore",
      "MVVM",
      "Razorpay SDK ",
      "Android SDK",
    ],
    liveUrl:
      "https://drive.google.com/drive/folders/1Ty3Itj-l4Oq_MXkY-Cunl6g25dRC__0O",
    sourceUrl: "https://github.com/Snehil208001/QuickBuy",
  },
  {
    id: "project-CollegeApp-Admin-User",
    title: "CollegeApp-Admin-User",
    description: `🎓 CollegeApp – Smart College Management with Jetpack Compose & Firebase
CollegeApp is a modern Android application built with Kotlin and Jetpack Compose, designed to streamline communication and administration within a college environment. It features two distinct experiences—an Admin Panel for staff and a User Interface for students—powered by a real-time Firebase backend.

🔐 Admin Panel
Staff can efficiently manage key content:

Upload/delete banners for the home screen.

Broadcast notices with images and links.

Organize the event gallery and manage faculty profiles by department.

Edit core college info like address and contact details.

👨‍🎓 Student Experience
Students enjoy a responsive, dynamic interface:

A scrollable home screen with quick college info and recent notices.

Access to the faculty directory and categorized photo galleries.

A detailed About Us section and quick links via a navigation drawer.

🛠️ Tech Stack
Kotlin, Jetpack Compose, Firebase (Firestore, Storage)

Coil for image loading, Accompanist Pager for banners

Jetpack Navigation, Gradle Kotlin DSL, and MVVM architecture

CollegeApp highlights advanced Android development practices with clean UI/UX, real-time data handling, and scalable architecture. It's an ideal solution for institutions aiming to enhance student engagement and modernize college operations`,
    imageUrl: undefined,
    tags: [
      "Kotlin",
      "Jetpack Compose",
      "Firebase Auth",
      "Firestore",
      "MVVM",
      "Coil",
      "Android SDK",
    ],
    liveUrl:
      "https://drive.google.com/drive/u/1/folders/140a2_bBSuqccb8sLNzdF8l_deb1Tzxh1",
    sourceUrl:
      "https://github.com/Snehil208001/CollegeApp-Admin-User-?tab=readme-ov-file",
  },
  // Add more projects here
];

// --- SKILLS ---
// Add your skills here.
export const SKILLS_DATA: Skill[] = [
  // Languages
  { id: "kotlin", name: "Kotlin", level: 90, category: "Languages" },
  { id: "java", name: "Java", level: 75, category: "Languages" },
  { id: "python", name: "Python", level: 60, category: "Languages" },

  // Frontend (Android Specific)
  {
    id: "jetpack-compose",
    name: "Jetpack Compose",
    level: 90,
    category: "Frontend",
  },
  { id: "android-sdk", name: "Android SDK", level: 85, category: "Frontend" },

  // Backend & APIs
  {
    id: "firebase-auth",
    name: "Firebase Authentication",
    level: 85,
    category: "Backend",
  },
  {
    id: "cloud-firestore",
    name: "Cloud Firestore",
    level: 85,
    category: "Backend",
  },
  {
    id: "firebase-realtimedb",
    name: "Firebase Realtime Database",
    level: 80,
    category: "Backend",
  },
  {
    id: "firebase-storage",
    name: "Firebase Storage",
    level: 80,
    category: "Backend",
  },
  {
    id: "fcm",
    name: "Firebase Cloud Messaging",
    level: 80,
    category: "Backend",
  },
  { id: "retrofit", name: "Retrofit", level: 80, category: "Backend" },
  { id: "ktor-client", name: "Ktor (Client)", level: 70, category: "Backend" },
  {
    id: "rest-apis",
    name: "REST APIs / API Calling",
    level: 85,
    category: "Backend",
  },

  // Tools
  {
    id: "android-studio",
    name: "Android Studio",
    level: 90,
    category: "Tools",
  },
  { id: "git", name: "Git & GitHub", level: 85, category: "Tools" },

  // Other
  { id: "mvvm", name: "MVVM Architecture", level: 90, category: "Other" },
  {
    id: "clean-arch",
    name: "Clean Architecture",
    level: 80,
    category: "Other",
  },
];

// --- CONTACT & SOCIAL LINKS ---
// Add your contact links here.
export const CONTACT_LINKS_DATA: ContactLink[] = [
  {
    id: "email",
    name: "Email",
    url: `mailto:${YOUR_EMAIL}`,
    // icon: <MailIconComponent /> // Example: you'd use an actual icon component here
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/Snehil208001",
    // icon: <GitHubIconComponent />
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/snehil7542/", // Replace with your LinkedIn URL
    // icon: <LinkedInIconComponent />
  },
  // Add other social media links here (e.g., Twitter, dev.to)
];

// --- FOOTER ---
export const COPYRIGHT_TEXT = `© ${new Date().getFullYear()} ${YOUR_NAME}. All rights reserved.`;