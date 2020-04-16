import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Logo  from './icon_delete.svg';

function DisplayList({
    data,
    deleteData,
}) {
  console.log(data);
  return (
  <Container>
     <Row className="list-container">
       {data && data.length > 0 ? data.map((result,index)=> {
            console.log("index"+index);
            return (  
            <React.Fragment>
                   <div className="display-date">{result.added.toDateString()}</div>
            <Row className='border-row' key={index}>
               
            <Col xs='4' className={result.type == 'spending'?'spend':'income'}>{result.amount} {"Kc"}</Col>
          <Col xs='6'> {result.comment}</Col>
            <Col xs='2' onClick= {()=>deleteData(index)}><img src={Logo} className="logo"/></Col>
                </Row> </React.Fragment>)
          }) :''}
        </Row>
       
    </Container>
  );
}

export default DisplayList;
