import React from 'react';

export const Contact = ({name, number, onDelete}) => {
    return (
        <tr>
            <td>
                {name}
            </td>
            <td>
                {number}
            </td>
            <td>
                <button type="button" onClick={onDelete}>
                    X
                </button>
            </td>
            <hr />
        </tr>
    )
}