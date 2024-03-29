// import React, { useState, useEffect } from "react";
// import "../styles/rsvp.css";

// const Rsvp = () => {
//     const [groups, setGroups] = useState([]);

//     useEffect(() => {
//         // Fetch all groups with members
//         const fetchGroups = async () => {
//             try {
//                 const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//                 const data = await response.json();
//                 setGroups(data);
//             } catch (error) {
//                 console.error("Error fetching groups:", error);
//             }
//         };

//         fetchGroups();
//     }, []);

//     return (
//         <div className="rsvp_container">
//             {/* No search input needed */}
//             <div className="groups_container">
//                 {groups.map((group) => (
//                     <div key={group.group_id} className="group_card">
//                         <h3>{group.last_name}</h3>
//                         <div className="members_list">
//                             {group.members.map((member) => (
//                                 <div key={member.member_id} className="member_card">
//                                     <h4>{member.full_name}</h4>
//                                     <p>Wedding: {member.wedding ? 'Yes' : 'No'}</p>
//                                     <p>Reception: {member.reception ? 'Yes' : 'No'}</p>
//                                     <p>Zero: {member.zero ? 'Yes' : 'No'}</p>
//                                     <p>Two: {member.two ? 'Yes' : 'No'}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Rsvp;

// import React, { useState, useEffect } from "react";
// import "../styles/rsvp.css";

// const Rsvp = () => {
//     const [groups, setGroups] = useState([]);

//     useEffect(() => {
//         // Fetch all groups with members
//         const fetchGroups = async () => {
//             try {
//                 const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//                 const data = await response.json();
//                 setGroups(data);
//             } catch (error) {
//                 console.error("Error fetching groups:", error);
//             }
//         };

//         fetchGroups();
//     }, []);

//     const renderBooleanValue = (value) => {
//         if (value === null) {
//             return 'null';
//         } else {
//             return value ? 'Yes' : 'No';
//         }
//     };

//     return (
//         <div className="rsvp_container">
//             {/* No search input needed */}
//             <div className="groups_container">
//                 {groups.map((group) => (
//                     <div key={group.group_id} className="group_card">
//                         <h3>{group.last_name}</h3>
//                         <div className="members_list">
//                             {group.members.map((member) => (
//                                 <div key={member.member_id} className="member_card">
//                                     <h4>{member.full_name}</h4>
//                                     <p>Wedding: {renderBooleanValue(member.wedding)}</p>
//                                     <p>Reception: {renderBooleanValue(member.reception)}</p>
//                                     <p>Zero: {renderBooleanValue(member.zero)}</p>
//                                     <p>Two: {renderBooleanValue(member.two)}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Rsvp;





// here the add member is working 
// import React, { useState, useEffect } from "react";
// import "../styles/rsvp.css";

// const Rsvp = () => {
//     const [groups, setGroups] = useState([]);
//     const [newMemberName, setNewMemberName] = useState('');
//     const [activeGroup, setActiveGroup] = useState(null);

//     useEffect(() => {
//         // Fetch all groups with members
//         const fetchGroups = async () => {
//             try {
//                 const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//                 const data = await response.json();
//                 setGroups(data);
//             } catch (error) {
//                 console.error("Error fetching groups:", error);
//             }
//         };

//         fetchGroups();
//     }, []);

//     const renderBooleanValue = (value) => {
//         if (value === null) {
//             return 'null';
//         } else {
//             return value ? 'Yes' : 'No';
//         }
//     };

//     const handleAddMember = (groupId) => {
//         setActiveGroup(groupId);
//     };

//     const handleMemberNameChange = (event) => {
//         setNewMemberName(event.target.value);
//     };

//     const handleAddMemberSubmit = async (groupId) => {
//         try {
//             // Add logic to submit the new member name to your backend API
//             // For example:
//             await fetch(`https://ishanisudur-api.onrender.com/members/${groupId}`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ full_name: newMemberName }),
//             });

//             // Refresh the groups data after adding the member
//             const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//             const data = await response.json();
//             setGroups(data);
//         } catch (error) {
//             console.error("Error adding new member:", error);
//         }

//         setActiveGroup(null);
//         setNewMemberName('');
//     };

//     return (
//         <div className="rsvp_container">
//             <div className="groups_container">
//                 {groups.map((group) => (
//                     <div key={group.group_id} className="group_card">
//                         <h3>{group.last_name}</h3>
//                         <button onClick={() => handleAddMember(group.group_id)}>Add New Member</button>
//                         {activeGroup === group.group_id && (
//                             <div className="add_member_input">
//                                 <input
//                                     type="text"
//                                     placeholder="Enter new member name"
//                                     value={newMemberName}
//                                     onChange={handleMemberNameChange}
//                                 />
//                                 <button onClick={() => handleAddMemberSubmit(group.group_id)}>Submit</button>
//                             </div>
//                         )}
//                         <div className="members_list">
//                             {group.members.map((member) => (
//                                 <div key={member.member_id} className="member_card">
//                                     <h4>{member.full_name}</h4>
//                                     <p>Wedding: {renderBooleanValue(member.wedding)}</p>
//                                     <p>Reception: {renderBooleanValue(member.reception)}</p>
//                                     <p>Zero: {renderBooleanValue(member.zero)}</p>
//                                     <p>Two: {renderBooleanValue(member.two)}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Rsvp;



// here, add group is working, add new member is working, edit member is working, delete group is working
// im commenting this one out
//this works 


// import React, { useState, useEffect } from "react";
// import "../styles/rsvp.css";

// const Rsvp = () => {
//     const [groups, setGroups] = useState([]);
//     const [newMemberName, setNewMemberName] = useState('');
//     const [activeGroup, setActiveGroup] = useState(null);
//     const [editMemberId, setEditMemberId] = useState(null);
//     const [editFullName, setEditFullName] = useState('');
//     // this works
//     const [newGroupName, setNewGroupName] = useState('');
//     // trying this now 
//     const [deleteGroupId, setDeleteGroupId] = useState(null);

//     useEffect(() => {
//         // Fetch all groups with members
//         const fetchGroups = async () => {
//             try {
//                 const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//                 const data = await response.json();
//                 setGroups(data);
//             } catch (error) {
//                 console.error("Error fetching groups:", error);
//             }
//         };

//         fetchGroups();
//     }, []);

//     const renderBooleanValue = (value) => {
//         if (value === null) {
//             return 'null';
//         } else {
//             return value ? 'Yes' : 'No';
//         }
//     };
//     // here
//     const handleAddGroup = async () => {
//         try {
//             // Add logic to submit the new group name to your backend API
//             // For example:
//             await fetch('https://ishanisudur-api.onrender.com/groups', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ last_name: newGroupName }), // Assuming 'last_name' is the field for group name
//             });

//             // Refresh the groups data after adding the group
//             const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//             const data = await response.json();
//             setGroups(data);
//             setNewGroupName('');
//         } catch (error) {
//             console.error("Error adding new group:", error);
//         }
//     };
//     // here is working


//     // here is delete try 

//     const handleDeleteGroup = async (groupId) => {
//         try {
//             // Add logic to delete the group from your backend API
//             // For example:
//             await fetch(`https://ishanisudur-api.onrender.com/groups/${groupId}`, {
//                 method: 'DELETE',
//             });

//             // Refresh the groups data after deleting the group
//             const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//             const data = await response.json();
//             setGroups(data);
//         } catch (error) {
//             console.error("Error deleting group:", error);
//         }
//     };

//     // here

//     const handleAddMember = (groupId) => {
//         setActiveGroup(groupId);
//     };

//     const handleMemberNameChange = (event) => {
//         setNewMemberName(event.target.value);
//     };

//     const handleAddMemberSubmit = async (groupId) => {
//         try {
//             // Add logic to submit the new member name to your backend API
//             // For example:
//             await fetch(`https://ishanisudur-api.onrender.com/members/${groupId}`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ full_name: newMemberName }),
//             });

//             // Refresh the groups data after adding the member
//             const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//             const data = await response.json();
//             setGroups(data);
//         } catch (error) {
//             console.error("Error adding new member:", error);
//         }

//         setActiveGroup(null);
//         setNewMemberName('');
//     };

//     const handleEditClick = (memberId, fullName) => {
//         setEditMemberId(memberId);
//         setEditFullName(fullName);
//     };

//     const handleSaveEdit = async (memberId) => {
//         try {
//             // Add logic to save edited member data to your backend API
//             // For example:
//             await fetch(`https://ishanisudur-api.onrender.com/members/${memberId}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ full_name: editFullName }),
//             });

//             // for delete trying
//             const handleDeleteGroup = async (groupId) => {
//                 try {
//                     // Add logic to delete the group from your backend API
//                     // For example:
//                     await fetch(`https://ishanisudur-api.onrender.com/groups/${groupId}`, {
//                         method: 'DELETE',
//                     });

//                     // Refresh the groups data after deleting the group
//                     const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//                     const data = await response.json();
//                     setGroups(data);
//                 } catch (error) {
//                     console.error("Error deleting group:", error);
//                 }
//             };
//             // for delete trying

//             // Refresh the groups data after saving the edit
//             const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//             const data = await response.json();
//             setGroups(data);
//         } catch (error) {
//             console.error("Error saving edit:", error);
//         }

//         setEditMemberId(null);
//         setEditFullName('');
//     };

//     return (
//         <div className="rsvp_container">
//             {/* here  its working */}
//             <div className="add_group_section">
//                 <input
//                     type="text"
//                     placeholder="Enter new group name"
//                     value={newGroupName}
//                     onChange={(e) => setNewGroupName(e.target.value)}
//                 />
//                 <button onClick={handleAddGroup}>Add Group</button>
//             </div>
//             {/* here its working*/}
//             <div className="groups_container">
//                 {groups.map((group) => (
//                     <div key={group.group_id} className="group_card">
//                         <h3>{group.last_name}</h3>

//                         <button onClick={() => handleAddMember(group.group_id)}>Add New Member</button>
//                         {/* adding here */}


//                         <button onClick={() => handleDeleteGroup(group.group_id)}>Delete Group</button>



//                         {/* here */}
//                         {activeGroup === group.group_id && (
//                             <div className="add_member_input">
//                                 <input
//                                     type="text"
//                                     placeholder="Enter new member name"
//                                     value={newMemberName}
//                                     onChange={handleMemberNameChange}
//                                 />
//                                 <button onClick={() => handleAddMemberSubmit(group.group_id)}>Submit</button>
//                             </div>
//                         )}
//                         <div className="members_list">
//                             {group.members.map((member) => (
//                                 <div key={member.member_id} className="member_card">
//                                     {editMemberId === member.member_id ? (
//                                         <div>
//                                             <input
//                                                 type="text"
//                                                 value={editFullName}
//                                                 onChange={(e) => setEditFullName(e.target.value)}
//                                             />
//                                             <button onClick={() => handleSaveEdit(member.member_id)}>Save</button>
//                                         </div>
//                                     ) : (
//                                         <div>
//                                             <h4>{member.full_name}</h4>
//                                             <p>Wedding: {renderBooleanValue(member.wedding)}</p>
//                                             <p>Reception: {renderBooleanValue(member.reception)}</p>
//                                             <p>Zero: {renderBooleanValue(member.zero)}</p>
//                                             <p>Two: {renderBooleanValue(member.two)}</p>
//                                             <button onClick={() => handleEditClick(member.member_id, member.full_name)}>Edit</button>
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Rsvp;

// this is good
// this is good 






// ok here, the group number and letter have been added and it is working.
// import React, { useState, useEffect } from "react";
// import "../styles/rsvp.css";

// const Rsvp = () => {
//     const [groups, setGroups] = useState([]);
//     const [newMemberName, setNewMemberName] = useState('');
//     const [activeGroup, setActiveGroup] = useState(null);
//     const [editMemberId, setEditMemberId] = useState(null);
//     const [editFullName, setEditFullName] = useState('');
//     // this works
//     const [newGroupName, setNewGroupName] = useState('');
//     // trying this now 
//     const [deleteGroupId, setDeleteGroupId] = useState(null);
//     // New state for number of people and letter
//     const [numInvited, setNumInvited] = useState('');
//     const [letter, setLetter] = useState('');

//     useEffect(() => {
//         // Fetch all groups with members
//         const fetchGroups = async () => {
//             try {
//                 const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//                 const data = await response.json();
//                 setGroups(data);
//             } catch (error) {
//                 console.error("Error fetching groups:", error);
//             }
//         };

//         fetchGroups();
//     }, []);

//     const renderBooleanValue = (value) => {
//         if (value === null) {
//             return 'null';
//         } else {
//             return value ? 'Yes' : 'No';
//         }
//     };
//     // here
//     const handleAddGroup = async () => {
//         //     try {
//         //         // Add logic to submit the new group name, number of people, and letter to your backend API
//         //         await fetch('https://ishanisudur-api.onrender.com/groups', {
//         //             method: 'POST',
//         //             headers: {
//         //                 'Content-Type': 'application/json',
//         //             },
//         //             body: JSON.stringify({ last_name: newGroupName, num_invited: numInvited, letter: letter }),
//         //         });

//         //         // Refresh the groups data after adding the group
//         //         const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//         //         const data = await response.json();
//         //         setGroups(data);
//         //         setNewGroupName('');
//         //         setNumInvited('');
//         //         setLetter('');
//         //     } catch (error) {
//         //         console.error("Error adding new group:", error);
//         //     }
//         // };
//         // here is working

//         try {
//             // const numInvitedString = numInvited.toString(); // Convert number to string
//             // const letterString = letter.toString(); // Convert letter to string
//             // Fetch request with stringified data
//             await fetch('https://ishanisudur-api.onrender.com/groups', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ last_name: newGroupName, num_invited: numInvited, letter: letter }),

//             });
//             console.log(numInvited)
//             // Refresh the groups data after adding the group
//             const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//             const data = await response.json();
//             setGroups(data);
//             setNewGroupName('');
//             setNumInvited('');
//             setLetter('');
//         } catch (error) {
//             console.error("Error adding new group:", error);
//         }
//     };

//     // here is delete try 

//     const handleDeleteGroup = async (groupId) => {
//         try {
//             // Add logic to delete the group from your backend API
//             // For example:
//             await fetch(`https://ishanisudur-api.onrender.com/groups/${groupId}`, {
//                 method: 'DELETE',
//             });

//             // Refresh the groups data after deleting the group
//             const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//             const data = await response.json();
//             setGroups(data);
//         } catch (error) {
//             console.error("Error deleting group:", error);
//         }
//     };

//     // here

//     const handleAddMember = (groupId) => {
//         setActiveGroup(groupId);
//     };

//     const handleMemberNameChange = (event) => {
//         setNewMemberName(event.target.value);
//     };

//     const handleAddMemberSubmit = async (groupId) => {
//         try {
//             // Add logic to submit the new member name to your backend API
//             // For example:
//             await fetch(`https://ishanisudur-api.onrender.com/members/${groupId}`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ full_name: newMemberName }),
//             });

//             // Refresh the groups data after adding the member
//             const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//             const data = await response.json();
//             setGroups(data);
//         } catch (error) {
//             console.error("Error adding new member:", error);
//         }

//         setActiveGroup(null);
//         setNewMemberName('');
//     };

//     const handleEditClick = (memberId, fullName) => {
//         setEditMemberId(memberId);
//         setEditFullName(fullName);
//     };

//     const handleSaveEdit = async (memberId) => {
//         try {
//             // Add logic to save edited member data to your backend API
//             // For example:
//             await fetch(`https://ishanisudur-api.onrender.com/members/${memberId}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ full_name: editFullName }),
//             });

//             // for delete trying
//             const handleDeleteGroup = async (groupId) => {
//                 try {
//                     // Add logic to delete the group from your backend API
//                     // For example:
//                     await fetch(`https://ishanisudur-api.onrender.com/groups/${groupId}`, {
//                         method: 'DELETE',
//                     });

//                     // Refresh the groups data after deleting the group
//                     const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//                     const data = await response.json();
//                     setGroups(data);
//                 } catch (error) {
//                     console.error("Error deleting group:", error);
//                 }
//             };
//             // for delete trying

//             // Refresh the groups data after saving the edit
//             const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//             const data = await response.json();
//             setGroups(data);
//         } catch (error) {
//             console.error("Error saving edit:", error);
//         }

//         setEditMemberId(null);
//         setEditFullName('');
//     };

//     return (
//         <div className="rsvp_container">
//             {/* here  its working */}
//             <div className="add_group_section">
//                 <input
//                     type="text"
//                     placeholder="Enter new group name"
//                     value={newGroupName}
//                     onChange={(e) => setNewGroupName(e.target.value)}
//                 />
//                 <input
//                     type="number" // Use type="number" for integer input
//                     placeholder="Number of people invited"
//                     value={numInvited}
//                     onChange={(e) => setNumInvited((e.target.value))}
//                 />
//                 <input
//                     type="text" // Use type="text" for character input
//                     placeholder="Letter"
//                     value={letter}
//                     onChange={(e) => setLetter(e.target.value)}
//                 />
//                 <button onClick={handleAddGroup}>Add Group</button>
//             </div>
//             {/* here its working*/}
//             <div className="groups_container">
//                 {groups.map((group) => (
//                     <div key={group.group_id} className="group_card">
//                         <h3>{group.last_name}</h3>
//                         <h3>{group.num_invited}</h3>
//                         <h3>{group.letter}</h3>

//                         <button onClick={() => handleAddMember(group.group_id)}>Add New Member</button>
//                         {/* adding here */}


//                         <button onClick={() => handleDeleteGroup(group.group_id)}>Delete Group</button>



//                         {/* here */}
//                         {activeGroup === group.group_id && (
//                             <div className="add_member_input">
//                                 <input
//                                     type="text"
//                                     placeholder="Enter new member name"
//                                     value={newMemberName}
//                                     onChange={handleMemberNameChange}
//                                 />
//                                 <button onClick={() => handleAddMemberSubmit(group.group_id)}>Submit</button>
//                             </div>
//                         )}
//                         <div className="members_list">
//                             {group.members.map((member) => (
//                                 <div key={member.member_id} className="member_card">
//                                     {editMemberId === member.member_id ? (
//                                         <div>
//                                             <input
//                                                 type="text"
//                                                 value={editFullName}
//                                                 onChange={(e) => setEditFullName(e.target.value)}
//                                             />
//                                             <button onClick={() => handleSaveEdit(member.member_id)}>Save</button>
//                                         </div>
//                                     ) : (
//                                         <div>
//                                             <h4>{member.full_name}</h4>
//                                             <p>Wedding: {renderBooleanValue(member.wedding)}</p>
//                                             <p>Reception: {renderBooleanValue(member.reception)}</p>
//                                             <p>Zero: {renderBooleanValue(member.zero)}</p>
//                                             <p>Two: {renderBooleanValue(member.two)}</p>
//                                             <button onClick={() => handleEditClick(member.member_id, member.full_name)}>Edit</button>
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Rsvp;
// // ok here, the group number and letter have been added and it is working.






//add group and the conditional member is working
// import React, { useState, useEffect } from "react";
// import "../styles/rsvp.css";

// const Rsvp = () => {
//     const [groups, setGroups] = useState([]);
//     const [newMemberName, setNewMemberName] = useState('');
//     const [activeGroup, setActiveGroup] = useState(null);
//     const [editMemberId, setEditMemberId] = useState(null);
//     const [editFullName, setEditFullName] = useState('');
//     // this works
//     const [newGroupName, setNewGroupName] = useState('');
//     // trying this now 
//     const [deleteGroupId, setDeleteGroupId] = useState(null);
//     // New state for number of people and letter
//     const [numInvited, setNumInvited] = useState('');
//     const [letter, setLetter] = useState('');

//     useEffect(() => {
//         // Fetch all groups with members
//         const fetchGroups = async () => {
//             try {
//                 const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//                 const data = await response.json();
//                 setGroups(data);
//             } catch (error) {
//                 console.error("Error fetching groups:", error);
//             }
//         };

//         fetchGroups();
//     }, []);

//     const renderBooleanValue = (value) => {
//         if (value === null) {
//             return 'null';
//         } else {
//             return value ? 'Yes' : 'No';
//         }
//     };
//     // here
//     const handleAddGroup = async () => {
//         //     try {
//         //         // Add logic to submit the new group name, number of people, and letter to your backend API
//         //         await fetch('https://ishanisudur-api.onrender.com/groups', {
//         //             method: 'POST',
//         //             headers: {
//         //                 'Content-Type': 'application/json',
//         //             },
//         //             body: JSON.stringify({ last_name: newGroupName, num_invited: numInvited, letter: letter }),
//         //         });

//         //         // Refresh the groups data after adding the group
//         //         const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//         //         const data = await response.json();
//         //         setGroups(data);
//         //         setNewGroupName('');
//         //         setNumInvited('');
//         //         setLetter('');
//         //     } catch (error) {
//         //         console.error("Error adding new group:", error);
//         //     }
//         // };
//         // here is working

//         try {
//             // const numInvitedString = numInvited.toString(); // Convert number to string
//             // const letterString = letter.toString(); // Convert letter to string
//             // Fetch request with stringified data
//             await fetch('https://ishanisudur-api.onrender.com/groups', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ last_name: newGroupName, num_invited: numInvited, letter: letter }),

//             });
//             console.log(numInvited)
//             // Refresh the groups data after adding the group
//             const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//             const data = await response.json();
//             setGroups(data);
//             setNewGroupName('');
//             setNumInvited('');
//             setLetter('');
//         } catch (error) {
//             console.error("Error adding new group:", error);
//         }
//     };

//     // here is delete try 

//     const handleDeleteGroup = async (groupId) => {
//         try {
//             // Add logic to delete the group from your backend API
//             // For example:
//             await fetch(`https://ishanisudur-api.onrender.com/groups/${groupId}`, {
//                 method: 'DELETE',
//             });

//             // Refresh the groups data after deleting the group
//             const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//             const data = await response.json();
//             setGroups(data);
//         } catch (error) {
//             console.error("Error deleting group:", error);
//         }
//     };

//     // here

//     const handleAddMember = (groupId) => {
//         setActiveGroup(groupId);
//     };

//     const handleMemberNameChange = (event) => {
//         setNewMemberName(event.target.value);
//     };

//     const handleAddMemberSubmit = async (groupId) => {
//         try {
//             // Add logic to submit the new member name to your backend API
//             // For example:
//             await fetch(`https://ishanisudur-api.onrender.com/members/${groupId}`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ full_name: newMemberName }),
//             });

//             // Refresh the groups data after adding the member
//             const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//             const data = await response.json();
//             setGroups(data);
//         } catch (error) {
//             console.error("Error adding new member:", error);
//         }

//         setActiveGroup(null);
//         setNewMemberName('');
//     };

//     const handleEditClick = (memberId, fullName) => {
//         setEditMemberId(memberId);
//         setEditFullName(fullName);
//     };

//     const handleSaveEdit = async (memberId) => {
//         try {
//             // Add logic to save edited member data to your backend API
//             // For example:
//             await fetch(`https://ishanisudur-api.onrender.com/members/${memberId}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ full_name: editFullName }),
//             });

//             // for delete trying
//             const handleDeleteGroup = async (groupId) => {
//                 try {
//                     // Add logic to delete the group from your backend API
//                     // For example:
//                     await fetch(`https://ishanisudur-api.onrender.com/groups/${groupId}`, {
//                         method: 'DELETE',
//                     });

//                     // Refresh the groups data after deleting the group
//                     const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//                     const data = await response.json();
//                     setGroups(data);
//                 } catch (error) {
//                     console.error("Error deleting group:", error);
//                 }
//             };
//             // for delete trying

//             // Refresh the groups data after saving the edit
//             const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//             const data = await response.json();
//             setGroups(data);
//         } catch (error) {
//             console.error("Error saving edit:", error);
//         }

//         setEditMemberId(null);
//         setEditFullName('');
//     };

//     return (
//         <div className="rsvp_container">
//             {/* here  its working */}
//             <div className="add_group_section">
//                 <input
//                     type="text"
//                     placeholder="Enter new group name"
//                     value={newGroupName}
//                     onChange={(e) => setNewGroupName(e.target.value)}
//                 />
//                 <input
//                     type="number" // Use type="number" for integer input
//                     placeholder="Number of people invited"
//                     value={numInvited}
//                     onChange={(e) => setNumInvited((e.target.value))}
//                 />
//                 <input
//                     type="text" // Use type="text" for character input
//                     placeholder="Letter"
//                     value={letter}
//                     onChange={(e) => setLetter(e.target.value)}
//                 />
//                 <button onClick={handleAddGroup}>Add Group</button>
//             </div>
//             {/* here its working*/}
//             <div className="groups_container">
//                 {groups.map((group) => (
//                     <div key={group.group_id} className="group_card">
//                         <h3>{group.last_name}</h3>
//                         <h3>{group.num_invited}</h3>
//                         <h3>{group.letter}</h3>
//                         {/* {(group.members.length === 1 || group.members.length === 0) && (
//                             <button onClick={() => handleAddMember(group.group_id)}>Add New Member</button>
//                         )} */}
//                         {/* {group.members.length <= 1 && (
//                             <button onClick={() => handleAddMember(group.group_id)}>Add New Member</button>
//                         )} */}

//                         {group.members.length < parseInt(group.num_invited) && (
//                             <button onClick={() => handleAddMember(group.group_id)}>Add New Member</button>
//                         )}


//                         {/* {(group.members.length === 1 || group.members.length === 0) && (
//                             <button onClick={() => handleAddMember(group.group_id)}>Add New Member</button>
//                         )} */}


//                         {/* <button onClick={() => handleAddMember(group.group_id)}>Add New Member</button> */}
//                         {/* adding here */}


//                         <button onClick={() => handleDeleteGroup(group.group_id)}>Delete Group</button>



//                         {/* here */}
//                         {activeGroup === group.group_id && (
//                             <div className="add_member_input">
//                                 <input
//                                     type="text"
//                                     placeholder="Enter new member name"
//                                     value={newMemberName}
//                                     onChange={handleMemberNameChange}
//                                 />
//                                 <button onClick={() => handleAddMemberSubmit(group.group_id)}>Submit</button>
//                             </div>
//                         )}
//                         <div className="members_list">
//                             {group.members.map((member) => (
//                                 <div key={member.member_id} className="member_card">
//                                     {editMemberId === member.member_id ? (
//                                         <div>
//                                             <input
//                                                 type="text"
//                                                 value={editFullName}
//                                                 onChange={(e) => setEditFullName(e.target.value)}
//                                             />
//                                             <button onClick={() => handleSaveEdit(member.member_id)}>Save</button>
//                                         </div>
//                                     ) : (
//                                         <div>
//                                             <h4>{member.full_name}</h4>
//                                             {/* Conditionally render details based on the letter field */}
//                                             {group.letter === 'b' && (
//                                                 <>
//                                                     <p>Wedding: {renderBooleanValue(member.wedding)}</p>
//                                                     <p>Reception: {renderBooleanValue(member.reception)}</p>
//                                                     <p>Zero: {renderBooleanValue(member.zero)}</p>
//                                                     <p>Two: {renderBooleanValue(member.two)}</p>
//                                                 </>
//                                             )}
//                                             {group.letter === 'r' && (
//                                                 <p>Reception: {renderBooleanValue(member.reception)}</p>
//                                             )}
//                                             {group.letter === 'w' && (
//                                                 <p>Wedding: {renderBooleanValue(member.wedding)}</p>
//                                             )}
//                                             {/* Add more conditions for other letters if needed */}
//                                             <button onClick={() => handleEditClick(member.member_id, member.full_name)}>Edit</button>
//                                         </div>
//                                         // <div>
//                                         //     <h4>{member.full_name}</h4>
//                                         //     <p>Wedding: {renderBooleanValue(member.wedding)}</p>
//                                         //     <p>Reception: {renderBooleanValue(member.reception)}</p>
//                                         //     <p>Zero: {renderBooleanValue(member.zero)}</p>
//                                         //     <p>Two: {renderBooleanValue(member.two)}</p>
//                                         //     <button onClick={() => handleEditClick(member.member_id, member.full_name)}>Edit</button>
//                                         // </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Rsvp;

// ok here, the group number and letter have been added and it is working, add member conditional is working





// import React, { useState, useEffect } from "react";
// import "../styles/rsvp.css";

// const Rsvp = () => {
//     const [groups, setGroups] = useState([]);
//     const [newMemberName, setNewMemberName] = useState('');
//     const [activeGroup, setActiveGroup] = useState(null);
//     const [editMemberId, setEditMemberId] = useState(null);
//     const [editFullName, setEditFullName] = useState('');
//     // this works
//     const [newGroupName, setNewGroupName] = useState('');
//     // trying this now 
//     const [deleteGroupId, setDeleteGroupId] = useState(null);
//     // New state for number of people and letter
//     const [numInvited, setNumInvited] = useState('');
//     const [letter, setLetter] = useState('');

//     useEffect(() => {
//         // Fetch all groups with members
//         const fetchGroups = async () => {
//             try {
//                 const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//                 const data = await response.json();
//                 setGroups(data);
//             } catch (error) {
//                 console.error("Error fetching groups:", error);
//             }
//         };

//         fetchGroups();
//     }, []);

//     const renderBooleanValue = (value) => {
//         if (value === null) {
//             return 'null';
//         } else {
//             return value ? 'Yes' : 'No';
//         }
//     };
//     // here
//     const handleAddGroup = async () => {
//         //     try {
//         //         // Add logic to submit the new group name, number of people, and letter to your backend API
//         //         await fetch('https://ishanisudur-api.onrender.com/groups', {
//         //             method: 'POST',
//         //             headers: {
//         //                 'Content-Type': 'application/json',
//         //             },
//         //             body: JSON.stringify({ last_name: newGroupName, num_invited: numInvited, letter: letter }),
//         //         });

//         //         // Refresh the groups data after adding the group
//         //         const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//         //         const data = await response.json();
//         //         setGroups(data);
//         //         setNewGroupName('');
//         //         setNumInvited('');
//         //         setLetter('');
//         //     } catch (error) {
//         //         console.error("Error adding new group:", error);
//         //     }
//         // };
//         // here is working

//         try {
//             // const numInvitedString = numInvited.toString(); // Convert number to string
//             // const letterString = letter.toString(); // Convert letter to string
//             // Fetch request with stringified data
//             await fetch('https://ishanisudur-api.onrender.com/groups', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ last_name: newGroupName, num_invited: numInvited, letter: letter }),

//             });
//             console.log(numInvited)
//             // Refresh the groups data after adding the group
//             const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//             const data = await response.json();
//             setGroups(data);
//             setNewGroupName('');
//             setNumInvited('');
//             setLetter('');
//         } catch (error) {
//             console.error("Error adding new group:", error);
//         }
//     };

//     // here is delete try 

//     const handleDeleteGroup = async (groupId) => {
//         try {
//             // Add logic to delete the group from your backend API
//             // For example:
//             await fetch(`https://ishanisudur-api.onrender.com/groups/${groupId}`, {
//                 method: 'DELETE',
//             });

//             // Refresh the groups data after deleting the group
//             const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//             const data = await response.json();
//             setGroups(data);
//         } catch (error) {
//             console.error("Error deleting group:", error);
//         }
//     };

//     // here

//     const handleAddMember = (groupId) => {
//         setActiveGroup(groupId);
//     };

//     const handleMemberNameChange = (event) => {
//         setNewMemberName(event.target.value);
//     };

//     const handleAddMemberSubmit = async (groupId) => {
//         try {
//             // Add logic to submit the new member name to your backend API
//             // For example:
//             await fetch(`https://ishanisudur-api.onrender.com/members/${groupId}`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ full_name: newMemberName }),
//             });

//             // Refresh the groups data after adding the member
//             const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//             const data = await response.json();
//             setGroups(data);
//         } catch (error) {
//             console.error("Error adding new member:", error);
//         }

//         setActiveGroup(null);
//         setNewMemberName('');
//     };

//     const handleEditClick = (memberId, fullName) => {
//         setEditMemberId(memberId);
//         setEditFullName(fullName);
//     };

//     const handleSaveEdit = async (memberId) => {
//         try {
//             // Add logic to save edited member data to your backend API
//             // For example:
//             await fetch(`https://ishanisudur-api.onrender.com/members/${memberId}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ full_name: editFullName }),
//             });

//             // for delete trying
//             const handleDeleteGroup = async (groupId) => {
//                 try {
//                     // Add logic to delete the group from your backend API
//                     // For example:
//                     await fetch(`https://ishanisudur-api.onrender.com/groups/${groupId}`, {
//                         method: 'DELETE',
//                     });

//                     // Refresh the groups data after deleting the group
//                     const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//                     const data = await response.json();
//                     setGroups(data);
//                 } catch (error) {
//                     console.error("Error deleting group:", error);
//                 }
//             };
//             // for delete trying

//             // Refresh the groups data after saving the edit
//             const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//             const data = await response.json();
//             setGroups(data);
//         } catch (error) {
//             console.error("Error saving edit:", error);
//         }

//         setEditMemberId(null);
//         setEditFullName('');
//     };

//     return (
//         <div className="rsvp_container">
//             {/* here  its working */}
//             <div className="add_group_section">
//                 <input
//                     type="text"
//                     placeholder="Enter new group name"
//                     value={newGroupName}
//                     onChange={(e) => setNewGroupName(e.target.value)}
//                 />
//                 <input
//                     type="number" // Use type="number" for integer input
//                     placeholder="Number of people invited"
//                     value={numInvited}
//                     onChange={(e) => setNumInvited((e.target.value))}
//                 />
//                 <input
//                     type="text" // Use type="text" for character input
//                     placeholder="Letter"
//                     value={letter}
//                     onChange={(e) => setLetter(e.target.value)}
//                 />
//                 <button onClick={handleAddGroup}>Add Group</button>
//             </div>
//             {/* here its working*/}
//             <div className="groups_container">
//                 {groups.map((group) => (
//                     <div key={group.group_id} className="group_card">
//                         <h3>{group.last_name}</h3>
//                         <h3>{group.num_invited}</h3>
//                         <h3>{group.letter}</h3>
//                         {/* {(group.members.length === 1 || group.members.length === 0) && (
//                             <button onClick={() => handleAddMember(group.group_id)}>Add New Member</button>
//                         )} */}
//                         {/* {group.members.length <= 1 && (
//                             <button onClick={() => handleAddMember(group.group_id)}>Add New Member</button>
//                         )} */}

//                         {group.members.length < parseInt(group.num_invited) && (
//                             <button onClick={() => handleAddMember(group.group_id)}>Add New Member</button>
//                         )}


//                         {/* {(group.members.length === 1 || group.members.length === 0) && (
//                             <button onClick={() => handleAddMember(group.group_id)}>Add New Member</button>
//                         )} */}


//                         {/* <button onClick={() => handleAddMember(group.group_id)}>Add New Member</button> */}
//                         {/* adding here */}


//                         <button onClick={() => handleDeleteGroup(group.group_id)}>Delete Group</button>



//                         {/* here */}
//                         {activeGroup === group.group_id && (
//                             <div className="add_member_input">
//                                 <input
//                                     type="text"
//                                     placeholder="Enter new member name"
//                                     value={newMemberName}
//                                     onChange={handleMemberNameChange}
//                                 />
//                                 <button onClick={() => handleAddMemberSubmit(group.group_id)}>Submit</button>
//                             </div>
//                         )}
//                         <div className="members_list">
//                             {group.members.map((member) => (
//                                 <div key={member.member_id} className="member_card">
//                                     {editMemberId === member.member_id ? (
//                                         <div>
//                                             <input
//                                                 type="text"
//                                                 value={editFullName}
//                                                 onChange={(e) => setEditFullName(e.target.value)}
//                                             />
//                                             <button onClick={() => handleSaveEdit(member.member_id)}>Save</button>
//                                         </div>
//                                     ) : (
//                                         <div>
//                                             <h4>{member.full_name}</h4>
//                                             {/* Conditionally render details based on the letter field */}
//                                             {group.letter === 'b' && (
//                                                 <>
//                                                     <p>Wedding: {renderBooleanValue(member.wedding)}</p>
//                                                     <p>Reception: {renderBooleanValue(member.reception)}</p>
//                                                     <p>Zero: {renderBooleanValue(member.zero)}</p>
//                                                     <p>Two: {renderBooleanValue(member.two)}</p>
//                                                 </>
//                                             )}
//                                             {group.letter === 'r' && (
//                                                 <p>Reception: {renderBooleanValue(member.reception)}</p>
//                                             )}
//                                             {group.letter === 'w' && (
//                                                 <p>Wedding: {renderBooleanValue(member.wedding)}</p>
//                                             )}
//                                             {/* Add more conditions for other letters if needed */}
//                                             <button onClick={() => handleEditClick(member.member_id, member.full_name)}>Edit</button>
//                                         </div>
//                                         // <div>
//                                         //     <h4>{member.full_name}</h4>
//                                         //     <p>Wedding: {renderBooleanValue(member.wedding)}</p>
//                                         //     <p>Reception: {renderBooleanValue(member.reception)}</p>
//                                         //     <p>Zero: {renderBooleanValue(member.zero)}</p>
//                                         //     <p>Two: {renderBooleanValue(member.two)}</p>
//                                         //     <button onClick={() => handleEditClick(member.member_id, member.full_name)}>Edit</button>
//                                         // </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Rsvp;



// this is the most up to date, need to add a search thing now 
//this is good 
// import React, { useState, useEffect } from "react";
// import "../styles/rsvp.css";

// const Rsvp = () => {
//     const [groups, setGroups] = useState([]);
//     const [newMemberName, setNewMemberName] = useState('');
//     const [activeGroup, setActiveGroup] = useState(null);
//     const [editMemberId, setEditMemberId] = useState(null);
//     const [editFullName, setEditFullName] = useState('');
//     const [editWedding, setEditWedding] = useState(false);
//     const [editReception, setEditReception] = useState(false);
//     const [editZero, setEditZero] = useState(false);
//     const [editTwo, setEditTwo] = useState(false);
//     const [newGroupName, setNewGroupName] = useState('');
//     const [deleteGroupId, setDeleteGroupId] = useState(null);
//     const [numInvited, setNumInvited] = useState('');
//     const [letter, setLetter] = useState('');

//     useEffect(() => {
//         const fetchGroups = async () => {
//             try {
//                 const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//                 const data = await response.json();
//                 setGroups(data);
//             } catch (error) {
//                 console.error("Error fetching groups:", error);
//             }
//         };

//         fetchGroups();
//     }, []);

//     const renderBooleanValue = (value) => {
//         if (value === null) {
//             return 'null';
//         } else {
//             return value ? 'Yes' : 'No';
//         }
//     };

//     const handleAddGroup = async () => {
//         try {
//             await fetch('https://ishanisudur-api.onrender.com/groups', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ last_name: newGroupName, num_invited: numInvited, letter: letter }),
//             });

//             const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//             const data = await response.json();
//             setGroups(data);
//             setNewGroupName('');
//             setNumInvited('');
//             setLetter('');
//         } catch (error) {
//             console.error("Error adding new group:", error);
//         }
//     };

//     const handleDeleteGroup = async (groupId) => {
//         try {
//             await fetch(`https://ishanisudur-api.onrender.com/groups/${groupId}`, {
//                 method: 'DELETE',
//             });

//             const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//             const data = await response.json();
//             setGroups(data);
//         } catch (error) {
//             console.error("Error deleting group:", error);
//         }
//     };

//     const handleAddMember = (groupId) => {
//         setActiveGroup(groupId);
//     };

//     const handleMemberNameChange = (event) => {
//         setNewMemberName(event.target.value);
//     };

//     const handleAddMemberSubmit = async (groupId) => {
//         try {
//             await fetch(`https://ishanisudur-api.onrender.com/members/${groupId}`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ full_name: newMemberName }),
//             });

//             const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//             const data = await response.json();
//             setGroups(data);
//         } catch (error) {
//             console.error("Error adding new member:", error);
//         }

//         setActiveGroup(null);
//         setNewMemberName('');
//     };

//     const handleEditClick = (memberId, fullName, wedding, reception, zero, two) => {
//         setEditMemberId(memberId);
//         setEditFullName(fullName);
//         setEditWedding(wedding);
//         setEditReception(reception);
//         setEditZero(zero);
//         setEditTwo(two);
//     };

//     const handleSaveEdit = async (memberId) => {
//         try {
//             await fetch(`https://ishanisudur-api.onrender.com/members/${memberId}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     full_name: editFullName,
//                     wedding: editWedding,
//                     reception: editReception,
//                     zero: editZero,
//                     two: editTwo,
//                 }),
//             });

//             const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//             const data = await response.json();
//             setGroups(data);
//         } catch (error) {
//             console.error("Error saving edit:", error);
//         }

//         setEditMemberId(null);
//         setEditFullName('');
//         setEditWedding(false);
//         setEditReception(false);
//         setEditZero(false);
//         setEditTwo(false);
//     };

//     return (
//         <div className="rsvp_container">
//             <div className="add_group_section">
//                 <input
//                     type="text"
//                     placeholder="Enter new group name"
//                     value={newGroupName}
//                     onChange={(e) => setNewGroupName(e.target.value)}
//                 />
//                 <input
//                     type="number"
//                     placeholder="Number of people invited"
//                     value={numInvited}
//                     onChange={(e) => setNumInvited(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Letter"
//                     value={letter}
//                     onChange={(e) => setLetter(e.target.value)}
//                 />
//                 <button onClick={handleAddGroup}>Add Group</button>
//             </div>
//             <div className="groups_container">
//                 {groups.map((group) => (
//                     <div key={group.group_id} className="group_card">
//                         <h3>{group.last_name}</h3>
//                         <h3>{group.num_invited}</h3>
//                         <h3>{group.letter}</h3>
//                         {group.members.length < parseInt(group.num_invited) && (
//                             <button onClick={() => handleAddMember(group.group_id)}>Add New Member</button>
//                         )}
//                         <button onClick={() => handleDeleteGroup(group.group_id)}>Delete Group</button>
//                         {activeGroup === group.group_id && (
//                             <div className="add_member_input">
//                                 <input
//                                     type="text"
//                                     placeholder="Enter new member name"
//                                     value={newMemberName}
//                                     onChange={handleMemberNameChange}
//                                 />
//                                 <button onClick={() => handleAddMemberSubmit(group.group_id)}>Submit</button>
//                             </div>
//                         )}
//                         <div className="members_list">
//                             {group.members.map((member) => (
//                                 <div key={member.member_id} className="member_card">
//                                     {editMemberId === member.member_id ? (
//                                         <div>
//                                             <input
//                                                 type="text"
//                                                 value={editFullName}
//                                                 onChange={(e) => setEditFullName(e.target.value)}
//                                             />
//                                             <div>
//                                                 <input
//                                                     type="checkbox"
//                                                     checked={editWedding}
//                                                     onChange={(e) => setEditWedding(e.target.checked)}
//                                                 />
//                                                 <label htmlFor="editWedding">Wedding</label>
//                                             </div>
//                                             <div>
//                                                 <input
//                                                     type="checkbox"
//                                                     checked={editReception}
//                                                     onChange={(e) => setEditReception(e.target.checked)}
//                                                 />
//                                                 <label htmlFor="editReception">Reception</label>
//                                             </div>
//                                             <div>
//                                                 <input
//                                                     type="checkbox"
//                                                     checked={editZero}
//                                                     onChange={(e) => setEditZero(e.target.checked)}
//                                                 />
//                                                 <label htmlFor="editZero">Zero</label>
//                                             </div>
//                                             <div>
//                                                 <input
//                                                     type="checkbox"
//                                                     checked={editTwo}
//                                                     onChange={(e) => setEditTwo(e.target.checked)}
//                                                 />
//                                                 <label htmlFor="editTwo">Two</label>
//                                             </div>
//                                             <button onClick={() => handleSaveEdit(member.member_id)}>Save</button>
//                                         </div>
//                                     ) : (
//                                         <div>
//                                             <h4>{member.full_name}</h4>
//                                             <p>Wedding: {renderBooleanValue(member.wedding)}</p>
//                                             <p>Reception: {renderBooleanValue(member.reception)}</p>
//                                             <p>Zero: {renderBooleanValue(member.zero)}</p>
//                                             <p>Two: {renderBooleanValue(member.two)}</p>
//                                             <button onClick={() => handleEditClick(member.member_id, member.full_name, member.wedding, member.reception, member.zero, member.two)}>Edit</button>
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Rsvp;


// this is the most up to date, need to add a search thing now
//this is good


import React, { useState, useEffect } from "react";
import "../styles/rsvp.css";

const Rsvp = () => {
    const [groups, setGroups] = useState([]);
    const [newMemberName, setNewMemberName] = useState('');
    const [activeGroup, setActiveGroup] = useState(null);
    const [editMemberId, setEditMemberId] = useState(null);
    const [editFullName, setEditFullName] = useState('');
    const [editWedding, setEditWedding] = useState(false);
    const [editReception, setEditReception] = useState(false);
    const [editZero, setEditZero] = useState(false);
    const [editTwo, setEditTwo] = useState(false);
    const [newGroupName, setNewGroupName] = useState('');
    const [deleteGroupId, setDeleteGroupId] = useState(null);
    const [numInvited, setNumInvited] = useState('');
    const [letter, setLetter] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const response = await fetch("https://ishanisudur-api.onrender.com/groups");
                const data = await response.json();
                setGroups(data);
            } catch (error) {
                console.error("Error fetching groups:", error);
            }
        };

        fetchGroups();
    }, []);

    const renderBooleanValue = (value) => {
        if (value === null) {
            return 'null';
        } else {
            return value ? 'Yes' : 'No';
        }
    };

    const handleAddGroup = async () => {
        try {
            await fetch('https://ishanisudur-api.onrender.com/groups', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ last_name: newGroupName, num_invited: numInvited, letter: letter }),
            });

            const response = await fetch("https://ishanisudur-api.onrender.com/groups");
            const data = await response.json();
            setGroups(data);
            setNewGroupName('');
            setNumInvited('');
            setLetter('');
        } catch (error) {
            console.error("Error adding new group:", error);
        }
    };

    const handleDeleteGroup = async (groupId) => {
        try {
            await fetch(`https://ishanisudur-api.onrender.com/groups/${groupId}`, {
                method: 'DELETE',
            });

            const response = await fetch("https://ishanisudur-api.onrender.com/groups");
            const data = await response.json();
            setGroups(data);
        } catch (error) {
            console.error("Error deleting group:", error);
        }
    };

    const handleAddMember = (groupId) => {
        setActiveGroup(groupId);
    };

    const handleMemberNameChange = (event) => {
        setNewMemberName(event.target.value);
    };

    const handleAddMemberSubmit = async (groupId) => {
        try {
            await fetch(`https://ishanisudur-api.onrender.com/members/${groupId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ full_name: newMemberName }),
            });

            const response = await fetch("https://ishanisudur-api.onrender.com/groups");
            const data = await response.json();
            setGroups(data);
        } catch (error) {
            console.error("Error adding new member:", error);
        }

        setActiveGroup(null);
        setNewMemberName('');
    };

    const handleEditClick = (memberId, fullName, wedding, reception, zero, two) => {
        setEditMemberId(memberId);
        setEditFullName(fullName);
        setEditWedding(wedding);
        setEditReception(reception);
        setEditZero(zero);
        setEditTwo(two);
    };

    const handleSaveEdit = async (memberId) => {
        try {
            await fetch(`https://ishanisudur-api.onrender.com/members/${memberId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    full_name: editFullName,
                    wedding: editWedding,
                    reception: editReception,
                    zero: editZero,
                    two: editTwo,
                }),
            });

            const response = await fetch("https://ishanisudur-api.onrender.com/groups");
            const data = await response.json();
            setGroups(data);
        } catch (error) {
            console.error("Error saving edit:", error);
        }

        setEditMemberId(null);
        setEditFullName('');
        setEditWedding(false);
        setEditReception(false);
        setEditZero(false);
        setEditTwo(false);
    };

    const handleSearch = () => {
        const filteredGroups = groups.filter((group) =>
            group.last_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setGroups(filteredGroups);
    };

    return (
        <div className="rsvp_container">
            <div className="search_bar">
                <input
                    type="text"
                    placeholder="Search by group name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="add_group_section">
                <input
                    type="text"
                    placeholder="Enter new group name"
                    value={newGroupName}
                    onChange={(e) => setNewGroupName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Number of people invited"
                    value={numInvited}
                    onChange={(e) => setNumInvited(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Letter"
                    value={letter}
                    onChange={(e) => setLetter(e.target.value)}
                />
                <button onClick={handleAddGroup}>Add Group
                </button>
            </div>
            <div className="groups_container">
                {groups.map((group) => (
                    <div key={group.group_id} className="group_card">
                        <h3>{group.last_name}</h3>
                        <h3>{group.num_invited}</h3>
                        <h3>{group.letter}</h3>
                        {group.members.length < parseInt(group.num_invited) && (
                            <button onClick={() => handleAddMember(group.group_id)}>Add New Member</button>
                        )}
                        <button onClick={() => handleDeleteGroup(group.group_id)}>Delete Group</button>
                        {activeGroup === group.group_id && (
                            <div className="add_member_input">
                                <input
                                    type="text"
                                    placeholder="Enter new member name"
                                    value={newMemberName}
                                    onChange={handleMemberNameChange}
                                />
                                <button onClick={() => handleAddMemberSubmit(group.group_id)}>Submit</button>
                            </div>
                        )}
                        <div className="members_list">
                            {group.members.map((member) => (
                                <div key={member.member_id} className="member_card">
                                    {editMemberId === member.member_id ? (
                                        <div>
                                            <input
                                                type="text"
                                                value={editFullName}
                                                onChange={(e) => setEditFullName(e.target.value)}
                                            />
                                            <div>
                                                <input
                                                    type="checkbox"
                                                    checked={editWedding}
                                                    onChange={(e) => setEditWedding(e.target.checked)}
                                                />
                                                <label htmlFor="editWedding">Wedding</label>
                                            </div>
                                            <div>
                                                <input
                                                    type="checkbox"
                                                    checked={editReception}
                                                    onChange={(e) => setEditReception(e.target.checked)}
                                                />
                                                <label htmlFor="editReception">Reception</label>
                                            </div>
                                            <div>
                                                <input
                                                    type="checkbox"
                                                    checked={editZero}
                                                    onChange={(e) => setEditZero(e.target.checked)}
                                                />
                                                <label htmlFor="editZero">Zero</label>
                                            </div>
                                            <div>
                                                <input
                                                    type="checkbox"
                                                    checked={editTwo}
                                                    onChange={(e) => setEditTwo(e.target.checked)}
                                                />
                                                <label htmlFor="editTwo">Two</label>
                                            </div>
                                            <button onClick={() => handleSaveEdit(member.member_id)}>Save</button>
                                        </div>
                                    ) : (
                                        <div>
                                            <h4>{member.full_name}</h4>
                                            <p>Wedding: {renderBooleanValue(member.wedding)}</p>
                                            <p>Reception: {renderBooleanValue(member.reception)}</p>
                                            <p>Zero: {renderBooleanValue(member.zero)}</p>
                                            <p>Two: {renderBooleanValue(member.two)}</p>
                                            <button onClick={() => handleEditClick(member.member_id, member.full_name, member.wedding, member.reception, member.zero, member.two)}>Edit</button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rsvp;


















// here the edit button is working, add member is working for each member
//only name can be edited

// import React, { useState, useEffect } from "react";
// import "../styles/rsvp.css";

// const Rsvp = () => {
//     const [groups, setGroups] = useState([]);
//     const [editMemberId, setEditMemberId] = useState(null);
//     const [editFullName, setEditFullName] = useState('');

//     useEffect(() => {
//         // Fetch all groups with members
//         const fetchGroups = async () => {
//             try {
//                 const response = await fetch("https://ishanisudur-api.onrender.com/groups");
//                 const data = await response.json();
//                 setGroups(data);
//             } catch (error) {
//                 console.error("Error fetching groups:", error);
//             }
//         };

//         fetchGroups();
//     }, []);

//     const handleEditClick = (memberId, fullName) => {
//         setEditMemberId(memberId);
//         setEditFullName(fullName);
//     };

//     const handleSaveEdit = async () => {
//         try {
//             const response = await fetch(`https://ishanisudur-api.onrender.com/members/${editMemberId}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ full_name: editFullName }),
//             });
//             if (response.ok) {
//                 // Update the state or fetch groups again to reflect changes
//                 // For simplicity, let's refetch all groups
//                 const updatedResponse = await fetch("https://ishanisudur-api.onrender.com/groups");
//                 const updatedData = await updatedResponse.json();
//                 setGroups(updatedData);
//                 setEditMemberId(null);
//                 setEditFullName('');
//             } else {
//                 console.error("Error editing member:", response.statusText);
//             }
//         } catch (error) {
//             console.error("Error editing member:", error);
//         }
//     };

//     return (
//         <div className="rsvp_container">
//             {/* No search input needed */}
//             <div className="groups_container">
//                 {groups.map((group) => (
//                     <div key={group.group_id} className="group_card">
//                         <h3>{group.last_name}</h3>
//                         <div className="members_list">
//                             {group.members.map((member) => (
//                                 <div key={member.member_id} className="member_card">
//                                     {editMemberId === member.member_id ? (
//                                         <div>
//                                             <input
//                                                 type="text"
//                                                 value={editFullName}
//                                                 onChange={(e) => setEditFullName(e.target.value)}
//                                             />
//                                             <button onClick={handleSaveEdit}>Save</button>
//                                         </div>
//                                     ) : (
//                                         <div>
//                                             <h4>{member.full_name}</h4>
//                                             <p>Wedding: {member.wedding ? 'Yes' : 'No'}</p>
//                                             <p>Reception: {member.reception ? 'Yes' : 'No'}</p>
//                                             <p>Zero: {member.zero ? 'Yes' : 'No'}</p>
//                                             <p>Two: {member.two ? 'Yes' : 'No'}</p>
//                                             <button onClick={() => handleEditClick(member.member_id, member.full_name)}>Edit</button>
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Rsvp;
