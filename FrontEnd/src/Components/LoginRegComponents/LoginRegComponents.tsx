import React, { useRef, useState } from 'react';
import { Tab, Tabs, Form, Button } from 'react-bootstrap';

import { Login, Register } from "../../APIService/APIService.js"

import { useNavigate } from 'react-router-dom';


const LoginRegComponents = () => {

    const navigate = useNavigate();

    let LoginEmailRef: any, LoginPasswordRef: any, RegNameRef: any, RegEmailRef: any, RegPasswordRef: any, LoginSelectorRef: any, RegSelectorRef: any = useRef();


    // Login Button start 
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
                    localStorage.setItem('UserID', Res.data.data._id)
                    localStorage.setItem('Role', Res.data.data.Role)
                    localStorage.setItem('UserEmail', Res.data.data.UserEmail)
                    localStorage.setItem('FullName', Res.data.data.FullName)
                    localStorage.setItem('Mobile', Res.data.data.Mobile)
                    localStorage.setItem('Photo', Res.data.data.Photo)
                    localStorage.setItem('CreateDate', Res.data.data.CreateDate)
                    localStorage.setItem('Token', Res.data.Token)
                    navigate('/Profile');
                    window.location.reload();
                } else {
                    localStorage.clear();
                    alert("Login Faild, Please Try Again Later")
                }
            });



        } else if (LoginSelector === "OfficeLogin") {


            let PostBody = {
                OfficeEmail: LoginEmail,
                Password: LoginPassword,
            };

            const Url = "OfficeLogin";
            Login(PostBody, Url).then((Res) => {
                if (Res.data.status == "Success") {
                    localStorage.setItem('UserID', Res.data.data._id)
                    localStorage.setItem('Role', Res.data.data.Role)
                    localStorage.setItem('OfficeEmail', Res.data.data.OfficeEmail)
                    localStorage.setItem('OfficeName', Res.data.data.OfficeName)
                    localStorage.setItem('FirstName', Res.data.data.FirstName)
                    localStorage.setItem('LastName', Res.data.data.LastName)
                    localStorage.setItem('Address', Res.data.data.Address)
                    localStorage.setItem('Mobile', Res.data.Mobile)
                    localStorage.setItem('Photo', Res.data.data.Photo)
                    localStorage.setItem('CreateDate', Res.data.data.CreateDate)
                    localStorage.setItem('Token', Res.data.Token)
                    navigate('/Dashboard');
                    window.location.reload();
                } else {
                    localStorage.clear();
                    alert("Login Faild, Please Try Again Later")
                }
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
                    localStorage.setItem('UserID', Res.data.data._id)
                    localStorage.setItem('Role', Res.data.data.Role)
                    localStorage.setItem('SuperAdminEmail', Res.data.data.SuperAdminEmail)
                    localStorage.setItem('SuperAdminName', Res.data.data.SuperAdminName)
                    localStorage.setItem('Mobile', Res.data.data.Mobile)
                    localStorage.setItem('Photo', Res.data.data.Photo)
                    localStorage.setItem('CreateDate', Res.data.data.CreateDate)
                    localStorage.setItem('Token', Res.data.Token)
                    navigate('/Dashboard');
                    window.location.reload();
                } else {
                    localStorage.clear();
                    alert("Login Faild, Please Try Again Later")
                }
            });



        }

    }
    // Login Button end


    // Register Button Start 
    const RegBtn = () => {
        const RegSelector = RegSelectorRef.value;
        const RegName = RegNameRef.value;
        const RegEmail = RegEmailRef.value;
        const RegPassword = RegPasswordRef.value;

        if (RegSelector === "UserRegister") {

            let PostBody = {
                UserEmail: RegEmail,
                Role: "User",
                FullName: RegName,
                Mobile: "",
                Password: RegPassword,
                Photo: ""
            };

            const Url = "UserRegister";
            Register(PostBody, Url).then((Res) => {
                if (Res.data.status == "success") {
                    localStorage.clear();
                    navigate('/login');
                    window.location.reload();
                    alert("Success")
                } else {
                    alert("error")
                }
                console.log(Res)
            });



        } else if (RegSelector === "OfficeRegister") {

            let PostBody = {
                OfficeEmail: RegEmail,
                Role: "Office",
                OfficeName: RegName,
                FirstName: " + " + RegName,
                LastName: "",
                Address: "",
                Mobile: "",
                Password: RegPassword,
                Photo: ""
            };

            const Url = "OfficeRegister";
            Register(PostBody, Url).then((Res) => {
                if (Res.data.status == "success") {
                    localStorage.clear();
                    navigate('/login');
                    window.location.reload();
                    alert("Success")
                } else {
                    alert("error")
                }
                console.log(Res)
            });

        } else if (RegSelector === "SuperAdminRegister") {

            let PostBody = {
                SuperAdminEmail: RegEmail,
                Role: "SuperAdmin",
                SuperAdminName: RegName,
                Mobile: "",
                Photo: "",
                Password: RegPassword
            };

            const Url = "SuperAdminRegister";
            Register(PostBody, Url).then((Res) => {
                if (Res.data.status == "success") {
                    localStorage.clear();
                    navigate('/login');
                    window.location.reload();
                    alert("Success")
                } else {
                    alert("error")
                }
                console.log(Res)
            });

        }


    }
    // Register Button End



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
                                <option value='UserRegister'>User Register</option>
                                <option value='OfficeRegister'>Office Register</option>
                                <option value='SuperAdminRegister'>Super Admin Register</option>
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
                        <Button onClick={RegBtn} variant='primary' type='submit'>
                            Submit
                        </Button>
                        {/* </Form> */}
                    </div>
                </Tab>
            </Tabs>

        </div>
    );
};

export default LoginRegComponents;
