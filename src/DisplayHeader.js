import React from 'react';
import { Container, Row, Col } from 'reactstrap';


function DisplayHeader({
    data
}) {
  console.log(data);
  const displayData = () => {
      let income = 0;
      let spending = 0;
      let finalamount = 0;
        if(data && data.length > 0){
            data.map((result,idx)=>{
                    if(result.type === 'income'){
                        income+=parseInt(result.amount);
                    }else if(result.type === 'spending'){
                        spending+=parseInt(result.amount);
                    }
            })
        }
        finalamount = income - spending;
    return (
        <React.Fragment>
        <Row className="total-amount">
    <Col className="total-amount">{finalamount} {"CZK"}</Col>
        </Row>
        <Row className="modules">
            <Col xs='12'>
    <span className="income">Income: {income} {"Kc"}</span>  <span className="spend">Spendings: {spending} {"Kc"}</span></Col>
        </Row>
        </React.Fragment>
 
    )
  }

  return (

    <Container>
      <Row className="parent-container">
        <Row>
          <Col xs='12'>Balance</Col>
        </Row>
        {displayData()}
      </Row>
    </Container>
  );
}

export default DisplayHeader;
