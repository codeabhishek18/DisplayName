import { useState } from 'react';

const Displayname = () =>
{
    const [fullname, setFullname] = useState({firstname : '', lastname : ''})
    const [name, setName] = useState(null)

    const handleChange = (e) =>
    {
        setFullname({...fullname, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        setName(fullname.firstname +" " +fullname.lastname);
        setFullname({firstname : '', lastname : ''})
    }

    return(
        <div style={{margin:'10px'}}>
            <h1>Full Name Display</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input name="firstname" value={fullname.firstname} onChange={handleChange} required/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input name="lastname" value={fullname.lastname} onChange={handleChange} required/>
                </div>
                <button>Submit</button>
            </form>
            {name && <p>Full Name: {name}</p>}
        </div>
    )
}

export default Displayname