import React from 'react'
const year = new Date().getFullYear();
console.log(year);
function Footer() {
    return (
        <>
            <div className="container">
                <footer className="py-1 my-3">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><a href="#" className="nav-link px-5 text-muted">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-5 text-muted">Login</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-5 text-muted">SignUp</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-5 text-muted">Search User</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-5 text-muted">Contact</a></li>
                    </ul>
                    <p className="text-center text-muted">© {year} Code Cluster</p>
                </footer>
            </div>
        </>
    )
}

export default Footer