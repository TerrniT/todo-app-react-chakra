import { Button, HStack, Input } from '@chakra-ui/react'
import React from 'react'

function AddTodo() {
    function handleSubmit(e) { }
    return (
        <form onSubmit={handleSubmit}>
            <HStack>
                <Input 
                    variant= 'filled'
                    placeholder='what today ill going to-do ..'
                    p="5"
                    
                />
                <Button
                    bg= 'green.400'
                    p='5'
                    borderRadius= 'xl'
                > AddTodo </Button>
            </HStack>
        </form>
    )
}

export default AddTodo;