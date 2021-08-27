export default function validateInfo(values) {
    let errors = {}

    if(!values.firstname.trim()) {
        errors.firstname = 'firstname required';
    }

    if(!values.lastname.trim()) {
        errors.lastname = 'lastname required';
    }

    //Email
    if(!values.emailaddress) {
        errors.emailaddress = "Emailaddress required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailaddress)) {
        errors.emailaddress = 'Email address is invalid';
    }

    if(!values.phonenumber.trim()) {
        errors.phonenumber = 'enter your phonenumber';
    }

    if(!values.username.trim()) {
        errors.username = 'username required';
    }

    if(!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 8) {
        errors.password = 'Password needs to be 8 characters or more';
    }


    return errors;

}