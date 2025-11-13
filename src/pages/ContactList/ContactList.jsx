import Contactitem from "../../components/contactitem/contactitem"
import Sidebar from "../../components/sidebar/sidebar"

export default function ContactList({user}) {
    return (
        <div className="container mt-4 shadow p-4 rounded bg-body-tertiary">
            <div className="row">
                <div className="col-4">
                    <Sidebar/>
                </div>
                <div className="col-8">
                    <Contactitem user={user} />
                </div>
            </div>
        </div>
    )
}