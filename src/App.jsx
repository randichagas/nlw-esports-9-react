import "./styles.css";

import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { ListItem } from "./components/ListItem";

import twitch from "/twitch.svg"
import instagram from './assets/instagram.svg'

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "League of Legends"
  },
  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Valorant"
  },
  {
    url: "https://www.twitch.tv/directory/game/Fortnite",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/33214-188x250.jpg",
    alt: "Fortnite"
  },
  {
    url: "https://www.twitch.tv/directory/game/Call%20of%20Duty%3A%20Warzone",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg",
    alt: "Call of Duty: Warzone"
  },
  {
    url: "https://www.twitch.tv/directory/game/Project%20Zomboid",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/31339_IGDB-285x380.jpg",
    alt: "Project Zomboid"
  },
  {
    url:
      "https://www.twitch.tv/directory/game/Uncharted%204%3A%20A%20Thief's%20End%20-%20Remastered",
    imageUrl:
      "https://static-cdn.jtvnw.net/ttv-boxart/230322618_IGDB-285x380.jpg",
    alt: "Uncharted 4: A Thief's End"
  },
  {
    url: "https://www.twitch.tv/directory/game/World%20of%20Warcraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/18122-285x380.jpg",
    alt: "World of Warcraft"
  },
  {
    url: "https://www.twitch.tv/directory/game/Elden%20Ring",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/512953_IGDB-285x380.jpg",
    alt: "Elden Ring"
  },
  {
    url: "https://www.twitch.tv/directory/game/Alien%3A%20Isolation",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/458443_IGDB-285x380.jpg",
    alt: "Alien:solation"
  }
];

const channelListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Mayk Brito"
  },
  {
    url: "https://www.twitch.tv/mch_agg",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/dfb0cef3-87ca-4f09-9f52-7d7de319afbb-profile_image-150x150.png",
    alt: "Imagem de mch_AGG"
  },
  {
    url: "https://www.twitch.tv/alanzoka",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-150x150.png",
    alt: "Imagem de Alanzoka"
  }
];

const socialListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl: "/twitch.svg",
    alt: "Logo do Twitch"
  },
  {
    url: "https://www.twitter.com/dgpimenta82",
    imageUrl: "src/assets/twitter.svg",
    alt: "Logo do Twitter"
  },
  {
    url: "https://www.instagram.com/dgpimenta82",
    imageUrl: "src/assets/instagram.svg",
    alt: "Logo do Instagram"
  },
  {
    url: "https://www.youtube.com",
    imageUrl: "src/assets/youtube.svg",
    alt: "Logo do Youtube"
  }
  
]; 



export function App() {
  console.log(twitch)


  return (
    
    <div className="App">
      {/* HEADER component */}
      <Header />
      
      {/* MAIN component */}
      <main>
      <img src={twitch} alt="" />
      <img src={instagram} alt="" />
        <Section
          title="Meus Jogos"
          subtitle="Os games que eu mais curto jogar"
          className="games-list"
        >
          {/* itens da lista */}
          {gamesListData.map(function (item) {
            return (
              <ListItem
                key={item.url}
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
        <Section
          title="Canais e Streamers"
          subtitle="Lista de canais e transmissões que não perco!"
          className="channel-list"
        >
          {/* itens da lista */}
          {channelListData.map(function (item) {
            return (
              <ListItem
                key={item.url}
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
        <Section
          title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo!"
          className="social-list"
        >
          {/* itens da lista */}
          {socialListData.map(function (item) {
            return (
              <ListItem
                key={item.url}
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              ></ListItem>
            );
          })}
        
        </Section>
      </main>
      
      {/* SECTIONS component */}
    </div>
  );
}
