import Recommended from "./Recommended"
import WazirExclusive from "./WazirExclusive";

const Home = () => {
    return (
        <div className="mx-auto max-w-330" >

            <div className="flex p-0 m-0">
                <img src="/images/banner.gif" alt="banner" className="mx-auto mw-100 min-w-full" />
            </div>

            <WazirExclusive />

            <Recommended />

        </div>
    )
}

export default Home