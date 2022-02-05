import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import './List.css'

function List() {
    return <div className='list-body'>
        <h2 className='text-primary'>Movimentações recentes</h2>
        <Table striped borderless>
            <thead className='bg-primary text-light'>
                <tr>
                    <th>
                        Nome
                    </th>
                    <th>
                        Tipo
                    </th>
                    <th>
                        Data
                    </th>
                    <th>
                        Valor
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        Boleto
                    </td>
                    <td>
                        Despesa
                    </td>
                    <td>
                        20/04/2022
                    </td>
                    <td>
                        R$ 100,00
                    </td>
                </tr>
                <tr>
                    <td>
                        Boleto
                    </td>
                    <td>
                        Despesa
                    </td>
                    <td>
                        20/04/2022
                    </td>
                    <td>
                        R$ 100,00
                    </td>
                </tr>
                <tr>
                    <td>
                        Boleto
                    </td>
                    <td>
                        Despesa
                    </td>
                    <td>
                        20/04/2022
                    </td>
                    <td>
                        R$ 100,00
                    </td>
                </tr>
                <tr>
                    <td>
                        Boleto
                    </td>
                    <td>
                        Despesa
                    </td>
                    <td>
                        20/04/2022
                    </td>
                    <td>
                        R$ 100,00
                    </td>
                </tr>
            </tbody>
        </Table>
    </div>;
}

export default List;
