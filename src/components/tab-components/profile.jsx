import React, { useState, useRef } from 'react';
import Inputs from './input.jsx';
import Edit from '../../assets/images/avatar1.svg';
import editIcon from '../../assets/images/fileupload.svg';
import axios from 'axios';

function Profile() {
    const [modalVisible, setModalVisible] = useState(false);
    const [input, setInput] = useState('');
    const inputRef = useRef(null);

    const inputFields = [
        { label_for: 'name', labelText: 'Your Name', inputType: 'text', placeholderText: 'Charlene Reed', inputName: 'Firstname' },
        { label_for: 'lastName', labelText: 'Last Name', inputType: 'text', placeholderText: 'Reed', inputName: 'LastName' },
        { label_for: 'email', labelText: 'Email', inputType: 'email', placeholderText: 'charlenereed@gmail.com', inputName: 'email' },
        { label_for: 'password', labelText: 'Password', inputType: 'password', placeholderText: '*******', inputName: 'password', isPassword: true },
        { label_for: 'dateOfBirth', labelText: 'Date Of Birth', inputType: 'text', placeholderText: '25 January 1990', inputName: 'dateOfBirth' },
        { label_for: 'address', labelText: 'Present Address', inputType: 'text', placeholderText: 'San Jose, California, USA', inputName: 'address' },
        { label_for: 'permanentAddress', labelText: 'Permanent Address', inputType: 'text', placeholderText: 'San Jose, California, USA', inputName: 'permanentAddress' },
        { label_for: 'city', labelText: 'City', inputType: 'text', placeholderText: 'San Jose', inputName: 'city' },
        { label_for: 'code', labelText: 'Country Code', inputType: 'text', placeholderText: '45962', Length: '5', inputName: 'code' },
        { label_for: 'country', labelText: 'Country', inputType: 'text', placeholderText: 'USA', inputName: 'country' },
    ];

    // FUNCTION TO HANDLE THE CHANGE IN INPUT DONE BY THE USER
    const [post, setPost] = useState({
        title: '',
        body: '',
    });
    const handleChange = (event) => {
        setPost({ ...post, [event.target.name]: event.target.value });
    };

    // FUNCTION TO SEND DATA THROUGH API
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/', post)
            .then(response => console.log(response))
            .then(() => setModalVisible(true))
            .catch(error => console.log(error));
    };

    // UPDATE PROFILE PICTURE OF THE USER USING THIS FUNCTION
    const handleInputClick = () => {
        inputRef.current.click();
    };

    // COMPLETE FUNCTION TO CHANGE THE PROFILE PICTURE OF THE USER IN USER PROFILE
    const handleInputChange = (event) => {
        const file = event.target.files[0];
        setInput(file);
    };

    return (
        <>
            <div className="lg:ps-[30px] flex justify-center md:justify-start flex-wrap md:flex-nowrap gap-3 lg:gap-14 w-full bg-white">
                <div className="w-[90px] h-[90px] rounded-full">
                    <div className="relative" onClick={handleInputClick}>
                        {input ? (
                            <img className="rounded-full w-[90px] h-[90px]" src={URL.createObjectURL(input)} alt="profile" />
                        ) : (
                            <img className="rounded-full w-[90px] h-[90px]" src={Edit} alt="profile" />
                        )}
                        <input type="file" ref={inputRef} onChange={handleInputChange} className="hidden" />
                        <div className="absolute bottom-1 right-[-15px] rounded-full p-2 cursor-pointer">
                            <img src={editIcon} alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 justify-between w-full gap-[29px]">
                            {inputFields.map((field) => (
                                <Inputs
                                    key={field.label_for}
                                    label_for={field.label_for}
                                    labelText={field.labelText}
                                    inputType={field.inputType}
                                    placeholderText={field.placeholderText}
                                    value={post[field.inputName] || ''}
                                    onChange={handleChange}
                                    options={field.options || []}
                                    name={field.inputName}
                                />
                            ))}
                        </div>
                        <div className="flex items-center justify-end mt-10">
                            <button type="submit" className="px-[74px] py-[14px] bg-[#232323] text-white rounded-[15px]">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {modalVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 p-3">
                    <div className="bg-white w-[100%] lg:max-w-[600px] p-10 rounded-lg flex flex-col gap-5 shadow-button-shadow">
                        <h2 className="font-[600] text-[25px] font-inter text-center text-[#232323]">Soar Tasks</h2>
                        <h3 className="text-lg font-semibold text-center">Your profile settings have been saved</h3>
                        <div className="flex justify-center">
                            <button
                                onClick={() => setModalVisible(false)}
                                className="mt-4 px-[74px] py-[14px] rounded-2xl bg-[#232323] text-white"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Profile;
