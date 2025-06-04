// React에서 useState와 ChangeEvent 타입을 불러옵니다.
import { useState } from "react";
import type { ChangeEvent } from "react";

// 부모 컴포넌트(App 등)에서 전달받을 props의 타입을 정의합니다.
// onAddTodo는 텍스트를 포함한 객체를 인자로 받아 void를 반환하는 함수입니다.
interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

// TodoForm 컴포넌트 정의
// props를 인자로 받아 구조 분해 할당으로 onAddTodo만 추출합니다.
const TodoForm: React.FC<TodoFormProps> = (props: TodoFormProps) => {
  const { onAddTodo } = props;

  // text라는 상태를 선언합니다. 사용자가 입력한 텍스트를 저장합니다.
  const [text, setText] = useState<string>("");

  // 폼이 제출될 때 실행되는 함수입니다.
  const handleSubmit = (e: React.FormEvent) => {
    // 기본 동작(페이지 새로고침)을 막습니다.
    e.preventDefault();

    // 입력한 텍스트가 공백이 아닌 경우에만 실행합니다.
    if (text.trim()) {
      console.log(text); // 콘솔에 현재 입력한 텍스트를 출력 (디버깅용)

      // 부모 컴포넌트로 전달받은 onAddTodo 함수를 호출해 새 할 일을 추가합니다.
      onAddTodo( text ); 

      // 입력 필드를 비워 초기화합니다.
      setText(""); 
    }
  };

  // 사용자가 입력 필드에 타이핑할 때마다 실행되는 함수입니다.
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 입력한 텍스트를 상태에 반영합니다.
    setText(e.target.value);
  };

  // 실제 렌더링되는 부분입니다.
  return (
    // 폼 요소이며, 제출 시 handleSubmit 함수가 호출됩니다.
    <form onSubmit={handleSubmit} aria-label="Add new Task">
      {/* 텍스트 입력 필드입니다. value는 상태에 따라 바뀌며, onChange 이벤트로 상태를 업데이트합니다. */}
      <input
        type="text"
        value={text}
        onChange={handleOnChange}
        placeholder="add Task"
        aria-label="add Task" // 접근성을 위한 라벨 (오타 수정: add-label → aria-label)
      />

      {/* 할 일 추가 버튼입니다. 클릭하면 폼이 제출됩니다. */}
      <button type="submit">add Task</button>
    </form>
  );
};

// 이 컴포넌트를 다른 파일에서 사용할 수 있도록 export 합니다.
export default TodoForm;
