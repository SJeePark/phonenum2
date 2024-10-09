import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';


const SearchBox = () => {
  const[search, setSearch] = useState("");
  const dispatch = useDispatch();
  const findName = (event) =>{
    event.preventDefault();
    dispatch({type: "SEARCH_NAME", payload:{search}}
    )
  }

  const showAll = (event) =>{
    event.preventDefault();
    dispatch({ type: "SEARCH_NAME", payload: { search: "" } });
  }

  return (
    <Form className='searchBox' onSubmit={findName}>
      <Row>
        <div>검색</div>
        <Col lg={8}>
            <Form.Control 
            placeholder='이름 또는 연락처를 입력하세요'
            onChange={(event) => setSearch(event.target.value)}></Form.Control>
        </Col>
        <Col lg={4}>
            <Button onClick={findName}>찾기</Button>
            <Button type ='submit' onClick={(event) => showAll(event)}>전체보기</Button>
        </Col>
      </Row>
      </Form>
  )
}

export default SearchBox