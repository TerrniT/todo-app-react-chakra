import { Button, HStack, Input } from '@chakra-ui/react'
import React from 'react'

function AddTodo() {
    function handleSubmit(e) { }
    return (
        <form onSubmit={handleSubmit}>
            <HStack>
                <Input />
                <Button> AddTodo </Button>
            </HStack>
        </form>
    )
}

export default AddTodo;