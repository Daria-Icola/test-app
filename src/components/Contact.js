import React from 'react';


class Contact extends React.Component {

    render() {
        const { name, number, onDelete } = this.props
        return (
            <tr>
                <td ref="name">
                    {name}
                </td>
                <td ref="number">
                    {number}
                </td>
                <td>
                <button onClick={onDelete}>
                    X
                </button>
                </td>
            </tr>
        )
    }

}

export default Contact;

