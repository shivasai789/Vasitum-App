
import TopCards from '../TopCards'
import MiddleCards from '../MiddleCards'
import Announcements from '../Announcement'
import RecentActivity from '../RecentActivity'
import './index.css'

const dashboardCardDetails = [
    {
        cardId: 'POSITION',
        cardName: 'Available Position',
        cardCount: 24,
        cardDescription: '4 Urgently needed',
        cardColor: '#FFEFE7',
        cardDescriptionColor: '#FF5151'
    },
    {
        cardId: 'JOB',
        cardName: 'Job Open',
        cardCount: 10,
        cardDescription: '4 Active hiring',
        cardColor: '#E8F0FB',
        cardDescriptionColor: '#3786F1'
    },
    {
        cardId: 'EMPLOYEE',
        cardName: 'New Employees',
        cardCount: 24,
        cardDescription: '4 Department',
        cardColor: '#FDEBF9',
        cardDescriptionColor: '#EE61CF'
    },
]

const EmployeesAndTalentData = [
    {
        cardId: 'EMPLOYEE',
        cardName: 'Total Employees',
        cardCount: 216,
        totalMen: 120,
        totalWomen: 96,
        increasePercentage: 2,
    },
    {
        cardId: 'TALENT',
        cardName: 'Talent Request',
        cardCount: 16,
        totalMen: 6,
        totalWomen: 10,
        increasePercentage: 5,
    }
]

const announcements = [
    {
      title: "Outing schedule for every department",
      time: "5 Minutes ago",
    },
    {
      title: "Meeting HR Department",
      time: "Yesterday, 12:30 PM",
    },
    {
      title: "IT Department need two more talents for UX/UI Designer position",
      time: "Yesterday, 09:15 AM",
    },
];

const schedules = [
    { title: "Review candidate applications", time: "11:30 AM" },
    { title: "Interview with candidates", time: "10:30 AM" },
    { title: "Short meeting with product designer from IT department", time: "9:15 AM" },
    { title: "Review candidate applications", time: "11:30 AM" },
];


const Dashboard = () => {
    

    return (
        <div className='dashboard-container'>
                    <p className='dashboard-heading'>Dashboard</p>
                    <div className='dashboard-content-cont'>
                        <div className='first-container'>
                            <ul className='top-cards-container'>
                                {dashboardCardDetails.map(eachItem => (
                                    <TopCards cardDetails={eachItem} key={eachItem.cardId} />
                                ))}
                            </ul>
                            <ul className='middle-cards-container'>
                                {EmployeesAndTalentData.map(eachItem => (
                                    <MiddleCards cardDetails={eachItem} key={eachItem.cardId} />
                                ))}
                            </ul>
                            <Announcements announcements={announcements} schedules="False" />
                        </div>
                        <div className='second-container'>
                            <RecentActivity />
                            <Announcements announcements={schedules} schedules="True" />
                        </div>
                    </div>
                </div>
    )
}

export default Dashboard