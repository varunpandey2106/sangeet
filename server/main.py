from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import RedirectResponse, FileResponse
from fastapi.middleware.cors import CORSMiddleware
# from fastapi.staticfiles import StaticFiles
from starlette.middleware.sessions import SessionMiddleware
import os
import requests
import random
import string
from urllib.parse import urlencode
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
import os
load_dotenv()


# REDIRECT_URI = os.getenv("REDIRECT_URI") or 'http://localhost:8000/callback'
# FRONTEND_BASE_URL = os.getenv("FRONTEND_BASE_URL") or 'http://localhost:3000'
app = FastAPI()

# Environment Variables
CLIENT_ID = os.getenv("CLIENT_ID")
CLIENT_SECRET = os.getenv("CLIENT_SECRET")
REDIRECT_URI = os.getenv("REDIRECT_URI")
FRONTEND_BASE_URL = os.getenv("FRONTEND_BASE_URL")
PORT = int(os.getenv("PORT", 8000))

# Middleware
app.add_middleware(SessionMiddleware, secret_key=os.urandom(32))

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://sangeetapi.vercel.app",  ],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["Authorization", "Content-Type"],
)

# Static Files
# app.mount("/static", StaticFiles(directory="static"), name="static")

# Helper functions
def generate_random_string(length):
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))

# Routes
@app.get("/login")
async def homepage(request: Request):
    state = generate_random_string(16)
    request.session['state'] = state

    scope = 'user-read-private user-read-email user-read-recently-played user-top-read user-follow-read user-follow-modify playlist-read-private playlist-read-collaborative playlist-modify-public'

    params = {
        'response_type': 'code',
        'client_id': CLIENT_ID,
        'scope': scope,
        'redirect_uri': REDIRECT_URI,
        'state': state
    }
    auth_url = 'https://accounts.spotify.com/authorize?' + urlencode(params)
    
    return RedirectResponse(auth_url)

@app.get("/spotify/callback")
async def callback(request: Request, code: str = None, state: str = None):
    if state is None or state != request.session.get('state'):
        raise HTTPException(status_code=400, detail="Invalid state")

    del request.session['state']

    auth_params = {
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': REDIRECT_URI,
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET
    }

    response = requests.post('https://accounts.spotify.com/api/token', data=auth_params)
    if response.status_code != 200:
        return RedirectResponse(url=f"{FRONTEND_BASE_URL}/#error=invalid_token")

    tokens = response.json()
    access_token = tokens['access_token']
    refresh_token = tokens['refresh_token']

    return RedirectResponse(url=f"{FRONTEND_BASE_URL}/#access_token={access_token}&refresh_token={refresh_token}")

@app.get("/refresh_token")
async def refresh_token(refresh_token: str):
    auth_params = {
        'grant_type': 'refresh_token',
        'refresh_token': refresh_token,
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET
    }

    response = requests.post('https://accounts.spotify.com/api/token', data=auth_params)
    if response.status_code != 200:
        return JSONResponse(content={"error": "invalid_grant"}, status_code=400)

    tokens = response.json()
    access_token = tokens['access_token']

    return JSONResponse(content={"access_token": access_token})

# @app.get("/{full_path:path}")
# async def catch_all(full_path: str):
#     return FileResponse("client/public/index.html")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=PORT)
