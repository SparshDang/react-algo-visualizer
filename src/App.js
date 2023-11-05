import Header from "./Components/Header";
import Container from './Components/Container';
import AlgorithmButton from "./Components/AlgorithmButton";

function App() {
  return (
    <div className="App">
      <Header/>
      <Container title="Search Algorithms">
        <AlgorithmButton text="Linear Search"/>
        <AlgorithmButton text="Binary Search"/>
      </Container>
      <Container title="Sorting Algorithms">
      <AlgorithmButton text="Bubble Sort"/>
        <AlgorithmButton text="Selection Sort"/>
        <AlgorithmButton text="Insertion Sort"/>
        <AlgorithmButton text="Merge Sort"/>
      </Container>
    </div>
  );
}

export default App;
