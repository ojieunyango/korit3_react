// React의 useState 훅을 불러옵니다.
import { useState } from 'react';

// 제네릭 타입 T를 받아 로컬 스토리지와 연동되는 커스텀 훅을 정의합니다.
// key: 로컬 스토리지에 저장할 키 이름
// initialValue: 해당 키에 저장된 값이 없을 때 사용할 초기값
export function useLocalStorage<T>(key: string, initialValue: T) {
  
  // 상태를 초기화합니다.
  // 초기값을 함수로 전달하여, 컴포넌트가 처음 렌더링될 때 한 번만 실행되도록 합니다.
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // 로컬 스토리지에서 key에 해당하는 아이템을 가져옵니다.
      const item = localStorage.getItem(key);

      // 아이템이 있으면 JSON 문자열을 객체로 변환해 반환하고,
      // 없으면 initialValue(초기값)를 반환합니다.
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // 로컬 스토리지 접근 중 에러가 발생하면 에러를 콘솔에 출력하고
      // 안전하게 초기값을 반환합니다.
      console.error('LocalStorage error: ', error);
      return initialValue;
    }
  });

  // 상태를 업데이트하고, 동시에 로컬 스토리지에도 저장하는 함수입니다.
  const setValue = (value: T) => {
    try {
      // React state를 먼저 업데이트합니다.
      setStoredValue(value);

      // value를 JSON 문자열로 변환해 로컬 스토리지에 저장합니다.
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // 저장 도중 에러가 발생하면 콘솔에 출력합니다.
      console.error('LocalStorage error: ', error);
    }
  };

  // storedValue와 setValue 함수를 반환합니다.
  // as const를 붙여서 반환 타입을 튜플로 고정합니다.
  return [storedValue, setValue] as const;
}
