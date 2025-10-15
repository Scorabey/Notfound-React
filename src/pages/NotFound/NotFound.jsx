import './Font-NotFound.scss'
import './Main-NotFound.scss'   

export default function NotFound() {
  return (
    <main>
        <div className="title">
            <h1 className="title__h1">Error 404</h1> 
            <h2 className="title__h2">Sorry, we were unable to find that page</h2>
        </div>
        <nav>
            <a href="#" draggable='false'>About</a>
            <a href="#" draggable='false'>Products</a>
            <a href="#" draggable='false'>Pricing</a>
            <a href="#" draggable='false'>Login</a>
        </nav>
    </main>
  )
}