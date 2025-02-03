import styles from "../page.module.css";
import workstyles from "./work.module.css";

import WorkGrid from "./WorkGrid";
import Project from "./Project";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Projects from "@/data/Projects";

export default function Page() {
  return (
    <>
      <Header />
      <div className={styles.work}>
        <div className={styles.container}>
          <h1>Work</h1>

          <WorkGrid projects={Projects} />
        </div>
      </div>
      <Footer />
    </>
  );
}
