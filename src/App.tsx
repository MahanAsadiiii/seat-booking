// App.tsx
import React, { useEffect, useRef } from 'react';
import SeatchartJS, { Options } from 'seatchart';
import 'seatchart/dist/seatchart.min.css';
import './index.css';
import Seatchart from './Seatchart.tsx';

const options: Options = {
  cart: {
    currency: "تومان",
    submitLabel: "رزرو انتخاب شده ها",
  },
  map: {
    rows: 10,
    columns: 8,
    columnSpacers: [4],
    rowSpacers: [2, 8],
    reservedSeats: [{ row: 2, col: 4 }, { row: 0, col: 0 }],
    seatTypes: {
      default: {
        label: 'Economy',
        cssClass: 'economy',
        price: 10,
      },
      vip: {
        label: 'VIP',
        cssClass: 'vip',
        price: 20,
        seatRows: [0, 1],
      },
      tokhmi: {
        label: 'Tokhmi',
        cssClass: 'tokhmi',
        price: 5,
        seatRows: [8, 9],
      },
    },
  },

};




const App = () => {


  const seatchartRef = useRef<SeatchartJS>();
  useEffect(() => {
    seatchartRef.current?.addEventListener('submit', function () { console.log(

      seatchartRef.current?.getCart(),
      seatchartRef.current?.getCartTotal(),

    ) })
  }
    , [])
  const handleClick = () => {
    // const index = { row: 2, col: 6 };
    // const seat = seatchartRef.current?.getSeat(index);

    // seatchartRef.current?.setSeat(index, {
    //   state: seat?.state === 'selected' ? 'available' : 'selected',
    // });


  };


  return (
    <>
      <div>
        <button onClick={handleClick}>Toggle Seat</button>
        <Seatchart ref={seatchartRef} options={options} />
      </div>
    </>
  );
}

export default App;