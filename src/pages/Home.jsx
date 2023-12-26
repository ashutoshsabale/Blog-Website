import React, {useState, useEffect} from "react";
import appwriteService from '../appwrite/config'
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";

function Home(){
      const [posts, setPosts] = useState([])
      const isLoggedIn = useSelector(state=> state.auth.status)

      useEffect(()=>{
            appwriteService.getPosts([]).then((posts)=>{
                  if(posts) setPosts(posts.documents)
            })
      },[])

      if(!isLoggedIn){
            return (
                  <div className="w-full py-8 mt-4 text-center">
                  <Container>
                      <div className="flex flex-wrap h-[43vh] justify-center items-center">
                          <div className="p-2 w-full">
                              <h1 className="text-2xl font-bold hover:text-gray-500">
                                  LogIn to add and Read Post
                              </h1>
                          </div>
                      </div>
                  </Container>
              </div>
            )
      } else if (isLoggedIn && posts.length === 0) {
            return (
                <div className="w-full py-8 mt-4 text-center">
                    <Container>
                        <div className="flex flex-wrap h-[43vh] justify-center items-center">
                            <div className="p-2 w-full">
                                <h1 className="text-2xl font-bold hover:text-gray-500">
                                    Add your First Post
                                </h1>
                            </div>
                        </div>
                    </Container>
                </div>
            )
      }

      return (
            <div className='w-full py-8'>
                  <Container>
                        <div className='flex flex-wrap'>
                              {posts.map((post) => (
                                    <div key={post.$id} className='p-2 w-1/4'>
                                          <PostCard {...post} />
                                    </div>
                              ))}
                        </div>
                  </Container>
            </div>
      )
}

export default Home