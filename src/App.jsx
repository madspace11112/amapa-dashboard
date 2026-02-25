import Header from "./components/Header";
import StatsCards from "./components/tabs/StatsCards";
import ChartSection from "./components/tabs/ChartSection";

export default function App() {
    return (
        <div className="p-5 relative bg-gray-200">

            {/* Main content container with added padding for Header section */}
            <div className="bg-gray-100 shadow p-1 mt-8">
                {/* Close (X) Button in the top left */}
                <button
                    className="relative top-4 left-4 text-4xl font-bold text-gray-600 hover:text-gray-900 transition"
                    onClick={() => alert('Close button clicked!')}
                >
                    &times; {/* HTML entity for "X" */}
                </button>

                <div className="p-12"> {/* Increased padding on the Header section */}
                    <Header />
                </div>
            </div>
        </div>
    );
}