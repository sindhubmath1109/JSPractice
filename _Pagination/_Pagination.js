import React, { useState, useEffect } from 'react';
import './_css.scss';

const numberOfElemsOptions = [7, 10, 15, 20, 25, 30];

function Pagination() {
    const [todoList, setTodoList] = useState([]); // initial fetch result
    const [totalPages, setTotalPages] = useState(0) // total number of results of the above
    const [currentPage, setCurrentPage] = useState(1); // current pagination page
    const [elemsPerPage, setElemsPerPage] = useState(7); // changes whenever select value changes
    const totalTodos = todoList.length;

    useEffect(() => {
        (async function() {
            try {
                const todosJson = await fetch("https://jsonplaceholder.typicode.com/todos/");
                const todos = await todosJson.json();
                setTodoList(todos);
                setTotalPages(Math.ceil(todos.length / elemsPerPage))
            } catch(err) {
                throw new Error(err?.message || String(err));
            }
        })()
    }, []);

    const renderTodoCard = todo => (
        <div className='todoCard' key={`todo_${todo.id}`}>
            <p className={todo.completed ? 'green': 'orange'}>{todo?.completed}</p>
            <p className='todoCardId'>{todo.id}</p>
            <p className='todoCardTitle'>{todo?.title}</p>
        </div>
    )

    const handlePagination = (e, i) => {
        if(e.target.id === 'prev') {
            currentPage !== 1 && setCurrentPage(currentPage => currentPage  - 1);
        }
        else if(e.target.id === 'next') {
            currentPage !== totalPages && setCurrentPage(currentPage => currentPage + 1);
        } 
        else {
            setCurrentPage(i+1);
        }
    }

    const handleNumOfElemsOnPgChange = e => {
        // setElemsPerPage(() => {
        //     const numOfElemsOnEachPage = e?.target?.value;
        //     setTotalPages(Math.ceil(totalTodos / numOfElemsOnEachPage))
        //     setCurrentPage(1);
        //     return numOfElemsOnEachPage
        // })
        const numOfElemsOnEachPage = Number(e?.target?.value);
        setElemsPerPage(numOfElemsOnEachPage);
        setTotalPages(Math.ceil(totalTodos / numOfElemsOnEachPage))
        setCurrentPage(1);
    }

    const renderPaginationButtons = () => (
        <div className='paginationButtons'>
            <button
                className="paginationBtn"
                id={'prev'}
                onClick={handlePagination}
            >
                Prev
            </button>
            <>
                {
                    [...Array(totalPages)].map((_, index) => (
                        <button
                            className={
                                currentPage === (index + 1) ? 
                                "paginationBtn currentActivePgnBtn" :
                                "paginationBtn"
                            }
                            key={index+1}
                            onClick={(e) => handlePagination(e, index)}
                        >
                            {index+1}
                        </button>
                    ))
                }
            </>
            <button
                className="paginationBtn"
                id={'next'}
                onClick={handlePagination}
            >
                Next
            </button>

        </div>
    )

    /**
     * index will start from 0, hence one less than the actual number
     * for eg: page 1 will show 1-10 cards, but arr indices will be from 0-9
     */
    const startTodoCardIndexOnPage = (currentPage * elemsPerPage) - elemsPerPage;

    return (
        totalTodos === 0 ?
        <p className='loading'>Loading....</p> :
        <>

            {/* header */}
            <div className='header'>
                <p>{`Total number of to-do Items: ${totalTodos}`}</p>
                <select id='selectElemsOnPage' onChange={handleNumOfElemsOnPgChange} value={elemsPerPage}>
                    {
                        numberOfElemsOptions.map(option => (
                            <option value={option} key={option}>{option}</option>
                        ))
                    }
                </select>
            </div>

            {/* body / cards */}
            <div className='todoCardsList'>
                {
                    todoList.slice(
                        startTodoCardIndexOnPage, 
                        startTodoCardIndexOnPage + elemsPerPage
                    )
                    .map(todoElem => renderTodoCard(todoElem))
                }
            </div>

            {/* footer / pagination buttons */}
            {renderPaginationButtons()}

        </>
    )

}

export default Pagination;
