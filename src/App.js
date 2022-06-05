import {
  Heading,
  VStack,
  IconButton,
  useColorMode,
  Stack,
  Text
} from '@chakra-ui/react'
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { FaSun, FaMoon } from 'react-icons/fa'
import { useState, useEffect } from 'react'


function App() {
  // const initialTodos = [
  //   {
  //     id: 1,
  //     body: 'get bread',
  //   },
  //   {
  //     id: 2,
  //     body: 'get pussy',
  //   },
  //   {
  //     id: 3,
  //     body: 'start to code',
  //   },
  // ];

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function deleteTodo(id) {
    const newTodos = todos.filter(todo => {
      return todo.id !== id
    })
    setTodos(newTodos)
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={10}>
      <IconButton icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound='true'
        size='lg'
        alignSelf='flex-end'
        onClick={toggleColorMode}
        bgGradient='linear(to-r, blue.700, teal.500)'
        color="black"
      />
      <Stack>
        <Heading
          mt={10}

          fontWeight='bold'
          size='xl'
          alignSelf='flex-center'
          bgGradient='linear(to-r, blue.500, teal.400)'
          bgClip='text'
        >
          Todo Application
        </Heading>
        <Text fontSize='xl'
          textAlign="center"
          bgGradient='linear(to-l, gray.600, blue.400)'
          bgClip='text'
        >
          by t4rrnit</Text>
      </Stack>


      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
