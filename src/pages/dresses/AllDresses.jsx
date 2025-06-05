import React from 'react';
import DressGrid from '../../components/DressGrid';
import dressesData from '../../data/dresses'; //
import './AllDresses.css';
const AllDresses = () => {
  return (
    <section>
      <h2>All Dresses</h2>
      <DressGrid dresses={dressesData} />
    </section>
  );
};

export default AllDresses;
