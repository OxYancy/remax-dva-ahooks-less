import './app.css'
import 'anna-remax-ui/dist/anna.css'
import dva from 'remax-dva'
import todo from './models/todo'
import './app.css'
import 'anna-remax-ui/dist/anna.css'

const app = dva()
app.model(todo)
const App = app.start(({ children }) => children)

// export default App
// const App = (props) => props.children

export default App
