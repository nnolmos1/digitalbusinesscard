import headshot from '../Images/headshot_2026.png';
import emailIcon from '../Images/EmailIcon.png';
import linkedInLogo from '../Images/LinkedInLogo.png';

export default function Info() {
    return (
        <div className="info">
            <img src={headshot} alt="headshot" className="info-img" />

            <div className="info-text">
                <h1> Noah Olmos</h1>
                <h2> Frontend Developer & Designer </h2>
                <p> noaholmos.websitewip </p>
            </div>

            <div className="info-buttons">
                <div className="email-button">
                    <img src={emailIcon} alt="email icon" className="email-icon" />
                    <button> Email </button>
                </div>

                <div className="linkedin-button">
                    <img src={linkedInLogo} alt="linkedin icon" className="linkedin-icon" />
                    <button> LinkedIn </button>
                </div>
            </div>
        </div>
    )
}