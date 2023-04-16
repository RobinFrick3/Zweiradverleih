import Footer from "../Components/Footer";
import NavLeiste from "../Components/NavLeiste";

export const SoFunktionierts = ({loggedInUser}: any) => {
    return (
        <>
            <NavLeiste loggedInUser={loggedInUser}/>
            <Footer />
        </>
    )
}

export default SoFunktionierts;