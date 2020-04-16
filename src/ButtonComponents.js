import React, {useState} from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, FormGroup,Label,Input } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ButtonComponents({
    addData,
}) {
    const [modal, setModal] = useState(false);
    const [date, setDate] = useState(new Date());
    const [type, setType] = useState('');
    const [amount,setAmount] = useState(0);
    const [comment,setComment] = useState('');
    const toggle = () => setModal(!modal);
    const handleChange = (date) => {
        console.log(date);
        setDate(date);
    }
    const showTypeModal = (type) => {
        setModal(true);
        setType(type);
    }

    const submitData = () => {
        let x = {
            amount,
            comment,
            type,
            added:date
        }
        setModal(false);
        addData(x);
        
    }
    return (
        <Container>
            <Row className="button-container">
                <Col md="4">
                    <Button color="success" onClick= {()=> showTypeModal('income')}>Add Income</Button>
                </Col>
                <Col md="4">
                    <Button color="danger" onClick= {()=> showTypeModal('spending')}>Add Spending</Button>
                </Col>
            </Row>
            <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader>Add{type}</ModalHeader>
                <ModalBody>
                <FormGroup>
                     <Label for="exampleText">Amount</Label>
        <Input type="text" name="text" id="amount" value={amount} onChange={(e)=>setAmount(e.target.value)} />
      </FormGroup>
      <FormGroup>
            <DatePicker selected={date} onChange={(date) =>handleChange(date)} />
      </FormGroup>
      <FormGroup>
                     <Label for="exampleText">Comments</Label>
        <Input type="textarea" name="comments" id="comments" value={comment} onChange={(e)=>setComment(e.target.value)} />
      </FormGroup>
      <Button color="primary" disabled={amount > 1?false:true}onClick= {()=> submitData()}>Submit</Button>
                </ModalBody>
            </Modal>
        </Container>
    );
}

export default ButtonComponents;
