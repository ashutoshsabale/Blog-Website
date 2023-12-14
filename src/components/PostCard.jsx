import React from "react";
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";



function PostCard({$id, title, featuredImage}){

      const userData = useSelector(state => state.auth.userData)

      return(
            <Link to={`/post/${$id}`}>
                  <div className="w-full bg-[#c0c0c0] rounded-xl p-4">
                        <div className="w-full justify-center mb-4 ">
                              <img
                                    src={appwriteService.getFilePreview(featuredImage)} alt={title}
                                    className="rounded-xl w-full h-64 object-cover"
                              />
                        </div>
                        <h2
                              className="text-xl font-bold"
                        >{title}</h2>
                        <p>Post By : {userData.name}</p>
                  </div>
            </Link>
      )
}

export default PostCard