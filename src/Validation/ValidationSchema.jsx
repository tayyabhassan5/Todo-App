import * as Yup from 'yup';

const ValidationSchema = Yup.object({
    title:Yup.string().min(3, "Title must be at least 3 characters")
    .max(50, "Title cannot exceed 50 characters")
    .matches(/^(?![0-9]+$)[a-zA-Z0-9\s]*$/, "Title cannot contain only numeric characters")
   .required("Please enter your post title"),
    completed: Yup.string().required('Please select an option') 
});

export default ValidationSchema;