import './Font-NotFound.scss'
import './Main-NotFound.scss'   

export default function NotFound() {
  return (
    <main>
        <div className="title">
            <h1 className="title__h1">404</h1> 
            <h2 className="title__h2">Sorry, we were unable to find that page</h2>
        </div>
        <nav>
            <a href="#">About</a>
            <a href="#">Products</a>
            <a href="#">Pricing</a>
            <a href="#">Login</a>
        </nav>
    </main>
  )
}