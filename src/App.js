import "./styles.css";
import TwitterCard from "./TwitterCard";

export default function App() {
  return (
    <div>
      <TwitterCard
        imageUrl="https://cdn3.iconfinder.com/data/icons/users-23/64/_Male_Profile_Round_Circle_Users-512.png"
        userName="Test Name"
        handle="@testname"
        buttonTitle="Follow"
        usernameTextColor="blue"
      />
    </div>
  );
}
