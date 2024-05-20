import {useState} from "react";

export default function useSort(data, config) {
    const [sortBy, setSortBy] = useState(null)
    const [sortOrder, setSortOrder] = useState(null)

    const setSortColumn = (label) => {

        if (sortBy && label !== sortBy) {
            setSortOrder('asc')
            setSortBy(label)
            return;
        }

        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label)
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label)
        } else if (sortOrder === 'desc') {
            setSortOrder(null)
            setSortBy(null)
        }
    }

    let sortedData = data;

    // Only sort data if sortOrder && sortBy are not null
    if (sortBy && sortOrder) {

        // Find the correct sortValue function and use it for sorting
        const {sortValue} = config.find(column => column.label === sortBy)

        // Make a copy of 'data' prop and then sorted using arrow sort function
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);
            const reverseOrder = sortOrder === 'asc' ? 1 : -1

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder
            }
            return (valueA - valueB) * reverseOrder;
        })
    }
    return {sortOrder, sortBy, sortedData, setSortColumn}
}