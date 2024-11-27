const {Link, NavLink } = ReactRouterDOM

export function AppHeader() {

    return (
        <header className="app-header full main-layout">
            <section className="header-container">
                <h1>Miss Books</h1>
                <nav className="app-nav">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Books</a>
                </nav>
            </section>
        </header>
    )
}
