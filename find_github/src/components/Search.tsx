type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

import { useState, KeyboardEvent } from "react"

import { BsSearch } from "react-icons/bs"

import classes from './Search.module.css'

const Search = ({loadUser}: SearchProps) => {

    const [userName, setUserName] = useState("")

    const handleKeyDown = (e: KeyboardEvent) =>{
        
        if(e.key === "Enter"){
            loadUser(userName)
        }

    }

  return (
    <div className={classes.search}>
        <h2>Find for an user:</h2>
        <p>Find the best repositories of him/her</p>
        <div className={classes.search_container}>
            <input type="text" placeholder="Type the name of the user"
            onKeyDown={handleKeyDown}
            onChange={(e)=> setUserName(e.target.value)}
            />
            <button onClick={()=> loadUser(userName)}>
                <BsSearch/>
            </button>
        </div>
    </div>
  )
}

export default Search