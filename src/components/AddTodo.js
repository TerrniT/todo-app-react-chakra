import {
    Button,
    HStack,
    Input,
    useToast
} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid';

function AddTodo({ addTodo }) {

    const toast = useToast()

    function handleSubmit(e) {
        e.preventDefault();
        if (!content) {
            toast({
                title: 'No content',
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
            return
        }
        const todo = {
            id: nanoid(),
            body: content,
        };

        addTodo(todo);
        setContent('');
    }

    const [content, setContent] = useState('');

    return (
        <form onSubmit={handleSubmit}>
            <HStack>
                <Input
                    variant='filled'
                    placeholder='what today ill going to-do ..'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    p="5"
                />
                <Button
                    bg='green.400'
                    px='8px'
                    type="submit"
                    p='5'
                    borderRadius='xl'
                > AddTodo </Button>
            </HStack>
        </form>
    )
}

export default AddTodo;