import React, { useRef, useState } from 'react';
import { Tab, Tabs, Form, Button } from 'react-bootstrap';

import { Login } from "../../APIService/APIService.js"

import { useNavigate } from 'react-router-dom';


const LoginRegComponents = () => {

    const navigate = useNavigate();

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
                    navigate('/home');
                    window.location.reload();
                } else {
                    localStorage.clear();
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
                    navigate('/home');
                    window.location.reload();
                } else {
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
                    navigate('/home');
                    window.location.reload();
                } else {
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

export default LoginRegComponents;
