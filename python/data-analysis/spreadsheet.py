import numpy as np
import pandas as pd

# Store our csv file with reading capability
# [sep] adds a dilator for better readability
content = pd.read_csv('revenue-profit.csv', sep=';')

# Type tells us what kind of data a variable holds
print(type(content))

# head returns the specified rows of a table
print(content.head(3))

# Rename a column from our table
content = content.rename(columns={'no_data': 'Year'})
print(content)

# Access specific rows
singleYear = content[content.Year == 2012]

print(singleYear)
