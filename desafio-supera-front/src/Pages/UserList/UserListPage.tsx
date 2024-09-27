import { Container, ReturnButton, AdvanceButton } from "./UserListPageStyles";
import TableComponent from "../../Components/Table/TableComponent";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";


function UserListPage() {

    return (
        <Container>
            <ReturnButton />
            <AdvanceButton />
            <TableComponent />
        </Container>
    )
}

export default UserListPage;