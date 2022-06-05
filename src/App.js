import { Heading, VStack, IconButton } from '@chakra-ui/react'
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { FaSun, FaMoon } from 'react-icons/fa'


function App() {
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
      <TodoList/>
    </VStack>
  );
}

export default App;
