import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage} from 'formik';
import { validateContactForm } from '../utils/validateContactForm';
// The Yup form validation library can be leveraged here but I chose to handle form validation myself.

const ContactForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values', values);
        console.log('in JSON format: ', JSON.stringify(values));
        resetForm();
    }

    return(
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                phoneNum: '',
                email: '', 
                agree: false, 
                contactType: 'By Phone',
                feedback: ''
            }}

            onSubmit={handleSubmit}
            validate={validateContactForm}
        >
        
        <Form>
            <FormGroup row>
                <Label htmlFor='firstName' md='2'>
                    First Name
                </Label>
                <Col md='10'>
                    <Field
                        name='firstName'
                        placeholder='First Name'
                        className='form-control'
                    />

                    <ErrorMessage name='firstName'>
                        {(msg) => <p className='text-danger'>{msg}</p>}
                    </ErrorMessage>

                </Col>
            </FormGroup>
            <FormGroup row >
                <Label htmlFor='lastName' md='2'>
                    Last Name
                </Label>
                <Col md='10'>
                    <Field
                        name='lastName'
                        placeholder='Last Name'
                        className='form-control'
                    />
                    <ErrorMessage name='lastName'>
                        {(msg) => <p className='text-danger'>{msg}</p>}
                    </ErrorMessage>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor='phoneNum' md='2'>
                    Phone
                </Label>
                <Col md='10'>
                    <Field
                        name='phoneNum'
                        placeholder='Phone'
                        className='form-control'
                    />

                    <ErrorMessage name='phoneNum'>
                        {(msg) => <p className='text-danger'>{msg}</p>}
                    </ErrorMessage>

                </Col>

            </FormGroup>
            <FormGroup row>
                <Label htmlFor='email' md='2'>
                    Email
                </Label>
                <Col md='10'>
                    <Field
                        name='email'
                        placeholder='Email'
                        type='email'
                        className='form-control'
                    />

                    <ErrorMessage name='email'>
                        {(msg) => <p className='text-danger'>{msg}</p>}
                    </ErrorMessage>
                    
                </Col>

            </FormGroup>
            <FormGroup row>
                <Label check md={{ size: 4, offset: 2 }}>
                    <Field 
                        name='agree'
                        type='checkbox'
                        className='form-check-input'
                    />{' '}
                    May I contact You?
                </Label>
                <Col md='4'>
                    <Field
                        name='contactType'
                        className='form-control'
                        as='select'
                    >
                        <option>By Phone</option>
                        <option>By Email</option>

                    </Field>
                </Col>

            </FormGroup>
            <FormGroup row>
                <Label htmlFor='feedback' md='2'>
                    Your Feedback
                </Label>
                <Col md='10'>
                    <Field
                        name='feedback'
                        as='textarea'
                        rows='12'
                        className='form-control'
                    />
                </Col>

            </FormGroup>
            <FormGroup row>
                <Col md={{size: 10, offset: 2}}>
                    <Button type='submit' color='primary' >
                        Send Feedback
                    </Button>
                </Col>

            </FormGroup>

        </Form>
        </Formik>
    );

};

export default ContactForm; 