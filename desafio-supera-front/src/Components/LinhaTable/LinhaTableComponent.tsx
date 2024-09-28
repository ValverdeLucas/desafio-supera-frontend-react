import { UserType } from "../../Global/Types/Types";
import User from "../User/User";
import UserEdit from "../UserEdit/UserEdit";
import { LinhaTable, ColunaTable, EditButton, ShowUserButton, ButtonDiv } from "./LinhaTableComponentStyles";
import { useState } from "react";

interface LinhaTableProps {
    user?: any;
}

function LinhaTableComponent({ user }: LinhaTableProps) {

    const [editUser, setEditUser] = useState(false);
    const [showUser, setShowUser] = useState(false);

    const showEditUser = () => setEditUser(!editUser)
    const showShowUser = () => setShowUser(!showUser)

    return (
        <LinhaTable>
            {user && user.id ? (
                <>
                    <ColunaTable>{user.id}</ColunaTable>
                    <ColunaTable>{user.nome}</ColunaTable>
                    <ColunaTable>{user.email}</ColunaTable>
                    <ColunaTable>{user.perfil}</ColunaTable>
                    <ColunaTable>{user.telefone}</ColunaTable>
                    <ColunaTable>{user.idade}</ColunaTable>
                </>
            ) : (
                <>
                </>
            )}
            <ButtonDiv>
                {user && user.id ? (
                    <>
                        <EditButton onClick={showEditUser} />
                        {editUser && <UserEdit active={setEditUser} userId={user?.id} />}

                        <ShowUserButton onClick={showShowUser} />
                        {showUser && <User active={setShowUser} user={user as UserType} />}
                    </>
                ) : null}
            </ButtonDiv>


        </LinhaTable>
    )
}

export default LinhaTableComponent;