import { useState, useEffect } from "react";
import { Download } from "lucide-react";

const KallisticFlair = () => {
  const [problemStatements, setProblemStatements] = useState([
    {
      "id": 1,
      "statement": "How can nurses enhance the delivery of compassionate care to patients?",
      "category": "School of Nursing Sciences",
      "psNumber": "PS-2501",
      "theme": "Compassionate Care in Nursing",
      "details": "Create a poster that emphasizes the importance of compassion in nursing practice. The poster should highlight strategies for nurses to build empathetic relationships with patients, improve patient satisfaction, and promote holistic care approaches that address both physical and emotional needs."
    },
    {
      "id": 2,
      "statement": "What are effective strategies to prevent burnout among nursing professionals?",
      "category": "School of Nursing Sciences",
      "psNumber": "PS-2502",
      "theme": "Preventing Nurse Burnout",
      "details": "Design a poster that addresses the issue of nurse burnout, a growing concern in the healthcare field. The poster should provide information on the signs and symptoms of burnout, its impact on patient care, and practical strategies for self- care, stress management, and organizational support to promote nurse well-being"
    },
    {
        "id": 3,
        "statement": "How can nurses improve cultural competence to provide better care to diverse populations?",
        "category": "School of Nursing Sciences",
        "psNumber": "PS-2503",
        "theme": "Cultural Competence in Nursing",
        "details": "Develop a poster that highlights the significance of cultural competence in nursing. The poster should outline the importance of understanding and respecting diverse cultural backgrounds, effective communication strategies, and the role of cultural competence in reducing health disparities and improving patient outcomes."
    },
    {
        "id": 4,
        "statement": "What are effective strategies to prevent burnout among nursing professionals?",
        "category": "School of Medical Sciences",
        "psNumber": "PS-2504",
        "theme": "Preventing Nurse Burnout",
        "details": "Design a poster that addresses the issue of nurse burnout, a growing concern in the healthcare field. The poster should provide information on the signs and symptoms of burnout, its impact on patient care, and practical strategies for self- care, stress management, and organizational support to promote nurse well-being"
    },
    {
        "id": 5,
        "statement": "How can we promote mental health awareness and education in schools?",
        "category": "School of Medical Sciences",
        "psNumber": "PS-2505",
        "theme": "Breaking the Silence: Mental Health Matters",
        "details": "Create a poster that emphasizes the importance of mental health education in schools. The poster should aim to reduce stigma surrounding mental health issues and promote available resources for students, encouraging open conversations and support systems."
      },
      {
        "id": 6,
        "statement": "What strategies can be implemented to combat childhood obesity?",
        "category": "School of Medical Sciences",
        "psNumber": "PS-2506",
        "theme": "Healthy Kids, Healthy Future",
        "details": "Design a poster that addresses the rising rates of obesity among children. The focus should be on promoting healthy eating habits, physical activity, and the role of schools in providing nutritious meals. The goal is to inspire families and communities to prioritize children's health."
      },
      {
        "id": 7,
        "statement": "What are the barriers to healthcare access in underserved communities, and how can they be addressed?",
        "category": "School of Medical Sciences",
        "psNumber": "PS-2507",
        "theme": "Healthcare for All: Bridging the Gap",
        "details": "Develop a poster that illustrates the barriers to healthcare access in underserved communities. The poster should raise awareness about the challenges faced by these populations and advocate for equitable healthcare services, highlighting the importance of community support and policy changes."
      },
      {
        "id": 8,
        "statement": "How can we improve oral health education for children and their families?",
        "category": "School of Dental Sciences",
        "psNumber": "PS-2508",
        "theme": "Oral Health Starts Early",
        "details": "Create a poster that emphasizes the importance of early dental care and education for children. The poster should highlight effective strategies for teaching children about proper oral hygiene practices, the significance of regular dental check-ups, and the role of parents in fostering good dental habits from a young age."
      },
      {
        "id": 9,
        "statement": "What is the relationship between sugar consumption and dental caries?",
        "category": "School of Dental Sciences",
        "psNumber": "PS-2509",
        "theme": "The Impact of Sugar on Dental Health",
        "details": "Design a poster that illustrates the effects of sugar on dental health, particularly its role in the development of cavities. The poster should provide information on how sugar contributes to tooth decay, tips for reducing sugar intake, and healthier alternatives to sugary snacks and beverages."
      },
      {
        "id": 10,
        "statement": "What are the barriers to accessing dental care in underserved communities?",
        "category": "School of Dental Sciences",
        "psNumber": "PS-2510",
        "theme": "Access to Dental Care: A Community Challenge",
        "details": "Develop a poster that highlights the challenges faced by underserved populations in accessing dental care. The poster should raise awareness about issues such as financial constraints, lack of transportation, and limited availability of dental services. It should also propose potential solutions to improve access to dental care for these communities."
      },
      {
        "id": 11,
        "statement": "How can biotechnology be leveraged to develop eco-friendly biofertilizers, pest-resistant crops, and genetically modified organisms (GMOs) to meet the growing demand for food security in the face of climate change and dwindling natural resources?",
        "category": "School of Biotechnology",
        "psNumber": "PS-2511",
        "theme": "Sustainable Agriculture and Food Security",
        "details": "Design a poster that highlights how biotechnology can revolutionize agriculture by addressing challenges such as food scarcity, environmental degradation, and climate change. The poster should showcase innovations like genetically modified crops, biofertilizers, and pest-resistant plants that ensure sustainable food production while preserving natural ecosystems. Use visuals to emphasize the role of biotechnology in building a food-secure future."
      },
      {
        "id": 12,
        "statement": "What novel approaches in genetic engineering and biopharmaceuticals can be used to design affordable andpersonalized treatment options for chronic diseases like cancer,diabetes,and genetic disorders?",
        "category": "School of Biotechnology",
        "psNumber": "PS-2512",
        "theme": "Medical Biotechnology and Healthcare Innovations",
        "details": "Create a poster that illustrates the transformative potential of medical biotechnology in healthcare. The poster should focus on advancements in gene editing, personalized medicine, and biopharmaceuticals. Highlight examples such as CRISPR technology, targeted cancer therapies, and affordable vaccines, showcasing how these innovations improve treatment outcomes and make healthcare more accessible worldwide."
      },
      {
        "id": 13,
        "statement": "What sustainable biotechnological solutions can be implemented to tackle the global waste crisis by developing microbial strains or enzymes capable of breaking downplastics andindustrial waste efficiently?",
        "category": "School of Biotechnology",
        "psNumber": "PS-2513",
        "theme": "Environmental Biotechnology for Waste Management",
        "details": "Develop a poster that highlights the role of biotechnology in addressing global waste management issues. Showcase solutions like microbial degradation of plastics, enzymatic treatment of industrial waste, and bioremediation of polluted environments. Use visuals to demonstrate how biotechnology can contribute to a cleaner, greener planet and promote sustainable wastedisposal methods."
      },
      {
        "id": 14,
        "statement": "How can synthetic biology be used to design artificial biological systems, such as biofactories for the production of clean biofuels, industrial enzymes,and biodegradable materials, to reduce environmental impact?",
        "category": "School of Biotechnology",
        "psNumber": "PS-2514",
        "theme": "Synthetic Biology and Bioengineering",
        "details": "Design a poster that highlights the applications of synthetic biology in creating sustainable solutions. The poster should emphasize biofactories for producing biofuels, industrial enzymes, and biodegradable materials. Include examples of engineered biological systems that reduce environmental impact, making the case for synthetic biology as a game-changer in industrial andenvironmental biotechnology"
      },
      {
        "id": 15,
        "statement": "How can biotechnology accelerate advancements in stem cell research to develop effective therapies for tissue regeneration and treatment of neurodegenerative diseases such as Alzheimer’s and Parkinson’s?",
        "category": "School of Biotechnology",
        "psNumber": "PS-2515",
        "theme": "Stem Cell Research and Regenerative Medicine",
        "details": "Create a poster that focuses on the advancements in stem cell research and its applications in regenerative medicine. Highlight how stem cells are being used to repair damaged tissues, regenerate organs, and develop treatments for neurodegenerative diseases like Alzheimer’s and Parkinson’s. Use diagrams to showcase processes like 3D bioprinting and organoid development for future medical breakthroughs."
      },
      {
        "id": 16,
        "statement": "What biotechnological strategies, such as vaccine development and genomic surveillance, can be used to detect, prevent, and control emerging infectious diseases to avoid future pandemics?",
        "category": "School of Biotechnology",
        "psNumber": "PS-2516",
        "theme": "Biotechnology in Infectious Disease Control",
        "details": "Develop a poster that highlights the crucial role of biotechnology in combating infectious diseases. The poster should showcase innovations like rapid diagnostic tools, vaccine development, and genomic surveillance of pathogens. Emphasize biotechnology’s role in pandemic preparedness, antimicrobial resistance research, and ensuring global health security. Use data or graphics to illustrate its impact on public health."
      },
      {
        "id": 18,
        "statement": "Legal Remedies for Citizens",
        "category": "School of Law",
        "psNumber": "PS-2518",
        "theme": "Modern Edge – Sleek, stylish, and contemporary",
        "details": "Important laws like RTI (Right to Information), PIL (Public Interest Litigation), and consumer rights."
      },
      {
        "id": 19,
        "statement": "Cyber Laws in India",
        "category": "School of Law",
        "psNumber": "PS-2519",
        "theme": "Modern Edge – Sleek, stylish, and contemporary",
        "details": "Importance of the IT Act, digital fraud prevention, and online safety."
      },
      {
        "id": 20,
        "statement": "Corporate and Business Laws",
        "category": "School of Law",
        "psNumber": "PS-2520",
        "theme": "Modern Edge – Sleek, stylish, and contemporary",
        "details": "Overview of key laws like the Companies Act, Contract Law, and GST regulations."
      },
      {
        "id": 21,
        "statement": "Street Style Trends Across Continents",
        "category": "School of Fashion",
        "psNumber": "PS-2521",
        "theme": "Dynamic Motion – A design that conveys movement and excitement",
        "details": "Comparing urban fashion trends from Asia, Europe, America, and Africa."
      },
      {
        "id": 22,
        "statement": "Fusion and Modern Indian Fashion",
        "category": "School of Fashion",
        "psNumber": "PS-2522",
        "theme": "Dynamic Motion – A design that conveys movement and excitement",
        "details": "How traditional Indian styles are blended with modern trends."
      },
      {
        "id": 23,
        "statement": "Sustainable and Ethical Fashion",
        "category": "School of Fashion",
        "psNumber": "PS-2523",
        "theme": "Dynamic Motion – A design that conveys movement and excitement",
        "details": "Highlighting eco-friendly fabrics, slow fashion, and up-cycling."
      },
      {
        "id": 24,
        "statement": "Traditional vs. Digital Media",
        "category": "School of Mass Media and Communication",
        "psNumber": "PS-2524",
        "theme": "Classic Elegance – Timeless and sophisticated",
        "details": "Compare newspapers, radio, and TV with modern online news, podcasts, and streaming services."
      },
      {
        "id": 25,
        "statement": "Indian Cinema and Mass Communication",
        "category": "School of Mass Media and Communication",
        "psNumber": "PS-2525",
        "theme": "Classic Elegance – Timeless and sophisticated",
        "details": "Exploring Bollywood and regional cinema as tools of mass media."
      },
      {
        "id": 26,
        "statement": "Role of Social Media in Global Communication",
        "category": "School of Mass Media and Communication",
        "psNumber": "PS-2526",
        "theme": "Classic Elegance – Timeless and sophisticated",
        "details": "Highlight how platforms like Twitter, Facebook, and Instagram shape worldwide interactions."
      },
      {
        "id": 27,
        "statement": "AI in Everyday Life",
        "category": "School of Computer Applications",
        "psNumber": "PS-2527",
        "theme": "Innovation in AI",
        "details": "How AI is transforming industries like healthcare, education, and entertainment."
      },
      {
        "id": 28,
        "statement": "Cybersecurity for Smart Devices",
        "category": "School of Computer Applications",
        "psNumber": "PS-2528",
        "theme": "Security & Privacy",
        "details": "Securing IoT devices to protect personal data and privacy."
      },
      {
        "id": 29,
        "statement": "Cloud Computing in Business",
        "category": "School of Computer Applications",
        "psNumber": "PS-2529",
        "theme": "Digital Transformation",
        "details": "Benefits and risks of cloud technology for enterprises."
      },
      {
        "id": 30,
        "statement": "Quantum Computing's Potential",
        "category": "School of Computer Engineering",
        "psNumber": "PS-2530",
        "theme": "Future of Computing",
        "details": "The future of computing with quantum technology and its applications."
      },
      {
        "id": 31,
        "statement": "Impact of 5G on Networking",
        "category": "School of Computer Engineering",
        "psNumber": "PS-2531",
        "theme": "Next-Gen Connectivity",
        "details": "How 5G revolutionizes communication and connectivity."
      },
      {
        "id": 32,
        "statement": "Sustainable Computing",
        "category": "School of Computer Engineering",
        "psNumber": "PS-2532",
        "theme": "Green Technology",
        "details": "The role of energy-efficient technology in reducing computing's environmental impact."
      },
      {
        "id": 33,
        "statement": "Sustainable Smart Grids",
        "category": "Electrical Engineering",
        "psNumber": "PS-2533",
        "theme": "Renewable Energy",
        "details": "Innovations in renewable energy integration and grid stability."
      },
      {
        "id": 34,
        "statement": "Wireless Power Transfer",
        "category": "Electrical Engineering",
        "psNumber": "PS-2534",
        "theme": "Advanced Power Systems",
        "details": "Advancements and applications in inductive and resonant coupling."
      },
      {
        "id": 35,
        "statement": "High Voltage DC (HVDC) Systems",
        "category": "Electrical Engineering",
        "psNumber": "PS-2535",
        "theme": "Efficient Power Transmission",
        "details": "The future of long-distance power transmission."
      },
      {
        "id": 36,
        "statement": "AI in Embedded Systems",
        "category": "Electronics Engineering",
        "psNumber": "PS-2536",
        "theme": "Real-Time AI",
        "details": "Applications and challenges in real-time processing."
      },
      {
        "id": 37,
        "statement": "Quantum Computing in Electronics",
        "category": "Electronics Engineering",
        "psNumber": "PS-2537",
        "theme": "Next-Gen Electronics",
        "details": "The next frontier in computational power."
      },
      {
        "id": 38,
        "statement": "IoT for Smart Cities",
        "category": "Electronics Engineering",
        "psNumber": "PS-2538",
        "theme": "Connected Infrastructure",
        "details": "Enhancing urban infrastructure with connected devices."
      },
      {
        "id": 39,
        "statement": "6G and Beyond",
        "category": "Electronics Engineering",
        "psNumber": "PS-2539",
        "theme": "Future of Wireless",
        "details": "The future of ultra-fast, low-latency wireless communication."
      },
      {
        "id": 40,
        "statement": "Food Delivery",
        "category": "School of Computer Engineering",
        "psNumber": "PS-2540",
        "theme": "Women Empowement",
        "details": "In today's fast-paced world, individuals struggle to find time for meal preparation, leading to a rising demand for healthy, affordable home-cooked meals. Meanwhile, housewives and unemployed individuals lack opportunities to monetize their cooking skills. Existing food delivery services primarily focus on restaurant-prepared meals, often neglecting sustainability and affordability. The challenge is to develop a scalable platform that connects home chefs with customers seeking nutritious, home-cooked meals while ensuring efficient delivery, quality control, and financial viability. This solution must also incorporate sustainable packaging, optimized logistics, and a feedback mechanism to maintain customer satisfaction and support local communities."
      }
  ]);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStatements, setFilteredStatements] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState(null);

  useEffect(() => {
    setFilteredStatements(problemStatements);
  }, [problemStatements]);

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

        <div className="flex justify-center items-center mt-4">
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

export default KallisticFlair;
