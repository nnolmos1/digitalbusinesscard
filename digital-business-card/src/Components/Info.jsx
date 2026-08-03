export default function Info() {
    return (
        <div className="info">
            <img src="../headshot_2026.png" alt="headshot" className="info-img" />

            <div className="info-text">
                <h1> Noah Olmos</h1>
                <h2> Frontend Developer & Designer </h2>
                <p> noaholmos.websitewip </p>
            </div>

            <div className="info-buttons">
                <div className="email-button"> 
                    <img src="../Images/email-icon.png" alt="email icon" className="email-icon" />
                    <button> Email </button>
                </div>

                <div className="linkedin-button">
                    <img src="../Images/linkedin-icon.png" alt="linkedin icon" className="linkedin-icon" />
                    <button> LinkedIn </button>
                </div>
            </div>
        </div>
    )
}