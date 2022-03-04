import React from 'react'
import { Card } from 'react-bootstrap'

export default function Cards(props) {
  return (
    <Card className='mt-3'>
    <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <hr />
        <Card.Text>
            {props.Text}
        </Card.Text>
    </Card.Body>
    <Card.Img variant="top" src={props.Img} />
    </Card>
  )
}
