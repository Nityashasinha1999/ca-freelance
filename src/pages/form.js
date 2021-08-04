/** @format */

import React from "react";

function Form() {
  return (
    <div className='formWrap'>
      <div class='container'>
        <div class='header'> </div>

        <form
          action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSe2yqD_Van-D9uQDw5y60YDjb_coPIMqy0ruB_PFV5vlbf08A/formResponse'
          className='formBlk'>
          <div class='form-floating mb-3'>
            <input
              type='email'
              class='form-control'
              name='emailAddress'
              id='floatingInput'
              placeholder='Email'
              autoComplete='off'
              required
            />
            <label for='floatingInput'>Email address</label>
          </div>
          <div class='form-floating'>
            <input
              type='text'
              name='entry.2005620554'
              class='form-control'
              id='floatingPassword'
              placeholder='Name'
              autoComplete='off'
              required
            />
            <label for='floatingPassword'>Name</label>
          </div>
          <div class='form-floating'>
            <input
              type='tel'
              name='entry.1166974658'
              class='form-control'
              id='floatingPassword'
              placeholder='Phone number'
              autoComplete='off'
              required
            />
            <label for='floatingPassword'>Phone number</label>
          </div>
          <div class='form-floating'>
            <input
              type='text'
              name='entry.1065046570'
              class='form-control'
              id='floatingPassword'
              placeholder='City'
              autoComplete='off'
              required
            />
            <label for='floatingPassword'>City</label>
          </div>

          <div class='form-floating'>
            <input
              type='text'
              name='entry.1859717844'
              class='form-control'
              id='floatingPassword'
              placeholder='State'
              autoComplete='off'
              required
            />
            <label for='floatingPassword'>State</label>
          </div>

          <div class='form-floating'>
            <input
              type='text'
              name='entry.839337160'
              class='form-control'
              id='floatingPassword'
              placeholder='Reason for Contacting Us'
              autoComplete='off'
              required
            />
            <label for='floatingPassword'>Reason for Contacting Us</label>
          </div>

          <button type='submit' className='submitBtn'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
