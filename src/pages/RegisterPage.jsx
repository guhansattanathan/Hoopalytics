import ServiceHeader from "../components/ServiceHeader";
import Register from "../components/Register";
import Footer from "../components/Footer";

export default function RegisterPage(props){
    return(
        <>
            <ServiceHeader title="Register" subtitle="Create an account to gain access to additional services"/>
            <Register {...props}/>
            <Footer />
        </>
    )
}
