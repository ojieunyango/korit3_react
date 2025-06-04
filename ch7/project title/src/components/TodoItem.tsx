// 다국어 번역 기능을 위해 useTranslation 훅을 불러옵니다.
import { useTranslation } from 'react-i18next';

// Todo 타입(인터페이스)을 불러옵니다. 각 할 일이 어떤 데이터를 가지는지 정의되어 있습니다.
import type { Todo } from '../types/Todo';

// TodoItem 컴포넌트가 받을 props의 타입을 정의합니다.
interface TodoItemProps {
  // 표시할 단일 할 일 객체
  todo: Todo;

  // 할 일 완료 상태를 토글하는 함수 (id를 인자로 받음)
  onToggleComplete: (id: string) => void;

  // 할 일을 삭제하는 함수 (id를 인자로 받음)
  onDeleteTodo: (id: string) => void;
}

// TodoItem 컴포넌트 정의
// props로 todo 객체와 완료 토글, 삭제 함수들을 받습니다.
const TodoItem: React.FC<TodoItemProps> = (props: TodoItemProps) => {
  // 다국어 처리에 필요한 t 함수를 가져옵니다.
  const { t } = useTranslation();

  // props에서 필요한 값들을 구조 분해 할당합니다.
  const { todo, onToggleComplete, onDeleteTodo } = props;

  return (
    // 할 일 하나를 나타내는 li 태그
    // todo.completed가 true면 'completed'라는 CSS 클래스가 추가되어 스타일이 달라집니다.
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      
      {/* 
        할 일 텍스트 부분입니다.
        클릭하면 완료 상태를 토글하는 함수가 호출됩니다. 
        커서가 손가락 모양으로 바뀌도록 스타일을 지정해 사용자가 클릭 가능한 영역임을 알 수 있게 합니다.
      */}
      <span 
        onClick={() => onToggleComplete(todo.id)} 
        style={{ cursor: 'pointer' }}
      >
        {todo.text}
      </span>

      {/* 
        삭제 버튼입니다.
        버튼을 클릭하면 onDeleteTodo 함수가 호출되어 해당 아이템이 삭제됩니다.
        버튼의 텍스트는 다국어 번역 기능으로 처리되어 '삭제' 같은 문구가 표시됩니다.
      */}
      <button onClick={() => onDeleteTodo(todo.id)}>
        {t('delete_button')}
      </button>
    </li>
  );
};

// TodoItem 컴포넌트를 다른 곳에서 사용할 수 있도록 export 합니다.
export default TodoItem;
