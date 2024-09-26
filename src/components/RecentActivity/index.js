import './index.css'

const RecentActivity = () => {
    return (
        <div className='recent-activity-container'>
            <div className='recent-activity-header'>
                <h1>Recently Activity</h1>
            </div>
            <div className='recent-activity-body'>
            <div>
                <p className='time'>10.40 AM, Fri 10 Sept 2021</p>
                <h1>You Posted a New Job</h1>
                <p className='description'>Kindly check the requirements and terms of work and make sure everything is right.</p>
            </div>
            <div className='bottom-container'>
                <p>Today you makes 12 Activity</p>
                <button>See All Activity</button>
            </div>
            </div>
        </div>
    )
}

export default RecentActivity