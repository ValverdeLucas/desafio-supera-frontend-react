import { Container } from "./UserListPageStyles";
import { ReturnButton } from "../../Components/Buttons/ReturnButton";
import { AdvanceButton } from "../../Components/Buttons/AdvanceButton";
import TableComponent from "../../Components/Table/TableComponent";
import { useGlobalState } from "../../Global/GlobalState";
import { ToastContainer } from "react-toastify";

function UserListPage() {

    const { userData, loading, error, currentPage, totalPages, changePage } = useGlobalState();

    const handlePageChange = (newPage: number) => {
        changePage(newPage)
    }

    console.log(userData)

    return (
        <Container>
            <ReturnButton onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
            <AdvanceButton onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
            {loading && <p>Carregando...</p>}
            {!loading && error && <p>Ocorreu um erro ao carregar os dados!</p>}
            {!loading && !error && <TableComponent />}
            <ToastContainer limit={3} />
        </Container>
    )
}

export default UserListPage;