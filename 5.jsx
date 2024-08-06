import React from 'react';
import ReactDOM from 'react-dom';
import PaginatedList from './PaginatedList'; // Adjust the import path as necessary

const App = () => {
  const items = [
    'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5',
    'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10',
    'Item 11', 'Item 12', 'Item 13', 'Item 14', 'Item 15'
  ];

  return (
    <div>
      <h1>Paginated List Example</h1>
      <PaginatedList items={items} itemsPerPage={5} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
