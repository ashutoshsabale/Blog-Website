import React, { useState, useEffect} from "react";
import appwriteService from "../appwrite/config"
import { useSelector } from "react-redux";
import { Container, PostCard } from "../components";



function MyPosts() {
    const userData = useSelector(state => state.auth.userData)
    const [myPosts, setMyPosts] = useState([])

      useEffect(()=>{
                  appwriteService.getPosts([]).then((posts)=>{
                        return posts.documents
                  }).then((posts)=>{
                        let mypost = []
                        for (let i=0; i<posts.length; i++){
                              if(posts[i].userId === userData.$id)
                                    mypost.push(posts[i])
                        }
                        setMyPosts(mypost)
                  })
      },[])

      if (myPosts.length === 0) {
            return (
                  <div className="w-full py-8 mt-4 text-center">
                  <Container>
                        <div className="flex flex-wrap h-[43vh] justify-center items-center">
                              <div className="p-2 w-full">
                                    <h2 className="text-2xl mb-10 font-bold text-gray-400">
                                    You haven't added any post yet.
                                    </h2>
                                    <h1 className="text-2xl font-bold ">
                                          Add your First Post
                                    </h1>
                              </div>
                        </div>
                  </Container>
                  </div>
                  )
            }

      return(
            <div className='w-full py-8'>
                  <Container>
                        <div className='flex flex-wrap'>
                              {myPosts.map((post) => (
                                    <div key={post.$id} className='p-2 w-1/4'>
                                          <PostCard {...post} />
                                    </div>
                              ))}
                        </div>
                  </Container>
            </div>
      )
}



export default MyPosts
