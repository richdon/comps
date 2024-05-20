import Table from "./Table";
import {useState} from "react";
import {GoArrowSmallDown, GoArrowSmallUp} from 'react-icons/go'

export default function SortableTable(props) {
    const {config, data} = props;

    const [sortBy, setSortBy] = useState(null)
    const [sortOrder, setSortOrder] = useState(null)
    const handleClick = (label) => {

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

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return {
            ...column, header: () => <th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(column.label)}>
                <div className="flex items-center">
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                </div>
            </th>
        }

    })

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

    return <Table {...props} data={sortedData} config={updatedConfig}/>


}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <GoArrowSmallUp/>
            <GoArrowSmallDown/>
        </div>;
    }
    if (sortOrder === null) {
        return <div>
            <GoArrowSmallUp/>
            <GoArrowSmallDown/>
        </div>;
    }
    if (sortOrder === 'asc') {
        return <div>
            <GoArrowSmallUp/>
        </div>;
    }
    if (sortOrder === 'desc') {
        return <div>
            <GoArrowSmallDown/>
        </div>;
    }
}