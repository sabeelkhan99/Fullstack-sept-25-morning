import React, { useState, useEffect } from 'react'

const GITHUB_BASE_URL = "https://api.github.com/users"

const GithubProfile = () => {

    const [username, setUsername] = useState("facebook");
    const [profile, setProfile] = useState(null);

    const changeInputHandler = (e) => {
        setUsername(e.target.value)
    }

    async function fetchProfile() {
        const res = await fetch(`${GITHUB_BASE_URL}/${username}`);
        const data = await res.json();
        setProfile(data);
    }

    const btnClickHandler = async() => {
        fetchProfile();
    }

    // everytime when component is re-rendered
    useEffect(() => {
        console.log('Use effect without dependency array');
    });

    // This will be executed just after the first render
    useEffect(() => {
        console.log('use effect with empty dependency array');
        fetchProfile();
    }, []);

    // This is executed when username changes
    useEffect(() => {
        console.log('use effect with username as dependency');
    }, [username]);

    return (
        <div>
            <h2>Github Profile</h2>
            <h4>Username : { username }</h4>
            <input onChange={changeInputHandler} type="text" placeholder='Enter your username' />
            <button onClick={btnClickHandler}>Submit</button>
            {profile && <div>
                <h3>Name : { profile.name }</h3>
                <img src={profile.avatar_url} alt="" />
            </div>}
        </div>
    )
}

export default GithubProfile
