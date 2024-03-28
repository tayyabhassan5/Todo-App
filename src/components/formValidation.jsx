import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from "react-redux";
import { addTodo,editTodo } from "../redux/todoSlice";
import ValidationSchema from "../Validation/ValidationSchema";
import useSnackBar from '../hooks/useSnackBar';

const FormValidation = ({ mode, id, title, completed,handleClose}) => {
   console.log("In form validation",completed)
    const dispatch = useDispatch();
    const showSnackBar = useSnackBar();

    const initialValues = {
        title: mode === 'edit' ? title : '',
        completed: mode==='edit'?completed:'',
    }

    const handleSubmit = (values, { resetForm }) => {
        if (mode === 'edit')
         {  
            dispatch(editTodo({
                id: id, 
                title: values.title, 
                completed: values.completed 
            }));

            resetForm();

            showSnackBar({ message: 'The todo has been edited successfully!', variant: 'success' });
        } 
        else {
            console.log("Add is cakkled")
            dispatch(addTodo({
                id: Date.now(),
                title: values.title,
                completed: values.completed
            }));

            resetForm();

            showSnackBar({ message: 'The todo has been created!', variant: 'success' });
        }
        handleClose();
    }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={ValidationSchema}
                onSubmit={handleSubmit}>
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="title">Todo Title</label>
                        <br />
                        <Field placeholder="Post Title" className="p-2 border w-full placeholder-normal" type='text' name='title'></Field>
                        <br />
                        {touched.title && errors.title && <small className="text-red-600">{errors.title}</small>}
                        <br />

                        <label htmlFor="completed">Todo Status</label>
                        <br />
                        <Field as="select" className="border w-full p-2" name="completed">
                            <option value="">Select</option>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </Field>
                        <br />
                        {touched.completed && errors.completed && <small className="text-red-600">{errors.completed}</small>}
                        <br />

                        <button type="submit" className="text-white bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-500 rounded p-2">{mode === 'edit' ? 'Save' : 'Create'}</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default FormValidation;
