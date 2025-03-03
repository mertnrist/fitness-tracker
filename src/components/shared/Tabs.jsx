const Tabs = ({ tabs_links, setActiveTab, renderContent, activeTab }) => {
    return (
        <div className="mb-8 flex flex-col gap-5 ">
            <div className="flex whitespace-nowrap min-w-full md:min-w-0 overflow-x-auto">
                {tabs_links.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                        py-4 px-4 md:px-4 relative flex-1 md:flex-none
                        text-sm md:text-base
                        ${activeTab === tab.id
                                ? 'text-amber-500'
                                : 'text-zinc-400 hover:text-zinc-200'
                            }
                    `}
                    >
                        <div className="flex items-center justify-center gap-2">
                            {tab.icon}
                            <span>{tab.label}</span>
                        </div>
                        {activeTab === tab.id && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"></div>
                        )}
                    </button>
                ))}
            </div>
            <div className="space-y-8 pb-10">
                {renderContent()}
            </div>
        </div>
    )
}

export default Tabs
