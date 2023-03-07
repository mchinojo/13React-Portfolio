# React Portfolio [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

For this project, I had to create a React-based portfolio site that showcases my professional experience and projects. It consists of six components:

- App: the top-level component that renders all necessary children components.
- Header: rendered across the entire site and contains a Navbar.
- Home: a welcome landing page with my name and a brief description about myself.
- Project Gallery: dynamically renders six instances of a Project component, which is a reusable component that ingests JSON data as props and renders a single instance for each project.
- Project: a reusable component that renders a single instance for each project.
- Contact: includes my contact information and a contact form (for display only since I don't have a server).

To fulfill the challenge requirements, the site utilizes [React Router](https://reactrouter.com/en/main/start/tutorial) for navigation and dynamic rendering.

---

## Installation

To use this portfolio site, you must first clone or download the repository from GitHub. Then, you must navigate to the project directory in your terminal and run the following command to install the required dependencies:

```javascript
npm install
```

Once the installation is complete, you can run the following command to launch the site in your browser:

```javascript
npm start
```

The site will then be available at [http://localhost:3000/](http://localhost:3000/).

---

## Usage

To use this site, you must first update the JSON data file with your own professional experience and projects. Then, you can customize the site's design by modifying the CSS files. Finally, you can deploy the site to GitHub Pages, by following their specific deployment instructions.

To see an example of this project, visit [my deployed site](https://mchinojo.github.io/13React-Portfolio/).

---

## Credits

This project was made possible with the guidance and support of my instructors and teaching assistants. I also used various resources to create this project, including:

- [React Bootstrap](https://react-bootstrap.github.io/) for styling React components and implementing responsive design.
- [Bootstrap](https://getbootstrap.com/) for providing a framework for styling the HTML page.
- [React Router](https://reactrouter.com/en/main/start/tutorial) for implementing client-side routing and dynamically rendering components based on user selection.
- [GitHub Pages](https://github.com/gitname/react-gh-pages) for deploying the site to a public URL.

---

## License

Please refer to the LICENSE in the repo.
