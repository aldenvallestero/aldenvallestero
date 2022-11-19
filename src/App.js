import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/footer';
import Investors from './components/investors';
import GreatMinds from './components/great-minds';
import givers from './media/givers.png';
import ud from './media/ud.png';
export default function App() {
  return (
    <>
        <Header />

        <div className="container-fluid p-5">
          <h1>Recent Projects</h1>

          <p>I've been working with the Finance industry for 3 years and now moving up to the higher responsibility of evangelizing the innovative solutions to my beloved country and contributing to leaders across the globe.</p>

          <div className="row align-items-center mb-4">

            <div className="col-12 col-md-6 mb-4">
              <img src={ud} className="img-fluid" alt="UnionDigital Bank" />
            </div>

            <div className="col-12 col-md-6 mb-4">
              <h2>UnionDigital Bank x PDAX</h2>
              <p>I helped the Union Digital Bank, one of the largest digital bank in Asia to provide a crypto trading platform that would bring more profit to the company by empowering Asian people to purchase digital assets such as Bitcoin and Ethereum.</p>
              <a href="https://uniondigitalbank.io" target="__blank" className='btn btn-md btn-dark rounded-pill'>Visit The Project</a>
            </div>

          </div>

          <div className="row align-items-center">

            <div className="col-12 col-md-6 mb-4">
              <img src={givers} className="img-fluid" alt="Givers" />
            </div>

            <div className="col-12 col-md-6 mb-4">
              <h2>Givers</h2>
              <p>A financial service for 53M American non-professional caregivers. Bringing afforadble products, exclusive community and debit wallets.</p>
              <a href="https://www.joingivers.com" target="__blank" className='btn btn-md btn-dark rounded-pill'>Visit The Project</a>
            </div>

          </div>
          
        </div>
        
        <div className="container-fluid bg-faded-blue text-faded-gold p-5">
          <h1>Security</h1>
          <span className='d-block display-2 mb-4'>A golden move of getting out of middle class thru securing potential capital into gold.</span>
          <span className='d-block display-6 text-light'>Rich are getting richer because they avoid cash and buy assets & commodities like Gold. Many middle class are saving cash in a bank and having many liabilities and less to no assets at all. That is why these people are working for the rest of their life even they are good earners.</span>
          <br />
          <a href="https://www.facebook.com/ajagoldshop" target="__blank" className='btn btn-lg btn-light rounded-pill'>Visit Shop</a>
        </div>
{/* 
        <div className='container-fluid bg-success text-light p-5'>
          <h1>Renewable Energy</h1>
          <p>I have been always a fan of industries who are working with enthusiasm to save the environment without affecting the economic function of anyone.</p>
        </div> */}

        <div className="container-fluid p-5 bg-primary">
          <h1 className='text-light'>Technology</h1>
          <span className='d-block display-2 mb-4'>Building the next optimal solutions for Real Estate Developers.</span>
          <span className='d-block display-6'><b>Trailblazer</b> is going to bring up software solutions that will help contractors reduce the cost without damaging the build quality of their project.</span>
          
          <br />

          <h4>Upcoming Software Products</h4>
          <h4>1. NLEX/SLEX RFID Account Dashboard - Mobile App</h4>
          <h4>2. Amplify - SaaS for procuring real estate projects</h4>
        </div>

        <div className='container-fluid p-5'>
          <h1>Opportunity</h1>
          <span className='d-block display-2 mb-4'>Juancareers is a talent-focused search engine for our foreign friends who are actively looking for Filipino talents to help them run their business.</span>
          <p>The idea begun in 4th Quarter of 2020 with the main goal of having a platform where countries can search their talent and the platform will give the best-fit for them.</p>
      

          {/* <h4>Juancareers x Active Aging</h4> */}
        </div>

        <div className="container-fluid p-5 bg-warning">
          <h1 className='text-light'>Fitness</h1>
          <span className='d-block display-2 mb-4'>We can be rich by helping people become fit.</span>
          <span className='d-block display-6'><b>GoPeopleGrow</b> is a Fitness Clothing Brand promoting wellness in the Philippines. We sold hundreds of premium quality and long lasting drifit outfits for men and women each month.</span>
          <br />
          {/* <span className="d-block display-4">60% Growth Over 2 quarter of this year 2022</span> */}
          <a href="" target="__blank" className="btn btn-lg btn-dark rounded-pill">Open Shop</a>
        </div>

        {/* <div className='container-fluid bg-success text-light p-4'>
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

        </div> */}

        {/* <Investors /> */}
        <GreatMinds />
        <Footer />
    </>
  );
};
