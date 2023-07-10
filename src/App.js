import { Link, Outlet } from 'react-router-dom';
import Home from './components/Home'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Go scan</h1>
        </div>
        <div className="col text-end">
          <a href="#!"><span className="badge bg-success">Login</span></a>
        </div>
        <hr className="mb-3"></hr>
      </div>

      <div className="row">
        <div className="col-md-2">
          <nav>
            <div className="list-group">
              <Link to="/" className="list-group-item list-group-item-action">Home</Link>
              <Link to="/devices" className="list-group-item list-group-item-action">Devices</Link>
              
            </div>
          </nav>
        </div>
        <div className="col-md-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
