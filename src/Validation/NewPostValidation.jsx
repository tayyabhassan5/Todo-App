import * as Yup from 'yup';

const ValidationSchema = Yup.object({
    title:Yup.string().min(3, "Title must be at least 3 characters")
    .max(50, "Title cannot exceed 50 characters")
   .required("Please enter your post title"),
    completed: Yup.string().required('Please select an option') 
});

export default ValidationSchema;