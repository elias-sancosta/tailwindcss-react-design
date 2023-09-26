import Tabs from './Tabs';
import { tabData, panelData } from '../assets/data';

const Features = () => {
  return (
    <>
      {/*  Features Heading  */}
      <section id="features">
        <div className="container mx-auto mt-32 px-6">
          <h2 className="mb-6 text-4xl font-semibold text-center">Features</h2>
          <p className="max-w-md mx-auto text-center text-grayishBlue">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </section>
      <section id="tabs">
        <Tabs tabData={tabData} panelData={panelData} />
      </section>
    </>
  );
};
export default Features;
