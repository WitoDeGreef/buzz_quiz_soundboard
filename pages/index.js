import Soundboard from "../components/soundboard";
import { players } from "./../components/sounds";

export default function Home() {
  return (
    <Soundboard sounds={players} />
  );
}
