import LinhaTableComponent from "../LinhaTable/LinhaTableComponent";
import { Table, LinhaTable, ColunaTable, InputWrapper, Container, FilterWrapper, ButtonWrapper } from "./TableComponentStyles";
import { useGlobalState } from "../../Global/GlobalState";
import { useState } from "react";
import { useToast } from "../../Global/ToastContext";

function TableComponent() {

    const { userData, filterUsers, clearSearch } = useGlobalState();
    const [filterType, setFilterType] = useState('');
    const [filterValue, setFilterValue] = useState('');
    const { notify } = useToast();

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'filterType') {
            setFilterType(value);
        } else {
            setFilterValue(value);
        }
    };

    const mapProfileValue = (value: string) => {
        const lowerValue = value.toLowerCase();
        if (lowerValue === 'administrador') {
            return 'admin';
        } else if (lowerValue === 'usuario' || lowerValue === 'usuário') {
            return 'user';
        }
        return value;
    };

    const handleSubmitFilter = () => {

        let adjustedValue = filterValue;

        if (filterType === 'perfil') {
            adjustedValue = mapProfileValue(filterValue);
        }

        if (filterValue !== '' && filterType) {
            filterUsers(filterType, adjustedValue);
        } else if (filterType === '') {
            notify('Selecione um filtro válido antes de fazer a busca!', 'warning');
        } else {
            clearSearch();
        }
    };

    const handleClearFilter = () => {
        setFilterType('');
        setFilterValue('');
        clearSearch();
    };

    const usersToRender = [...userData, ...(new Array(5 - userData.length)).fill(null)];
    const usersRendering = usersToRender.map((user, index) => {
        return <LinhaTableComponent key={index} user={user || {}} />
    })


    return (
        <Container>
            <InputWrapper>
                <FilterWrapper>
                    <input
                        type="text"
                        name="filterValue"
                        value={filterValue}
                        onChange={handleFilterChange}
                        placeholder="Escolha o filtro ao lado e digite sua busca!">
                    </input>
                    <select name="filterType" value={filterType} onChange={handleFilterChange}>
                        <option value="">Filtrar</option>
                        <option value="nome">Nome</option>
                        <option value="email">E-mail</option>
                        <option value="perfil">Perfil</option>
                    </select>
                </FilterWrapper>
                <ButtonWrapper>
                    <button onClick={handleSubmitFilter} id="button-aplicar">Aplicar Filtro</button>
                    <button onClick={handleClearFilter} id="button-limpar">Limpar Filtro</button>
                </ButtonWrapper>
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