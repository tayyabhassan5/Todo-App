import * as Yup from 'yup';

const ValidationSchema = Yup.object({
    title: Yup.string().min(3).required("Please enter your post title"),   
    completed: Yup.string().required('Please select an option') 
});

export default ValidationSchema;