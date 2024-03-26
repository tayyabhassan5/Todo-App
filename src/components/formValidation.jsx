import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { useSnackbar } from 'notistack'; 
import ValidationSchema from "../Validation/ValidationSchema";

const FormValidation = () => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar(); 

    const initialValues = {
        title: '',
        completed: '',
    }

    const handleSubmit = (values, { resetForm }) => {
        dispatch(addTodo({
            id: Date.now(),
            title: values.title,
            completed: values.completed
        }));

        resetForm();
        
        enqueueSnackbar('Todo created successfully!', { 
            variant: 'success',
            autoHideDuration:2000
     });
    }

    return (   
            <div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={ValidationSchema}
                    onSubmit={handleSubmit}>
                    {({ errors }) => (
                        <Form>
                            <label htmlFor="title">Todo Title</label>
                            <br />
                            <Field placeholder="Post Title" className="border w-full placeholder-normal" type='text' name='title'></Field>
                            <br />
                            {errors.title && <small className="text-red-600">{errors.title}</small>}
                            <br />

                            <label htmlFor="completed">Todo Status</label>
                            <br />
                            <Field as="select" className="border w-full" name="completed">
                                <option value="">Select</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </Field>
                            <br />
                            {errors.completed && <small className="text-red-600">{errors.completed}</small>}
                            <br />
                            <button type="submit" className="text-white rounded bg-black p-2">Create</button>
                        </Form>
                    )}
                </Formik>
            </div>
    );
}

export default FormValidation;
