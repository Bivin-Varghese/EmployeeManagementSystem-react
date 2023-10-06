import React, { useState } from 'react'

import {
  MDBFooter,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

import { MDBInput } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




function Add() {

  const location = useNavigate()

  const [id, setId] = useState('')
  const [empname, setEmpName] = useState('')
  const [age, setAge] = useState('')
  const [title, setTitle] = useState('')
  const [position, setPosition] = useState('')
  const [salary, setSalary] = useState('')



  const AddEmployee = async (e) => {

    const body = { id, empname, age, title, position, salary }

    const result = await axios.post('http://localhost:8000/addEmployee', body)

    console.log(salary);
    console.log(id);

    location('/')

  }




  return (
    <div>

      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
            <i className='fa-solid fa-user-group me-2 ' ></i>
            Employee Management System
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      2

      {/* main content  */}

      <div className="container">
        <h1 className='text-center my-4' > Add Employee</h1>
      </div>

      {/* form  */}
      <div className="container">

        <MDBInput onChange={(e) => setId(e.target.value)} wrapperClass='mb-4' id='form9Example1' label='Id' />
        <MDBInput onChange={(e) => setEmpName(e.target.value)} wrapperClass='mb-4' id='form9Example1' label='Name' />
        <MDBInput onChange={(e) => setAge(e.target.value)} wrapperClass='mb-4' id='form9Example1' label='Age' />
        <MDBInput onChange={(e) => setTitle(e.target.value)} wrapperClass='mb-4' id='form9Example1' label='Title' />
        <MDBInput onChange={(e) => setPosition(e.target.value)} wrapperClass='mb-4' id='form9Example1' label='Position' />
        <MDBInput onChange={(e) => setSalary(e.target.value)} wrapperClass='mb-4' id='form9Example1' label='Salary' />

        <MDBBtn onClick={(e) => AddEmployee(e)} type='submit' className='mb-4' block>
          Add
        </MDBBtn>

      </div>



      {/* footer  */}

      <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
        <MDBContainer className='pt-4'>
          <section className='mb-4'>
            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='text-dark m-1'
              href='#!'
              role='button'
            >
              <MDBIcon fab className='fab fa-facebook-f' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='text-dark m-1'
              href='#!'
              role='button'
            >
              <MDBIcon fab className='fa-twitter' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='text-dark m-1'
              href='#!'
              role='button'
            >
              <MDBIcon fab className='fa-google' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='text-dark m-1'
              href='#!'
              role='button'
            >
              <MDBIcon fab className='fa-instagram' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='text-dark m-1'
              href='#!'
              role='button'
            >
              <MDBIcon fab className='fa-linkedin' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='text-dark m-1'
              href='#!'
              role='button'
            >
              <MDBIcon fab className='fa-github' />
            </MDBBtn>
          </section>
        </MDBContainer>


        <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 Copyright:
          <a className='text-dark' href=''>
            EmployeeSystem
          </a>
        </div>
      </MDBFooter>

    </div>
  )
}

export default Add