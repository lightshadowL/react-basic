import Prop from "./pages/Prop";

const Home = ()=>{
    return (
        <div className="home">
            <h2>
                Home.jsx
            </h2>
            <Prop n="name1" age="11" nation="대한민국" />
        </div>
    )
}

export default Home;