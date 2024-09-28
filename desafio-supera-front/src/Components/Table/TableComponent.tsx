import LinhaTableComponent from "../LinhaTable/LinhaTableComponent";
import { Table, LinhaTable, ColunaTable, InputWrapper, Container } from "./TableComponentStyles";
import { useGlobalState } from "../../Global/GlobalState";

function TableComponent() {

    const { userData } = useGlobalState();
    const usersToRender = [...userData, ...(new Array(5 - userData.length)).fill(null)];
    const usersRendering = usersToRender.map((user, index) => {
        return <LinhaTableComponent key={index} user={user || {}} />
    })


    return (
        <Container>
            <InputWrapper>
                <input
                    // type="text"
                    // value={"null"}
                >
                </input>
                <select>
                    <option>Nome</option>
                    <option>E-mail</option>
                    <option>Perfil</option>
                </select>
                {/* <input type="submit" value="Submit">Buscar</input> */}
            </InputWrapper>
            <Table>
                <LinhaTable>
                    <ColunaTable>User ID</ColunaTable>
                    <ColunaTable>Nome</ColunaTable>
                    <ColunaTable>E-mail</ColunaTable>
                    <ColunaTable>Perfil</ColunaTable>
                    <ColunaTable>Telefone</ColunaTable>
                    <ColunaTable>Idade</ColunaTable>
                    <ColunaTable>Ações</ColunaTable>
                </LinhaTable>
                {usersRendering}
            </Table>
        </Container>
    )
}

export default TableComponent;