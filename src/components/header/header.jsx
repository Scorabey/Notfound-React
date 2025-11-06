import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar bg-body-tertiary rounded shadow">
                        <div className="container-fluid">
                            <div className="navbar-brand">
                                <Link to="/contact" className='btn btn-secondary btn-sm ms-1' title='Contact List'>Contact</Link>
                                <Link to="/add" className="btn btn-secondary btn-sm ms-2" title='Add List'>Add</Link>
                                <Link to="/edit/1" className="btn btn-primary btn-sm ms-4" title='Edit List'>Edit</Link>
                                <Link to='/example' className='btn btn-primary btn-sm ms-4'>Example</Link>
                            </div>
                            <form className='d-flex' role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" title='Search Input' />
                                <button className="btn btn-outline-success" type="submit" title='Search Button'>Search</button>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}