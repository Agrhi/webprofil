import React from 'react'
import { Card } from 'react-bootstrap'

export default function Cards(props) {
  return (
    <Card border="secondary" className='mb-5'>
      <Card.Body>
        <Card.Text>
          <Card.Img src={props.Img} style={{ width: '50px'}}/><br />
          {props.Text}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
