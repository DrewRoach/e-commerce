
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">cart</Link>
    </nav>
    </>
  )
}
