

export default function studentList(){
  const students = [
  '김일', '김이', '김삼', '김사', '김오', '김육', '김칠', '김팔', '김구', '김십',
  ];
  return(
<>
<ol>
  {
    students.map((student, index)=> <li key ={index}>{student}</li>) // 매개변수이름 student, index 지정, li 번호이고 <> 리스트로 만들어준거
    // 리턴을 안쓰고 
  }
</ol>
</>
  );
}

