import { useGlobalState } from "../../Global/GlobalState";
import { UserType } from "../../Global/Types/Types";
import User from "../User/User";
import UserEdit from "../UserEdit/UserEdit";
import { LinhaTable, ColunaTable, EditButton, ShowUserButton, ButtonDiv, DeleteUserButton } from "./LinhaTableComponentStyles";
import { useState } from "react";

interface LinhaTableProps {
    user?: any;
}

function LinhaTableComponent({ user }: LinhaTableProps) {

    const { deleteUser } = useGlobalState();

    const [editUser, setEditUser] = useState(false);
    const [showUser, setShowUser] = useState(false);

    const showEditUser = () => setEditUser(!editUser)
    const showShowUser = () => setShowUser(!showUser)

    const deleteUserHandler = async () => {
        if (window.confirm(`Tem certeza que deseja excluir o usuário ${user.nome}?`)) {
            await deleteUser(user.id);
        }
    }

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

                        <DeleteUserButton onClick={deleteUserHandler} />
                    </>
                ) : null}
            </ButtonDiv>


        </LinhaTable>
    )
}

export default LinhaTableComponent;