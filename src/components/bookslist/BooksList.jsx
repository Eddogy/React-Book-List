import React from 'react'
import Book from '../book/Book';
import "./BooksList.css";

const BooksList = () => {
    return (
        <section id="books-list">
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </section>
    )
}

export default BooksList;
