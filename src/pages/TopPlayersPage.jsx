import TopPlayersTable from "../components/TopPlayersTable";
import ServiceHeader from "../components/ServiceHeader";
import Footer from "../components/Footer";

const TopPlayersPage = () => {
    return(
        <>
        <ServiceHeader title="Top 10 Players" subtitle="Find the top 10 players for every major stat category and discover
          who leads in points, rebounds, assists, and more."/>
        <TopPlayersTable />
        <Footer />
        </>
    );
}

export default TopPlayersPage;