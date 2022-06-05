import { Button, HStack, Input } from '@chakra-ui/react'
import React from 'react'
import {useState} from 'react'

function AddTodo({AddTodo}) {
    function handleSubmit(e) { 
        e.preventDefault();
        console.log(content);
        const todo = {
            id: '',
            body: content,
        };
    }

    const [content, setContent] = useState('');

    return (
        <form onSubmit={handleSubmit}>
            <HStack>
                <Input 
                    variant= 'filled'
                    placeholder='what today ill going to-do ..'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
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