import { Link } from "react-router-dom"
function Header() {
    return (
        <div className="nav">
            <Link className="link" to="/samples">İş nümunələri</Link>
            <Link className="link" to="/aboutus">Haqqında</Link>
            <Link className="link" to="/contact">Əlaqə məlumatları</Link>
        </div>
    )
}

export default Header