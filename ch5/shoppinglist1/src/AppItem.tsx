import {Button, TextField} from '@mui/material'
import {Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material'
import {useState} from "react"
import {Item} from "./App";

type AddItemProps={
  addItem: (item: Item) => void;
}

export default function AddItem(props){
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({
    product: '',
    amount: '',
  })
  
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  const addItem =()=>{
    props.addItem(item);
    // 추가를 하고 나며 기존에 있던 텍스트 필드(input창)의 내용은 삭제할겁니다.
    setItem({product: '', amount: ''});
    handleClose();
  }

  return(<>
  <Button onClick={handleOpen}>
   Add Item / 항목추가
  </Button>
  <Dialog open={open} onClose={handleClose}>
  <DialogTitle>New Item / 새로운 항목</DialogTitle>
  <DialogContent>
   <TextField value={item.amount} margin="dense" onChange={e => setItem({...item, amount: e.target.value})}
    label="Product/제품" fullWidth></TextField>
  </DialogContent>
  <DialogActions>
  <Button onClick ={handleClose}>
  Cancel / 취소
  </Button>
  <Button >
  Add / 추가
  </Button>
  </DialogActions>
  </Dialog>
  </>);
}