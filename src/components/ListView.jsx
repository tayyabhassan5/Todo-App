import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const ListView = ({ todos, handleToggleComplete, handleEdit, handleDelete }) => {


    return (
        todos.map((item) => (
            <div key={item.id} className="rounded p-2 bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-500 w-full">
                <div className="flex items-center">
                    <div className="text-white">{item.title}</div>

                    <div className="p-2 ml-auto flex items-center space-x-6">
                        <label className="cursor-pointer">
                            <input
                                type="checkbox"
                                className="form-checkbox h-4 w-4 text-green-500"
                                checked={item.completed === 'true' || item.completed === true}
                                onChange={() => handleToggleComplete(item.id, item.completed)}
                            />
                        </label>
                        <FontAwesomeIcon
                            icon={faEdit}
                            className="cursor-pointer text-white hover:text-blue-500"
                            title="Edit the Todo"
                            onClick={() => handleEdit(item.id, item.title,item.completed)}        
                        />
                        <FontAwesomeIcon
                            icon={faTrash}
                            className="cursor-pointer text-white hover:text-red-500"
                            title="Delete the Todo"
                            onClick={() => handleDelete(item.id)}
                        />
                    </div>
                </div>
            </div>
        ))
    );
};

export default ListView;
