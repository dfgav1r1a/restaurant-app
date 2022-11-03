import { useRouter } from "next/router";
import { useContext } from "react";
import AppContext from "../components/context";
import Container from "reactstrap/lib/Container";
 
function Success () {
    const context = useContext(AppContext);
    const router = useRouter();
    
    setTimeout(() => {
        router.push('/');
    }, 3000);
    
    return (
        <Container>
            <div>
                <h4>Thank you {context.user.username}</h4>
                <h5>Your purchase was successfull</h5>
                <h6>Bringing you back to the home page ...</h6>
            </div>
        </Container>
    )
}

export default Success;