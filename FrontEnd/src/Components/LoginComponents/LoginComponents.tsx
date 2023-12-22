import React, { useRef, useState } from 'react';
import { Tab, Tabs, Form, Button } from 'react-bootstrap';

import { Login } from "../../APIService/APIService.js"

const LoginComponents = () => {
    // const [loginFormData, setLoginFormData] = useState({
    //     loginSelector: 'User',
    //     loginEmail: '',
    //     loginPassword: '',
    // });

    // const [regFormData, setRegFormData] = useState({
    //     regSelector: 'User',
    //     regFullName: '',
    //     regEmail: '',
    //     regPassword: '',
    // });

    // const handleLoginChange = (e) => {
    //     const { name, value } = e.target;
    //     setLoginFormData((prevData) => ({ ...prevData, [name]: value }));
    // };

    // const handleRegChange = (e) => {
    //     const { name, value } = e.target;
    //     setRegFormData((prevData) => ({ ...prevData, [name]: value }));
    // };

    // const handleLoginSubmit = (e) => {
    //     e.preventDefault();

    //     // Basic validation (check if fields are not empty)
    //     if (loginFormData.loginEmail && loginFormData.loginPassword) {
    //         // Your logic for login
    //         alert(`Logging in as ${loginFormData.loginSelector}`);

    //         let PostBody = {
    //             OfficeEmail: loginFormData.loginEmail,
    //             Password: loginFormData.loginPassword,
    //         };

    //         const Url = loginFormData.loginSelector;

    //         Login(PostBody, Url).then((Res) => {
    //             if (Res.data.json_data == null) {
    //                 // SetUserError("Incorrect Email OR Password")
    //                 console.log("1")
    //             } else if (Res.data.msg == "success") {
    //                 console.log("Success")
    //                 // SetUserError(" ")
    //                 // localStorage.setItem('ID', Res.data.json_data.id)
    //                 // localStorage.setItem('FullName', Res.data.json_data.full_name)
    //                 // localStorage.setItem('Email', Res.data.json_data.email)
    //                 // localStorage.setItem('Mobile', Res.data.json_data.mobile)
    //                 // localStorage.setItem('DateOfBirth', Res.data.json_data.dob)
    //                 // localStorage.setItem('Image', Res.data.json_data.signature_image)
    //                 // history.push('/home');
    //             } else {
    //                 // SetUserError("Server error please try again later!")
    //                 console.log("Error")
    //             }
    //             console.log(Res)
    //         });



    //     } else {
    //         alert('Please fill in all required fields.');
    //     }
    // };

    // const handleRegSubmit = (e) => {
    //     e.preventDefault();

    //     // Basic validation (check if fields are not empty)
    //     if (regFormData.regFullName && regFormData.regEmail && regFormData.regPassword) {
    //         // Your logic for registration
    //         alert(`Registering as ${regFormData.regSelector}`);
    //     } else {
    //         alert('Please fill in all required fields.');
    //     }
    // };

    let LoginEmailRef: any, LoginPasswordRef: any, RegNameRef: any, RegEmailRef: any, RegPasswordRef: any, LoginSelectorRef: any, RegSelectorRef: any = useRef();

    const LoginBtn = () => {
        const LoginEmail = LoginEmailRef.value;
        const LoginPassword = LoginPasswordRef.value;
        const LoginSelector = LoginSelectorRef.value;


        if (LoginSelector === "UserLogin") {

            let PostBody = {
                UserEmail: LoginEmail,
                Password: LoginPassword,
            };

            const Url = "UserLogin";
            Login(PostBody, Url).then((Res) => {
                if (Res.data.status == "Success") {
                    console.log("Success")
                    console.log(Res.data.data)
                    // SetUserError(" ")
                    localStorage.setItem('UserID', Res.data.data._id)
                    localStorage.setItem('UserEmail', Res.data.data.UserEmail)
                    localStorage.setItem('FullName', Res.data.data.FullName)
                    localStorage.setItem('Mobile', Res.data.data.Mobile)
                    localStorage.setItem('Photo', Res.data.data.Photo)
                    localStorage.setItem('CreateDate', Res.data.data.CreateDate)
                    localStorage.setItem('Token', Res.data.Token)
                    // history.push('/home');
                } else {
                    localStorage.clear();
                    console.log("Error")
                }
                console.log(Res)
            });



        } else if (LoginSelector === "OfficeLogin") {


            let PostBody = {
                OfficeEmail: LoginEmail,
                Password: LoginPassword,
            };

            const Url = "OfficeLogin";
            Login(PostBody, Url).then((Res) => {
                if (Res.data.status == "Success") {
                    console.log("Success")
                    console.log(Res.data.data)
                    // SetUserError(" ")
                    localStorage.setItem('UserID', Res.data.data._id)
                    localStorage.setItem('UserEmail', Res.data.data.UserEmail)
                    localStorage.setItem('FullName', Res.data.data.FullName)
                    localStorage.setItem('Mobile', Res.data.data.Mobile)
                    localStorage.setItem('Photo', Res.data.data.Photo)
                    localStorage.setItem('CreateDate', Res.data.data.CreateDate)
                    localStorage.setItem('Token', Res.data.Token)
                    // history.push('/home');
                } else {
                    console.log("Error")
                    localStorage.setItem('UserID', "Login Faild")
                    localStorage.setItem('UserEmail', "Login Faild")
                    localStorage.setItem('FullName', "Login Faild")
                    localStorage.setItem('Mobile', "Login Faild")
                    localStorage.setItem('Photo', "Login Faild")
                    localStorage.setItem('CreateDate', "Login Faild")
                    localStorage.setItem('Token', "Login Faild")
                    localStorage.clear();
                }
                console.log(Res)
            }).catch(error => {
                console.error('Error:', error);
            });



        } else if (LoginSelector === "SuperAdminLogin") {

            let PostBody = {
                SuperAdminEmail: LoginEmail,
                Password: LoginPassword,
            };

            const Url = "SuperAdminLogin";
            Login(PostBody, Url).then((Res) => {
                if (Res.data.status == "Success") {
                    console.log("Success")
                    console.log(Res.data.data)
                    // SetUserError(" ")
                    localStorage.setItem('UserID', Res.data.data._id)
                    localStorage.setItem('UserEmail', Res.data.data.UserEmail)
                    localStorage.setItem('FullName', Res.data.data.FullName)
                    localStorage.setItem('Mobile', Res.data.data.Mobile)
                    localStorage.setItem('Photo', Res.data.data.Photo)
                    localStorage.setItem('CreateDate', Res.data.data.CreateDate)
                    localStorage.setItem('Token', Res.data.Token)
                    // history.push('/home');
                } else {
                    console.log("Error")
                    localStorage.setItem('UserID', "Login Faild")
                    localStorage.setItem('UserEmail', "Login Faild")
                    localStorage.setItem('FullName', "Login Faild")
                    localStorage.setItem('Mobile', "Login Faild")
                    localStorage.setItem('Photo', "Login Faild")
                    localStorage.setItem('CreateDate', "Login Faild")
                    localStorage.setItem('Token', "Login Faild")
                    localStorage.clear();
                }
                console.log(Res)
            });



        }

    }



    return (
        <div style={{ paddingTop: '60px', paddingBottom: '10px' }}>
            <h3 className='text-center p-2'>Please click Login or Registration</h3>

            <Tabs defaultActiveKey='Login' id='fill-tab-example' className='mb-3' fill>

                <Tab eventKey='Login' title='Login'>
                    <div style={{ width: '80%', margin: 'auto' }}>
                        {/* <Form> */}
                        <Form.Group className='mb-3'>
                            <Form.Label className='bold text-black'>You Are</Form.Label>
                            <Form.Select ref={(input: any) => LoginSelectorRef = input}>
                                <option value='UserLogin'>User</option>
                                <option value='OfficeLogin'>Office</option>
                                <option value='SuperAdminLogin'>Super Admin</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label className='bold text-black'>Email address</Form.Label>
                            <Form.Control
                                type='email'
                                ref={(input: any) => LoginEmailRef = input}
                                placeholder='Enter email'
                            />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label className='bold text-black'>Password</Form.Label>
                            <Form.Control
                                type='password'
                                ref={(input: any) => LoginPasswordRef = input}
                                placeholder='Password'
                            />
                        </Form.Group>
                        <Button onClick={LoginBtn} variant='primary' type='submit'>
                            Submit
                        </Button>
                        {/* </Form> */}
                    </div>
                </Tab>


                <Tab eventKey='Registration' title='Registration'>
                    <div style={{ width: '80%', margin: 'auto' }}>
                        {/* <Form> */}
                        <Form.Group className='mb-3'>
                            <Form.Label className='bold text-black'>You Are</Form.Label>
                            <Form.Select ref={(input: any) => RegSelectorRef = input}>
                                <option value='User'>User</option>
                                <option value='Office'>Office</option>
                                <option value='SuperAdmin'>Super Admin</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label className='bold text-black'>Full Name</Form.Label>
                            <Form.Control
                                type='text'
                                ref={(input: any) => RegNameRef = input}
                                placeholder='Enter Full Name'
                            />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label className='bold text-black'>Email address</Form.Label>
                            <Form.Control
                                type='email'
                                ref={(input: any) => RegEmailRef = input}
                                placeholder='Enter email'
                            />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label className='bold text-black'>Password</Form.Label>
                            <Form.Control
                                type='password'
                                ref={(input: any) => RegPasswordRef = input}
                                placeholder='Password'
                            />
                        </Form.Group>
                        <Button variant='primary' type='submit'>
                            Submit
                        </Button>
                        {/* </Form> */}
                    </div>
                </Tab>
            </Tabs>

        </div>
    );
};

export default LoginComponents;
