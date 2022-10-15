import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/footer';

export default function App() {
  return (
    <>
        <Header />

        <div className="container-fluid">
          <h1>Recent Projects</h1>
          <h4>UnionDigital Bank x PDAX</h4>
          <p>I helped the Union Digital Bank, one of the largest digital bank in Asia to provide a crypto trading platform that would bring more profit to the company by empowering Asian people to purchase digital assets such as Bitcoin and Ethereum.</p>

          <h4>Givers</h4>
          <p>A financial service for 53M American non-professional caregivers. Bringing afforadble products, exclusive community and debit wallets.</p>
        </div>
        <div className="container-fluid bg-faded-blue text-faded-gold p-4">

          <h1>AJA Gold Online </h1>
          <h5>Lending a hand to middle class. A solution for hardworking people who needs to protect and grow their finances.</h5>
          <p>This coming year - 2023, the business will purchase high amount of recent processed Gold jewerly with 75% amount of it for every precious items.</p>
          <p>This aims to protect the capital with compounding interest that will be used in 2030 to fund high-end local and digital  projects.</p>
          <small className="d-inline-block fw-bold bg-danger text-light rounded-pill m-1 py-1 px-2">#interest</small>
          <small className="d-inline-block fw-bold bg-warning text-light rounded-pill m-1 py-1 px-2">#gold</small>
          {/* <a href="https://www.facebook.com/ajagoldshop" className="btn btn-sm btn-primary rounded-pill">Facebook</a> */}

          {/* <h2>Keynote 2023</h2>
          <ul>
            <li>ljkljl</li>
            <li>ljkljl</li>
            <li>ljkljl</li>
            <li>ljkljl</li>
          </ul> */}
        </div>

        <div className='container-fluid bg-success text-light p-4'>
          <h1>Renewable Energy</h1>
          <p>I have been always a fan of industries who are working with enthusiasm to save the environment without affecting the economic function of anyone.</p>
        </div>

        <div className='container-fluid'>
          <h1>4-year career growth</h1>
          <p>In 2019, I begun my career as a College Instructor evangelizing modern technology and high level tech stack that I firmly velieve could bring advance learning to my students.</p>
          <p>Fast forward today. This year, I am at top of my corporate life and was able to bring high performing software produ</p>
          <p>Fast forward today. I am bringing local businesses up to create jobs in my local community - Bulacan, as well as my province - Rizal. I am confident to generate caputal to raise more valuable assets for the future.</p>
      

          {/* <h4>Juancareers x Active Aging</h4> */}
        </div>

        <div className='container-fluid bg-success text-light p-4'>
          <h1>Fiverr Gigs</h1>
          <p>Today, I am bringing my skills and experiences to Fiverr to give businesses more access to the technology.</p>
          <a href="" className="btn btn-sm btn-light rounded-pill mx-1">Fiverr Gig 1</a>
          <a href="" className="btn btn-sm btn-light rounded-pill mx-1">Fiverr Gig 1</a>
          <a href="" className="btn btn-sm btn-light rounded-pill mx-1">Fiverr Gig 1</a>
        </div>

        <div className='container-fluid p-4'>
          <h1>Looking For Great Minds</h1>
          
          <h4>Writer</h4>
          <h4>Digital Marketing Expert</h4>
          <h4>Project Manager - SCRUM/KANBAN</h4>

        </div>

        <div className='container-fluid p-4'>
          <h1>Exclusive Books For My Website Visitors</h1>
          
          <h4>20 Lessons from 2020 Mid-Pandemic As A Serial Entrepreneur</h4>
          <h6>$400.00</h6>
          <h4>FEW People</h4>
          <h6>$400.00</h6>

        </div>

        <Footer />
    </>
  );
};
