import React from 'react'
import { Formik, Form, Field, ErrorMessage, } from 'formik'
import validationSchema from './API/FormValidatonSchema'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function ContactUs() {



    const defaultVal = {
        fristName: "",
        lastName: "",
        phoneNumber: "",
        emailId: "",
        message: "",
        address: "",
        // checkbox:""

    }
    const handelOnsubmit = (values, { resetForm }) => {
        // console.log(values);
        // console.log("form submited");
        const url = 'https://paywind-4882b-default-rtdb.firebaseio.com/userdata.json';

        const res = fetch(url, {
            method: "post",
            Headers: {
                "Content-Type": "appication/json",
            },
            body: JSON.stringify(values)
        }

        );

        resetForm();

        const notify = () => toast.success('Your Form Has been Submited', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        notify();



    }



    return (
        <Formik initialValues={defaultVal}
            validationSchema={validationSchema}
            onSubmit={handelOnsubmit}
        >
            <div className="container contact-section">
                <div className="row">
                    <div className="col-12 col-lg-11 mx-auto">
                        <div className="row">
                            <div className='col-12 col-lg-5'>
                                <h3 className='fw-bold contact-heading'> Connect With Our <br /> Sales Team.</h3>
                                <h5 className='margin-buttom-p main-hero-para'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur</h5>
                                <img src="./images/hero1.jpg" className='img-fluid w-100 contact-left-side-img' alt="ContactUsimg " />
                            </div>
                            <div className="col-12 col-lg-7 contact-right-side">
                                <Form method="Post">
                                    <div className="row">
                                        <div className="col-12 col-lg-6">
                                            <Field type="text" name="fristName" className={`form-control `} placeholder='First Name' />
                                            <h5 className='margin-buttom'> <ErrorMessage className='is-invalid' name='fristName' /></h5>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <Field type="text" name="lastName" className="form-control " placeholder='Last Name' />
                                            <h5 className='margin-buttom'> <ErrorMessage name='lastName' /></h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-lg-6">
                                            <Field type="text" name="phoneNumber" className="form-control" placeholder='Phone Number' />
                                            <h5 className='margin-buttom'> <ErrorMessage name='phoneNumber' /></h5>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <Field type="text" name="emailId" className="form-control" placeholder='Email ID' />
                                            <h5 className='margin-buttom'> <ErrorMessage name='emailId' /></h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <Field type="text" name="address" className='form-control' placeholder='Add Address' />
                                            <h5 className='margin-buttom'> <ErrorMessage name='address' /></h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <Field type="text" name="message" className='form-control' placeholder='Enter Your Message' />
                                            <h5 className='margin-buttom'> <ErrorMessage name='message' /></h5>
                                        </div>
                                    </div>
                                    {/* <div className="form-check form-checkbox-style">
                                        <Field
                                            className="form-check-Field"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckChecked"
                                            name="checkbox"
                                        />
                                        <label
                                            className="main-hero-para form-check-label">
                                            I agree that the pay Wind may contact me at the
                                            email  address or phone number above
                                        </label>
                                    </div> */}

                                    <button
                                        // onClick={notify}
                                        type="submit"
                                        className="btn btn-style w-100"
                                    >
                                        Submit
                                    </button>
                                    <ToastContainer
                                        position="bottom-right"
                                        autoClose={5000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                    />
                                </Form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </Formik>
    )
}
