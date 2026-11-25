import axios from 'axios'
import { useState } from 'react'
import LibraryButton from './LibraryButton'

function Office() {
    const [officeName, setOfficeName] = useState("");
    const [officeNumber, setOfficeNumber] = useState("");

    async function saveOffice() {
        try {
            const response = await axios.post('http://localhost:8082/api/offices/save', {
                name: officeName,
                officeNumber: Number(officeNumber),
            })
            if (response.status == 200) {
                alert("The office is saved successfully")
            } else {
                alert("office not saved")
            }
        } catch (error) {
            alert("office not saved: " + (error.response ? error.response.data : error.message))
        }
    }

    return (
        <div>
            <h1>SAVE OFFICE</h1>
            <div className="flex justify-center items-center gap-[10px] mb-[10px]">
                <label className="w-[130px] text-left">Office Name:</label>
                <input type="text" onChange={e => setOfficeName(e.target.value)} />
            </div>
            <div className="flex justify-center items-center gap-[10px] mb-[10px]">
                <label className="w-[130px] text-left">Office Number:</label>
                <input type="number" onChange={e => setOfficeNumber(e.target.value)} />
            </div>
            <LibraryButton buttonLabel="SAVE" onClickButton={saveOffice} />

        </div>
    )
}

export default Office
