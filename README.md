# **EDUCATION TRACKER**

## Project Overview
The Generative AI-Based Student Data Management System is designed to revolutionize how schools and institutions manage and retrieve student information efficiently. Leveraging cutting-edge technologies like Generative AI and dynamic web scraping, the system ensures seamless data handling and retrieval.

## Technologies Used
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Web Scraping:** Selenium (Python)
- **AI Integration:** Gemini AI

## Key Features

### Efficient Data Management:
- **Static Data:** Student details like name, year, and department are stored in MongoDB.
- **Dynamic Data:** Coding platform statistics (e.g., Codeforces, LeetCode) are fetched using Selenium for real-time updates.

### Natural Language Processing (NLP):
- **Simplified Queries:** Admins can retrieve student data using natural language queries, simplifying complex database queries.
- **AI-Driven Sorting:** Gemini AI facilitates sorting students based on metrics like coding proficiency (e.g., LeetCode submissions), enhancing data accessibility.

### User Roles and Access Control:
- **Admins:** 
  - Have full access to all student data.
  - Can view and manage records.
  - Perform advanced searches by register number or category.
  - Utilize natural language prompts for data retrieval.
- **Students:**
  - Can view and update their own information.
  - Contribute to data accuracy and personalization.

### Enhanced User Experience:
- **Intuitive UI:** Clean and intuitive UI designed with React.js and Tailwind CSS ensures a user-friendly experience.
- **Dynamic Updates:** Allows students to dynamically update their information, promoting data relevance and transparency.

### Advanced Technology Integration:
- **Beyond Traditional ERP:** Integrates Generative AI for query generation and NLP-driven data retrieval.
- **Dynamic Scraping:** Utilizes Selenium for dynamic data scraping, ensuring up-to-date and accurate information retrieval.

## Use Cases
- **Schools and Institutions:** Easily manage and retrieve student records without the complexity of traditional database queries.
- **Admins:** Efficiently sort and retrieve student data based on various criteria using natural language prompts.
- **Students:** Maintain and update their personal information, enhancing data accuracy and relevance.

## Detailed Workflow

### User Registration and Authentication:
- **Student Registration:** Students can register and create their profiles by providing basic details such as name, year, department, and coding platform handles.
- **Admin Registration:** Admins register and obtain elevated access to manage student data.

### Data Storage and Retrieval:
- **Static Data Storage:** Core student details are stored in MongoDB for easy retrieval and management.
- **Dynamic Data Scraping:** Selenium is used to scrape dynamic information from coding platforms such as Codeforces, LeetCode, and CodeChef.
- **Data Indexing:** Important metrics are indexed to facilitate efficient data retrieval.

### Query and Data Access:
- **Natural Language Queries:** Admins use natural language prompts to query the database.
- **AI-Driven Responses:** Gemini AI interprets the prompts, generates corresponding database queries, and retrieves the relevant data.
- **Role-Based Data Access:** Admins can access all data, while students can only view and update their own information.

## Technical Specifications

### Frontend:
- **React.js:** For building a dynamic and responsive user interface.
- **Tailwind CSS:** For styling and ensuring a clean, modern design.

### Backend:
- **Node.js and Express:** For creating a robust server-side application.
- **MongoDB:** For scalable and flexible data storage.

### Web Scraping:
- **Selenium (Python):** For dynamic data scraping and real-time updates.

### AI Integration:
- **Gemini AI:** For handling natural language processing and query generation.

## Installation and Setup

### Prerequisites:
- Node.js and npm installed on your machine.
- Python and Selenium set up for web scraping.
- MongoDB instance running locally or on a cloud service.

### Steps:
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Khanishsuresh/Education_Tracker.git
   cd Education_Tracker
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
4. **Set Up Environment Variables:**
- Create a .env file in the root directory.
- Add the necessary environment variables for MongoDB connection, AI API keys, etc.
4. **Run the Application:**
    ```bash
    npm start
    ```
### Future Enhancements
- Enhanced AI Capabilities: Further improve the NLP and AI-driven query generation.
- Mobile Support: Develop a mobile application for better accessibility.
- Additional Integrations: Incorporate more educational platforms and data sources.
- Advanced Analytics: Provide detailed analytics and insights based on student data.

### Contact
For any inquiries or feedback, please contact Khanish Ram S at khanishsuresh@gmail.com.
