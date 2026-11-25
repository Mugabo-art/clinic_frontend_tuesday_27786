import axios from 'axios'
import { useEffect, useState } from 'react'

function LibraryOffices() {
    const [offices, setOffices] = useState([]);

    async function getOffices() {
        try {
            const response = await axios.get('http://localhost:8082/api/offices/offices')
            setOffices(response.data)
        } catch (error) {
            alert("could not load offices: " + (error.response ? error.response.data : error.message))
        }
    }

    async function deleteOffice(officeNumber) {
        if (!window.confirm("Are you sure you want to delete this office?")) {
            return
        }

        try {
            const response = await axios.delete(
                'http://localhost:8082/api/offices/deleteByNumber/' + officeNumber
            )

            if (response.status == 200) {
                alert("The office was deleted successfully")
                await getOffices()
            } else {
                alert("Office was not deleted")
            }
        } catch (error) {
            alert("Office was not deleted: " + (error.response ? error.response.data : error.message))
        }
    }

    useEffect(() => {
        getOffices()
    }, [])

    return (
        <div>
            <h1>ALL OFFICES</h1>
            <table border="1" className="mx-auto my-0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Office Number</th>
                        <th>Office Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {offices.map(office => (
                        <tr key={office.id}>
                            <td>{office.id}</td>
                            <td>{office.officeNumber}</td>
                            <td>{office.name}</td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => deleteOffice(office.officeNumber)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default LibraryOffices
