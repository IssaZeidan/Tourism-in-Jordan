import React from 'react';

function Tours() {
  const tours = [
    { id: 1, name: 'Amman', info: '', image: 'https://th.bing.com/th/id/OIP.HVxwLJzCEvTYrkUh0TmhvQHaE8?w=261&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
    { id: 2, name: 'Aqaba', info: '', image: 'https://th.bing.com/th/id/OIP.YHDpI2QWolY5mSAPuvamvAHaE8?w=219&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
    { id: 3, name: 'Petra', info: '', image: 'https://th.bing.com/th/id/OIP.Hys2Wlk0t5R1qCKcAqNyFQHaFS?w=284&h=203&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
    { id: 4, name: 'Dead-Sea', info: 'Information about Tour 4', image: 'https://th.bing.com/th/id/OIP.Wb4xuT_eAB7uuPHCm9XHqQHaE8?w=294&h=196&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
  ];

  return (
    <div>
      {tours.map((tour) => (
        <div key={tour.id}>
          <h2>{tour.name}</h2>
          <img src={tour.image} alt={tour.name} />
        </div>
      ))}
    </div>
  );
}

export default Tours;