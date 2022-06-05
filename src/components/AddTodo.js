import { Button, HStack, Input } from '@chakra-ui/react'
import React from 'react'

function AddTodo({AddTodo}) {
    function handleSubmit(e) { 
        e.preventDefault();
        console.log('123');
    }
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
                    px='8px'
                    type="submit"
                    p='5'
                    borderRadius= 'xl'
                > AddTodo </Button>
            </HStack>
        </form>
    )
}

export default AddTodo;