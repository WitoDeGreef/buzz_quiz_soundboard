import Soundboard from "../components/soundboard";
import { presenter } from "./../components/sounds";

export default function Home() {
  return (
    <Soundboard sounds={presenter} />
  );
}
