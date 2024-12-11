
const { useState, useEffect } = React

export function BookFilter({ defaultFilter, onSetFilter }) {
    const [filterBy, setFilterBy] = useState(defaultFilter)

    useEffect(() => {
        onSetFilter(filterBy)
    }, [filterBy])

    function handleChange({ target }) {
        let { value, name: field } = target
        switch (target.type) {
            case 'range':
            case 'number':
                value = +target.value
                break
            case 'checkbox':
                value = target.checked
                break
        }
        setFilterBy(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        console.log('filterBy:', filterBy)
    }

    const { title, minPrice, onSale, publishedYear } = filterBy
    return (
        <section className="book-filter">
            <h2>Filter Our Books</h2>
            <form onSubmit={onSubmitFilter}>
                <label htmlFor="title">Title</label>
                <input value={title} onChange={handleChange} type="text" name="title" id="title" />

                <label htmlFor="minPrice">Min Price</label>
                <input value={minPrice || ''} onChange={handleChange} type="number" name="minPrice" id="minPrice" />

                <label htmlFor="onSale">On Sale</label>
                <input value={onSale} onChange={handleChange} type="checkbox" name="onSale" id="onSale" />

                <label htmlFor="publishedYear">From Year</label>
                <div className="range-container">
                    <span>1960</span>
                    <input value={publishedYear || 1960} onChange={handleChange}
                        type="range"
                        name="publishedYear"
                        id="publishedYear"
                        min={1960}
                        max={2024}
                    />
                    <span>2024</span>
                </div>
                <button>Submit</button>
            </form>
        </section>
    )
}
