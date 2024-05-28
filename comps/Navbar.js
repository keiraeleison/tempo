import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/favicon.ico" width={45} height={45} alt="Icon" />
            </div>
            <Link legacyBehavior href="/"><a>Home</a></Link>
            <Link legacyBehavior href="/templates"><a>Templates</a></Link>
            <Link legacyBehavior href="/contact"><a>Contact</a></Link>
        </nav>
      );
}
 
export default Navbar;
