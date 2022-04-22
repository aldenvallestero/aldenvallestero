export default function Header() {
	return (
        <div className="container-fluid bg-light text-center p-4 pt-5">
            <h1>Alden Vallestero</h1>
            <p>Building high-quality cloud servers approach for 3 years and counting.</p>
            <button onClick={() => window.location.replace('https://github.com/aldenvallestero')} className="btn btn-dark rounded-pill"><i className="bi-github me-1"></i>Github Profile</button>
        </div>
	);
};
