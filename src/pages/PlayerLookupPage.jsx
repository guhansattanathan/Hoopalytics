import ServiceHeader from "../components/ServiceHeader";
import Footer from "../components/Footer";
import PlayerSearch from "../components/PlayerSearch";

const PlayerLookupPage = () => {
 
    return(
    <>
        <ServiceHeader title="Player Lookup" subtitle="Lookup a player who has suited up this season and get streamlined access to their stats" />
        <PlayerSearch />
        <Footer />
    </>
    )
}

export default PlayerLookupPage