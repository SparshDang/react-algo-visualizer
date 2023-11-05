import React from "react";


import Container from '../Components/HomePageComponents/Container';
import AlgorithmButton from "../Components/HomePageComponents/AlgorithmButton";


export default function HomePage() {
  return (
    <>
      <Container title="Search Algorithms">
        <AlgorithmButton text="Linear Search" link="search/linear" />
        <AlgorithmButton text="Binary Search" link="search/binary" />
      </Container>
      <Container title="Sorting Algorithms">
        <AlgorithmButton text="Bubble Sort" link="sort/bubble" />
        <AlgorithmButton text="Selection Sort" link="sort/selection" />
        <AlgorithmButton text="Insertion Sort" link="sort/insertion" />
        <AlgorithmButton text="Merge Sort" link="sort/merge" />
      </Container>
    </>
  );
}
