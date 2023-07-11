import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Account =() => {
    const [account, setAccount] = useState({})
    let { id } = useParams()

    useEffect(() => {
        let account = {
            userName: "sasha",
            activityRank: 3,
        }
        setAccount(account)
    }, [id])

    return (<>
    <div className="text-center">
        <h2>Account: {account.userName}, activityRank: {account.activityRank}</h2>
        <hr></hr>
    </div>
    </>
    )
}

export default Account;