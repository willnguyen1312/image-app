import Image from "next/image";
import ViewSource from "../components/view-source";
import mountains from "../public/mountains.jpg";

const Responsive = () => (
  <div>
    <ViewSource pathname="pages/layout-responsive.js" />
    <h1>Image Component With Layout Responsive</h1>
    <Image
      alt="Mountains"
      // src={mountains}
      src="https://images.unsplash.com/photo-1632853199665-4afb5eaf2e46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3387&q=80"
      layout="responsive"
      width={700}
      height={475}
    />
  </div>
);

export default Responsive;
