import { useEffect, useState } from "react";

const Devices =() => {
    const [movies, setMovies] = useState([]);

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
    
        setMovies(movies)
    }, [])
    

    return (<>
    <div className="text-center">
        <h2>Find managed device</h2>
        <hr></hr>
        <table className="table table-stripped table-hover">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Account</th>
                    <th>Last Activity</th>
                    <th>Creation Date</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>

    </div>
    </>
    )
}

export default Devices;