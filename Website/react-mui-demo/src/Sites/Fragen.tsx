import NavLeiste from "../Components/NavLeiste";
import Test from "../Components/Test"
import Footer from "../Components/Footer"
import Testimonials from "../Components/Testimonials";

export default function Fragen ({loggedInUser}: any) {
    return (
        <>
            <NavLeiste loggedInUser={loggedInUser}/>
            <Testimonials />
            <Footer />
        </>
    )
}
