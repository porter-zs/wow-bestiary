import Link from "../Link"
import "./index.css"

export default function Navbar () {
    return (
        <header className="nav-wrapper">
            <nav className="nav-container">
                <a href="/" title="Home Title Button Link" className="nav-title">WoW Bestiary</a>
                <ul className="nav-menu">
                    <Link href="/" title="WoW Bestiary Home" name="Home" />
                    <Link href="/search" title="WoW Bestiary Search" name="Search" />
                </ul>
            </nav>
        </header>
    )
}