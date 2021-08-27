import { useState, useEffect} from 'react';
import validateInfo from './validatesInfo';

const useForm = (callback, validate) => {
    const [values, setValues] = useState ({
    Firstname: '',
    Lastname: '',
    Emailaddress: '',
    Phone Number: '',
    username: '',
    password: '',

});
const[errors, setErrors] = useState({});
const[isSubmitting, setIsSubmitting] = useState(false);

const handleChange = e => {
    const{ name, value} = e.target;
    setValues({
        ...values,
        [name]: value
    });
};

const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
};

useEffect(() => {
    if(Objects.keys(errors).length === 0 && 
    isSubmitting) {
        callback();
    }
},
[errors]
);

return{ handleChange, values, handleSubmit, errors, };
};


export default useForm;