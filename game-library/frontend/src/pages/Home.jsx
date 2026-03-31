import Swiper from "../components/Swiper";
import GameList from "../components/GameList";
import Navbar from "../components/Navbar"; // Navbar import qilindi
import { useState } from "react";
import Footer from "../components/Footer";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div>
            {/* Navbar'ga onSearch propini beramiz */}
            <Navbar onSearch={setSearchQuery} />

            <Swiper />

            <div className="App p-4">
                <GameList searchQuery={searchQuery} />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
