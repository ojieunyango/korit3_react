// 다국어 번역을 위한 useTranslation 훅을 불러옵니다.
import { useTranslation } from 'react-i18next';

// Todo 타입을 불러옵니다. 할 일 객체의 구조를 정의합니다.
import type { Todo } from '../types/Todo';

// 개별 할 일을 렌더링하는 TodoItem 컴포넌트를 불러옵니다.
import TodoItem from './TodoItem';

// TodoList 컴포넌트가 받을 props의 타입을 정의합니다.
interface TodoListProps {
  // 할 일 배열
  todos: Todo[];

  // 완료 상태 토글 함수
  onToggleComplete: (id: string) => void;

  // 삭제 함수
  onDeleteTodo: (id: string) => void;
}

// TodoList 컴포넌트 정의
// 할 일 배열과 완료 토글, 삭제 함수를 props로 받아서 사용합니다.
const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  // props에서 필요한 값들을 구조 분해 할당합니다.
  const { todos, onToggleComplete, onDeleteTodo } = props;

  // 다국어 처리 함수 t를 가져옵니다.
  const { t } = useTranslation();

  return (
    // 할 일 목록을 담을 ul 태그입니다.
    <ul className="todo-list">
      {
        // todos 배열이 비어 있으면(할 일이 없으면)
        todos.length === 0 ? (
          // 할 일이 없다는 메시지를 다국어 번역해서 보여줍니다.
          <p>{t('no_task')}</p>
        ) : (
          // 할 일이 있으면 배열을 map으로 순회하면서
          // 각 todo를 TodoItem 컴포넌트로 렌더링합니다.
          todos.map((todo) => (
            <TodoItem
              key={todo.id} // React에서 리스트 렌더링 시 고유 키를 꼭 넣어줘야 성능 최적화됨
              todo={todo} // 각 할 일 객체 전달
              onDeleteTodo={onDeleteTodo} // 삭제 함수 전달
              onToggleComplete={onToggleComplete} // 완료 토글 함수 전달
            />
          ))
        )
      }
    </ul>
  );
};

// 다른 곳에서 사용할 수 있도록 export 합니다.
export default TodoList;
