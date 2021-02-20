import React, {useState} from 'react';

export default (props) => {

    const [id, setId] = useState(''),
        [firstName, setFirstName] = useState(''),
        [lastName, setLastName] = useState(''),
        [email, setEmail] = useState(''),
        [phone, setPhone] = useState('');
    

    const arrNewRow = [id,firstName,lastName,email,phone];
    const isFillArray = arrNewRow.some(item => item === '');

    return (
        <div>
            <button className="btn btn-secondary mb-3" onClick={() => props.showFormHandler()}>{ props.isShowForm ? 'Закрыть' : 'Добавить' }</button>
            { props.isShowForm
            ?  <form className="mb-3" onSubmit={(event) => props.addNewRow(event, arrNewRow)}>
                    <div className="row">
                        <div className="col">
                            <input type="number" min='0' className="form-control" value={id} placeholder="ID" onChange={(event) => setId(event.target.value)}/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" value={firstName} placeholder="First name" onChange={(event) => setFirstName(event.target.value)}/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" value={lastName} placeholder="Last name" onChange={(event) => setLastName(event.target.value)}/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" value={email} placeholder="email" onChange={(event) => setEmail(event.target.value)}/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" value={phone} placeholder="phone" onChange={(event) => setPhone(event.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={isFillArray}>Добавить</button>
                    </div>
                </form>
            : ''
            }
        </div>
    )
}
