import React from "react";


import Container from '../Components/HomePageComponents/Container';
import AlgorithmButton from "../Components/HomePageComponents/AlgorithmButton";


export default function HomePage() {
  return (
    <>
      <Container title="Search Algorithms">
        <AlgorithmButton text="Linear Search" link="algo/linear" />
        <AlgorithmButton text="Binary Search" link="algo/binary" />
      </Container>
      <Container title="Sorting Algorithms">
        <AlgorithmButton text="Bubble Sort" link="algo/bubble" />
        <AlgorithmButton text="Selection Sort" link="algo/selection" />
        <AlgorithmButton text="Insertion Sort" link="algo/insertion" />
        <AlgorithmButton text="Merge Sort" link="algo/merge" />
      </Container>
    </>
  );
}
