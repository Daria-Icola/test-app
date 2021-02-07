import React from 'react';

import { Contact } from './Contact';


export const CollectionPage = ({contacts, onDelete}) => { 

    

    return (
        <div>         
             <table>
                <thead>
                    <tr>
                        <th>Фио</th>
                        <th>Телефон</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((item) => 
                            <Contact
                                key={item.number}
                                {...item}
                                onDelete={() => onDelete(item.id)}
                            />
                        )
                    }
                </tbody>
            </table>          
        </div>
    )
}