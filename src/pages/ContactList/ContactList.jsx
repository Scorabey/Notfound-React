import Contactitem from "../../components/contactitem/contactitem"
import Sidebar from "../../components/sidebar/sidebar"

export default function ContactList() {
    return (
        <div className="container mt-4 shadow p-4 rounded bg-body-tertiary">
            <div className="row">
                <div className="">
                    <Sidebar/>
                </div>
                <div className="">
                    <Contactitem/>
                </div>
            </div>
        </div>
    )
}