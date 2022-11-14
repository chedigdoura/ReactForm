import React from 'react'
import Form from 'react-bootstrap/Form';
import '../CssFiles/Main.css'

function Main() {
  return (
    <div >
      <Form.Group className="mb-3">
        <Form.Label>Nom et prénom</Form.Label>
        <Form.Control placeholder="Name & First Name" disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>E-mail Adress</Form.Label>
        <Form.Select disabled>
          <option>Your e-mail adress</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Can't check this" disabled />
      </Form.Group>
    </div>
  )
}

export default Main