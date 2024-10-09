import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber ] = useState(0);
  const dispatch = useDispatch();

  const addContact = (event)=> {
    event.preventDefault(); //Form 태그 사용시 기본으로 되는 새로고침 방지
    dispatch({type: "ADD_CONTACT", payload:{name, phoneNumber}})
  }

  return (
    <div>
      <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" 
        placeholder="이름을 입력해주세요." 
        onChange={(event)=>{
        setName(event.target.value) //Form에 입력되는 값을 받아올 수 있음
        }} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>전화번호</Form.Label>
        <Form.Control type="number" placeholder="전화번호를 입력해주세요." 
        onChange={(event)=>{
          setPhoneNumber(event.target.value) //Form에 입력되는 값을 받아올 수 있음
          }}/>
      </Form.Group>
      <Button variant="primary" type="submit" >
        추가
      </Button>
    </Form>
    </div>
  )
}

export default ContactForm
