import { FaChevronDown } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import {AnnouncementsContainer,Header,AnnouncementsList,AnnouncementItem,TextContent,Title,Time,SeeAll,PinButton,Icon} from './styledComponents'


const Announcements = (props) => {
    const {announcements,schedules} = props
  return (
    <AnnouncementsContainer>
      <Header>
        {schedules === "True" ? <h2>Upcoming schedule</h2> : <h2>Announcement</h2>}
        <div>
        <span>Today, 13 Sep 2021</span>
        <FaChevronDown/>
        </div>
      </Header>
      <AnnouncementsList>
        {announcements.map((announcement, index) => (
          <AnnouncementItem key={index}>
            <TextContent>
              <Title>{announcement.title}</Title>
              <Time>{announcement.time}</Time>
            </TextContent>
            <Icon>
            {schedules === "True" ? null : <PinButton>📌</PinButton>}
              <BsThreeDots/>
            </Icon>
          </AnnouncementItem>
        ))}
      </AnnouncementsList>
      <SeeAll>
      {schedules === "True" ? <a href="/all-schedules">Create a New Schedule</a> : <a href="/all-announcements">See All Announcements</a>}
      </SeeAll>
    </AnnouncementsContainer>
  );
};

export default Announcements;
