import FLOGO from "../assets/Footer-LOGO.png";
import "../styles/Footer.css";

export default function Footer() {
	return (
		<div>
			<footer className="footer">
				<img src={FLOGO} alt="Logo footer" className="logo" />
				<p>© 2022 Kasa. All rights reserved</p>
			</footer>
		</div>
	);
}
