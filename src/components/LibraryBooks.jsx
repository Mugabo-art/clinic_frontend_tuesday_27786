import React from 'react'
import LibraryCards from './LibraryCards';

function LibraryBooks(){
    const books= [
        {
            code: "WEB 001",
            name:"Full stack development",
            price: 120
        },
        {
            code: "SOE",
            name:"Software development",
            price: 100
        },
        {
            code: "SOD 001",
            name:"FSoftware engenering",
            price: 130
        }
    ];
    const totalBooks = books.length;
    const totalPrice = books.reduce((total, book) => total + book.price, 0);
    return(
        <div>
            <div>
               <h2>List of books</h2> 
            </div>
            <div>
            <ul className="flex flex-col items-center gap-[20px] p-0">
          {
            books.map(book=><LibraryCards key={book.code} bookInfo={book} /> )
          }

        </ul>
        </div>
             <p>The total number of books: {totalBooks} the total Price: {totalPrice}</p>
        </div>
    )
}
export default LibraryBooks
