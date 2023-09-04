import numpy as np
import pandas as pd
from flask import Flask, request, jsonify, render_template
import pickle
from flask_cors import CORS
import random
import difflib

app = Flask(__name__)
CORS(app)

model1 = pickle.load(open('Automobile\Car2\LinearRegressionModel.pkl','rb'))
df1 = pd.read_csv('Automobile\Car2\Cleaned_Car_data.csv')

model2 = pickle.load(open('Electronic_Item\Laptop\lap.pkl','rb'))
df2 = pd.read_csv('Electronic_Item\Laptop\laptop_data.csv')

model3 = pickle.load(open('Electronic_Item\Phone\phone_price_predictor.pkl','rb'))
df3 = pd.read_csv('Electronic_Item\Phone\phone_df.csv')

model4 = pickle.load(open('House\RandomForest_model.pkl','rb'))
df4 = pd.read_csv('House\Mumbai1.csv')
# quote_all = df['quote'].tolist()

@app.route("/")
def home():
    return "<h1>Server is live</h1>"

@app.route('/carpredict',methods=['POST'])
# @crossdomain(origin='*')
def carpredict():
    print('hello')
    try:
        request_data = request.get_json()
    except Exception as er:
        print(er)
    print("data: ", request_data)

    # loadede_model = pickle.load(open('carmod.pkl','rb'))

    row_datta = [['Maruti Suzuki Swift','Maruti',2019,100,'Petrol']]
    df1 = pd.DataFrame(row_datta, columns=["name","company","year","kms_driven","fuel_type"])
    test1 = model1.predict(df1)
    print(test1[0])
    test1 = test1[0]
    # close_match =  difflib.get_close_matches(request_data['quote'], quote_all)
    # # print(close_match)
    # close = close_match[0]
    # id_of_quote = df[df['quote'] == close]['id'].values[0]
    # similarity_score = list(enumerate(model[id_of_quote]))
    # # print(similarity_score)
    # sorted_sim_quote = sorted(similarity_score, key=lambda x: x[1], reverse=True)
    # print(sorted_sim_quote)
    # return_list = []
    # i = 0
    # for quote in sorted_sim_quote:
    #     if(i == 0):
    #         i +=1
    #         continue
    #     id = quote[0]
    #     try:
    #         quote_from_id = df[df['id'] == id]['quote'].values[0]
    #         print(quote_from_id)
    #         if(i == 6):
    #             break
    #         i += 1
    #         return_list.append(quote_from_id)
    #     except:
    #         pass
    #     # except:
    #     #     pass
    
    return jsonify(test1)


@app.route('/lappredict',methods=['POST'])
# @crossdomain(origin='*')
def lappredict():
    print('hello')
    try:
        request_data = request.get_json()
    except Exception as er:
        print(er)
    print("data: ", request_data)

    # loadede_model = pickle.load(open('carmod.pkl','rb'))

    row_datta = [['HP', 'Notebook', 8, 1.86, 0, 0, 141.21199808219862, 'Intel Core i5', 0, 256, 'Intel', 'Others/No OS/Linux']]
    df2 = pd.DataFrame(row_datta, columns=["Company", "TypeName", 'Ram', 'Weight','Touchscreen','Ips','ppi','Cpu brand',"HDD","SSD","Gpu brand","os"])
    test2 = model2.predict(df2)
    print(test2[0])
    test2 = test2[0]
    # close_match =  difflib.get_close_matches(request_data['quote'], quote_all)
    # # print(close_match)
    # close = close_match[0]
    # id_of_quote = df[df['quote'] == close]['id'].values[0]
    # similarity_score = list(enumerate(model[id_of_quote]))
    # # print(similarity_score)
    # sorted_sim_quote = sorted(similarity_score, key=lambda x: x[1], reverse=True)
    # print(sorted_sim_quote)
    # return_list = []
    # i = 0
    # for quote in sorted_sim_quote:
    #     if(i == 0):
    #         i +=1
    #         continue
    #     id = quote[0]
    #     try:
    #         quote_from_id = df[df['id'] == id]['quote'].values[0]
    #         print(quote_from_id)
    #         if(i == 6):
    #             break
    #         i += 1
    #         return_list.append(quote_from_id)
    #     except:
    #         pass
    #     # except:
    #     #     pass
    
    return jsonify(test2)

@app.route('/phonepredict',methods=['POST'])
# @crossdomain(origin='*')
def phnpredict():
    print('hello')
    try:
        request_data = request.get_json()
    except Exception as er:
        print(er)
    print("data: ", request_data)
    # loadede_model = pickle.load(open('carmod.pkl','rb'))

    row_datta = [['Infinix', 6.6, 2, 32, 8]]
    df3 = pd.DataFrame(row_datta, columns=["brand","screen_size","ram","rom","mp"])
    test3 = model3.predict(df3)
    print(test3)
    test3 = test3[0]
    # close_match =  difflib.get_close_matches(request_data['quote'], quote_all)
    # # print(close_match)
    # close = close_match[0]
    # id_of_quote = df[df['quote'] == close]['id'].values[0]
    # similarity_score = list(enumerate(model[id_of_quote]))
    # # print(similarity_score)
    # sorted_sim_quote = sorted(similarity_score, key=lambda x: x[1], reverse=True)
    # print(sorted_sim_quote)
    # return_list = []
    # i = 0
    # for quote in sorted_sim_quote:
    #     if(i == 0):
    #         i +=1
    #         continue
    #     id = quote[0]
    #     try:
    #         quote_from_id = df[df['id'] == id]['quote'].values[0]
    #         print(quote_from_id)
    #         if(i == 6):
    #             break
    #         i += 1
    #         return_list.append(quote_from_id)
    #     except:
    #         pass
    #     # except:
    #     #     pass
    
    return jsonify(test3)

@app.route('/housepredict',methods=['POST'])
# @crossdomain(origin='*')
def housepredict():
    print('hello')
    try:
        request_data = request.get_json()
    except Exception as er:
        print(er)
    print("data: ", request_data)
    # loadede_model = pickle.load(open('carmod.pkl','rb'))

    row_datta = [[1245, 'Airoli', 2, 1, 1, 1, 0, 0, 0, 1]]
    df4 = pd.DataFrame(row_datta, columns=["Area","Location","No. of Bedrooms","New/Resale","Lift Available","Car Parking","Maintenance Staff","24x7 Security","Clubhouse","Gas Connection"])
    test4 = model4.predict(df4)
    print(test4[0])
    test4 = test4[0]
    # close_match =  difflib.get_close_matches(request_data['quote'], quote_all)
    # # print(close_match)
    # close = close_match[0]
    # id_of_quote = df[df['quote'] == close]['id'].values[0]
    # similarity_score = list(enumerate(model[id_of_quote]))
    # # print(similarity_score)
    # sorted_sim_quote = sorted(similarity_score, key=lambda x: x[1], reverse=True)
    # print(sorted_sim_quote)
    # return_list = []
    # i = 0
    # for quote in sorted_sim_quote:
    #     if(i == 0):
    #         i +=1
    #         continue
    #     id = quote[0]
    #     try:
    #         quote_from_id = df[df['id'] == id]['quote'].values[0]
    #         print(quote_from_id)
    #         if(i == 6):
    #             break
    #         i += 1
    #         return_list.append(quote_from_id)
    #     except:
    #         pass
    #     # except:
    #     #     pass
    
    return jsonify(test4)

# if _name_ == "_main_":
app.run(debug = True)