import uvicorn

from fastapi import FastAPI
from fastapi.requests import Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

from app.dependencies.templates import templates

app = FastAPI(
    title="PSN Games",
    description="Digital online shop for Playstation Network games",
    version="1.0.0",
)

app.mount("/static", StaticFiles(directory="app/static"), name="static")


@app.get("/", response_class=HTMLResponse)
async def main_page(request: Request):
    return templates.TemplateResponse(
        "main.html", {
            "request": request
        }
    )


if __name__ == "__main__":
    uvicorn.run("main:app", host="localhost", port=7000, reload=True)
