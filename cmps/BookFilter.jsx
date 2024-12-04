
const { useState, useEffect } = React

export function BookFilter({ defaultFilter, onSetFilter }) {
    const [filterBy, setFilterBy] = useState(defaultFilter)

    useEffect(() => {
        onSetFilter(filterBy)
    }, [filterBy])

    function handleChange({ target }) {
        let { value, name: field } = target
        switch (target.type) {
            case 'number':
                value = +target.value
                break
        }
        setFilterBy(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        console.log('filterBy:', filterBy)
    }

    const { title, minPrice } = filterBy
    return (
        <section className="book-filter">
            <h2>Filter Our Books</h2>
            <form onSubmit={onSubmitFilter}>
                <label htmlFor="title">Title</label>
                <input value={title} onChange={handleChange} type="text" name="title" id="title" />

                <label htmlFor="minPrice">Min Price</label>
                <input value={minPrice} onChange={handleChange} type="number" name="minPrice" id="minPrice" />

                <button>Submit</button>
            </form>
        </section>
    )
}
