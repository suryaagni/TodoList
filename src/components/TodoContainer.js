import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'reactstrap';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import {ADD_TODO,EDIT_TODO} from '../common';
function TodoContainer() {
  const [modal, setModal] = useState(false);
  const [type, setType] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [filter, setFilter] = useState(false);
  const [todo, setTodo] = useState('');
  const [comment, setComment] = useState('');
  const [currentId, setCurrentId] = useState(0);
  const [filterValue, setFilterValue] = useState('');


  // for add form  modalbox 
  const showAddForm = () => {
    setModal(true);
    setType(ADD_TODO);
  }
  const toggle = () => clearTodo();
  
  // adding new todo
  const submitData = () => {
    if (currentId === 0) {
      const updatedList = [...todoList, { id: todoList.length + 1, todo, comment }];
      setTodoList(updatedList);
    } else {
      const result = todoList.map((result) => {
        return result.id === currentId ?
          { ...result, todo, comment }
          : result
      })
      setTodoList(result);
      setCurrentId(0);
    }
    clearTodo();
    setFilterValue('');
    setFilter(false);
  }

  // clearing the defined values
  const clearTodo = () => {
    setModal(!modal);
    setType('');
    setTodo('');
    setComment('');
  }
  // filter the todo
  const filterData = (e) => {
    setFilterValue(e.target.value);
    let allTodos = todoList;
    if (e.target.value.length > 0) {
      const finalList = allTodos.filter((result) => {
        return result.todo.toLowerCase().match(e.target.value.toLowerCase());
      });
      setFilterList(finalList);
      setFilter(true);
    } else {
      setTodoList(todoList);
      setFilter(false);
    }
  }

  // edit the todo
  const editTodo = (data) => {
    setTodo(data.todo);
    setComment(data.comment);
    setType(EDIT_TODO);
    setModal(true);
    setCurrentId(data.id);
  }
  // delete the todo
  const deleteTodo = (data) => {
    const deletedData = todoList.filter((deleteList) => {
      return data.id != deleteList.id;
    });
    setTodoList(deletedData);
    setFilterValue('');
    setFilter(false);
  }
  return (
    <Container >
      <h2 className="header-class"> Todo App</h2>
      <Row>
        <Col md="6">
          <span>Search: <input type="text" onChange={(e) => filterData(e)} value={filterValue} placeholder="Enter todo" /></span>
        </Col>
        <Col md="4">
          <Button color="success" className="align-button" onClick={() => showAddForm()}>Add Todo</Button>
        </Col>
      </Row>
      {modal && type != '' ? <AddTodo type={type}
        modal={modal}
        toggle={toggle}
        todo={todo}
        comment={comment}
        setTodo={setTodo}
        setComment={setComment}
        submitData={submitData}
      /> : ''}
      <TodoList data={filter ? filterList : todoList} editTodo={editTodo} deleteTodo={deleteTodo} />
    </Container>
  );
}

export default TodoContainer;
