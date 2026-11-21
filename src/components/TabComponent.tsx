import { useState } from "react";

interface Tab {
  id: string;
  label: string;
  content: string;
}

interface TabList {
  tabs: Tab[];
}


const TabComponent = ({ tabs }: TabList) => {
  const [activetab, setActiveTab] = useState(tabs[0]?.id ?? '');
  if(tabs.length===0) return

  const content = tabs.find((tab) => tab.id === activetab);
  return (
    <>
      <div className="tab-header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={activetab === tab.id ? "tab-head active" : "tab-head"}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.id}
          </button>
        ))}
      </div>{ content &&
        <div className="tab-body">
          <div>{content.label}</div>
          <div>{content.content}</div>
        </div>
}
    </>
  );
};

export default TabComponent;
