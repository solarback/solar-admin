import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Alert from './components/Alert';

function App() {
  const [jwtToken, setJwtToken] = useState("")
  const [alertMessage, setAlertMessage] = useState("")
  const [alertClassName, setAlertClassName] = useState("")

  const navigate = useNavigate();

  const logOut = () => {
    setJwtToken("")
    navigate("/")
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Go scan</h1>
        </div>
        <div className="col text-end">
          {
            jwtToken === ""
            ? <Link to="/login"><span className="badge bg-success">Login</span></Link>
            : <a href="#!" onClick={logOut}><span className="badge bg-danger">Logout</span></a>
          }
        </div>
        <hr className="mb-3"></hr>
      </div>

      <div className="row">
        <div className="col-md-2">
          <nav>
            <div className="list-group">
              <Link to="/" className="list-group-item list-group-item-action">Home</Link>
              {jwtToken !== "" &&
                <>
                  <Link to="/devices" className="list-group-item list-group-item-action">Devices</Link>
                </>
              }
            </div>
          </nav>
        </div>
        <div className="col-md-10">
          <Alert
             message={alertMessage}
             className={alertClassName}
          />
          <Outlet context={{
            jwtToken, 
            setJwtToken,
            setAlertClassName,
            setAlertMessage,
          }

          }/>
        </div>
      </div>
    </div>
  );
}

export default App;
