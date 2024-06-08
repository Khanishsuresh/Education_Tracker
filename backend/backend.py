# # import sys
# # from selenium import webdriver
# # from selenium.webdriver.common.by import By
# # from selenium.webdriver.support.ui import WebDriverWait
# # from selenium.webdriver.support import expected_conditions as EC
# # from bs4 import BeautifulSoup
# # import re
# # from selenium.webdriver.chrome.options import Options

# # # Add path to custom packages
# # sys.path.append('path_to_custom_packages_folder')

# # # Import custom packages
# # from langchain.chains import ConversationChain
# # from langchain.memory import ConversationBufferMemory
# # from langchain.prompts import PromptTemplate
# # from langchain_community.llms import GooglePalm


# # # Set up Google API key
# # import os
# # os.environ["GOOGLE_API_KEY"] = "AIzaSyAD3J_Se65ToQMrlTT-NpZfmuZnUg40-wA"
# # api_key = "AIzaSyDZix9WHZ1m9Wxc17EGGSXjZVIhM0Uyw94"

# # # Initialize GooglePalm with API key
# # llm = GooglePalm(api_key=api_key, temperature=0.6)

# # # Define function to generate MongoDB query
# # def getQuery(query):
# #     conversation = ConversationChain(llm=llm)
# #     schema = '''
# #     const formschema = new Schema({
# #         name: { type: String, required: true },
# #         rollno: { type: String, required: true, index: true, unique: true },
# #         branch: { type: String, required: true },
# #         year: { type: String, required: true },
# #         cgpa: { type: Number, required: true },
# #         attendance: { type: Number, required: true },
# #         leetcode: { type: String },
# #         codechef: { type: String },
# #         codeforce: { type: String },
# #         leetcodeCount: { type: Number },
# #         codechefRating: { type: Number },
# #         skills: [{ type: String }],
# #         expertise: [{ type: String }],
# #         certificates: [{
# #             name: { type: String },
# #             link: { type: String }
# #         }],
# #         projects: [{
# #             name: { type: String },
# #             link: { type: String }
# #         }],
# #         awards: [{
# #             name: { type: String },
# #             link: { type: String }
# #         }],
# #         papers: [{
# #             name: { type: String },
# #             link: { type: String }
# #         }]
# #     });
# #     '''
# #     format = "{    \"leetcodeCount\": { \"$gt\": 200    }}"
    
# #     prompt = PromptTemplate(input_variables=["question"], template="your_template_here")
# #     input_prompt = prompt.format(query=query, schema=schema, format=format)
# #     output = conversation.run(input_prompt)
# #     print(output)
# #     return output


# # # codechef scrapping 

# # def load_codechef(link):
# #     options = Options()
# #     options.headless = True
# #     driver = webdriver.Chrome(options=options)
# #     driver.get(link)
# #     WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "//div[@class='rating-number']")))
# #     html_content = driver.page_source
# #     driver.quit()
# #     soup = BeautifulSoup(html_content, 'html.parser')
# #     div_elements = soup.find_all('div', class_='rating-number')
    
# #     for div in div_elements:
# #         # print(div.get_text())
# #         string = div.get_text()
# #         pattern = r"(\d+)\?"
# #         match = re.search(pattern, string)
# #         if match:
# #             number = match.group(1)
# #             print(number)
# #         else:
# #             number = div.get_text()
# #     return number



# # # leetcode scrapping 


# # from selenium import webdriver
# # from selenium.webdriver.common.by import By
# # from selenium.webdriver.support.ui import WebDriverWait
# # from selenium.webdriver.support import expected_conditions as EC
# # from bs4 import BeautifulSoup
# # def load_leetcode(link):
# #     options = Options()
# #     options.headless = True
# #     driver = webdriver.Chrome(options=options)
# #     driver.get(link)
# #     WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "//div[@class='text-[24px] font-medium text-label-1 dark:text-dark-label-1']")))
# #     html_content = driver.page_source
# #     driver.quit()
# #     soup = BeautifulSoup(html_content, 'html.parser')
# #     div_elements = soup.find_all('div', class_='text-[24px] font-medium text-label-1 dark:text-dark-label-1')
# #     for div in div_elements:
# #         text = div.get_text()
# #         print(div.get_text())
# #     return text
# # # http://localhost:500/hello?codechef_link=${height}&leetcode_link=${ambfk}


# # """
# # model = kajbsf.fit(x_train,y_train)
# # import pickle

# # with open("Rackshana.pkl" ,"wb") as f:
# #     pickle.dump(model,f)
# # with open("rackshana.pkl","rb") as f:
# #    model =  pickle.load(f)
# # a = model.predict(1,2,3,4)
# # return a
# # """


# # from flask import Flask, jsonify, request
# # from flask_cors import CORS

# # app = Flask(__name__)
# # CORS(app)

# # @app.route('/hello', methods=['GET'])
# # def hello():
# #     codechef_link = request.args.get('codechef_link')
# #     leetcode_link = request.args.get('leetcode_link')

# #     a = load_codechef(codechef_link) if codechef_link else None
# #     b = load_leetcode(leetcode_link) if leetcode_link else None

# #     return jsonify({"codechef": a, "leetcode": b})

# # @app.route('/llm', methods=['GET'])
# # def get_llm():
# #     query = request.args.get('query')
# #     mongo = getQuery(query) 
# #     print(mongo) 
# #     return jsonify({"query": mongo})

# # if __name__ == '__main__':
# #     app.run(debug=True, port=8002)


# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# from bs4 import BeautifulSoup
# import re
# from selenium.webdriver.chrome.options import Options
# from langchain.chains import ConversationChain
# from langchain.memory import ConversationBufferMemory
# from langchain.prompts import PromptTemplate
# from langchain_community.llms import GooglePalm
# import os
# os.environ["GOOGLE_API_KEY"] = "AIzaSyAD3J_Se65ToQMrlTT-NpZfmuZnUg40-wA"
# api_key = "AIzaSyDZix9WHZ1m9Wxc17EGGSXjZVIhM0Uyw94"
# # llm = GooglePalm(api_key = api_key,temprature = 0.6)




# def getQuery(query):
#     conversation = ConversationChain(
#     llm = GooglePalm(api_key = api_key,temperature = 0.6)
#     )
#     schema = '''const formschema = new Schema({
#     name: { type: String, required: true },
#     rollno: { type: String, required: true,index: true ,unique: true },
#     branch: { type: String, required: true },
#     year: { type: String, required: true },
#     cgpa: { type: Number, required: true },
#     attendance: { type: Number, required: true },
#     leetcode : {type: String},
#     codechef : { type: String},
#     codeforce : { type: String},
#     leetcodeCount : {type: Number},
#     codechefRating : {type: Number},
#     skills: [{ type: String }],
#     expertise: [{ type: String }],
#     certificates: [{
#         name: { type: String },
#         link: { type: String }
#     }],
#     projects: [{
#         name: { type: String },
#         link: { type: String }
#     }],
#     awards: [{
#         name: { type: String },
#         link: { type: String }
#     }],
#     papers: [{
#         name: { type: String },
#         link: { type: String }
#     }]
# });'''
#     format = "{    \"leetcodeCount\": { \"$gt\": 200    }}"

#     prompt = PromptTemplate(input_variables=["question"],template = "you are going to act as only query genrator so given a schema and the query based on the schema generate a mongo db query and return only the query i dont need any other informations and another point is that i need only the query object which you will pass in the find method to use in nodejs so return {format} in this format {schema} {query}" )
#     input_prompt = prompt.format(query = query,schema = schema,format = format)
#     output = conversation.run(input_prompt)
#     print(output)
#     return output


# # codechef scrapping 

# def load_codechef(link):
#     options = Options()
#     options.headless = True
#     driver = webdriver.Chrome(options=options)
#     driver.get(link)
#     WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "//div[@class='rating-number']")))
#     html_content = driver.page_source
#     driver.quit()
#     soup = BeautifulSoup(html_content, 'html.parser')
#     div_elements = soup.find_all('div', class_='rating-number')
    
#     for div in div_elements:
#         # print(div.get_text())
#         string = div.get_text()
#         pattern = r"(\d+)\?"
#         match = re.search(pattern, string)
#         if match:
#             number = match.group(1)
#             print(number)
#         else:
#             number = div.get_text()
#     return number



# # leetcode scrapping 


# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# from bs4 import BeautifulSoup
# def load_leetcode(link):
#     options = Options()
#     options.headless = True
#     driver = webdriver.Chrome(options=options)
#     driver.get(link)
#     WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "//div[@class='text-[24px] font-medium text-label-1 dark:text-dark-label-1']")))
#     html_content = driver.page_source
#     driver.quit()
#     soup = BeautifulSoup(html_content, 'html.parser')
#     div_elements = soup.find_all('div', class_='text-[24px] font-medium text-label-1 dark:text-dark-label-1')
#     for div in div_elements:
#         text = div.get_text()
#         print(div.get_text())
#     return text

# from flask import Flask, jsonify, request
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# @app.route('/hello', methods=['GET'])
# def hello():
#     codechef_link = request.args.get('codechef_link')
#     leetcode_link = request.args.get('leetcode_link')

#     a = load_codechef(codechef_link) if codechef_link else None
#     b = load_leetcode(leetcode_link) if leetcode_link else None

#     return jsonify({"codechef": a, "leetcode": b})

# @app.route('/llm', methods=['GET'])
# def get_llm():
#     query = request.args.get('query')
#     mongo = getQuery(query) 
#     print(mongo) 
#     return jsonify({"query": mongo})

# if __name__ == '__main__':
#     app.run(debug=True, port=8002)  

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
import re
from selenium.webdriver.chrome.options import Options
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory
from langchain.prompts import PromptTemplate
from langchain_community.llms import GooglePalm
import os
from flask import Flask, jsonify, request
from flask_cors import CORS

# Set up Google API key
os.environ["GOOGLE_API_KEY"] = "AIzaSyAD3J_Se65ToQMrlTT-NpZfmuZnUg40-wA"
api_key = "AIzaSyDZix9WHZ1m9Wxc17EGGSXjZVIhM0Uyw94"

app = Flask(__name__)
CORS(app)

def getQuery(query):
    conversation = ConversationChain(
    llm = GooglePalm(api_key = api_key, temperature = 0.6)
    )
    schema = '''const formschema = new Schema({
    name: { type: String, required: true },
    rollno: { type: String, required: true,index: true ,unique: true },
    branch: { type: String, required: true },
    year: { type: String, required: true },
    cgpa: { type: Number, required: true },
    attendance: { type: Number, required: true },
    leetcode : {type: String},
    codechef : { type: String},
    codeforce : { type: String},
    leetcodeCount : {type: Number},
    codechefRating : {type: Number},
    skills: [{ type: String }],
    expertise: [{ type: String }],
    certificates: [{
        name: { type: String },
        link: { type: String }
    }],
    projects: [{
        name: { type: String },
        link: { type: String }
    }],
    awards: [{
        name: { type: String },
        link: { type: String }
    }],
    papers: [{
        name: { type: String },
        link: { type: String }
    }]
});'''
    format = "{    \"leetcodeCount\": { \"$gt\": 200    }}"

    prompt = PromptTemplate(input_variables=["question"],template = "you are going to act as only query genrator so given a schema and the query based on the schema generate a mongo db query and return only the query i dont need any other informations and another point is that i need only the query object which you will pass in the find method to use in nodejs so return {format} in this format {schema} {query}" )
    input_prompt = prompt.format(query = query,schema = schema,format = format)
    output = conversation.run(input_prompt)
    print(output)
    return output

# codechef scrapping 
def load_codechef(link):
    options = Options()
    options.headless = True
    driver = webdriver.Chrome(options=options)
    driver.get(link)
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "//div[@class='rating-number']")))
    html_content = driver.page_source
    driver.quit()
    soup = BeautifulSoup(html_content, 'html.parser')
    div_elements = soup.find_all('div', class_='rating-number')
    
    for div in div_elements:
        string = div.get_text()
        pattern = r"(\d+)\?"
        match = re.search(pattern, string)
        if match:
            number = match.group(1)
            print(number)
        else:
            number = div.get_text()
    return number

# leetcode scrapping 
def load_leetcode(link):
    options = Options()
    options.headless = True
    driver = webdriver.Chrome(options=options)
    driver.get(link)
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "//div[@class='text-[24px] font-medium text-label-1 dark:text-dark-label-1']")))
    html_content = driver.page_source
    driver.quit()
    soup = BeautifulSoup(html_content, 'html.parser')
    div_elements = soup.find_all('div', class_='text-[24px] font-medium text-label-1 dark:text-dark-label-1')
    for div in div_elements:
        text = div.get_text()
        print(div.get_text())
    return text

@app.route('/hello', methods=['GET'])
def hello():
    codechef_link = request.args.get('codechef_link')
    leetcode_link = request.args.get('leetcode_link')

    codechef_rating = load_codechef(codechef_link) if codechef_link else None
    leetcode_data = load_leetcode(leetcode_link) if leetcode_link else None

    return jsonify({"codechef_rating": codechef_rating, "leetcode_data": leetcode_data})

@app.route('/llm', methods=['GET'])
def get_llm():
    query = request.args.get('query')
    try:
        mongo_query = getQuery(query) 
        return jsonify({"query": mongo_query})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=8000)
