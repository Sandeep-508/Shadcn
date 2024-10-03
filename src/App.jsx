import { Button } from "./components/ui/button"
import { Calendar } from "./components/ui/calendar"
import { Input } from "./components/ui/input"

function App() {

  return (
    <div className="px-4">
      <div className="text-white">Hello</div>
      <div>
        <Button>Hello</Button>
        <Calendar />
        <Input />
      </div>
    </div>
  )
}

export default App
