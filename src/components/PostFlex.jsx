import React from "react";
import { Link } from "react-router-dom";
import appwriteService from '../appwrite/config'
import parse from "html-react-parser";

function PostFlex({$id, title, featuredImage, content}){
      return(
            <div className="border rounded-xl my-1">
                  <div className="w-full">
                        <h1 className='text-4xl w-full py-4 px-5'>{title}</h1>
                  </div>
                  <div className='flex flex-wrap flex-row w-full h-[70vh] bg-gray-100 rounded-xl'>
                  <div className='flex justify-between flex-col  px-5 h-full pb-8 w-1/2  '>
                        <div className=' w-full h-[90%] overflow-hidden py-5'>
                              <p className=''>
                                    {parse(content)}
                              </p>
                        </div>
                        <div className='flex align-middle h-[10%] py-3'>
                              <Link to={`/post/${$id}`}>
                                    <button className='bg-blue-500 text-white w-28 h-10 rounded-xl px-1'>
                                          Read More
                                    </button>
                              </Link>
                        </div>

                  </div>
                  <div className='flex flex-wrap justify-center items-center h-full w-1/2  px-5 pb-9' >
                        <img className='object-fill h-[75%] shadow rounded-xl' src={appwriteService.getFilePreview(featuredImage)} alt={title} />
                  </div>

                  </div>
            </div>
      )
}

export default PostFlex;