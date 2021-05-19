import { ProfilePicture, ToggleTheme, Hexagon, Menu } from 'components';

export default function Home() {
  return (
    <>
      <Menu />
      <Hexagon icon="github" />
      <ToggleTheme absolute />
      <ProfilePicture src="/img/profile-pic.png" />
    </>
  );
}
