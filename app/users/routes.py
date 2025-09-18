from fastapi import APIRouter
from fastapi.responses import HTMLResponse

router = APIRouter()


@router.get("/auth/register", response_class=HTMLResponse)
async def register():
    pass
