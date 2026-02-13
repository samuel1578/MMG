# Male Mentors Ghana (MMG)

A modern, responsive React + TypeScript web application for Male Mentors Ghana, empowering young men through mentorship and guidance.

## 🌟 Features

### Core Functionality
- **Multi-page Application** with React Router
  - Home, About, Impact, Stories, Programs, Become a Mentor, Become a Mentee, Contact
- **Persistent Theme System**
  - Light/Dark mode toggle
  - Syncs to localStorage
  - Syncs to Appwrite user preferences (when configured)
  - Respects system preferences
- **Appwrite Backend Integration**
  - Authentication
  - Database
  - Storage
  - Cloud Functions
- **Framer Motion Animations**
  - Reveal animations on scroll
  - Stagger animations for lists
  - Subtle hover and tap effects
- **Mobile-First Design**
  - Fully responsive across all devices
  - Hamburger menu for mobile navigation
  - Touch-friendly interactions
- **Accessibility**
  - ARIA labels and roles
  - Keyboard navigation
  - Focus indicators
  - Reduced motion support

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/samuel1578/MMG.git
cd MMG
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure your Appwrite credentials in `.env`:
```env
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your-project-id-here
```

### Running the Application

Development mode:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Navigation bar with theme toggle
│   │   └── Footer.tsx       # Footer with links and social media
│   └── ui/
│       ├── Button.tsx       # Reusable button component
│       └── Card.tsx         # Reusable card component with animations
├── pages/
│   ├── Home.tsx            # Landing page
│   ├── About.tsx           # About the organization
│   ├── Impact.tsx          # Impact statistics
│   ├── Stories.tsx         # Success stories
│   ├── Programs.tsx        # Available programs
│   ├── BecomeMentor.tsx    # Mentor application
│   ├── BecomeMentee.tsx    # Mentee application
│   └── Contact.tsx         # Contact form
├── contexts/
│   └── ThemeContext.tsx    # Theme state management
├── config/
│   └── appwrite.ts         # Appwrite SDK configuration
├── types/
│   └── theme.ts            # TypeScript type definitions
├── App.tsx                 # Main app component with routing
└── main.tsx               # Application entry point
```

## 🎨 Theme System

The application features a robust theme system:

- **Automatic Detection**: Defaults to system preference
- **Persistent Storage**: Saves to localStorage
- **Cloud Sync**: Syncs to Appwrite user preferences (when authenticated)
- **Smooth Transitions**: Animated theme switching

Toggle between light and dark mode using the theme button in the navigation bar.

## 🔧 Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Client-side routing
- **Appwrite** - Backend as a Service
- **Framer Motion** - Animation library
- **CSS3** - Styling with CSS variables

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: > 768px

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Reduced motion support via `prefers-reduced-motion`

## 🔒 Appwrite Setup

To fully utilize backend features:

1. Create an Appwrite project at [cloud.appwrite.io](https://cloud.appwrite.io)
2. Copy your Project ID
3. Update the `.env` file with your credentials
4. Configure authentication methods in Appwrite console
5. Set up databases, collections, and storage buckets as needed

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please contact Male Mentors Ghana at info@malementorsghana.org

---

Built with ❤️ for empowering young men in Ghana
