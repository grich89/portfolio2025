import styles from "../page.module.css";
import Bio from "@/components/Bio";

export const metadata = {
  title: 'Greg Rich | About',
  description: "The personal portfolio for Greg Rich, a software developer, based out of Brooklyn, NY. Greg specializes in front-end development, with a focus on React and Next.js. He has more than 10 years experience in the field and has won numerous awards for his work.",
}

export default function Page() {
  return (
    <>
      <main>
        <Bio />
      </main>
    </>
  );
}
