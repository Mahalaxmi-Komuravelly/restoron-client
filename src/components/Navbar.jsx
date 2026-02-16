import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className="bg-orange-500 p-4 text-white flex justify-between items-center">
            <h1 className="font-bold text-4xl">Restoron</h1>
            <div  className="space-x-4">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/menu" className="hover:underline">Menu</Link>
                <Link to="/reservations" className="hover:underline">Reservation</Link>
            </div>
        </nav>
    )
}
export default Navbar;