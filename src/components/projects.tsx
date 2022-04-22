export default function Header() {
	return (
        <div className="container-fluid bg-light p-4">
            <h1>Recent Projects</h1>

            {/* PROJECT 1 */}
            <span className="d-block fs-3">Union Digital</span>
            <small className="d-inline-block bg-warning fw-bold px-2 py-1 rounded-3 text-light mb-2">Working</small>
            <p>The next revolutionary e-wallet that will dominate the entire Philippines. A fast, reliable and secure digital wallet for everyone with minimal requirements to start.</p>

            {/* PROJECT 2 */}
            <span className="d-block fs-3">Givers</span>
            <small className="d-inline-block bg-success fw-bold px-2 py-1 rounded-3 text-light mb-2">Done</small>
            <p>A financial service for 53M American non-professional caregivers. Bringing afforadble products, exclusive community and debit wallets.</p>

            {/* PROJECT 3 */}
            <span className="d-block fs-3">Homemoto</span>
            <small className="d-inline-block bg-success fw-bold px-2 py-1 rounded-3 text-light mb-2">Done</small>
            <p>A luxurius eCommerce of furnitures and list of real-estate properties.</p>
        </div>
	);
};
