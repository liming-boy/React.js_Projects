import { createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import User from "./components/User/User.jsx";
import Header from "./components/Header/Header.jsx";
import ReactDOM from "./components/react-dom/client";

import Github, { githubInfoLoader } from "./components/Github/Github.jsx";

const router = createBrowserRouter(createRoutesFromElements());

createRoot(document.getElementById("root")).render(<App />);
