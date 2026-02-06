import ServiceHeader from "../components/ServiceHeader";
import Footer from "../components/Footer";
import StrengthOfScheduleChart from "../components/StrengthOfScheduleChart";

export default function RealityCheckPage(){

    return(
    <>
        <ServiceHeader title="Reality Check" subtitle="Discover if your team's record reflects true performance or just an easy schedule" />
        <StrengthOfScheduleChart />
        <Footer />
    </>
    )
}