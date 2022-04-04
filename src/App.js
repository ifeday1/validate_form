
import './App.css';
import FormInput from './components/FormInput';

function App() {
  return (
    <div className="app">
      <form>
      <FormInput placeholder="Username"/>
      <FormInput placeholder="Fullname"/>
      <FormInput placeholder="Email"/>
      <FormInput placeholder="something else" />
      </form>
    </div>
  );
}

export default App;
