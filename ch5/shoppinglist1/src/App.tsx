import Container from '@mui/material/Container'
import { useState } from 'react'
import { AppBar} from '@mui/material'
import {Toolbar} from '@mui/material'
import {Typography} from '@mui/material'
import './App.css'

export type Item={
  product: string;
  amount: string;
}

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem =(item: Item)=> {
    setItems([item, ...items])
  }

  return (
    <>
      <Container>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant ="h6">
             Shopping List / 쇼핑 리스트 
            </Typography>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  )
}

export default App
