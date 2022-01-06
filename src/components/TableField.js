import React from 'react'

const TableField = ({ fieldName, settingsField, removeBook }) => {
    return (
        <div className="tableField">
            {fieldName}
            {settingsField && (
            <>
                <i className="fas fa-edit"></i>
                <i onClikc={removeBook} className="fas fa-trash-alt"></i>
            </>
            )}
        </div>
    )
}

export default TableField
