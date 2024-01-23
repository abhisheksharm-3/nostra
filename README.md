[![CodeFactor](https://www.codefactor.io/repository/github/abhisheksharm-3/nostra/badge)](https://www.codefactor.io/repository/github/abhisheksharm-3/nostra)


Design Credit: https://ui8.net/iqonicdesign/products/gericht-restaurant-website-ui-in-figma


### This Project Uses Appwrite as Backend
### ENV Template
- VITE_PROJECT_ID = 
- VITE_DB_ID = 
- VITE_COLL_ID = 

## How to contribute 

- Fork the Repo(abhisheksharm-3/backend-test branch)
- Clone the Forked Repository
- Create a new Branch with Specified Format ({yourname}/{yourFeature})
- Make your changes 
- Push your changes to a PR on this Repo(abhisheksharm-3/backend-test branch)
- Wait for a Review and merge
- Celebrate your first PR

### How to run the App
- `npm install`
    - Will install all dependencies
- `npm run dev` 
  - Runs the app in the development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### How to test your Change
- First on localhost while developing
- Then on the Vercel Link of your PR
    - Vercel will deploy your changes automatically to a new Link
    - You can find the Link in the PR
- Test mobile and Desktop Viewport

### Do not update any packages without explicit approval


```
nostra
├─ .eslintrc.cjs
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  └─ _redirects
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ appwrite
│  │  └─ appwriteConfig.js
│  ├─ assets
│  ├─ authProtection
│  │  └─ Authcheck.jsx
│  ├─ components
│  │  ├─ Bookings
│  │  │  └─ Bookings.jsx
│  │  ├─ Footer
│  │  │  ├─ FooterOverlay.css
│  │  │  ├─ FooterOverlay.jsx
│  │  │  ├─ Newsletter.css
│  │  │  └─ Newsletter.jsx
│  │  ├─ Header
│  │  │  ├─ BarHeader.jsx
│  │  │  └─ HeaderImage.jsx
│  │  ├─ index.js
│  │  ├─ Loader
│  │  │  ├─ loader.css
│  │  │  └─ Loader.jsx
│  │  ├─ Menuitem
│  │  │  ├─ MenuItem.css
│  │  │  └─ MenuItem.jsx
│  │  ├─ Navbar
│  │  │  └─ Navbar.jsx
│  │  ├─ News
│  │  │  └─ UserProfile.jsx
│  │  ├─ SignUp
│  │  │  └─ Signup.jsx
│  │  └─ SubHeading
│  │     └─ SubHeading.jsx
│  ├─ constants
│  │  ├─ data.js
│  │  ├─ images.js
│  │  ├─ index.js
│  │  └─ userContext.jsx
│  ├─ container
│  │  ├─ AboutBar
│  │  │  └─ AboutBar.jsx
│  │  ├─ AboutUs
│  │  │  ├─ AboutUs.css
│  │  │  └─ AboutUs.jsx
│  │  ├─ Chef
│  │  │  ├─ Chef.css
│  │  │  └─ Chef.jsx
│  │  ├─ Findus
│  │  │  └─ FindUs.jsx
│  │  ├─ Footer
│  │  │  ├─ Footer.css
│  │  │  └─ Footer.jsx
│  │  ├─ Gallery
│  │  │  ├─ Gallery.css
│  │  │  └─ Gallery.jsx
│  │  ├─ HappyHours
│  │  │  └─ HappyHours.jsx
│  │  ├─ Header
│  │  │  ├─ Header.css
│  │  │  └─ Header.jsx
│  │  ├─ index.js
│  │  ├─ InfoVideo
│  │  │  └─ InfoVideo.jsx
│  │  ├─ Intro
│  │  │  ├─ Intro.css
│  │  │  └─ Intro.jsx
│  │  ├─ Laurels
│  │  │  ├─ Laurels.css
│  │  │  └─ Laurels.jsx
│  │  ├─ Map
│  │  │  └─ Map.jsx
│  │  ├─ Menu
│  │  │  ├─ SpecialMenu.css
│  │  │  └─ SpecialMenu.jsx
│  │  ├─ MenuPage
│  │  │  └─ MenuPage.jsx
│  │  ├─ PoisonPage
│  │  │  └─ Poison.jsx
│  │  ├─ ReachUs
│  │  │  └─ ReachFile.jsx
│  │  ├─ Reservation
│  │  │  ├─ reservation.css
│  │  │  └─ Reservation.jsx
│  │  ├─ ServiceQuality
│  │  │  └─ ServiceQuality.jsx
│  │  ├─ Stats
│  │  │  └─ Stats.jsx
│  │  ├─ Testimony
│  │  │  └─ Testimonials.jsx
│  │  └─ ThankYouPage
│  │     └─ Thanks.jsx
│  ├─ context
│  │  ├─ BookingContext.js
│  │  ├─ BookingContextProvides.jsx
│  │  ├─ UserContext.js
│  │  └─ UserContextProvider.jsx
│  ├─ index.css
│  ├─ main.jsx
│  └─ pages
│     ├─ Aboutpage.jsx
│     ├─ BarHome.jsx
│     ├─ Contact.jsx
│     ├─ Homepage.jsx
│     ├─ Page404.jsx
│     ├─ PreviousBookings.jsx
│     ├─ Profile.jsx
│     └─ Services.jsx
├─ tailwind.config.js
├─ vercel.json
└─ vite.config.js

```