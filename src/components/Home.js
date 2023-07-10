import BagImg from './../images/bag.webp';

const Home =() => {
    return (<>
    <div className="text-center">
        <h2>Welcome to device manager</h2>
        <hr></hr>
        <img src={BagImg} alt='devices list'></img>
    </div>
    </>
    )
}

export default Home;