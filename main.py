import uvicorn

from fastapi import FastAPI

app = FastAPI(
    title="PSN Games",
    description="Digital online shop for Playstation Network games",
    version="1.0.0",
)


@app.get("/")
async def index():
    return {"hello": "world"}


if __name__ == "__main__":
    uvicorn.run("main:app", host="localhost", port=8000, reload=True)
