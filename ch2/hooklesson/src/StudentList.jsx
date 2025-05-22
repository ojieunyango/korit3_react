

export default function studentList(){
  const students = [
  {id: 1, name: '김일'},
  {id: 2, name: '김이'},
  {id: 3, name: '김삼'},
  {id: 4, name: '김사'},
  {id: 5, name: '김오'},
  {id: 6, name: '김육'},
  {id: 7, name: '김칠'},
  {id: 8, name: '김팔'},
  {id: 9, name: '김구'},
  {id: 10, name: '김십'}
  ];
  return(
<>
<table>
    <tbody>
      {
        students.map(student => 
          <tr key ={student.id}>
            <td>{student.name}</td>
        
          </tr>
        )
      }
    </tbody>
  </table>
</>
  );
}

