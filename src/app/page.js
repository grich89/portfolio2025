import styles from "./page.module.css";
import Intro from "@/components/Intro";
import Footer from "@/components/Footer";
import WorkSlider from "@/components/WorkSlider";

import Projects from "@/data/Projects";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <WorkSlider projects={Projects} />
      </main>
    </div>
  );
}
