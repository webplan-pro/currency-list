import os
import glob
import xmltodict
import json
import re

common_currency_file_path = "C:\\Users\\Arturas\\Documents\\code-projects\\currency-list\\data\\Common-Currency.json"
filenamePaths = glob.glob("C:\\Users\\Arturas\\Documents\\code-projects\\currency-list\\data\\*\\*.xml")

with open(common_currency_file_path, 'r', encoding='utf-8') as common_currency_file:
    common_currency_json =  json.load(common_currency_file)

# with open('C:\\Users\\Arturas\\Documents\\code-projects\\currency-list\\data\\currency-list.json', 'w+', encoding='utf-8') as f:
#     currency_list = json.load(f)
output_file_name = 'C:\\Users\\Arturas\\Documents\\code-projects\\currency-list\\data\\currency-list.json'

currency_list = {}

# print(common_currency_json['USD'])
for filePath in filenamePaths:
    with open(filePath, 'r', encoding='utf-8') as myfile:
        print(filePath)
        obj = xmltodict.parse(myfile.read())
        items = obj["values"]["item"]
        file_path = filePath.split("\\")
        l = file_path.pop(-1)
        locale = file_path[-1]
        currency_list.update({locale:{}})
        for item in items:
            try:
                #checks for key error
                common_currency_json[item['id']]
                target = { 
                    item['id'] : {
                        'name': re.sub(r"(.\(.*\))", "", item['#text']),
                        'symbol_native': common_currency_json[item['id']]['symbol_native'],
                        'symbol': common_currency_json[item['id']]['symbol'],
                        'code': common_currency_json[item['id']]['code'],
                        'name_plural': common_currency_json[item['id']]['name_plural'],
                        'rounding': common_currency_json[item['id']]['rounding'],
                        'decimal_digits': common_currency_json[item['id']]['decimal_digits']
                    }
                }
                currency_list[locale].update(target)
            except KeyError as keyError:
                pass
                # print(keyError)
with open(output_file_name, 'w', encoding='utf-8') as f:
    json.dump(currency_list, f, ensure_ascii=False)
