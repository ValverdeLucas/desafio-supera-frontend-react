import User from "../User/User";
import UserEdit from "../UserEdit/UserEdit";
import { LinhaTable, ColunaTable, EditButton, ShowUserButton, ButtonDiv } from "./LinhaTableComponentStyles";
import { useState } from "react";

function LinhaTableComponent() {

    const [editUser, setEditUser] = useState(false);
    const showEditUser = () => setEditUser(!editUser)
    const [showUser, setShowUser] = useState(false);
    const showShowUser = () => setShowUser(!showUser)

    return (
        <LinhaTable>
            <ColunaTable>Teste 1</ColunaTable>
            <ColunaTable>Teste 2</ColunaTable>
            <ColunaTable>Teste 3</ColunaTable>
            <ColunaTable>Teste 4</ColunaTable>
            <ColunaTable>Teste 5</ColunaTable>
            <ButtonDiv>
                <EditButton onClick={showEditUser} />
                {editUser && <UserEdit active={setEditUser} />}
               
                <ShowUserButton onClick={showShowUser} />
                {showUser && <User active={setShowUser} />}
            </ButtonDiv>


        </LinhaTable>
    )
}

export default LinhaTableComponent;