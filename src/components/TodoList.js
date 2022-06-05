import React from 'react'
import { HStack, VStack, Text, IconButton, StackDivider } from '@chakra-ui/react';
import {FaTrash} from 'react-icons/fa';

function TodoList() {
    const todos = [
        {
            id: 1,
            body: 'get bread',
        },
        {
            id: 2,
            body: 'get pussy',
        },
        {
            id: 3,
            body: 'start to code',
        },
    ]
    return (
        <VStack
            divider={<StackDivider/>}
            borderColor="gray.100"
            borderWidth='2px'
            borderRadius='lg'
            p='4'
            w='100%'
            maxW={{base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw'}}
        >
            {todos.map(todo=>(
                <HStack key={todo.id}>
                    <Text>{todo.body}</Text>
                    <IconButton icon={<FaTrash/>} isRound='true'/>
                </HStack>
            ))}
        </VStack>
    )
}

export default TodoList