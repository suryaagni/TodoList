import React, { useState } from 'react';
import { Container, Table } from 'reactstrap';
import PaginationList from './PaginationList';
import Logo from '../images/delete.svg';
import editLogo from '../images/edit.svg';
import { PAGE_SIZE, NOTCOMPLETED,COMPLETED } from '../common';
function TodoList({
    data,
    editTodo,
    deleteTodo,
}) {

    const handleClick = (e, index) => {
        e.preventDefault();
        setCurrentPage(index);
    }
    const [currentPage, setCurrentPage] = useState(0);
    const pageSize = PAGE_SIZE;
    const pagesCount = Math.ceil(data.length / pageSize);
    return (
        <Container className="mt-5">
            <Table bordered>
                <thead>
                    <tr>
                        <th> Id</th>
                        <th> Todo</th>
                        <th>Description</th>
                        <th>Completed</th>
                        <th> Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 ? data.slice(
                        currentPage * pageSize,
                        (currentPage + 1) * pageSize
                    ).map((result, index) => {
                        return (
                            <tr>
                                <td>{result.id}</td>
                                <td>{result.todo}</td>
                                <td> {result.comment}</td>
                        <td>{result.completed.toString()}</td>
                                <td><span className="mr-3"><img src={editLogo} alt ="edit"className="logo" onClick={()=>editTodo(result)} /></span><span><img src={Logo} className="logo" alt="delete" onClick={()=>deleteTodo(result)}/></span></td>
                            </tr>

                        )
                    }) : <td colSpan="5">No Records Found</td>}

                </tbody>
            </Table>
            <PaginationList handleClick={handleClick} currentPage={currentPage} pagesCount={pagesCount} />

        </Container>

    );
}

export default TodoList