# Meal Time Hub - Landing Page Documentation

This project is the landing page for **Meal Time Hub**, a platform designed to simplify campus dining. It provides features such as online ordering, meal tracking, and campus delivery to improve the student dining experience.

## Project Overview

The Meal Time Hub landing page offers a clean, visually appealing interface to showcase the core features of the platform, along with sections introducing the team, providing a call-to-action, and footer with contact information.

The project uses **React** and **Tailwind CSS** for styling, and integrates **Lucide React Icons** for UI elements.

## Features

- **Navigation**: Includes links to sections like "Features," "About," and "Contact."
- **Hero Section**: An engaging section with a title and a brief description of the platform, alongside primary action buttons.
- **Features Section**: Describes the key features of the platform—online ordering, meal tracking, and campus delivery.
- **About Section**: Introduces the team members with their photos, positions, and social media links.
- **Call-to-Action (CTA) Section**: A call to action prompting visitors to sign up for the service.
- **Footer**: Contains links to quick resources, support, and contact information.

## Installation & Setup

### 1. Clone the Repository
First, clone the repository to your local machine.

```bash
git clone https://github.com/MuhammedBasith/meal-time-hub-landing-page.git
cd meal-time-hub-landing-page
```

### 2. Install Dependencies
Make sure you have **Node.js** installed. Then, install the necessary dependencies using **npm** or **yarn**:

```bash
npm install
# or
yarn install
```

### 3. Start the Development Server
To view the landing page locally, run:

```bash
npm run dev
```

This will start the development server and open the app in your browser.

## Project Structure

```
/meal-time-hub-landing-page
|-- /public
|   |-- index.html
|
|-- /src
|   |-- App.js              # Main component containing all sections
|   |-- index.js            # Entry point for React app
|   |-- /assets             # Images, fonts, etc.
|
|-- /node_modules           # Installed dependencies
|-- package.json            # Project metadata and dependencies
|-- tailwind.config.js      # Tailwind CSS configuration
|-- postcss.config.js       # PostCSS configuration
|-- README.md               # Project documentation (this file)
```

### Key Files:
- **`App.js`**: Main component where the landing page is built using React. All sections (Hero, Features, About, CTA, Footer) are defined here.
- **`index.js`**: Entry point where the React app is rendered to the DOM.
- **Tailwind CSS**: Used for styling the app. You can customize the look by editing the `tailwind.config.js` file.

## Technologies Used

- **React**: Front-end JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Lucide React Icons**: For adding various icons like Clock, Bike, etc.
- **PostCSS**: A tool for transforming CSS with plugins like Tailwind.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is open-source and available under the MIT License.

Enjoy using Meal Time Hub!
