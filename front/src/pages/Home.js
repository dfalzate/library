import React from 'react';
import Categories from '../components/categories.component';

function Home(props) {
  return (
    <div className="Home">
      <h2>Home</h2>
      <Categories history={props.history} />
    </div>
  );
}

export default Home;
