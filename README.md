# Valence - Green Hydrogen Infrastructure Mapping and Optimization

A secure, private, and interactive map-based application for visualizing, managing, and analyzing personal green energy assets alongside public infrastructure data like pipelines and regulatory zones. Built with **Next.js, TailwindCSS, TypeScript, MongoDB, and NextAuth.js**, the application delivers a seamless and scalable experience for users.

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/NextAuth.js-000000?style=for-the-badge&logo=auth0&logoColor=white" alt="NextAuth.js" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/vandankambodi/valence?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/github/stars/vandankambodi/valence?style=for-the-badge&logo=github" alt="Stars" />
  <img src="https://img.shields.io/github/forks/vandankambodi/valence?style=for-the-badge&logo=github" alt="Forks" />
  <img src="https://img.shields.io/github/contributors/vandankambodi/valence?style=for-the-badge" alt="Contributors" />
</p>

---

##  Overview
Valence enables users to:
- View **interactive maps** with geospatial filters.
- Compare different assets and regions with **dashboards**.
- Use secure **authentication flows** (signup/login with JWT).
- Submit inquiries via **contact forms** integrated with external mail services.
- Access **AI assistance** for insights and recommendations.
- By combining **geospatial visualization with renewable energy data and optimization algorithms**, Valence guides investment decisions that support sustainable hydrogen infrastructure development.

##  Features
- **Authentication** with NextAuth.js (Login/Signup)
- **Interactive Maps** with user-specific filters
- **Dashboards** showing comparisons & insights
- **AI Assistant** powered by Google Gemini
- **Contact Forms** integrated with Resend API
- **Modern UI** built with TailwindCSS & shadcn/ui


##  Tech Stack
- **Frontend:** Next.js, React, TailwindCSS
- **Backend:** Next.js API routes, Node.js (v18.x or later), Express.js
- **Database:** MongoDB Atlas
- **Auth:** NextAuth.js with JWT
- **AI:** Google Gemini API
- **Mailer:** Resend API


## Project Structure
```bash
Valence
├── public/
└── src/
    ├── app/
    │   ├── (app)/          # PROTECTED application routes (require login)
    │   │   ├── layout.tsx
    │   │   ├── map/
    │   │   ├── dashboard/
    │   │   ├── profile/
    │   │   └── add-asset/
    │   │
    │   ├── api/            # Backend API routes
    │   │   ├── assets/
    │   │   ├── infrastructure/
    │   │   ├── regulatory-zones/
    │   │   ├── auth/
    │   │   └── signup/
    │   │
    │   ├── login/
    │   ├── signup/
    │   │
    │   ├── layout.tsx      # Root layout
    │   └── page.tsx        # Public landing page
    │
    ├── components/         # Reusable React components
    │   ├── ControlSidebar.tsx
    │   ├── Header.tsx
    │   ├── Map.tsx
    │   ├── MapLoader.tsx
    │   └── UserButton.tsx
    │
    ├── lib/                # Utility functions (db connection, data fetching)
    │   ├── data.ts
    │   └── mongodb.ts
    │
    ├── models/             # Mongoose schemas
    │   ├── Asset.ts
    │   └── User.ts
    │
    ├── types/              # TypeScript type definitions
    │   └── next-auth.d.ts
    │
    └── middleware.ts       # Route protection security
```


##  Installation
### Clone the Repository
   ```
   git clone https://github.com/VandanKambodi/Valence.git
   cd Valence
   ```

### Install Dependencies
   ```
   npm install
   ```

### Set up Environment Variables
Create a file named `.env.local` in the root directory:
   ```
MONGODB_URI=your_mongodb_atlas_connection_string
NEXTAUTH_SECRET=your_mapbox_api_key
GEMINI_API_KEY=your_chat_api
RESEND_API_KEY=generate_resend_api_key
   ```

### Run the Development Server
   ```
   npm run dev
   ```
#### Open http://localhost:3000 to view the application.


## Data Handling

- Input datasets are provided in CSV format.

- Data is parsed and stored in MongoDB Atlas.

- The map visualizes data layers dynamically via API.

##  Screenshots
- **Landing Page**
  ![Landing Page](./images/landingPage.png)

- **Authentication Page**
  ![Auth Page](./images/AuthPage.png)

- **Dashboard**
  ![Dashboard](./images/Dashboard.png)

- **Map View**
  ![Map](./images/map.png)

- **AI Assistant**
  ![AI Assistant](./images/aiAssis.png)


##  Contributing
- Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to your branch (`git push origin feature-name`)
5. Open a Pull Request


##  License
This project is licensed under the **MIT License**.

<p align="left">
  <img src="https://img.shields.io/github/license/vandankambodi/valence?style=for-the-badge" alt="MIT License" />
</p>
