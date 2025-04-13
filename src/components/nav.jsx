import "./nav.css"

function Nav() {
    return (
        <>  
           <div className="nav">
            <ul>
                <div className="img"></div>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Articles</li>
                <li>Contact</li>
            </ul>
            <div className="cartBox">
                <p>Cart(<span>0</span>)</p>
                <button>Get a free quote</button>
                </div>
           </div>
        </>
    )
}
export {Nav}