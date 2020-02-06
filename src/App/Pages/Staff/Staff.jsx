import React from 'react';
import './Staff.scss';
import { staffMembers } from './staff.js';

const StaffMembers = () => {
    return staffMembers.map((staffMembers, idx) => {
        return (
            <div key = {idx} className={'StaffMember'}>
                <img src={staffMembers.img} alt={staffMembers.name} />
                <h3>{staffMembers.name}</h3>
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