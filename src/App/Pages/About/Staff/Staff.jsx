import React, { useState, useEffect } from 'react';
import './Staff.scss';
// import { staffMembers } from './staff.js';
import API from '../../../common/API.js';



const StaffMembers = () => {

    //1. Set up state to keep track of data from server
    const [staffMembers, setStaffMembers] = useState([]);

    //Only do this once
    useEffect(() => {
        //2. Retrieve data from the server
        API.get('staff').then((result) => {


            //3. Update staff members with data from server
            console.log('Staff Response', result);
            setStaffMembers(result.data);
        });
    }, []);


    return staffMembers.map((staffMember, idx) => {
        return (
            <div key={idx} className={'StaffMember'}>
                <img src={staffMember.image} alt={StaffMembers.name} />
                <h3>{staffMember.name}</h3>
            </div>
        );
    });
}

const Staff = () => {
    return (
        <div className='Staff'>
            <h3 className='ourstaffs'>Our Staffs</h3>

            <StaffMembers />
        </div>
    )
}

export default Staff;