import React from 'react'
import Container  from '../components/Container/Container'
import { PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-8 bg-gradient-to-t from-black-100 to-white'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost