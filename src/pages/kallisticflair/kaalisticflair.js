import { useState, useEffect } from "react";
import { Download } from "lucide-react";

const EventPage = () => {
  const [problemStatements, setProblemStatements] = useState([]);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStatements, setFilteredStatements] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState(null);

  useEffect(() => {
    fetch("/problemStatements.json")
      .then((response) => response.json())
      .then((data) => {
        setProblemStatements(data);
        setFilteredStatements(data);
      })
      .catch((error) => console.error("Error fetching problem statements:", error));
  }, []);

  useEffect(() => {
    const filteredData = problemStatements.filter((problem) =>
      problem.statement.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStatements(filteredData);
  }, [searchTerm, problemStatements]);

  const openModal = (problem) => {
    setSelectedProblem(problem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProblem(null);
    setIsModalOpen(false);
  };

  const sortData = (key) => {
    let direction = "ascending";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });

    const sortedData = [...filteredStatements].sort((a, b) => {
      if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
      if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
      return 0;
    });
    setFilteredStatements(sortedData);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredStatements.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-8">
      <header className="back h-[300px] flex flex-col justify-center items-center text-white w-full p-6 text-center">
        <h1 className="text-4xl md:text-8xl drop-shadow-lg font-serif font-bold">Problem Statement</h1>
        <h3 className="text-2xl drop-shadow-lg font-serif font-bold">Kallistic Flair</h3>
      </header>

      <div className="max-w-7xl w-full px-4 md:px-8 py-6 text-black bg-white shadow-md mt-8 rounded-xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 w-full">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-lg p-2 w-full mb-4 md:mb-0"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex flex-col md:flex-row items-center">
            <label htmlFor="itemsPerPage" className="mr-2">Items per page:</label>
            <select
              id="itemsPerPage"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="border border-gray-300 rounded-lg p-2"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
            </select>
          </div>
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2 flex items-center">
            <Download className="mr-2" />
            <a href="/Kallistic_Flair.pdf" download="Kallistic_Flair.pdf" className="text-white">
              Download Statements
            </a>
          </button>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left text-black">
                <th className="p-4 border cursor-pointer" onClick={() => sortData("id")}>Sr. No.</th>
                <th className="p-4 border cursor-pointer">Problem Statement</th>
                <th className="p-4 border cursor-pointer">Categories</th>
                <th className="p-4 border cursor-pointer" onClick={() => sortData("psNumber")}>Ps Number</th>
                <th className="p-4 border cursor-pointer">Theme</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {currentItems.map((problem) => (
                <tr key={problem.id} className="border hover:bg-gray-100">
                  <td className="p-4 border">{problem.id}</td>
                  <td
                    className="p-4 border text-blue-500 cursor-pointer hover:underline"
                    onClick={() => openModal(problem)}
                  >
                    {problem.statement}
                  </td>
                  <td className="p-4 border">{problem.category}</td>
                  <td className="p-4 border">{problem.psNumber}</td>
                  <td className="p-4 border">{problem.theme}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col items-center mt-4">
          {Array.from({ length: Math.ceil(filteredStatements.length / itemsPerPage) }, (_, index) => (
            <button
              key={index}
              className={`mx-1 px-3 py-1 rounded-lg ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {isModalOpen && selectedProblem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full md:w-1/2 text-black">
            <h2 className="text-2xl font-bold text-black">{selectedProblem.statement}</h2>
            <h2 className="text-xl font-bold text-gray-400">{selectedProblem.theme}</h2>
            <h2 className="text-lg font-bold mb-4 text-gray-500">{selectedProblem.psNumber}</h2>
            <h3 className="font-bold">Details:</h3>
            <p>{selectedProblem.details}</p>
            <div className="flex justify-end mt-4 gap-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={closeModal}>Close</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={() => window.open("https://forms.gle/FfaKUU6gVD5pH7jz5", "_blank")}
              >
                Upload Your Idea
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventPage;
