import "./index.css"

export default function Searchbar() {
    return (
        <div className="search-container">
            <label htmlFor="search-bestiary-input" 
                title="search-bestiary" 
                className="search-label">
                    Search the WoW Bestiary
            </label>
            <input name="search-bestiary-input" 
                id="search-bestiary" 
                defaultValue={""} 
                placeholder="Enter a creature name or item name" className="search-input"
            />
        </div>
    )
}