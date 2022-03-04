import React from 'react'
import { Card } from 'react-bootstrap'

export default function Cards(props) {
  return (
    <Card border="secondary" className='mb-5'>
      <Card.Body>
        <Card.Title>{props.Header}</Card.Title>
        <hr />
        <Card.Text>
          {props.Text}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
