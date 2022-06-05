import { Heading, VStack, IconButton } from '@chakra-ui/react'
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { FaSun, FaMoon } from 'react-icons/fa'
import { useState, useEffect } from 'react'


function App() {
  const initialTodos = [
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
  ];

  const [todos, setTodos] = useState(initialTodos);
  return (
    <VStack p={10}>
      <IconButton icon={<FaSun />}
        isRound='true'
        size='lg'
        alignSelf='flex-end'
      />
      <Heading
        mb='8'
        fontWeight='extrabold'
        size='2xl'
        alignSelf='flex-start'
        bgGradient='linear(to-r, green.500, teal.400)'
        bgClip='text'
      >
        Todo Application
      </Heading>
      <TodoList todos={todos} />
      <AddTodo />
    </VStack>
  );
}

export default App;
