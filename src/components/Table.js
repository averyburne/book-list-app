import React from 'react'
import TableField from './TableField'

const Table = ({ books }) => {


    return(
        <div className="table">
            <div className="tableHeading">
                <TableField />
            </div>
        </div>
    )
}

export default Table