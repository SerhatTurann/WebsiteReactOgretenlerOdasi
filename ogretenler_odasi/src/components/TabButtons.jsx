// components/TabButtons.jsx
const TabButtons = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className="tab-buttons">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={activeTab === tab.key ? "active" : ""}
          onClick={() => setActiveTab(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabButtons;
