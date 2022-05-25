
import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav>
            <div data-shadow='Aniruddha Portfolio'>
                Aniruddha Portfolio
            </div>
            <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/projects"><a>Projects</a></Link></li>
            </ul>
            
        </nav>
     );
}
 
export default Navbar;