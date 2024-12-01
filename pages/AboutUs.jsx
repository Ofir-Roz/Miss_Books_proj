const { Outlet, NavLink } = ReactRouterDOM

export function AboutUs() {

    return (
        <section className="about-us">
            <h1>About Books and Us...</h1>
            <p>
                Welcome to <strong>Miss Books</strong>, where every chapter begins with a little sass and a whole lot of heart. We’re not just an online bookstore—we’re your literary soulmate, whispering sweet book recommendations into your ear and helping you find stories that make your heart skip a beat (or your coffee spill from laughing too hard).
            </p>
            <p>
                Our journey began with a simple idea: to create a bookstore as charming, clever, and unpredictable as a plot twist in a good mystery novel. <strong>Miss Books</strong> is more than a name; it’s a promise to connect readers with tales that linger long after the last page is turned.
            </p>
            <p>
                At <strong>Miss Books</strong>, we don’t just sell books—we curate experiences. Our team of book aficionados, lovingly known as the “Plot Twisters,” scours the literary world for stories that will make you laugh, cry, or argue passionately about the ending. Whether you’re into epic fantasies, cozy romances, or that one obscure genre no one can pronounce, we’ve got you covered.
            </p>
            <p>
                Why choose <strong>Miss Books</strong>? Because we believe every book has a home, and every reader deserves to find that perfect match. From laugh-out-loud humor to gripping thrillers, our collection is as diverse as your ever-growing to-be-read list.
            </p>
            <p>
                Books aren’t just what we sell—they’re who we are. So, let’s turn the page and start your next adventure together.
            </p>

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