import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Tempo</h1>
            </div>
            <Link legacyBehavior href="/"><a>Home</a></Link>
            <Link legacyBehavior href="/templates"><a>Templates</a></Link>
            <Link legacyBehavior href="/contact"><a>Contact</a></Link>
        </nav>
      );
}
 
export default Navbar;
