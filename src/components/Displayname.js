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
        const displayfullname = `${fullname.firstname} ${fullname.lastname}`
        setName(displayfullname);
    }

    return(
        <div style={{margin:'10px'}}>
            <h1>Full Name Display</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="firstname" value={fullname.firstname} onChange={handleChange} required/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="lastname" value={fullname.lastname} onChange={handleChange} required/>
                </div>
                <button type="submit">Submit</button>
            </form>
            {name && <p>Full Name: {name}</p>}
        </div>
    )
}

export default Displayname