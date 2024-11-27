
import { AppHeader } from "./cmps/AppHeader.jsx"
import { Home } from "./cmps/Home.jsx"

const Router = ReactRouterDOM.HashRouter
const { Routes, Route, Navigate } = ReactRouterDOM


export function RootCmp() {
    return (
        <section className="app">
            <AppHeader />
            <main className="main-layout">
                <Home />
            </main>
        </section>
    )
}