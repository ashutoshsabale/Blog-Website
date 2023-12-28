import React, {useState} from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import {Button, Logo, Input} from "./index"
import { useDispatch } from "react-redux";
import {useForm} from 'react-hook-form'

function Signup(){
      const navigate = useNavigate()
      const dispatch = useDispatch()
      const [error,setError] = useState("")
      const {register,handleSubmit} = useForm()

      const create = async (data)=>{
            setError("")
            try {
                  const userData = await authService.createAccount(data)
                  if(userData){
                        const userData = await authService.getCurrentUser()
                        console.log(userData)
                        if(userData) dispatch(login(userData))
                        navigate("/")
                  }
            } catch (error) {
                  setError(error.message)
            }
      }
      return(
            <div className="flex items-center justify-center">
                  <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-16 border border-black/10`}>
                        <div className="mb-2 flex justify-center">
                              <span className="inline-block w-full max-w-[100px]">
                                    <Logo width="100%" />
                              </span>
                        </div>
                        <h2 className="text-center text-2xl font-bold leading-tight mb-5">Sign up to create account</h2>

                        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                        <form onSubmit={handleSubmit(create)}>
                              <div className="space-y-5">
                                    {/* Name */}
                                    <Input
                                          label = "Full Name: "
                                          placeholder = "Enter your full name"
                                          type = "text"
                                          {...register("name",{
                                                required : true,
                                          })}
                                    />
                                    {/* Email */}
                                    <Input
                                          label = 'Email: '
                                          placeholder="Enter your email"
                                          type='email'
                                          {...register("email",{
                                                required : true,
                                                validate : {
                                                      matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                                      "Email address must be a valid address",
                                                }
                                          })}
                                    />
                                    {/* Password */}
                                    <Input
                                          label = "Password: "
                                          type = "password"
                                          placeholder="Enter your password"
                                          {...register("password",{
                                                required : true,
                                          })}
                                    />
                                    {/* Button */}
                                    <Button
                                          type="submit"
                                          className="w-full"
                                    >
                                          Create Account
                                    </Button>
                              </div>
                        </form>
                        <p className="mt-5 text-center text-base text-black">
                              Already have an account?&nbsp;
                              <Link
                                    to="/login"
                                    className="font-medium text-primary transition-all duration-200 hover:underline"
                              >
                                    Sign In
                              </Link>
                        </p>
                  </div>
            </div>
      )
}

export default Signup