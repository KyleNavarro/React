import "./App.css";
import { TwFollorCard } from "./twFollowCard.jsx";

export function App() {
  return (
    <section className="App">
      <TwFollorCard isFollowing userName="KyleNavj" name="Kyle Navarro" />
      <TwFollorCard isFollowing userName="midudev" name="Migel angel duran" />
      <TwFollorCard isFollowing userName="pheralb" name="Pablo Hernandez" />
    </section>
  );
}
