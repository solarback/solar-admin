import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Devices =() => {
    const [devices, setDevices] = useState([]);

    useEffect ( () => {
        let deviceList = [
            {
                id: 1,
                accountId: 1,
                accountUserName: "sasha",
                creationDate: "2023-07-10",
                lastActivity: "2023-07-10T14:48:00",
            },
            {
                id: 2,
                accountId: 2,
                accountUserName: "pasha",
                creationDate: "2023-07-07",
                lastActivity: "2023-07-07T14:48:00",
            }
        ];
    
        setDevices(deviceList)
    }, [])
    

    return (<>
    <div className="text-center">
        <h2>Find managed device</h2>
        <hr></hr>
        <table className="table table-stripped table-hover">
            <thead>
                <tr>
                    <th>Account</th>
                    <th>Last Activity</th>
                    <th>Creation Date</th>
                </tr>
            </thead>
            <tbody>
                {devices.map((d) => 
                <tr key={d.id}>
                    <td>
                        <Link to={`/account/${d.id}`}>
                            {d.accountUserName}
                        </Link>
                    </td>
                    <td>{d.lastActivity}</td>
                    <td>{d.creationDate}</td>
                </tr>
            )}

            </tbody>
        </table>

    </div>
    </>
    )
}

export default Devices;