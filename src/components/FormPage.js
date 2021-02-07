import React from 'react';

const FormPage = ({newContact}) => {
    let name, number;
    const submit = (e) => {
        e.preventDefault();
        newContact({
            name : name.value,
            number : number.value,
            id : number.value
        });
        name.value = number.value = '';
    }

    return (
        <div>
            <form onSubmit={submit}>
                <label>
                    ФИО <br/>
                    <input 
                        id="number"
                        type="text"
                        required
                        ref={(input) => name = input} 
                    />
                    <br />
                </label>
                <label>
                    Телефон <br />
                    <input
                        id="number"
                        type="text"
                        required
                        ref={(input) => number = input} 
                    />
                    <br />
                </label>
                <br />
                <input type="submit" value="Сохранить" />
            </form>
        </div>
    );
}

export default FormPage;