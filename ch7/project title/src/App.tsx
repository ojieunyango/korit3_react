// App 컴포넌트의 스타일을 적용하기 위한 CSS 파일을 불러옵니다.
import './App.css';

// 할 일을 입력하는 폼 컴포넌트를 불러옵니다.
import TodoForm from './components/TodoForm';

// UUID(고유 식별자)를 생성하기 위한 라이브러리입니다. 각 할 일에 고유한 ID를 부여할 때 사용됩니다.
import { v4 as uuid } from 'uuid';

// Todo 타입(인터페이스)을 불러옵니다. 각 할 일이 어떤 구조를 가질지를 정의합니다.
import type { Todo }  from './types/Todo';

// 할 일 목록을 화면에 보여주는 리스트 컴포넌트를 불러옵니다.
import TodoList from './components/TodoList';

// 로컬 스토리지를 사용할 수 있게 해주는 커스텀 훅을 불러옵니다.
// 이걸 사용하면 새로고침해도 데이터가 브라우저에 저장되어 유지됩니다.
import { useLocalStorage } from './hooks/useLocalStorage';

// 다국어(i18n) 처리를 위한 훅을 불러옵니다. 화면의 텍스트를 여러 언어로 바꿀 수 있습니다.
import { useTranslation } from 'react-i18next';

// 다국어 설정을 포함하는 i18n 초기화 파일을 불러옵니다.
import './i18n/i18n';


// App 컴포넌트 정의
const App: React.FC = () => {
  // useTranslation 훅을 통해 t (번역 함수), i18n (언어 설정 객체)를 가져옵니다.
  const { t, i18n } = useTranslation();

  // 언어를 변경하는 함수입니다. 버튼 클릭 시 호출되어 영어 또는 독일어로 전환합니다.
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  // useLocalStorage 훅을 사용하여 todos 상태를 선언합니다.
  // 'todos'라는 키로 로컬스토리지에 저장되며, 초기값은 빈 배열입니다.
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);

  // 새 할 일을 추가하는 함수입니다.
  const addTodo = (text: string) => {
    // 새로운 할 일을 생성합니다. UUID로 고유한 ID를 만들고, 완료 여부는 false로 시작합니다.
    const newTodo: Todo = {
      id: uuid(),
      text,
      completed: false,
    };

    // 기존 todos 배열에 새 할 일을 추가한 새 배열을 만듭니다.
    const updatedTodos = [...todos, newTodo];

    // 새로운 배열로 상태를 업데이트합니다. 로컬스토리지에도 반영됩니다.
    setTodos(updatedTodos);
  };

  // 특정 할 일을 삭제하는 함수입니다.
  const deleteTodo = (id: string) => {
    // id가 일치하지 않는 것들만 필터링해서 새로운 배열을 만듭니다.
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    // 상태를 업데이트합니다.
    setTodos(updatedTodos);
  };

  // 특정 할 일의 완료 여부를 토글(반전)하는 함수입니다.
  const toggleComplete = (id: string) => {
    // 해당 id를 가진 할 일의 completed 값을 반대로 바꿉니다.
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );

    // 상태를 업데이트합니다.
    setTodos(updatedTodos);
  };

  // 실제 화면에 렌더링할 JSX 반환
  return (
    <div>
      {/* 앱의 제목. 다국어로 번역된 텍스트가 표시됩니다. */}
      <h1>{t('app_title')}</h1>

      {/* 언어 변경 버튼들 */}
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('de')}>German</button>
      </div>

      {/* 할 일 추가 폼. 사용자가 입력한 텍스트를 addTodo 함수로 전달합니다. */}
      <TodoForm onAddTodo={addTodo} />

      {/* 할 일 목록을 보여주는 리스트. 각각의 할 일에는 삭제 및 완료 처리 기능이 있습니다. */}
      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodo}
        onToggleComplete={toggleComplete}
      />

      {/* TodoList는 todos 배열을 순회하면서 각 할 일을 TodoItem 컴포넌트로 렌더링합니다.
          이후 TodoItem 컴포넌트는 텍스트와 함께 완료 여부, 삭제 버튼 등을 표시하게 됩니다. */}
    </div>
  );
};

// App 컴포넌트를 외부에서 사용할 수 있도록 export 합니다.
// 이 컴포넌트는 index.tsx 또는 main.tsx에서 렌더링됩니다.
export default App
