import { useState } from "react";

const Tabs = ({ content }) => {
    const [activeTab, setActiveTab] = useState(content[0].id);


    return (
        <div className="text-center  w-full">
            {/* Barra de Tabs */}
            <div className="flex justify-center space-x-4 m-28">
                {content.map((tab) => (
                    <button
                        key={tab.id}
                        className={`px-4 py-2 ${
                            activeTab === tab.id ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Contenido de la pestaña activa */}
            <div className="">
                {content.map((tab) => (
                    activeTab === tab.id && (
                        <div key={tab.id}>
                            {tab.content}
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};
export default Tabs;
