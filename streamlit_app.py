import streamlit as st
import requests

# Title
st.title("Suhail MD Bot")

# Input from the user
user_input = st.text_input("Enter your query:")

# Function to interact with the backend server
def get_bot_response(user_input):
    url = "https://your-heroku-app.herokuapp.com/bot"  # Replace with your Heroku app URL
    response = requests.post(url, json={"userInput": user_input})
    return response.json().get("response")

# Display bot response
if user_input:
    response = get_bot_response(user_input)
    st.write("Bot response: ", response)
