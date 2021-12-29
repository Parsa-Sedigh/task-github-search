import {useEffect, useState} from "react";
import {UserBio} from "../components/UserBio/UserBio";
import {DEFAULT_STATUS_OBJ_LOADING} from "../constants/constants";
import {UserAnalytics} from "../components/UserAnalytics/UserAnalytics";
import {getUser, getUserRepos} from "../services/requests";
import {Link, useParams} from "react-router-dom";

interface IRepo {
    name: string;
    html_url: string;
}

export const User = () => {
    const [statusObj, setStatusObj] = useState(DEFAULT_STATUS_OBJ_LOADING);
    const [userInfo, setUserInfo] = useState<any>();
    const [repos, setRepos] = useState<IRepo[]>([]);
    const params = useParams<{username: string}>();
    console.log('params: ', params)

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await getUser(params.username || '');
                const data = await response.json();
                console.log('user is: ', data)

                setUserInfo(data);
            } catch (error) {
            }

        };

        const getUserReposData = async () => {
            try {
                const response = await getUserRepos(params.username || '');
                const data = await response.json();
                console.log('user is: ', data)

                setRepos(data);
            } catch (error) {
            }
        };

        Promise.all([getUserData(), getUserReposData()])
            .then(() => {
                setStatusObj({status: 'IDLE', message: ''});
            })
            .catch((err) => {
                setStatusObj({status: 'ERROR', message: ''});
            });
    }, []);

    return (
        <div className="container">
            {statusObj.status === 'LOADING' ?
                <img className="" alt="loading..." src="/spinner.gif" loading="lazy" style={{width: '200px', margin: 'auto', display: 'block'}} />
            :
                <>
                    <Link className="btn btn-light" to="/">Back To Search</Link>
                    <span>hireable : {userInfo.hireable ? <i className="fa fa-check text-success"></i> : <i className="fa fa-times text-danger"></i>} </span>

                    <UserBio bio={userInfo.bio}
                             avatarUrl={userInfo.avatar_url}
                             blog={userInfo.blog}
                             htmlUrl={userInfo.html_url}
                             login={userInfo.login}
                             location={userInfo.location}
                             name={userInfo.name} />
                    <UserAnalytics followersNumber={userInfo.followers}
                                   followingNumber={userInfo.following}
                                   publicReposNumber={userInfo.public_repos}
                                   publicGistsNumber={userInfo.public_gists}  />

                    {repos.map(repo => <h4 key={repo.name} className="card"><a href={repo.html_url}>{repo.name}</a></h4>)}
                </>}
        </div>
    );
};
