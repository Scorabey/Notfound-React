import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar bg-body-tertiary rounded shadow">
                        <div className="container-fluid">
                            <div className="navbar-brand">
                                <Link to="/" className='btn btn-primary btn-sm ms-1'>Contact List</Link>
                                <Link to="/add" className="btn btn-secondary btn-sm ms-2">Add Contact</Link>
                                <Link to="/contact" className="btn btn-secondary btn-sm ms-3">Contact List</Link>
                                <Link to="/edit/1" className="btn btn-warning btn-sm ms-4">Edit Contact</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}