import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import DisplayHeader from './DisplayHeader';
import DisplayList from './DisplayList';
import ButtonComponents from './ButtonComponents';
function BalanceDashboard() {
  useEffect(() => {
    const incomeData = {id:0,comment:'salary from work',amount: '42000', type: 'income', added: new Date('01-07-2019')}
    calculateIncome(prevState => [...prevState, incomeData]);
  },[]);
  
  const [income, calculateIncome] = useState([]);
  const deleteData = (id) => {
    calculateIncome(income.filter(item => item.id !== id));
  }
  const submitData = (data) => {
    console.log(data);
    calculateIncome(prevState => [...prevState, {id:income.length,amount: data.amount, comment:data.comment, type: data.type,added: data.added}]);
  }
    return (
    <Container>
        <DisplayHeader data= {income}/>
        <DisplayList data={income} deleteData={deleteData}/>
        <ButtonComponents addData={submitData}/>
    </Container>
  );
}

export default BalanceDashboard;
