import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Input } from 'reactstrap';
function AddTodo({
    modal,
    type,
    toggle,
    todo,
    comment,
    setTodo,
    setComment,
    submitData,
}) {


    return (
        <Container>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>{type}</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for="exampleText">Todo</Label>
                        <Input type="text" name="text" id="todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Description</Label>
                        <Input type="textarea" name="comments" id="comments" value={comment} onChange={(e) => setComment(e.target.value)} />
                    </FormGroup>
                    <Button color="primary" disabled={todo.length >= 1 ? false : true} onClick={() => submitData()}>Submit</Button>
                </ModalBody>
            </Modal>
        </Container>
    )
}

export default AddTodo;