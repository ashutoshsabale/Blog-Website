import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {Container, Logo, LogoutBtn} from '../index'
import { useSelector } from "react-redux";

function Header(){

const authStatus = useSelector((state) => state.auth.status)
const navigate = useNavigate()

const navItems = [{
			name : 'Home',
			slug : '/',
			active : true
	},{
			name : 'Login',
			slug : '/login',
			active : !authStatus
	},{
			name : 'Signup',
			slug : '/signup',
			active : !authStatus
	},{
			name : 'All Posts',
			slug : '/all-posts',
			active : authStatus
	},{
			name : 'Add Post',
			slug : '/add-post',
			active : authStatus
	},{
			name : 'My Posts',
			slug : '/my-posts',
			active : authStatus
	},
]

return(
	<header className="py-3 shadow bg-[#fafafa]">
		<Container>
			<nav className="flex">
				<div className="mr-4">
					<Link to='/'>
						<Logo width='70px'/>
					</Link>
				</div>

				<ul className="flex ml-auto">
					{navItems.map((item)=>
						item.active ? (
							<li key={item.name}>
								<button
									onClick={()=>navigate(item.slug)}
									className="inline-block px-6 mx-1 py-2 duration-200 hover:bg-[#1e9fab65] active:bg-[#1e9fab]-200 focus:outline-none focus:ring-1 focus:ring-[#1e9fabb9] rounded-2xl font-mediux"
								>{item.name}</button>
							</li>
						) : null
					)}
					{authStatus && (
						<li>
							<LogoutBtn/>
						</li>
					)}
				</ul>
			</nav>
		</Container>
	</header>
)
}

export default Header