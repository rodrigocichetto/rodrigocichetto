import { Profile, ToggleTheme, Hexagon, Menu } from 'components';

export default function Home() {
  return (
    <>
      <Menu />

      <Hexagon icon="github" />

      <ToggleTheme absolute />

      <Profile
        description="Desenvolvedor front-end na Exactaworks. Amante do mundo do design e apaixonado pelas melhores tecnologias de desenvolvimento."
        name="Rodrigo Cichetto"
        nameTag="h1"
        tag="main"
        picture="/img/profile-pic.png"
        role="Dev. Front-End"
        socialLinks={[
          {
            icon: 'github',
            url: '#'
          },
          {
            icon: 'linkedin',
            url: '#'
          },
          {
            icon: 'twitter',
            url: '#'
          },
          {
            icon: 'medium',
            url: '#'
          },
          {
            icon: 'instagram',
            url: '#'
          }
        ]}
      />
    </>
  );
}
