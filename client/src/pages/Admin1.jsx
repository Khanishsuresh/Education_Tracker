import React, { useState } from "react";
import "../styles/Admin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Admin1() {
  const [text, setText] = useState("");
  const [Query, setQuery] = useState("");
  const [lst, setlst] = useState([]);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setText(event.target.value);
    const textarea = event.target;
    textarea.style.height = "40px";
    if (textarea.scrollHeight > 60) {
      textarea.style.height = "60px";
      textarea.style.overflowY = "auto";
    } else {
      textarea.style.height = `${Math.min(textarea.scrollHeight, 60)}px`;
      textarea.style.overflowY = "hidden";
    }
  };
  const fetch = async () => {
    const response = await axios.get(`http://localhost:8000/llm?query=${text}`);
    let data = response.data.query;
    console.log(data);
    await setQuery(data);
    console.log(data);
  };

  const handleSend = async () => {
    console.log("Message sent:", text);
    // await fetch();
    setText("");
    const res = await axios.get(`http://localhost:8000/llm?query=${text}`);
    let data = res.data.query;
    console.log(data);
    const response = await axios.get(
      `http://localhost:8001/custom?query=${data}`
    );
    setQuery("");
    console.log(response.data);
    setlst(response.data);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSend();
    }
  };

  const handleclick = () => {
    window.print();
  };

  const handlelogout = () => {
    navigate("/sign");
  };

  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="admin-wrapper">
      <div className="admin-container">
        <div className={`admin-search-history ${isExpanded ? "expanded" : ""}`}>
          <h2 id="history_title">History</h2>
          <div className="history-container">
            <span id="history">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
              alias.
            </span>
          </div>
        </div>
        <div className={`admin-search-content ${isExpanded ? "expanded" : ""}`}>
          <div className="admin-search-top">
            <div className="search-top-content">
              <span className="top-left-content">
                <button className="search-toggle-btn" onClick={handleToggle}>
                  <i class="fa-solid fa-clock-rotate-left"></i>
                </button>
              </span>
              <span className="top-right-content">
                {/* <button className="print-btn"><i className="fa-solid fa-print"></i></button>
                                <button className="logout-btn"><i className="fa-solid fa-arrow-right-from-bracket"></i></button> */}
                <button className="print-btn" onClick={handleclick}>
                  <i className="fa-solid fa-print"></i>
                </button>
                <button className="logout-btn" onClick={handlelogout}>
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </button>
              </span>
            </div>
          </div>
          <div className="table-heading">
            <h2>Lorem, ipsum dolor.</h2>
          </div>
          <div className="admin-search-mid">
            <div className="search-result-table">
              <table>
                <thead>
                  <tr>
                    <th>S.NO</th>
                    <th>Reg.No</th>
                    <th>Name</th>
                    <th>Branch</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  {lst.map((item, index) => {
                    return (
                      <tr key={index} className="std-details-data-container">
                        <td>{index + 1}</td>
                        <td>{item.rollno}</td>
                        <td className="name">{item.name}</td>
                        <td>{item.branch}</td>
                        <td>{item.year}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="admin-search-bottom">
            <div className="search-btm-container">
              <input
                type="text"
                name="aisearch"
                id="aisearch"
                value={text}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Type your Query here..."
              />
              <button
                className="send-button"
                onClick={handleSend}
                style={{ marginRight: "5px" }}
              >
                <i class="bx bx-send"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin1;


// import React, { useState } from "react";
// import "../styles/Admin.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Admin1() {
//   const [text, setText] = useState("");
//   const [lst, setLst] = useState([]);
//   const navigate = useNavigate();

//   const handleChange = (event) => {
//     setText(event.target.value);
//     const textarea = event.target;
//     textarea.style.height = "40px";
//     if (textarea.scrollHeight > 60) {
//       textarea.style.height = "60px";
//       textarea.style.overflowY = "auto";
//     } else {
//       textarea.style.height = `${Math.min(textarea.scrollHeight, 60)}px`;
//       textarea.style.overflowY = "hidden";
//     }
//   };

//   const handleSend = async () => {
//     try {
//       console.log("Message sent:", text);
//       const res = await axios.get(`http://localhost:8000/llm?query=${text}`);
//       let data = res.data.query;
//       console.log(data);
  
//       const response = await axios.get(`http://localhost:8001/custom?query=${data}`);
//       setText("");
//       setLst(response.data);
//     } catch (error) {
//       console.error("Error sending message:", error); // Log any errors here
//     }
//   };  

//   const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//       event.preventDefault();
//       handleSend();
//     }
//   };

//   const handleClick = () => {
//     window.print();
//   };

//   const handleLogout = () => {
//     navigate("/sign");
//   };

//   const [isExpanded, setIsExpanded] = useState(true);

//   const handleToggle = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className="admin-wrapper">
//       <div className="admin-container">
//         <div className={`admin-search-history ${isExpanded ? "expanded" : ""}`}>
//           <h2 id="history_title">History</h2>
//           <div className="history-container">
//             <span id="history">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
//               alias.
//             </span>
//           </div>
//         </div>
//         <div className={`admin-search-content ${isExpanded ? "expanded" : ""}`}>
//           <div className="admin-search-top">
//             <div className="search-top-content">
//               <span className="top-left-content">
//                 <button className="search-toggle-btn" onClick={handleToggle}>
//                   <i className="fa-solid fa-clock-rotate-left"></i>
//                 </button>
//               </span>
//               <span className="top-right-content">
//                 <button className="print-btn" onClick={handleClick}>
//                   <i className="fa-solid fa-print"></i>
//                 </button>
//                 <button className="logout-btn" onClick={handleLogout}>
//                   <i className="fa-solid fa-arrow-right-from-bracket"></i>
//                 </button>
//               </span>
//             </div>
//           </div>
//           <div className="table-heading">
//             <h2>Lorem, ipsum dolor.</h2>
//           </div>
//           <div className="admin-search-mid">
//             <div className="search-result-table">
//               <table>
//                 <thead>
//                   <tr>
//                     <th>S.NO</th>
//                     <th>Reg.No</th>
//                     <th>Name</th>
//                     <th>Branch</th>
//                     <th>Year</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {lst.map((item, index) => (
//                     <tr key={index} className="std-details-data-container">
//                       <td>{index + 1}</td>
//                       <td>{item.rollno}</td>
//                       <td className="name">{item.name}</td>
//                       <td>{item.branch}</td>
//                       <td>{item.year}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           <div className="admin-search-bottom">
//             <div className="search-btm-container">
//               <input
//                 type="text"
//                 name="aisearch"
//                 id="aisearch"
//                 value={text}
//                 onChange={handleChange}
//                 onKeyDown={handleKeyDown}
//                 placeholder="Type your Query here..."
//               />
//               <button
//                 className="send-button"
//                 onClick={handleSend}
//                 style={{ marginRight: "5px" }}
//               >
//                 <i className="bx bx-send"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Admin1;
