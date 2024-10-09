import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
    <Row className='profile'>
          <Col lg={1}>
            <img 
              width={50} 
              src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' 
            />
          </Col>
          <Col lg={10}>
            <div>{item.name}</div>
            <div>{item.phoneNumber}</div>
          </Col>   
    </Row>
  )
}

export default ContactItem
