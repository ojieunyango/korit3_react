



export default function MyTable(){
const students = [
  {id: 1, name: '김일', major: '컴퓨터 공학과'},
  {id: 2, name: '김이', major: '경영학과'},
  {id: 3, name: '김삼', major: '패션 디자인과'}
];
return(
  <>
  <table>
    <tbody>
      {
        students.map(student => 
          <tr key ={student.id}>
            <td>{student.name}</td>
            <td>{student.major}</td>
          </tr>
        )
      }
    </tbody>
  </table>
  </>
)
}