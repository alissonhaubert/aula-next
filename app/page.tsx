import { Header } from "./components/Header";
import { TitleCourses } from "./components/TitleCourses";
import { Courses } from "./components/Courses";
import { Footer } from "./Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <TitleCourses />
      <Courses />
      <Footer />
    </div>
  );
}
