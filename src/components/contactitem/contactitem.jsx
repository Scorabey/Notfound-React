export default function Contactitem({user}) {
    return (
        <>
            {user.map(contact => (
                <div key={contact.id}>
                    {/* <img src="" alt="" />  */}
                    <div>
                        <h3 className="fs-3 fw-bold text-dark text-md-center text-capitalize">{contact.firstName} {contact.lastName}</h3>
                        <p className="fs-5 fw-light text-dark text-md-center text-capitalize">{contact.phone}</p>
                        <p className="fs-5 fw-light text-dark text-md-center text-capitalize">{contact.email}</p>
                        <p className="fs-5 fw-light text-dark text-md-center text-capitalize">{contact.status}</p>
                    </div>
                </div>
            ))}
        </>
    )
}