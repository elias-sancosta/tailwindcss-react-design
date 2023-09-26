import { useState } from 'react';
import Tab from './Tab';
import Panel from './Panel';

function Tabs({ tabData, panelData }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container relative mx-auto my-6 mb-44 mt-12 px-6">
      <div className="bg-tabs"></div>

      {/*  Tabs Flex Container  */}
      <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
        {tabData.map((tab, index) => (
          <Tab
            key={index}
            title={tab.title}
            active={index === activeTab}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>

      {/* Panels */}
      <div className="container mx-auto">
        {panelData.map((panel, index) => (
          <Panel
            key={index}
            title={panel.title}
            content={panel.content}
            imageURL={panel.imageURL}
            active={index === activeTab}
          />
        ))}
      </div>
    </div>
  );
}

export default Tabs;
