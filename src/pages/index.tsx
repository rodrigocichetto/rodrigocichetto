import { ProfilePicture, ToggleTheme } from 'components';

export default function Home() {
  return (
    <>
      <ToggleTheme absolute />
      <ProfilePicture src="/img/profile-pic.png" />
    </>
  );
}
