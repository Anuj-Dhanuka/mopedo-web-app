# Mopedo

A responsive React web application for Mopedo, a service offering bike taxi, food delivery and goods delivery. I designed the interface and built the frontend from scratch.

**Live site:** [mopedo.netlify.app](https://mopedo.netlify.app/) · **Case study:** [anujdhanuka.com/projects/mopedo](https://anujdhanuka.com/projects/mopedo)

## Why it exists

The site had to explain three different services as parts of one product. Visitors need a short overview of each service and room to read about it in detail, with layouts that hold up on small screens.

## What's inside

- **Four pages** (Home, About, Services, Contact) with client-side routing through React Router.
- **A shared Header and Footer** around every route, set up once in `App.jsx`.
- **Section components per page.** The homepage composes separate hero, features, how-it-works and call-to-action sections.
- **Responsive layouts** built with styled-components, so each component keeps its own styles.

## Tech stack

React 18 · JavaScript · React Router · styled-components · react-slick · react-icons · Vite · ESLint

## Run it locally

```bash
npm install
npm run dev      # start the development server
npm run build    # production build
npm run preview  # preview the production build
```

## Project structure

```
src/
  App.jsx        # shared Header/Footer and the route table
  components/    # Header, Footer and BannerSection, shared across pages
  pages/         # HomePage, AboutPage, ServicesPage, ContactUsPage, each split into section folders
```

## Status

Complete and deployed on Netlify.
