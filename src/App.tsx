import { useState } from 'react'
import './App.css'

export default App

function App() {
  let test: Action[] = [
    { action: "Move", to: [0, 10] }
  ]

  let [obj, setObj] = useState(test);

  return (
    <div className="cont">
      {
        obj.map((action) => <ActionEditor action={action}/>)
      }
    </div>
  )
}

type Action = MoveAction;

type MoveAction = { action: "Move", to: [number, number] }

function ActionEditor(props: {action: Action}) {
  switch (props.action.action) {
    case "Move":
      return MoveActionEditor(props.action)
      break;
  }
}

function MoveActionEditor(action: MoveAction) {
  return <>Move to x: {action.to[0]} y: {action.to[1]}</>
}