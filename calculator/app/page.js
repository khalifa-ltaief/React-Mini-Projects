import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";
import Calculator from "./components/calculator/Calculator";
export default function Home() {
  return (
    <main >
     <Calculator/>
    </main>
  );
}
