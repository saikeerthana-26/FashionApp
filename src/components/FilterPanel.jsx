function FilterPanel({filters, setFilters}){
    const handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });

    };
    return (
        <div className="filter-panel">
            <select name = "type" value={filters.type} onChange={handleChange}>
                <option value = "">All Types</option>
                <option value = "shirt">Shirt</option>
                <option value = "hoodie">Hoodie</option>
                <option value = "v-neck">V-Neck</option>
                <option value = "sweatshirt">Sweatshirt</option>

            </select>

            <select name = "gender" value={filters.gender} onChange={handleChange}>
                <option value = "">All Genders</option>
                <option value = "male">Male</option>
                <option value = "female">Female</option>
                <option value = "unisex">Unisex</option>

            </select>

            <select name = "material" value={filters.material} onChange={handleChange}>
                <option value = "">All Materials</option>
                <option value = "cotton">Cotton</option>
                <option value = "polyester">Polyester</option>
                <option value = "velvet">Velvet</option>
                <option value = "satin">Satin</option>


            </select>


        </div>
    )
}
export default FilterPanel;