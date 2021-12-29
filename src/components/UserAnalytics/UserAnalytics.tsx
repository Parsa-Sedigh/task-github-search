interface IUserAnalyticsProps {
    followersNumber: number,
    followingNumber: number,
    publicReposNumber: number,
    publicGistsNumber: number
}

export const UserAnalytics = ({followersNumber, followingNumber, publicReposNumber, publicGistsNumber}: IUserAnalyticsProps) => {
    return (
        <div className="card text-center">
            <div className="badge badge-primary">Followers : {followingNumber}</div>
            <div className="badge badge-light">Following : {followersNumber}</div>
            <div className="badge badge-success">Public Repos : {publicReposNumber}</div>
            <div className="badge badge-dark">Public Gists : {publicGistsNumber}</div>
        </div>
    );
};
