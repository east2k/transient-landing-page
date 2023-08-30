import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
    return (
        <main className={styles.App}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
            <Footer />
        </main>
    );
};
