import HeroOne from "./Components/HeroOne";
import HeroThree from "./Components/HeroThree";
import HeroTwo from "./Components/HeroTwo";


export default function Home() {
  return (
    <>
   <div className="bg-white">
   <div>
    <HeroOne
    heading="Create, collaborate, and scale your blogs and docs."
    para1="Effortlessly build blogs, API docs, and product guides with Hashnode, plus get the flexibility of a headless CMS and more."
    btn1text="SignUp for free"
    btn2text="Top Blogs"/>
    </div>
    <div>
      <HeroTwo/>
    </div>
    <div>
    <HeroThree/>
    </div>
   </div>
    </>
  );
}
