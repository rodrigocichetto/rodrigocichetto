import { ProfilePicture, ToggleTheme, Hexagon } from 'components';

export default function Home() {
  return (
    <>
      <Hexagon icon="github" />
      <ToggleTheme absolute />
      <ProfilePicture src="/img/profile-pic.png" />
    </>
  );
}
