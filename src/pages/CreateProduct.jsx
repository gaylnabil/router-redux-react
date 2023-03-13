import React from 'react'
import { useNavigate } from 'react-router-dom';
const CreateProduct = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>CreateProduct</h1>
      <button
        className="btn btn-warning "
        onClick={() => { navigate(-1) }}
      >Go Back</button>
    </div>
  )
}

export default CreateProduct
