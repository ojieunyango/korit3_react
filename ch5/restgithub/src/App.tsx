import {useState} from 'react'
import axios from 'axios';
import './App.css'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { ColDef } from 'ag-grid-community';
import { ICellRendererParams } from 'ag-grid-community';

type Repository ={
  id: number;
  full_name: string;
  html_url: string;
  name: string;
  description: string;
  owner: {
    login: string;
  };
  
}
function App() {
 const [keyword, setKeyword] = useState('');
 const [repodata, setRepository] = useState<Repository[]>([]);
// 컬럼 정의
const [columnDefs]=useState<ColDef[]>([
  {field: 'owner.login', headerName: 'git hub id' ,sortable: true, filter: true},
  {field: 'description', sortable: true, filter: true},
  {field: 'name', sortable: true, filter: true},
  {field: 'html_url', sortable: true, filter: true},
  {field: 'full_name', cellRenderer: (params: ICellRendererParams)=>(
    <button onClick={()=>alert(params.value)}>
      Click
    </button>
  )}
]);


 const handleClick = () =>{
  //RERST API 호출
  axios.get<{items: Repository[]}>(`https://api.github.com/search/repositories?q=${keyword}`)
  .then(response => setRepository(response.data.items))
  .catch(error=> console.log(error));
 }

  return (
    <>
      <input type="text" value={keyword} onChange={event=>setKeyword(event.target.value)}/>
      <br />
      <br />
      <button onClick={handleClick}>검색</button>

      <div className="ag-theme-material" style={{height: 500, width: 850}}>
        <AgGridReact 
        rowData={repodata} 
        columnDefs={columnDefs}
        pagination={true}
        paginationAutoPageSize={true}/>
      </div>
    </>
  )
}

export default App
