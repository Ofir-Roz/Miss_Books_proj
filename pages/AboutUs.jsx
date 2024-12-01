const { Outlet, Link, NavLink } = ReactRouterDOM

export function AboutUs(){

    return (
        <section className="about-us">
            <h1>About Books and Us...</h1>
            <p>bla bla bla</p>
            <section>
                <nav>
                    <NavLink to="/about/team">Team </NavLink>| 
                    <NavLink to="/about/vision"> Vision</NavLink>
                </nav>
            </section>

            <section>
                <Outlet />
            </section>
        </section>
    )
}