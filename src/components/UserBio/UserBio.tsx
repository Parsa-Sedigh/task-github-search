interface IUserBioProps {
    avatarUrl: string,
    bio: string,
    login: string,
    name: string,
    location: string,
    blog: string,
    htmlUrl: string
}

export const UserBio = ({avatarUrl, bio, login, name, location, blog, htmlUrl}: IUserBioProps) => {
    return (
        <div className="card grid-2">
            <div className="all-center"><img src={avatarUrl}
                                             className="round-img" alt={login}
                                             style={{width: '150px'}}/><span>{name}</span><span>{location}</span>
            </div>
            <div><h3>Bio :</h3><p>{bio}</p><a
                className="btn btn-dark my-1" href={htmlUrl}>Visit Github Page</a>
                <ul>
                    <li><span>Login : {login}</span></li>
                    <li><span>Website : {blog}</span></li>
                </ul>
            </div>
        </div>
    );
};
