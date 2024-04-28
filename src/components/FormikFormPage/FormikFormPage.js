import { Formik, Form, Field } from "formik";

import './FormikFormPage.css'

function FormikFormPage() {
    return (
      <Formik
        initialValues={{
            username: '',
            email: '',
            phone: ''
        }}
        validate={(values) => {
            const errors = {};
            if(!values.username) {
                errors.username = 'Please enter a username'
            }
            if(!values.email) {
                errors.email = 'Please enter a email'
            } else if(!/^\S+@\S+\.\S+$/.test(values.email)) {
                errors.email = 'Please enter valid email'
            }
            if(!values.phone) {
                errors.phone = 'Please enter a phone'
            }
            return errors
        }}
        onSubmit={(values) => {
           console.log({
                name: values.username,
                email: values.email,
                phone: values.phone
            })
        }}
      >
        {
            ({errors}) => (
                <Form className="form">
                    <Field type='text' name='username' placeholder='username' />
                    {errors.username && <span style = {{color: 'red'}}>{errors.username}</span>}
                    <Field type='text' name='email' placeholder='email'/>
                    {errors.email && <span style = {{color: 'red'}}>{errors.email}</span>}
                    <Field type='number' name='phone' placeholder='phone'/>
                    {errors.phone && <span style = {{color: 'red'}}>{errors.phone}</span>}
                    <button type='submit'>Submit</button>
                </Form>
            )
        }
      </Formik>
    );
  }
  
  export default FormikFormPage;
  