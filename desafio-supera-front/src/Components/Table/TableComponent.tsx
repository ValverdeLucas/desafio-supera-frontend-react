import LinhaTableComponent from "../LinhaTable/LinhaTableComponent";
import { Table, LinhaTable, ColunaTable } from "./TableComponentStyles";

function TableComponent() {
    return (
        <Table>
            <LinhaTable>
                <ColunaTable>User ID</ColunaTable>
                <ColunaTable>Nome</ColunaTable>
                <ColunaTable>E-mail</ColunaTable>
                <ColunaTable>Perfil</ColunaTable>
                <ColunaTable>Idade</ColunaTable>
                <ColunaTable>Ações</ColunaTable>
            </LinhaTable>
            <LinhaTableComponent />
            <LinhaTableComponent />
            <LinhaTableComponent />
            <LinhaTableComponent />
            <LinhaTableComponent />
        </Table>
    )
}

export default TableComponent;