<a name="readme-top"></a>

Material UI Note App

## Table of Contents

- [About The Project](#about-the-project)
- [Project Spec](#project-spec)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Reflections](#reflections)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## About The Project

This project was created following along with a YouTube tutorial by [The Net Ninja](https://www.youtube.com/@NetNinja). I did this as an experiment to learn about Material-UI for an upcoming project I'm working on. I had no prior experience with MUI, so I wanted to work through a basic tutorial to learn more about it.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Project Spec

The goals of this app was to:

- Utilize MUI in React and React Router
- Implement React Hooks for Global State Management
- Create a local server to store notecards
- Create new notecards, and be able to delete them
- Navigate between the list of notes and create note pages
- Allow the user to select a category for the note when creating notecards

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technologies

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Material-UI](https://img.shields.io/badge/-Material--UI-blue)
![JSON-Server](https://img.shields.io/badge/-JSON--Server-orange)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

# Getting Started

You can find the project [here](https://github.com/willhobson85/Material-UI-Note-App) and follow the instructions below to get started.

You will also need to install JSON-Server, following [these instructions](https://www.npmjs.com/package/json-server#getting-started)

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:willhobson85/Material-UI-Note-App.git
   ```
2. Install NPM packages
   ```sh
   npm install
   npm start
   ```
3. Start the JSON-Server in a separate terminal
   ```sh
   json-server --watch data/db.json --port 8000
   ```
4. Explore the website.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

![Create Note](https://user-images.githubusercontent.com/99286590/226115434-8660e507-0e85-4acf-91c7-d95268828242.png)
![Note Home](https://user-images.githubusercontent.com/99286590/226115455-5f0a286e-72dd-4bbf-b490-03c652d38f8a.png)
![Responsive Layout](https://user-images.githubusercontent.com/99286590/226115484-6c626de6-cae8-4ab4-8b18-55874aec3150.png)

Future Iterations:

1. Login option for multiple users to be able to use this app.
2. Dark Mode
3. Give the users abilities to change or add note categories

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Reflections

I initially didn't like Material-UI. I have always built my components myself, and wasn't interested in using premade components. Once I actually got into the tutorial, I realized how much faster it was to use MUI than building everything by hand. It is definitely a useful tool that I will use again in the future.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

![Contributors][contributors-shield]

Will Hobson - [LinkedIn](https://www.linkedin.com/in/the-william-hobson/) [GitHub](https://github.com/willhobson85/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

The following resources helped build this project:

[![MDN Docs][mdn-shield]][mdn]
[![Turing School](https://img.shields.io/badge/Turing_School-030303?style=for-the-badge)](https://turing.edu/)
[The Net Ninja](https://www.youtube.com/watch?v=0KEpWHtG10M&list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58&index=1)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[mdn-shield]: https://img.shields.io/badge/MDN_Web_Docs-black?style=for-the-badge&logo=mdnwebdocs&logoColor=white
[mdn]: https://developer.mozilla.org/en-US/
[contributors-shield]: https://img.shields.io/badge/Contributors-4-2ea44f?style=for-the-badge
