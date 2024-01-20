import Buttons from "./components/Buttons/Buttons";
import { Material } from "./components/Product/Product";
// import styles from "../src/components/Product/product.module.css";
import { Navbar } from "./components/Navigation/Navbar";
import styles from "@/app/components/Product/product.module.css";
import StateReducer from "./context/StateReducers";
import { initialStates } from "./context/StateReducers";
import { StateProvider } from "./context/StateContext";
const imageArray = [
  "/images/img5.jpg",
  "/images/property1.jpg",
  "/images/img5.jpg",
  "/images/img5.jpg",
  "/images/img3.jpg",
  "/images/bg-image.jpg",
];

type State = {
  id: number;
  text: string;
  status: boolean;
};
type Action = {
  type: string;
  payload: any;
};

type Reducer = (stats: State[], action: Action) => State[];
function App() {
  return (
    <StateProvider
      reducer={StateReducer as unknown as Reducer}
      initialState={initialStates}
    >
      <>
        <Navbar />
        <div className="w-[90%] mx-auto px-5 flex justify-start items-start flex-row gap-4 py-[2rem]">
          <div className="w-[80%] border-[1px] rounded-2xl p-[1rem]">
            <h1 className="text-2xl font-bold text-sky-950 font-sans py-4">
              Popular Products
            </h1>
            <div className={styles.grid_display}>
              {imageArray.map((image, index) => (
                <div key={index}>
                  <Material image={image} />
                </div>
              ))}
            </div>
          </div>
          <div className="w-[20%] border-[1px] rounded-2xl flex flex-col gap-2 p-[1rem]">
            <div className="flex flex-row justify-start items-center gap-2 p-2  border-[2px]  rounded-lg">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-md text-sky-950 ">Tilecing Material</span>
            </div>
            <div className="flex flex-row justify-start items-center gap-2 p-2  border-[2px]  rounded-lg">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-md text-sky-950 ">Construct Material</span>
            </div>
            <div className="flex flex-row justify-start items-center gap-2 p-2  border-[2px]  rounded-lg">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-md text-sky-950 ">Building Material</span>
            </div>
          </div>
        </div>

        <div className="w-[90%] mx-auto px-5 flex flex-col gap-4 py-[2rem]">
          <h1 className="text-3xl font-bold text-sky-950 font-sans py-4">
            Recommended Products
          </h1>
          <div className="w-[80%] border-[1px] rounded-2xl p-[1rem]">
            <div className={styles.grid_display}>
              {imageArray.map((img, index) => (
                <Material key={index} image={img} />
              ))}
            </div>
          </div>
        </div>
      </>
    </StateProvider>
  );
}

export default App;
