import React from 'react';
import { Container, Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Input } from 'reactstrap';
function AddTodo({
    modal,
    type,
    toggle,
    todo,
    comment,
    setTodo,
    setComment,
    submitData,
    completed,
    setCompleted,
}) {


    return (
        <Container>
            <Modal isOpen={modal} toggle={toggle} autoFocus={false}>
                <ModalHeader>{type}</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for="exampleText">Todo</Label>
                        <Input type="text" name="text" id="todo" autoFocus={true} value={todo} onChange={(e) => setTodo(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
        <Label for="Status">Completed</Label>
        <Input type="select" name="select" id="completed" value={completed} onChange={(e) => setCompleted(e.target.value)}>
          <option value={true}>True</option>
          <option value={false}>False</option>
        </Input>
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