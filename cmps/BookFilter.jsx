import { bookService } from "../services/book.service.js";
import { debounce } from "../services/util.service.js";

const { useState, useEffect, useRef } = React

export function BookFilter() {

    return (
        <section className="book-filter">
            <h2>Filter Our Books</h2>
            <form >
                <label htmlFor="title">Title</label>
                <input type="text" />

                <label htmlFor="price">Price</label>
                <input type="number" />

                <button>Submit</button>
            </form>
        </section>
    )
}


// const [filterByToEdit, setFilterByToEdit] = useState(defaultFilter)
// const onSetFilterDebounce = useRef(debounce(onSetFilter)).current

// useEffect(() => {
//     onSetFilterDebounce(filterByToEdit)
// }, [filterByToEdit])

// function handleChange({ target }) {
//     let { value, name: field } = target
//     switch (target.type) {
//         case 'range':
//         case 'number':
//             value = +target.value
//             break
//         case 'checkbox':
//             value = target.checked
//             break
//     }
//     if (field === 'listPrice')
//         setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: { amount: value } }))
//     else
//         setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
// }

// // function handleTxtChange(ev) {
// //     setFilterByToEdit(filter => ({ ...filter, txt: ev.target.value }))
// // }

// // function handleMinSpeedChange(ev) {
// //     setFilterByToEdit(filter => ({ ...filter, minSpeed: +ev.target.value }))
// // }

// function onSubmitFilter(ev) {
//     ev.preventDefault()
//     onSetFilter(filterByToEdit)
// }

// const { title, listPrice } = filterByToEdit