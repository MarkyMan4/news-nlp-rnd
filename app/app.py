import streamlit as st
import pandas as pd

@st.cache
def load_data():
    return pd.read_csv('../data/articles.csv')

def main():
    data = load_data()
    st.write(data)

if __name__ == '__main__': main()