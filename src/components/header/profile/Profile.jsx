import {
  ProfileContainer,
  ProfileAvatar,
  ProfileTextWrapp,
  ProfileName,
  ProfilePosition,
} from "./Profile.styled";
import userAvatar from "../../../images/userAvatar.jpg";
export const Profile = ({ user }) => {
  return (
    <ProfileContainer>
      <ProfileAvatar>
        <img src={userAvatar} alt="avatar" />
      </ProfileAvatar>
      <ProfileTextWrapp>
        <ProfileName>{user.name} </ProfileName>
        <ProfilePosition>{user.position}</ProfilePosition>
      </ProfileTextWrapp>
    </ProfileContainer>
  );
};
