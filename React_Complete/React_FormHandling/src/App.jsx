import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors ,isSubmitting},
  } = useForm();

  const delay=(d)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve()
      }, d*1000);
    })
  }
  const onSubmit = async(data) => {
    // await delay(2);     // simulating network delay

    let r=await fetch("http://localhost:3000/",{method:"POST",
     headers: {
    "Content-Type": "application/json"}
    ,body:JSON.stringify(data)})
    let res=await r.text();
    console.log(data,res)
    /**  CUSTOM ERRORS */
    // if(data.username !=="shubham"){
    //   setError("myform",{message:"Your form is not correct filled as credentials are invalid"})
    // }
    //  if(data.username =="rohan"){
    //   setError("blocked",{message:"Sorry,This user is blocked"});
    // }
  }

  return (
    <>
    {  isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register("username", { required: { value: true, message: "This field is required" }, minLength: { value: 3, message: "Min length must b 3" }, maxLength: { value: 20, message: "Max length must be 20" } })} type="text" />
          {errors.username && <div className='red'>{errors.username.message}</div>}

          <input placeholder='password' {...register("password", { required: { value: true, message: "This field is required" }, minLength: { value: 6, message: "Min length must be 6" }, maxLength: { value: 10, message: "Max length must be 10" } })} type="password" />
          {errors.password && <div className='red'>{errors.password.message}</div>}

          <input disabled={isSubmitting}type="submit" value="submit" />
          {errors.myform && <div className='red'> {errors.myform.message}</div>}
          {errors.blocked && <div className='red'> {errors.blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
