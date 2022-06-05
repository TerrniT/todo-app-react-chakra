import React from 'react'
import { HStack, VStack } from '@chakra-ui/react'

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
        <VStack>
            {todos.map(todo=>(
                <HStack>

                </HStack>
            ))}
        </VStack>
    )
}

export default TodoList